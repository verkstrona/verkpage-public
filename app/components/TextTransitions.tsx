// "use client";
// import { useTranslations } from "next-intl";
// import { useEffect, useState } from "react";
// import TextTransition, { presets } from "react-text-transition";

// function UseTransition() {
//   const t = useTranslations("HomePage");
//   const Text = t("subheading").split(".") as string[];
//   const collabText = Text.map((text) => text);
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
//     return () => clearTimeout(intervalId);
//   }, []);

//   return (
//     <TextTransition springConfig={presets.stiff} inline={true} direction="down">
//       {collabText[index % collabText.length]}
//     </TextTransition>
//   );
// }

// export default UseTransition;
"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function UseTransition() {
  const t = useTranslations("HomePage");

  // rozbijamy tekst z JSONa
  const Text = t("subheading").split(".");
  const collabText = Text.map((text) => text.trim()).filter(Boolean);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalId); // ✅ fix (było clearTimeout)
  }, []);

  return (
    <span style={{ display: "inline-block" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
          style={{ display: "inline-block" }}
        >
          {collabText[index % collabText.length]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default UseTransition;
