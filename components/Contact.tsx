import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Bądzmy w kontakcie</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Potrzebujesz pomocy? Bądz szukasz programisty który zadba o twojego bota na serwerze Discord, bądz która napisze ci strone internetową? Skontaktuj sie ze mną! <span className="text-[#ff0000]">Pamiętaj wszystko ma swoją cene</span>
      </p>

      <a href="https://discord.gg/3fSReucH9U" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-[#ff0000] hover:text-white duration-300">
          Serwer discord
        </button>
      </a>
    </section>
  );
};

export default Contact;
