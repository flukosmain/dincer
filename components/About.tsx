import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto  py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Troche o mnie..." titleNo="01" />
      <div className="w-full mt-10 flex flex-col text-center md:flex-row gap-16">
        <div className="text-center  lgl:left-[7rem] lgl:relative lgl:w-[500px] text-base text-textDark font-medium align-center items-center">
        <p>
        Cześć! Nazywam się Olivier i mam 15 lat. Interesuję się programowaniem już od około dwóch lat i nadal mam do tego duży zapał. Język, który urzekł moje serce, to Python ze względu na swoją wygodę i możliwości.

Oprócz programowania, moim zainteresowaniem jest piłka nożna, którą trenuję od 2015 roku. Jak pewnie już wiecie, specjalizuję się w pisaniu botów na Discorda na zamówienie, co idzie mi całkiem dobrze.

Jeśli jesteś zainteresowany, zapraszam do kontaktu ze mną na moim serwerze Discord.
        </p>
          <p>Technologie, z którymi ostatnio pracuje:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React.js
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MySQL
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
