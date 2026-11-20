import type { ReactNode } from "react";
import { renderInline } from "./inline";
import type { Block } from "./parse";

const CARET = (
  <span
    aria-hidden
    className="ml-0.5 inline-block h-[1em] w-[2px] animate-pulse bg-foreground align-middle"
  />
);

/** Renders one parsed block with the streaming caret on its last line. */
export function BlockView({
  block,
  suffix,
}: {
  block: Block;
  suffix: ReactNode;
}) {
  if (block.type === "code") {
    return (
      <pre className="overflow-x-auto border border-border bg-secondary/60 p-3 text-sm leading-relaxed">
        <code className="font-mono">
          {block.text}
          {suffix}
        </code>
      </pre>
    );
  }

  if (block.type === "ul" || block.type === "ol") {
    const items = block.items.map((item, index) => (
      <li key={index}>
        {renderInline(item)}
        {suffix && index === block.items.length - 1 && suffix}
      </li>
    ));

    return block.type === "ol" ? (
      <ol className="list-decimal space-y-1 pl-5">{items}</ol>
    ) : (
      <ul className="list-disc space-y-1 pl-5">{items}</ul>
    );
  }

  if (block.type === "heading") {
    return (
      <p className="font-serif text-lg text-foreground">
        {renderInline(block.text)}
        {suffix}
      </p>
    );
  }

  return (
    <p className="whitespace-pre-wrap">
      {renderInline(block.text)}
      {suffix}
    </p>
  );
}

export { CARET };
