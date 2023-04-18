import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/quiz/Quiz.module.css'
import { useRouter } from 'next/router'
import quizdata from '@/data/quiz.json'
import buttondata from '@/data/otherbutton.json'
import ProgressBar from '@/components/ProgressBar'
import { useState, useEffect } from 'react'
import Buttons from '@/components/Buttons/QuizButton'
import OtherButton from '@/components/Buttons/OtherButton'
import NavBar from '@/components/NavBar'

export default function Quiz() {
    const router = useRouter();

    const [questionIndex, setQuestionIndex] = useState(1);
    const [question, setQuestion] = useState([...quizdata]);
    const [button, setButton] = useState([...buttondata]);
    const [score, setScore] = useState(0);
    const [nextClicked, setNextClicked] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [results, setResults] = useState([]);
    const [disable, setDisable] = useState(false);

    const updateScore = (questionID, optionIndex, points) => {
        const currentOptionIndex = selectedOptions[questionID];
        if (currentOptionIndex !== undefined && currentOptionIndex === optionIndex) {
            return;
        }
        const selectedOptionPoints = question.find(q => q.questionID === questionID).options[optionIndex].point;
        const currentOptionPoints = currentOptionIndex !== undefined ? question.find(q => q.questionID === questionID).options[currentOptionIndex].point : 0;
        setScore(score - currentOptionPoints + selectedOptionPoints);
        setSelectedOptions({
            ...selectedOptions,
            [questionID]: optionIndex
        });

        const selectedQuestion = question.find(q => q.questionID === questionID); // Find the question object based on questionID
        const selectedOption = selectedQuestion.options[optionIndex]; // Get the selected option object based on optionIndex
        const questionText = selectedQuestion.question; // Get the question text from the selected question object
        const selectedResult = selectedOption.result; // Get the result from the selected option object
        const selectedOutcome = selectedOption.outcome; // Get the outcome from the selected option object
        const updatedResults = results.filter(r => r.question !== questionText); // Remove previously selected options from results with filter and arrow function

        // Update results with the selected question, option, and result
        setResults([...updatedResults, { question: questionText, selectedOption: selectedOption.option, result: selectedResult, outcome: selectedOutcome }]);
        setDisable(true);
    };


    useEffect(() => {
        setQuestion([...quizdata].slice(questionIndex - 1, questionIndex));
    }, [questionIndex]);

    const handleNextQuestion = () => {
        const activeButton = document.querySelector(`.${styles.buttons} button.${styles.active}`);
        console.log(questionIndex)
        if (activeButton) {
            activeButton.classList.remove(styles.active);
        }
        if (questionIndex === 4) {
            setQuizCompleted(true);
        }
        setDisable(false);
        setQuestionIndex(questionIndex + 1);
    };

    console.log(questionIndex)

    if (quizCompleted && score >= 5 && score <= 6) {
        return (
            <div className={styles.result_container_good}>
                <div className={styles.good_background}>
                    <div className={styles.header}>
                        <NavBar page='quiz' />
                    </div>
                    <div>
                        <Image src="/results/good/good.svg" width={369} height={320} />
                    </div>
                </div>
                <div className={styles.group}>
                    <Image src="/results/good/two stars.svg" width={143} height={36} />
                    <h1>cosmicknight</h1>
                    <h3>Good Progress</h3>
                    <p className={styles.desc}>
                        Congratulations! Based on your quiz results,
                        you have been identified and placed as a LunarWarrior.
                        With your current habits and inputted answers,
                        we have curated a list of quests for you to incorporate
                        into your daily routine to aid in the betterment of our
                        environment. Are you ready to accept the challenge and
                        make a positive impact on our planet? Let's embark on
                        this quest together and make a difference!
                    </p>
                </div>
                <div className={styles.main_results}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_great}>
                        <h2>Summary</h2>
                        {results.map((result, index) => (
                            <div key={index} className={styles.test}>
                                <div className={styles.option_chosen}>
                                    <p>
                                        {result.selectedOption}
                                        {result.outcome}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_great}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_great}>
                            <h2>How to improve</h2>
                            {results.map((result, index) => (
                                <div key={index} className={styles.test}>
                                    <div className={styles.quest}>
                                        <p>{result.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );

    } else if (quizCompleted && score >= 2 && score <= 4) {
        return (
            <div className={styles.result_container_good}>
                <div className={styles.good_background}>
                    <div className={styles.header}>
                        <NavBar page='quiz' />
                    </div>
                    <div>
                        <Image src="/results/good/good.svg" width={369} height={320} />
                    </div>
                </div>
                <div className={styles.group}>
                    <Image src="/results/good/two stars.svg" width={143} height={36} />
                    <h1>cosmicknight</h1>
                    <h3>Good Progress</h3>
                    <p className={styles.desc}>
                        Congratulations! Based on your quiz results,
                        you have been identified and placed as a LunarWarrior.
                        With your current habits and inputted answers,
                        we have curated a list of quests for you to incorporate
                        into your daily routine to aid in the betterment of our
                        environment. Are you ready to accept the challenge and
                        make a positive impact on our planet? Let's embark on
                        this quest together and make a difference!</p>
                </div>
                <div className={styles.main_results}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_good}>
                        <h2>Summary</h2>
                        {results.map((result, index) => (
                            <div key={index} className={styles.test}>
                                <div className={styles.option_chosen}>
                                    <p>{result.selectedOption}{result.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_good}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_good}>
                            <h2>How to improve</h2>
                            {results.map((result, index) => (
                                <div key={index} className={styles.test}>
                                    <div className={styles.quest}>
                                        <p>{result.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (quizCompleted && score >= 0 && score <= 1) {
        return (
            <div className={styles.result_container_poor}>
                <div className={styles.poor_background}>
                    <div className={styles.header}>
                        <NavBar page='quiz' />
                    </div>
                    <div>
                        <Image src="/results/poor/poor.svg" width={369} height={320} />
                    </div>
                </div>
                <div className={styles.poor_group}>
                    <Image src="/results/poor/one star.svg" width={143} height={36} />
                    <h1>lunarwarrior</h1>
                    <h3>Great Progress</h3>
                    <p className={styles.desc}>
                        Congratulations! Based on your quiz results,
                        you have been identified and placed as a LunarWarrior.
                        With your current habits and inputted answers,
                        we have curated a list of quests for you to incorporate
                        into your daily routine to aid in the betterment of our
                        environment. Are you ready to accept the challenge and
                        make a positive impact on our planet? Let's embark on
                        this quest together and make a difference!</p>
                </div>
                <div className={styles.main_results_poor}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_poor}>
                        <h2>Summary</h2>
                        {results.map((result, index) => (
                            <div key={index}>
                                <div className={styles.option_chosen_poor}>
                                    <p>{result.selectedOption}{result.outcome}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_poor}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_poor}>
                            <h2>How to improve</h2>
                            {results.map((result, index) => (
                                <div key={index}>
                                    <div className={styles.quest}>
                                        <p>{result.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const handleButtonClick = () => {
        router.push("./quizintro");
    };

    const handleBackQuestion = () => {
        if (questionIndex > 1) {
            setQuestionIndex(questionIndex - 1);
            const buttons = document.querySelectorAll(`.${styles.buttons} button`);
            buttons.forEach((button) => {
                button.classList.remove(styles.active);
            });
            if (questionIndex === 2) {
                setNextClicked(true);
            }
        }
        if (questionIndex === 1) {
            handleButtonClick();
        }
    };

    return (
        <>
            <Head>
                <title>Recylonaut</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <NavBar page='quiz' />
                    </div>
                    <ProgressBar questionIndex={questionIndex} totalQuestions={quizdata.length} />
                    <div>
                        <div className={styles.quiz_container}>
                            {question && question.map((info, index) => (
                                <div key={index}>
                                    <div className={styles.img_container}>
                                        {Array.isArray(info.img) ? (
                                            <>
                                                {info.img.map((img, imgIndex) => (
                                                    <Image key={imgIndex} src={`/${img}`} width={60} height={70} />
                                                ))}
                                            </>
                                        ) : (
                                            <Image src={`/${info.img}`} width={160} height={110} />
                                        )}
                                    </div>
                                    <h4 className={styles.question}>{`${info.questionID}. ${info.question}`}</h4>
                                    {info.options.map((option, optionIndex) => (
                                        <Buttons
                                            key={`${questionIndex}-${optionIndex}`}
                                            option={option}
                                            buttons={info.questionID === "1" || info.questionID === "2" ? "3" : "2"}
                                            selected={selectedOptions[info.questionID] === optionIndex}
                                            updateScore={(points) => updateScore(info.questionID, optionIndex, points)}
                                            disableButtons={nextClicked}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.back_and_next}>
                        {button.map((info, index) => {
                            if (info.buttons.toLowerCase() === 'quiz' && questionIndex < 4) {
                                return (
                                    <OtherButton
                                        key={index}
                                        back={info.back}
                                        next={info.next}
                                        type={info.questionID === "4" ? "submit" : "quiz"}
                                        onNext={handleNextQuestion}
                                        onBack={handleBackQuestion}
                                        disabled={!disable}
                                        info={info}
                                    />
                                );
                            } else if (info.buttons.toLowerCase() === 'submit' && questionIndex === 4) {
                                return (
                                    <OtherButton
                                        key={index}
                                        back={info.back}
                                        next={info.next}
                                        type="submit"
                                        onNext={handleNextQuestion}
                                        onBack={handleBackQuestion}
                                        disabled={!disable}
                                        info={info}
                                    />
                                );
                            } else if (info.buttons.toLowerCase() === 'quiz' && questionIndex === 1) {
                                return (
                                    <OtherButton
                                        key={index}
                                        back={info.back}
                                        next={info.next}
                                        type="submit"
                                        onNext={handleNextQuestion}
                                        onBack={handleBackQuestion}
                                        disabled={!disable}
                                        info={info}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
