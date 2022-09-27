import { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Services }  from "../../services";
import { useRouter } from "next/router";
import Image from 'next/image';
import { notify, setTimer } from "../../utils";
import { useAuth } from "../../context/auth";

function Course() {
    const router = useRouter();
    const ctx = useAuth();
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);
    const [offsetTimestamp, setOffsetTimestamp] = useState(null);

    useEffect(() => {
        const startTime = setTimer();
        setOffsetTimestamp(startTime.getTime());

        const { courseId } = router.query;                
        const id = parseInt(courseId);        

        const services = getServices();
        const detailCourse = services.getCourseById(id);
        
        if (detailCourse?.user_answer !== null) {
            checkCourseIsPassed();
            return
        }

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

    const checkCourseIsPassed = () => {
        const services = getServices();
        const allCourse = services.getAllCourse();
        const courseNotPassed = allCourse.filter(c => c.user_answer === null);

        if (courseNotPassed.length < 1) {
            notify('error', `Halo kelompok ${ctx.user}`, 'Kamu telah menyelesaikan semua quiz, harap laporkan nilaimu ke kaka pendampingmu ya')
            router.push('/landing');
            return
        }
        router.push(`/course/${courseNotPassed[0].id}`);
    };

    const myLoader = ({ src }) => {
        return src;
    }

    return (
        <Layout>
            {!loading && (
                <>                
                    <Header offsetTimestamp={offsetTimestamp}/>
                    <div className="d-flex flex-column justify-content-center align-items-center mt-3 mb-5">
                        <div className="mb-5">
                            <Image
                                className="thumbnail"
                                alt="thumbnail"
                                loader={myLoader}
                                src={course?.thumbnail}
                                quality={100}
                                layout="intrinsic"
                                width={300}
                                height={300}
                            />
                        </div>

                        <div className="theory">
                            <label>{course?.theory}</label>
                        </div>
                    </div>

                    <Footer courseId={course.id}/>
                </>
            )}
        </Layout>
    )
}

export default Course;

export async function getServerSideProps(context) {
    console.log(context);
    return {
        props: {},
    };
}