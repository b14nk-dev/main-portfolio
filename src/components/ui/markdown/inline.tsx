import type { ReactNode } from "react";

const INLINE_SOURCE =
  /(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(__[^_\n]+__)|(\*[^*\n]+\*)|(_[^_\n]+_)|(\[[^\]\n]+\]\([^)\s]+\))/.source;

function isSafeHref(href: string) {
  return /^(https?:\/\/|mailto:|\/|#)/i.test(href);
}

/** Renders inline markdown such as `code`, **bold**, _italic_ and links. */
export function renderInline(text: string): ReactNode[] {
  const pattern = new RegExp(INLINE_SOURCE, "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const token = match[0];
    const key = `${match.index}-${token}`;

    if (match[1]) {
      nodes.push(
        <code
          key={key}
          className="rounded-sm bg-secondary px-1 py-0.5 font-mono text-[0.9em] text-foreground"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (match[2] || match[3]) {
      nodes.push(
        <strong key={key} className="font-medium text-foreground">
          {renderInline(token.slice(2, -2))}
        </strong>
      );
    } else if (match[4] || match[5]) {
      nodes.push(<em key={key}>{renderInline(token.slice(1, -1))}</em>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
      if (link && isSafeHref(link[2])) {
        nodes.push(
          <a
            key={key}
            href={link[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-foreground underline decoration-foreground/30 underline-offset-4"
          >
            {renderInline(link[1])}
          </a>
        );
      } else {
        nodes.push(token);
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
