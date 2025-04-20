"use client"

import Image from "next/image"
import { Howl } from "howler"
import { Dialog, VisuallyHidden } from "radix-ui"



export default function Donate() {

    const coin_pickup = new Howl({
        src: ['/sounds/coin.ogg']
    })

    const DONATION_OPTIONS = [
        {
            title: "PayPal",
            icon: "/icons/payment/paypal.png",
            detail: "abdomem7@gmail.com",
        },
        {
            title: "RedotPay",
            icon: "/icons/payment/redotpay.png",
            detail: "abdomem7@gmail.com",
        },
        {
            title: "Baridi Mob",
            icon: "/icons/payment/baridi-mob.png",
            detail: "00799999004000071462",
        },
    ]

    return (
        <div className=" h-[200px] w-full relative">

            <div className="h-full bg-[url('/gifs/delete-computer.gif')] bg-cover brightness-50"
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
      )
    `
                }}
            >
            </div>

            <Dialog.Root>
                <Dialog.Trigger asChild>

                    <Image
                        src={'/gifs/coin-.gif'}
                        width={80}
                        height={200}
                        alt='coin gif'
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-3/4 h-auto"
                        unoptimized
                        onClick={() => coin_pickup.play()}
                    />

                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-40" />

                    <Dialog.Content className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-md p-6 bg-white text-black shadow-xl transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col"
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

                        <Dialog.Title className=" !text-3xl text-center font-bold my-2">
                            Support the Dev
                        </Dialog.Title>
                        <VisuallyHidden.Root>
                            <Dialog.Description className="text-sm text-gray-500 mb-4">
                                A Dialog that contains the dev support methods.
                            </Dialog.Description>
                        </VisuallyHidden.Root>
                        <div className="space-y-4 w-full flex flex-col items-center justify-center">
                            {DONATION_OPTIONS.map((method, index) => (
                                <DonateOption key={index} {...method} />
                            ))}
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>

            </Dialog.Root>


            <h2 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 !text-[4vw] text-nowrap text-gray-100 font-bold">Help Me Keeping my WiFi Alive</h2>
            <h4 className="absolute top-3/4 left-1/2 transform -translate-x-1/2 translate-y-[15px] !text-xl text-nowrap text-gray-300">-- Pick Up the Coin --</h4>

        </div>
    )
}


function DonateOption({ title, icon, detail, link }) {
    return (
        <div className="flex flex-col items-center justify-between bg-gray-200 p-3 min-h-34 w-[95%]"
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
            {link ? (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-medium mt-2 hover:underline text-center"
                >
                    {detail}
                </a>
            ) : (
                <span className="text-gray-500 text-[16px] text-center mt-2">{detail}</span>
            )}
        </div>
    )
}
