import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Card, Modal } from "../../components/ui";
import { Services } from "../../services";
import { notify, setTimer } from "../../utils";

function Quiz() {
    const router = useRouter();
    const { courseId } = router.query;
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(false);    
    const [lastQuiz, setLastQuiz] = useState(false);
    const [offsetTimestamp, setOffsetTimestamp] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {        
        const startTime = setTimer();
        setOffsetTimestamp(startTime.getTime());

        const services = getServices();
        const id = parseInt(courseId);
        const detailCourse = services.getCourseById(id);

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

    const setModalVisible = (modalOpen) => {
        setModalOpen(modalOpen);
    };

    const checkTheAnswer = (modalOpen) => {
        if (answer === null) {
            notify('error', 'Oops, kamu harus pilih jawaban terlebih dahulu ya');
            return
        }

        const isCorrect = Number(answer) === course.correct_answer;
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
        
        setCorrectAnswer(isCorrect);        
        setCourse({ ...updateCourse });
        setModalOpen(modalOpen);

    }

    const onSubmit = () => {
        // TODO...
        if (lastQuiz) {
            router.push(`/landing`);
            return
        }
        if(correctAnswer) {            
            router.push(`/course/${Number(courseId) + 1}`);
            return
        }
        setModalOpen(!modalOpen);
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
                                    className="img-thumbnail"
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
                                onClick={() => setAnswer(parseInt(key))}
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
                                            className="img-thumbnail"
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

                    <Modal
                        modalOpen={modalOpen}
                        setModalOpen={setModalVisible}
                        title={`${correctAnswer ? 'Selamat, jawaban kamu benar!' : 'Oops, jawaban kamu salah.'}`}               
                        onSubmit={onSubmit}                  
                    >
                        <div>
                            {
                                correctAnswer 
                                ? lastQuiz
                                    ? 'Hebat! kamu telah menyelesaikan semua quiz. Semoga kamu dapat nilai yang memuaskan ya.'
                                    : 'Kamu hebat, yuk lanjut ke game selanjutnya untuk mengasah kemampuan kamu. ' 
                                : `Kamu masih punya kesempatan ${course.counter} kali lagi, tetap semangat ya!`
                            }
                        </div>
                    </Modal>
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