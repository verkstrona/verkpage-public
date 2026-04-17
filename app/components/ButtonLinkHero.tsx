"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

export default function ButtonLinkHero({
  btnType,
  btnText,
  width,
}: {
  btnType?: string;
  btnText?: string;
  width?: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button
        className={`${btnType} relative cursor-pointer`}
        onClick={handleClick}
      >
        {btnText}
      </button>
      {isClicked && (
        <div
          className={`absolute z-10 top-0 left-0 h-full ${width} flex flex-col items-center justify-center gap-12 bg-[#CD1C18]/90 px-4 max-sm:w-full`}
          onClick={handleClick}
        >
          <Link
            href="https://verk.sklep.pl/"
            onClick={handleClick}
            target="_blank"
            className="text-4xl btn1 text-center"
          >
            {btnText} Verk
          </Link>
          <Link
            href="https://divogarden.eu/"
            onClick={handleClick}
            target="_blank"
            className="text-4xl btn1 text-center"
          >
            {btnText} Divo
          </Link>
          <p className="absolute top-0 right-0 py-2 px-3 cursor-pointer">X</p>
        </div>
      )}
    </>
  );
}
