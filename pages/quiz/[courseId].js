import Image from "next/image";
import { useEffect } from "react";
import { Footer, Header, Layout } from "../../components/common";
import { Card } from "../../components/ui";

function Quiz() {
    useEffect(() => {

    }, []);

    
    const myLoader = ({ src }) => {
        return src;
    }

    const answers = [1, 2, 3]
    return (
        <Layout>
            <Header withScore={true}/>
            <div className="questions d-flex align-items-center flex-column my-5">
                <p className="bold h4">Manakah foto komputer?</p>
                <Card
                    style={{
                        width: 400,
                    }}
                >
                    <Image
                        className="img-thumbnail"
                        alt="thumbnail"
                        loader={myLoader}
                        src={"https://picsum.photos/seed/picsum/200/300"}
                        quality={100}
                        layout="intrinsic"
                        width={300}
                        height={300}
                    />
                </Card>
            </div>

            <div className="answers d-flex justify-content-around align-items-center flex-wrap">
                {answers.map((item, key) => (
                    <div key={key} className={`${key}`}>
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
                                src={"https://picsum.photos/seed/picsum/200/300"}
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
        </Layout>
    )
}

export default Quiz;