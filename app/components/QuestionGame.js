"use client";
import React, { useState } from "react";

import { PollForm, PollResult } from "./ui/PollForm"

import questions from "../lib/data/questions";

export default function QuestionGame({ShowCongrats}) {
    const [answers, setAnswers] = useState([]);
    const [answered, setAnswered] = useState(false);

    const handlePollSubmit = (answers) => {
        setAnswers(answers);
        setAnswered(true);
        // Optionally, you can call ShowCongrats here if you want to show the congrats message immediately after answering
        ShowCongrats();
    };

    return (
        <>
            {answered ? (
                <PollResult answers={answers} questions={questions} />
            ) : (
                <PollForm questions={questions} onSubmit={handlePollSubmit} />
            )}
        </>
    );
}
