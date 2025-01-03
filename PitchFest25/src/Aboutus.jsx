import { ChevronsRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Modal from "./Modal";
import { useState } from "react";

const Aboutus = () => {
  const [IsModalOpen,setIsModalOpen]=useState(false);
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <div className="flex justify-center items-center mt-12 md:mb-20 md:mt-10 ">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch w-[95%] md:w-[80%] md:p-8 bg-white shadow-lg rounded-xl gap-4 p-4">
        <div className="flex justify-center items-center md:w-1/3 w-full rounded-xl overflow-hidden md:bg-[#113B53]">
          <img src="/assets/About.png" alt="About Us" className="w-[95%] md:w-full rounded-xl object-cover h-64 md:h-auto" />
        </div>
        <div className="w-[95%] md:w-2/3 bg-[#FFD42E8A] rounded-xl flex flex-col justify-around items-start md:px-4 md:py-2 px-4">
          <h1 className="text-xl md:text-2xl font-bold text-black py-2">About Us</h1>
          <p className="text-black text-justify text-base md:text-xl">
            PitchFest 2025, hosted by BML Munjal University, is the ultimate
            launchpad for innovative startups to make their mark! Powered by
            ACIC-BMU | Propel, this thrilling event brings together bold
            entrepreneurs, visionary investors, and industry game-changers. It’s
            not just about pitching — it’s about unlocking massive
            opportunities, securing funding, and gaining invaluable mentorship.
            With a spotlight on fresh, disruptive ideas, PitchFest 2025 is your
            chance to connect, collaborate, and propel your startup to the next
            level in one of the most dynamic startup ecosystems around!
          </p>
          <div className="flex justify-start items-center md:pt-3 py-2">
            <button className="bg-white font-normal py-1 px-4 text-[#FCC15A] text-base md:text-lg flex justify-start items-center shadow-xl rounded-md"
            onClick={openModal}>
              Read more
            <motion.span
            className="pt-1"
            animate={{x:[0,6,0]}}
            transition={{
              duration:2,
              ease:"easeInOut",
              repeat:Infinity,
              repeatType:"loop"
            }}
            >
              <ChevronsRight/>
            </motion.span>
            </button>
            <AnimatePresence>
            {IsModalOpen && <Modal isOpen={IsModalOpen} onClose={closeModal} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
