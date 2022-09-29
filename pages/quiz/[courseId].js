import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Card } from "../../components/ui";
import { Services } from "../../services";
import { adjustBgSound, notify, playSound, setTimer, sounds } from "../../utils";

function Quiz() {
    const router = useRouter();
    const { courseId } = router.query;
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [lastQuiz, setLastQuiz] = useState(false);
    const [offsetTimestamp, setOffsetTimestamp] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {        
        playSound(sounds.quiz[courseId]);
        adjustBgSound(0.5);
        
        const startTime = setTimer();
        setOffsetTimestamp(startTime.getTime());

        const services = getServices();
        const id = parseInt(courseId);
        const detailCourse = services.getCourseById(id);
        if (!detailCourse) {
            router.back();
            return
        }
        if (detailCourse.user_answer !== null) {
            playSound(sounds.answer.wrong);
            notify('error', 'Ada kesalahan', 'Maaf, kamu sudah pernah mengerjakan quiz ini');
            router.push('/landing');
        }

        const allCourse = services.getAllCourse();
        const isLastQuiz = allCourse.length === detailCourse.id;

        const userScore = services.getScore();

        setScore(userScore);
        setLastQuiz(isLastQuiz);
        setCourse(detailCourse);
        setLoading(false); 
        
    }, []);

    const getServices = () => {
        let courseFromCache = null;
        if (localStorage.getItem('course')) {
            courseFromCache = JSON.parse(localStorage.getItem('course')) || null;
        }
        
        const services = new Services(courseFromCache); 
        return services;
    };


    const myLoader = ({ src }) => {
        return src;
    }

    const checkTheAnswer = () => {
        if (answer === null) {
            playSound(sounds.answer.wrong);
            notify('error', 'Ups, kamu harus pilih jawaban terlebih dahulu ya');
            return
        }

        const isCorrect = Number(answer) === course.correct_answer;
        const sound = isCorrect ? sounds.answer.correct : sounds.answer.wrong;
        playSound(sound);


        const updateCourse = {            
            ...course,
            score: isCorrect ? 10 : 0,
            counter: isCorrect ? course.counter : course.counter - 1,
            user_answer: Number(answer)
        };

        const services = getServices();
        const { allCourse } = services.updateCourse(updateCourse);
        
        // save course to localstorage instead db
        localStorage.setItem('course', JSON.stringify(allCourse));
        
        const message = isCorrect
        ? lastQuiz
            ? 'Hebat! kamu telah menyelesaikan semua quiz. Yuk lihat nilai kamu dengan tekan tombol OK di bawah ini.'
            : 'Kamu hebat, yuk lanjut ke game selanjutnya untuk mengasah kemampuan kamu. ' 
        : updateCourse.counter < 1
            ? `Yahh kesempatan kamu udah abis, yuk lanjutin ke soal berikutnya.`
            : `Kamu masih punya kesempatan ${updateCourse.counter} kali lagi, tetap semangat ya!`;
        const type = isCorrect ? 'success' : 'error';
        const title = isCorrect ? 'Jawaban Benar' : 'Jawaban Salah';

        if (updateCourse.counter < 1 && !isCorrect) {
            playSound(sounds.answer.limit);
        }

        if ((lastQuiz && updateCourse.counter === 0 && !isCorrect) || (lastQuiz && isCorrect)) {
            setFinishTime();
        }
        notify(type, title, message, isCorrect, lastQuiz, updateCourse, true, router);
        
        setCourse({ ...updateCourse });
    }

    const setFinishTime = () => {        
        const finishTime = document.getElementById('timer').innerText;
        localStorage.setItem('QUIZ_FINISH_TIME', finishTime);
    }

    return (
        <Layout>
            {!loading && (
                <>
                    <Header withScore={true} offsetTimestamp={offsetTimestamp} score={score}/>
                    <div className="questions d-flex align-items-center flex-column">                        
                        <Card
                            style={{
                                width: 400,
                                height:400
                            }}
                        >
                            {answer !== null && (
                                <Image
                                    alt="thumbnail"
                                    loader={myLoader}
                                    src={course.options[answer].image}
                                    quality={100}
                                    layout="intrinsic"
                                    width={300}
                                    height={300}
                                />
                            )}
                        </Card>
                        <p className="bold h3 my-3">{course.question}</p>
                    </div>

                    <div className="answers d-flex justify-content-around align-items-center flex-wrap">
                        {course?.options?.map((opt, key) => (
                            <div 
                                key={key} 
                                className={`${key}`}
                                onClick={() => {
                                    playSound(sounds.button)
                                    setAnswer(parseInt(key))
                                }}
                            >
                                <Card
                                    style={{
                                        width: 200,
                                        height: 200,
                                        cursor: 'pointer'
                                    }}
                                >     
                                    {answer !== key && (
                                        <Image
                                            alt="thumbnail"
                                            loader={myLoader}
                                            src={opt.image}
                                            quality={100}
                                            layout="intrinsic"
                                            width={150}
                                            height={150}
                                        />
                                    )}                       
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Footer courseId={1} setModalOpen={checkTheAnswer} modalOpen isQuiz />
                </>
            )}
        </Layout>
    )
}

export default Quiz;

export async function getServerSideProps(context) {
    return {
        props: {},
    };
}