import { cn } from "@/lib/utils";
import { BlockView, CARET } from "./block-view";
import { parseBlocks } from "./parse";

/**
 * Minimal markdown renderer for streamed answers: paragraphs, headings, lists,
 * bold, italic, inline code, fenced code and safe links.
 */
export function Markdown({
  children,
  className,
  caret = false,
}: {
  children: string;
  className?: string;
  caret?: boolean;
}) {
  const blocks = parseBlocks(children);

  return (
    <div className={cn("space-y-3", className)}>
      {blocks.map((block, index) => (
        <BlockView
          key={index}
          block={block}
          suffix={caret && index === blocks.length - 1 ? CARET : null}
        />
      ))}
    </div>
  );
}
