import { DATA } from "@/app/data";
import { Reveal } from "../ui/reveal";

export function Contact() {
  const data = DATA.HEADER;

  return (
    <section id="contact" className="border-t border-border py-16 sm:py-24">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:gap-12">
        <h2 className="section-label sm:sticky sm:top-24 sm:self-start">
          contact
        </h2>

        <Reveal>
          <p className="display max-w-2xl text-[clamp(2rem,5vw,3.5rem)] text-foreground">
            Open to full-stack and backend roles.
          </p>

          <p className="mt-5 max-w-md text-pretty text-base leading-[1.7] text-muted-foreground">
            Email is the fastest way to reach me — I usually reply within a day.
          </p>

          <a
            href={`mailto:${data.EMAIL}`}
            className="link mt-8 inline-block font-serif text-2xl text-foreground sm:text-3xl"
          >
            {data.EMAIL}
          </a>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-base text-muted-foreground">
            <li>
              <a
                href={`tel:${data.PHONE.replace(/\s/g, "")}`}
                className="link transition-colors duration-500 hover:text-foreground"
              >
                {data.PHONE}
              </a>
            </li>
            <li>{data.LOCATION}</li>
            <li>
              <a
                href={data.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="link transition-colors duration-500 hover:text-foreground"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={data.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="link transition-colors duration-500 hover:text-foreground"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={data.RESUME}
                download="Ritik-Negi-Resume.pdf"
                className="link transition-colors duration-500 hover:text-foreground"
              >
                Résumé
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
