"use client";
import Link from "next/link";
import { useState } from "react";

export default function ButtonLinkNavMobile({
  btnText,
  width,
}: {
  btnText?: string;
  width?: string;
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button className={`relative cursor-pointer`} onClick={handleClick}>
        {btnText}
      </button>
      {isClicked && (
        <div
          className={`absolute z-10 -top-full right-60 min-h-40 ${width} flex flex-col items-center justify-center gap-8 bg-[#CD1C18]/90 px-6 py-4 max-sm:w-full navItemRev`}
          onClick={handleClick}
        >
          <Link
            href="https://verk.sklep.pl/"
            onClick={handleClick}
            target="_blank"
            className="text-3xl text-center  hover:opacity-60  transition-opacity duration-300"
          >
            Verk
          </Link>
          <Link
            href="https://divogarden.eu/"
            onClick={handleClick}
            target="_blank"
            className="text-3xl text-center  hover:opacity-60  transition-opacity duration-300"
          >
            Divo
          </Link>
        </div>
      )}
    </>
  );
}
