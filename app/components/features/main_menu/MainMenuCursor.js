import Image from "next/image";

export function MainMenuCursor({ direction }) {
  return (
    <span className="inline-flex">
      {direction === 'left' && (
        <Image
          src="/icons/interactions/left-arrow-bk.png"
          alt="left arrow"
          width={20}
          height={20}
          className="m-6"
        />
      )}
      {direction === 'right' && (
        <Image
          src="/icons/interactions/left-arrow-bk.png"
          alt="right arrow"
          width={20}
          height={20}
          className="m-6 rotate-z-180"
        />
      )}
    </span>
  );
}
