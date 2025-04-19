"use client";

import "./pfp/Pfp.css";
import "../pxlcrnrs.css";
import React, { useState, useEffect, useRef } from 'react';
import { Howl } from "howler";

const PollForm = ({ questions, onSubmit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [shake, setShake] = useState(false)

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (choice) => {
        // Check if this is NOT the best choice (assuming bestChoice is defined in your question data)

        const bestChoice = currentQuestion.choices.reduce((max, choice) =>
            choice.percentage > max.percentage ? choice : max
        );

        if (choice.label !== bestChoice.label) {

            // Play a sound for wrong answer
            const error_002 = new Howl({
                src: ['/sounds/error_002.ogg'],
            });

            error_002.play();

            if (navigator.vibrate) {
                navigator.vibrate([200, 50, 200]); // Strong, jarring pattern (vibrate-pause-vibrate)
            }
        }
        else {

            // Play a sound for correct answer
            const confirmation_003 = new Howl({
                src: ['/sounds/confirmation_003.ogg'],
            });

            confirmation_003.play();

            if (navigator.vibrate) {
                navigator.vibrate(100); // Short, gentle vibration
            }
        }



        const updatedAnswers = [...selectedAnswers, choice];
        setSelectedAnswers(updatedAnswers);

        setTimeout(() => {
            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                onSubmit(updatedAnswers);
            }
        }, 1500);
    };

    // State to hold the shuffled choices
    const [shuffledChoices, setShuffledChoices] = useState([]);

    // Shuffle choices when the component mounts or when the currentQuestion changes
    useEffect(() => {
        const shuffled = [...currentQuestion.choices].sort(() => Math.random() - 0.5);
        setShuffledChoices(shuffled);

        // Play a random sound for the question.
        // Sounds are question_001.ogg, question_002.ogg, question_003.ogg and question_004.ogg
        // Use the number of the question to determine the sound to play
        const soundNumber = Math.floor(Math.random() * 4) + 1; // Random number between 1 and 4
        const questionSound = new Howl({
            src: [`/sounds/question_00${soundNumber}.ogg`],
        });
        questionSound.play();

    }, [currentQuestion]);




    return (
        <div className="pixel-corners--wrapper max-w-[90%]" style={{ width: '90%' }}>
            <div className="p-6 bg-white rounded-lg shadow-md w-full mx-auto pixel-corners flex flex-col items-center gap-5 justify-center" style={{ display: 'flex' }}>

                <h2 className="text-xl font-bold text-center text-gray-600 my-9" style={{ fontSize: '20px' }}>{currentQuestion.question}</h2>

                <div className={`flex flex-col gap-4 w-full items-center ${shake ? 'animate-shake' : ''}`}>
                    {shuffledChoices
                        .map((choice) => (
                            <div
                                key={choice.label}
                                className={`p-4 h-[50px] border-4 border-gray-600 cursor-pointer transition-all duration-300 ${selectedAnswers[currentQuestionIndex] ? 'bg-gray-100' : 'hover:bg-gray-200'} relative pxlcrnrs w-full`}
                                onClick={() => !selectedAnswers[currentQuestionIndex] && handleAnswer(choice)}
                                style={{ boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 1)' }}
                            >
                                {/* Progress bar (fills background) */}
                                {selectedAnswers[currentQuestionIndex] && (
                                    <div className="absolute inset-0 bg-gray-300 h-full overflow-hidden w-full">
                                        {/* Progress fill */}
                                        <div
                                            className="bg-gray-600 h-full"
                                            style={{ width: `${choice.percentage}%` }}
                                        >
                                        </div>
                                    </div>
                                )}

                                <p
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg text-center whitespace-nowrap z-20 text-gray-800 mix-blend-difference"
                                >
                                    {choice.label}
                                </p>


                            </div>
                        ))}

                </div>
            </div>
        </div>
    );
};


// Result Component
const PollResult = ({ answers, questions }) => {
    const total = questions.length;
    const [displayScore, setDisplayScore] = useState(0);
    const [finalScore, setFinalScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const counterSoundRef = useRef(null);
    const feedbackSoundRef = useRef(null);

    // Calculate actual score
    useEffect(() => {
        const calculatedScore = answers.reduce((acc, answer, index) => {
            const correctChoice = questions[index].choices.reduce((max, choice) =>
                choice.percentage > max.percentage ? choice : max
            );
            return answer.label === correctChoice.label ? acc + 1 : acc;
        }, 0);

        setFinalScore(calculatedScore);
        setFeedback(getFeedbackMessage(calculatedScore));
    }, [answers, questions]);

    // Animate the counter
    useEffect(() => {
        counterSoundRef.current = new Howl({
            src: ['/sounds/score_count.ogg'],
            loop: true,
            volume: 0.5
        });

        let animationFrame;
        let startTime;
        const duration = 2000; // 2 seconds counting animation

        const animateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const currentDisplay = Math.floor(progress * finalScore);
            setDisplayScore(currentDisplay);

            // Play sound while counting
            if (!counterSoundRef.current.playing()) {
                counterSoundRef.current.play();
            }

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animateCounter);
            } else {
                // Stop sound when counting finishes
                counterSoundRef.current.stop();

                // Play feedback sound based on score
                playFeedbackSound();
            }
        };

        animationFrame = requestAnimationFrame(animateCounter);

        return () => {
            cancelAnimationFrame(animationFrame);
            counterSoundRef.current.stop();
            if (feedbackSoundRef.current) {
                feedbackSoundRef.current.stop();
            }
        };
    }, [finalScore]);

    const playFeedbackSound = () => {
        if (finalScore === total) {
            // Perfect score sound
            feedbackSoundRef.current = new Howl({
                src: ['/sounds/victory_fanfare.ogg'],
                volume: 0.7
            });
        } else if (finalScore >= total / 2) {
            // Decent score sound
            feedbackSoundRef.current = new Howl({
                src: ['/sounds/positive_notification.ogg'],
                volume: 0.5
            });
        } else {
            // Bad score sound
            feedbackSoundRef.current = new Howl({
                src: ['/sounds/wrong_echo.ogg'],
                volume: 0.5
            });
        }

        feedbackSoundRef.current.play();
    };

    const getFeedbackMessage = (score) => {
        const perfectFeedbacks = [
            "You truly know me well!",
            "Soulmate-level knowledge!",
            "Are you secretly me?",
            "Unbelievable! 100% accuracy!",
            "You nailed it!"
        ];

        const decentFeedbacks = [
            "You're getting there!",
            "Not bad at all!",
            "Almost had it!",
            "Pretty impressive!",
            "You're on the right track!"
        ];

        const badFeedbacks = [
            "Looks like you still need to know me better!",
            "We'll get there someday...",
            "Have we even met?",
            "Ouch. Try again?",
            "That was rough!"
        ];

        if (score === total) {
            return perfectFeedbacks[Math.floor(Math.random() * perfectFeedbacks.length)];
        }
        if (score >= total / 2) {
            return decentFeedbacks[Math.floor(Math.random() * decentFeedbacks.length)];
        }
        return badFeedbacks[Math.floor(Math.random() * badFeedbacks.length)];
    };

    return (
        <div className="nes-container is-rounded bg-white flex items-center flex-col gap-2 py-2 w-[90%]">
            <h2 className="font-bold" style={{ fontSize: '20px' }}>Poll Results</h2>
            <p className="text-3xl font-bold">
                <span className="count-up">{displayScore}</span>/{total}
            </p>
            <p className="text-center min-h-[60px] flex items-center">{feedback}</p>
            <button
                className="nes-btn is-primary"
                onClick={() => window.location.reload()}
            >
                Try Again
            </button>
        </div>
    );
};

export { PollForm, PollResult };
