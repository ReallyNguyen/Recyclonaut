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
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0])
    const [disable, setDisable] = useState(false);
    const { img } = quizdata[questionIndex];
    const [poor, setPoor] = useState(false)
    const [good, setGood] = useState(false)
    const [great, setGreat] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [summary, setSummary] = useState([]);
    const [improve, setImprove] = useState([]);
    const isLastQuestion = questionIndex === quizdata.length - 1
    const [isActive, setIsActive] = useState(false);
    const [activeOption, setActiveOption] = useState(null);
    const [disableNext, setDisableNext] = useState(true);

    const handleClick = (event) => {
        // if (disableButtons) {
        //     return;
        // }

        const currentButton = event.currentTarget;
        const buttons = document.querySelectorAll(`.${styles.buttons} button`);
        buttons.forEach((button) => {
            if (button === currentButton) {
                button.classList.toggle(styles.active);
            } else {
                button.classList.remove(styles.active);
            }
        });
    };

    const handleIntro = () => {
        router.push("../quizintro");
    };

    const handleHome = () => {
        router.push("/");
    }

    useEffect(() => {
        setQuestion(quizdata[questionIndex].question);
        setOptions(quizdata[questionIndex].options);
    }, [questionIndex]);

    const handleOption = (optionIndex) => {
        setActiveOption(optionIndex);
        const updatedPoints = [...points];
        updatedPoints[questionIndex] = quizdata[questionIndex].options[optionIndex].point;
        setPoints(updatedPoints);
        setDisable(true);
        setDisableNext(false); // Enable the "Next" button when an option is clicked
    };

    const handleNext = () => {
        if (questionIndex < quizdata.length - 1) {
            setQuestionIndex(questionIndex + 1);
            resetActiveOption(); // Reset activeOption when moving to the next question
        }
        setDisable(false); // Enable the options for the next question
        setDisableNext(true); // Disable the "Next" button for the next question until an option is selected
        setActiveOption(null); // Deselect the currently selected option
    };

    const resetActiveOption = () => {
        setActiveOption(null);
    };

    const handleBack = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1)
        }
        if (questionIndex === 0) {
            handleIntro();
        }
    }

    const handleReset = () => {
        setQuestionIndex(0)
        setPoints([0, 0, 0, 0])
    }

    const handleSubmit = () => {
        const totalPoints = points.reduce((sum, point) => sum + point, 0);
        const newSummary = quizdata.map((question, index) => {
            const optionIndex = question.options.findIndex(option => option.point === points[index]);
            return `${question.options[optionIndex].outcome} ${question.options[optionIndex].option}`;
        });
        setSummary(newSummary);

        const newImprove = quizdata.map((question, index) => {
            const optionIndex = question.options.findIndex(option => option.point === points[index]);
            return `${question.options[optionIndex].result}`;
        });
        setImprove(newImprove);


        if (totalPoints === 6) {
            setGreat(true);
        } else if (totalPoints >= 3 && totalPoints <= 5) {
            setGood(true);
        } else if (totalPoints >= 0 && totalPoints <= 2) {
            setPoor(true);
        }
        console.log(totalPoints)
    };

    if (great) {
        return (
            <div className={styles.result_container_great}>
                <div className={styles.great_background}>
                    <div className={styles.header}>
                        <NavBar page="quiz" />
                    </div>
                    <div>
                        <Image src="/results/great/great.svg" width={369} height={320} />
                    </div>
                </div>
                <div className={styles.group}>
                    <Image src="/results/great/three star.svg" width={143} height={36} />
                    <h1>Stellar Knight</h1>
                    <h3>Great Progress</h3>
                    <p className={styles.desc}>
                        Congratulations! Based on your quiz results, you have been identified and placed on team StellarKnight. It looks like you are successfully making a positive change on the planet! Keep it up and inspire others to also make an impact on the planet.
                    </p>
                </div>
                <div className={styles.main_results}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_great}>
                        <h2>Summary</h2>
                        {summary.map((result, index) => (
                            <div key={index} className={styles.summary}>
                                <div className={styles.option_chosen}>
                                    <p>{result}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_great}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_great}>
                            <h2>Congratulations</h2>
                            {improve.map((result, index) => (
                                <div key={index} className={styles.summary}>
                                    <div className={styles.option_chosen}>
                                        <p>{result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.result_buttons_great}>
                        <button onClick={handleIntro}>Redo the journey?</button>
                        <button onClick={handleHome}>Go back to home</button>
                    </div>

                </div>
            </div>
        );
    } else if (good) {
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
                    <h1>Cosmic Warrior</h1>
                    <h3>Good Progress</h3>
                    <p className={styles.desc}>
                        Congratulations on your quiz results! You have been
                        identified and placed as a LunarWarrior, and we have
                        designed a set of daily quests for you to adopt and
                        contribute towards the betterment of our environment.
                        With your current habits and answers, we believe you
                        have the potential to make a positive impact on our planet.
                        Are you prepared to take on this challenge and join us on
                        this quest towards a greener world? Let's embark on this
                        journey together and create a lasting difference!</p>
                </div>
                <div className={styles.main_results}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_good}>
                        <h2>Summary</h2>
                        {summary.map((result, index) => (
                            <div key={index} className={styles.summary}>
                                <div className={styles.option_chosen}>
                                    <p>{result}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_good}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_good}>
                            <h2>How to improve</h2>
                            {improve.map((result, index) => (
                                <div key={index} className={styles.summary}>
                                    <div className={styles.option_chosen}>
                                        <p>{result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.result_buttons_good}>
                        <button onClick={handleIntro}>Redo the journey?</button>
                        <button onClick={handleHome}>Go back to home</button>
                    </div>

                </div>
            </div>
        );
    } else if (poor) {
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
                <div className={styles.group}>
                    <Image src="/results/poor/one star.svg" width={143} height={36} />
                    <h1>Space Guard</h1>
                    <h3>poor Progress</h3>
                    <p className={styles.desc}>
                        Congratulations on your quiz results! You have been
                        identified and placed as a LunarWarrior, and we have
                        designed a set of daily quests for you to adopt and
                        contribute towards the betterment of our environment.
                        With your current habits and answers, we believe you
                        have the potential to make a positive impact on our planet.
                        Are you prepared to take on this challenge and join us on
                        this quest towards a greener world? Let's embark on this
                        journey together and create a lasting difference!</p>
                </div>
                <div className={styles.main_results}>
                    <h1 className={styles.answer}>Your Answer</h1>
                    <div className={styles.summary_poor}>
                        <h2>Summary</h2>
                        {summary.map((result, index) => (
                            <div key={index} className={styles.summary}>
                                <div className={styles.option_chosen}>
                                    <p>{result}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.quest_poor}>
                        <h1 className={styles.quest}>Your Quest</h1>
                        <div className={styles.improve_poor}>
                            <h2>How to improve</h2>
                            {improve.map((result, index) => (
                                <div key={index} className={styles.summary}>
                                    <div className={styles.option_chosen}>
                                        <p>{result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.result_buttons_poor}>
                        <button onClick={handleIntro}>Redo the journey?</button>
                        <button onClick={handleHome}>Go back to home</button>
                    </div>

                </div>
            </div>
        );
    }

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
                            <div>
                                <div className={styles.img_container}>
                                    {Array.isArray(img) ? (
                                        <>
                                            {img.map((img, imgIndex) => (
                                                <Image key={imgIndex} src={`/${img}`} width={60} height={70} />
                                            ))}
                                        </>
                                    ) : (
                                        <Image src={`/${img}`} width={160} height={110} />
                                    )}
                                </div>
                                <h4 className={styles.question}>{question}</h4>
                                {options.map((option, index) => (
                                    <div key={index} onClick={() => handleOption(index)}>
                                        <button
                                            type="button"
                                            className={`${index === activeOption ? styles.active : ''} ${styles.button}`}
                                            disabled={disable} // Disable the button when `disable` is true
                                        >
                                            {option.option}
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className={styles.back_and_next}>
                        <div>
                            {isLastQuestion ? (
                                <>
                                    <button className={styles.btn} onClick={handleBack}>Back</button>
                                    <button className={styles.btn} onClick={handleSubmit} disabled={disableNext}>
                                        Submit
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className={styles.btn} onClick={handleBack}>Back</button>
                                    <button className={styles.btn} onClick={handleNext} disabled={disableNext}>
                                        Next
                                    </button>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
