import { useEffect, useState } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Services }  from "../../services";
import { useRouter } from "next/router";
import Image from 'next/image';

function Course() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const { courseId } = router.query;                
        const id = parseInt(courseId);

        const services = new Services(null);
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
                    <Header/>
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