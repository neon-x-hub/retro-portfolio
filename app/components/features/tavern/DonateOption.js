'use client';

import { useMemo } from "react";
import Image from "next/image";
import copy from 'copy-to-clipboard';
import { ToastProvider } from "../../core/ToastProvider";
import { Howl } from "howler";

function DonateOption({ title, icon, detail }) {

    const positive_notification = useMemo(() => new Howl({
        src: ['/sounds/positive_notification.ogg']
    }), []);

  const handleClick = (showToast) => {
    const success = copy(detail);
    positive_notification.play();
    showToast(success ? `Copied to clipboard!` : 'Failed to copy');
  };

  return (
    <ToastProvider>
      {(showToast) => (
        <div
          onClick={() => handleClick(showToast)}
          className="flex flex-col items-center justify-between bg-gray-200 p-3 min-h-34 w-[95%] cursor-pointer hover:bg-gray-300 transition"
          style={{
            clipPath: `polygon(
              0px calc(100% - 8px),
              4px calc(100% - 8px),
              4px calc(100% - 4px),
              8px calc(100% - 4px),
              8px 100%,
              calc(100% - 8px) 100%,
              calc(100% - 8px) calc(100% - 4px),
              calc(100% - 4px) calc(100% - 4px),
              calc(100% - 4px) calc(100% - 8px),
              100% calc(100% - 8px),
              100% 8px,
              calc(100% - 4px) 8px,
              calc(100% - 4px) 4px,
              calc(100% - 8px) 4px,
              calc(100% - 8px) 0px,
              8px 0px,
              8px 4px,
              4px 4px,
              4px 8px,
              0px 8px
            )`
          }}
        >
          <div className="flex items-center space-x-3 p-3">
            <Image src={icon} alt={`${title} icon`} className="w-10 h-auto" width={50} height={50} />
            <span className="text-black font-bold text-3xl">{title}</span>
          </div>
          <span className="text-gray-500 text-[16px] text-center mt-2">{detail}</span>
        </div>
      )}
    </ToastProvider>
  );
}

export default DonateOption;
