"use client";

import { useState } from "react"
import { Dialog, VisuallyHidden } from "radix-ui"
import RandomCheckerOverlay from "../../backgrounds/RandomCheckerOverlay"
import QuizPrompt from "../../QuizPrompt"
import QuestionGame from "../../QuestionGame"
import CongratsSec from "./CongratsSec";

export default function GuessingGame() {
    const [showCongrats, setShowCongrats] = useState(false)
    const [promptDone, setPromptDone] = useState(false)

    const ShowCongrats = () => {
        setShowCongrats(true)
    }

    const EnableStart = () => {
        setPromptDone(true)
    }

    return (
        <>
            <section className="w-full !flex flex-col items-center pt-8 gap-4">

                <h2 className="font-bold">Guessing Game!</h2>

                <QuizPrompt onDone={EnableStart} />

                <Dialog.Root>
                    {/* Trigger button to open the dialog */}
                    {!promptDone ?
                        null
                        :
                        <Dialog.Trigger asChild>
                            <button className={`nes-btn is-primary ${!promptDone && 'is-disabled'} font-bold`}>START GAME</button>
                        </Dialog.Trigger>}

                    <Dialog.Portal>

                        {/* Overlay */}
                        <RandomCheckerOverlay />

                        {/* Dialog content */}
                        <Dialog.Content
                            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center grayscale"
                        >

                            <VisuallyHidden.Root>
                                <Dialog.Title>Question Game</Dialog.Title>
                            </VisuallyHidden.Root>

                            <VisuallyHidden.Root>
                                <Dialog.Description>Answer the questions to see how well you know me!</Dialog.Description>
                            </VisuallyHidden.Root>

                            {/* The QuestionGame component inside the dialog */}
                            <QuestionGame ShowCongrats={ShowCongrats} />

                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>

            </section>
            {/* Congrats Section */}
            {!showCongrats && <p
                className="text-center font-bold text-[16px] mt-4 py-5">
                Play the game to unlock the secret section.  <br />
                vvvvvv <br />
                <span className="text-amber-950 font-bold">Secret Section</span> <br />
            </p>}
            {showCongrats && <CongratsSec />}
        </>
    )
}
