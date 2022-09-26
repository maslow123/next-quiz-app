import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Card } from "../../components/ui";
import { Services } from "../../services";

function Quiz() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [answer, setAnswer] = useState(null);

    useEffect(() => {
        const { courseId } = router.query;
        const id = parseInt(courseId);

        const services = new Services(null) // todo
        const detailCourse = services.getCourseById(id);

        setCourse(detailCourse);
        setLoading(false); 
    }, []);

    
    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <Layout>
            {!loading && (
                <>
                    <Header withScore={true}/>
                    <div className="questions d-flex align-items-center flex-column my-5">
                        <p className="bold h4">{course.question}</p>
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
                                        cursor: 'pointer'
                                    }}
                                >                            
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
                                </Card>
                            </div>
                        ))}
                    </div>

                    <Footer courseId={1}/>
                </>
            )}
        </Layout>
    )
}

export default Quiz;