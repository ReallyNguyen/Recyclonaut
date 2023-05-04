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
    const [button, setButton] = useState([...buttondata]);
    const [disable, setDisable] = useState(false);
    const { img } = quizdata[questionIndex];
    const [poor, setPoor] = useState(false)
    const [good, setGood] = useState(false)
    const [great, setGreat] = useState(false)
    const [submitted, setSubmitted] = useState(false);
    const [summary, setSummary] = useState([]);


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
        const updatedPoints = [...points]
        updatedPoints[questionIndex] = quizdata[questionIndex].options[optionIndex].point
        setPoints(updatedPoints)
        setDisable(true);
    }
    
    const handleNext = () => {
        if (questionIndex < quizdata.length - 1) {
            setQuestionIndex(questionIndex + 1)
        }
        setDisable(false);
    }
    
    const handleBack = () => {
        if (questionIndex > 0) {
          setQuestionIndex(questionIndex - 1)
        }
        if (questionIndex === 1) {
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
            return `${question.question}: ${question.options[optionIndex].option}`;
          });
          setSummary(newSummary);
          
      
        if (totalPoints === 6) {
          setGreat(true);
        } else if (totalPoints >= 3 && totalPoints <= 5) {
          setGood(true);
        } else if (totalPoints >= 0 && totalPoints <= 2) {
          setPoor(true);
        }
      
        setSubmitted(true);
      };
      
      if (submitted) {
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
              <h1>stellarknight</h1>
              <h3>Great Progress</h3>
              <p className={styles.desc}>
                Congratulations! Based on your quiz results, you have been identified and placed on team StellarKnight. It looks like you are successfully making a positive change on the planet! Keep it up and inspire others to also make an impact on the planet.
              </p>
            </div>
            <div className={styles.main_results}>
              <h1 className={styles.answer}>Your Answer</h1>
              <div className={styles.summary_great}>
              <h2>Summary</h2>
              {options.map((option, index) => (
                    <div key={index}>
                      <p>{option.option}</p>
                    </div>
                  ))}
              </div>
             
      
              <div className={styles.quest_great}>
                <h1 className={styles.quest}>Your Quest</h1>
                <div className={styles.improve_great}>
                  <h2>How to improve</h2>
                  {options.map((option, index) => (
                    <div key={index}>
                      <p>{option.result}</p>
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
                                    {options.map((option, optionIndex) => (
                                        <Buttons
                                            key={optionIndex}
                                            onClick={() => handleOption(optionIndex)}
                                            option={option}
                                            buttons={questionIndex === "1" || questionIndex === "2" ? "3" : "2"}
                                            // selected={selectedOptions[info.questionID] === optionIndex}
                                            // disableButtons={nextClicked}
                                        />
                                    ))}
                                </div>
                        </div>
                    </div>
                    <div className={styles.back_and_next}>
                        {button.map((info, index) => {
                            if (info.buttons.toLowerCase() === 'quiz' && questionIndex < quizdata.length - 1) {
                                return (
                                    <OtherButton
                                        key={index}
                                        back={info.back}
                                        next={info.next}
                                        type={info.questionIndex === "4" ? "submit" : "quiz"}
                                        onNext={handleNext}
                                        onBack={handleBack}
                                        disabled={disable}
                                        info={info}
                                    />
                                );
                            } else if (info.buttons.toLowerCase() === 'submit' && questionIndex === quizdata.length - 1) {
                                return (
                                    <OtherButton
                                        key={index}
                                        back={info.back}
                                        next={info.next}
                                        type="submit"
                                        onNext={handleSubmit}
                                        onBack={handleBack}
                                        disabled={disable}
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
                                        onNext={handleNext}
                                        onBack={handleBack}
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
