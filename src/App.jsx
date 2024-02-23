import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function App() {
  const [isExpanded, setIsExpanded] = useState([false, false, false, false]);

  const toggleExpand = (index) => {
    const updatedExpandedState = [...isExpanded];
    updatedExpandedState[index] = !updatedExpandedState[index];
    setIsExpanded(updatedExpandedState);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const currentIndex = isExpanded.indexOf(true);
        let nextIndex;
  
        if (event.key === "ArrowDown") {
          nextIndex = (currentIndex + 1) % isExpanded.length;
        } else {
          nextIndex = currentIndex === -1 ? isExpanded.length - 1 : (currentIndex - 1 + isExpanded.length) % isExpanded.length;
        }
  
        const updatedExpandedState = isExpanded.map((item, index) => index === nextIndex ? !item : false);
        setIsExpanded(updatedExpandedState);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isExpanded]);

  return (
    <main className="min-h-screen w-full max-w-[1440px] mx-auto font-workSans">
      <picture>
        <source srcSet="bg-pattern-desktop.svg" media="(min-width: 768px)" />
        <img src="bg-pattern-mobile.svg" alt="" className="w-full" />
      </picture>
      <section
        className=" bg-hsl-100 p-8 pb-4 mx-auto relative -top-24
      rounded-xl max-w-[340px] sm:max-w-[400px] md:max-w-[550px] w-full"
      >
        <div className="flex items-center gap-x-6 pb-4">
          <img src="icon-star.svg" alt="" />
          <h1 className="font-bold text-hsl-dark-purple text-4xl">FAQs</h1>
        </div>
        <div
          className="flex flex-col 
        items-center border-b-2"
        >
          <div
            className="flex justify-between items-center w-full py-4 group cursor-pointer"
            onClick={() => toggleExpand(0)}
          >
            <h2
              className="text-hsl-dark-purple font-semibold text-[17px] group-hover:text-[#AD28EB]
              transition-colors duration-300"
            >
              What is Frontend Mentor, and how will it help me?
            </h2>
            <img
              src={isExpanded[0] ? "icon-minus.svg" : "icon-plus.svg"}
              alt="icon" />
          </div>
          <motion.p
            initial={false}
            animate={{
              height: isExpanded[0] ? "auto" : 0,
              opacity: isExpanded[0] ? 1 : 0,
              paddingBottom: isExpanded[0] ? "1.5rem" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`text-hsl-grayish-purple overflow-hidden ${
              isExpanded[0] ? "flex" : "hidden"
            }`}
          >
            Frontend Mentor offers realistic coding challenges to help developers improve their 
  frontend coding skills with projects in HTML, CSS, and JavaScript. It`s suitable for 
  all levels and ideal for portfolio building.
          </motion.p>
        </div>

        <div
          className="flex flex-col text-hsl-dark-purple
        items-center border-b-2"
        >
          <div className="flex justify-between items-center w-full py-4 group cursor-pointer"
            onClick={() => toggleExpand(1)}>
          <h2 className="text-hsl-dark-purple font-semibold text-[17px] group-hover:text-[#AD28EB]
              transition-colors duration-300"
            > Is Frontend mentor free?
            </h2>
            <img
              src={isExpanded[1] ? "icon-minus.svg" : "icon-plus.svg"}
              alt="icon" />
          </div>
          <motion.p
            initial={false}
            animate={{
              height: isExpanded[1] ? "auto" : 0,
              opacity: isExpanded[1] ? 1 : 0,
              paddingBottom: isExpanded[1] ? "1.5rem" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`text-hsl-grayish-purple overflow-hidden ${
              isExpanded[1] ? "flex" : "hidden"
            }`}
          >
            Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels.
          </motion.p>
        </div>

        <div
          className="flex flex-col text-hsl-dark-purple
        items-center border-b-2"
        >
          <div className="flex justify-between items-center w-full py-4 group cursor-pointer"
                        onClick={() => toggleExpand(2)}>
            <h2 className="text-hsl-dark-purple font-semibold text-[17px] group-hover:text-[#AD28EB]
              transition-colors duration-300">
              Can I use Frontend Mentor projects in my portofolio?
            </h2>
            <img
              src={isExpanded[2] ? "icon-minus.svg" : "icon-plus.svg"}
              alt="icon" />
          </div>
          <motion.p
            initial={false}
            animate={{
              height: isExpanded[2] ? "auto" : 0,
              opacity: isExpanded[2] ? 1 : 0,
              paddingBottom: isExpanded[2] ? "1.5rem" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`text-hsl-grayish-purple overflow-hidden ${
              isExpanded[2] ? "flex" : "hidden"
            }`}
          >
            Yes, you can use projects completed on Frontend Mentor in your portfolio. It`s an excellent
  way to showcase your skills to potential employers!
          </motion.p>
        </div>

        <div
          className="flex flex-col text-hsl-dark-purple
        items-center"
        >
          <div className="flex justify-between items-center w-full py-4 group cursor-pointer"
                        onClick={() => toggleExpand(3)}>
            <h2 className="text-hsl-dark-purple font-semibold text-[17px] group-hover:text-[#AD28EB]
              transition-colors duration-300">
              How can I get help if I`m stuck on a challange?
            </h2>
            <img
              src={isExpanded[3] ? "icon-minus.svg" : "icon-plus.svg"}
              alt="icon" />
          </div>
          <motion.p
            initial={false}
            animate={{
              height: isExpanded[3] ? "auto" : 0,
              opacity: isExpanded[3] ? 1 : 0,
              paddingBottom: isExpanded[3] ? "1.5rem" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`text-hsl-grayish-purple overflow-hidden ${
              isExpanded[3] ? "flex" : "hidden"
            }`}
          >
            The best place to get help is inside Frontend Mentor`s Discord community. There`s a help 
  channel where you can ask questions and seek support from other community members.
          </motion.p>
        </div>
      </section>
    </main>

  );
}

export default App;
