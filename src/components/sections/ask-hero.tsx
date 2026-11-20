import { Reveal } from "../ui/reveal";
import { ChatPanel } from "./ask/chat-panel";
import { AskIntro } from "./ask-intro";
import { AskStats } from "./ask-stats";

/** "Ask me anything" section: intro copy beside the assistant chat. */
export function AskHero() {
  return (
    <section id="ask" className="pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <AskIntro />

        <Reveal delay={0.08}>
          <ChatPanel />
        </Reveal>
      </div>

      <AskStats />
    </section>
  );
}
