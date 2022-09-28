import { Layout } from "../../components/common";
import { useAuth } from "../../context/auth";
import Image from "next/image";
import { adjustBgSound, images, notify } from "../../utils";
import { Services } from "../../services";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Result() {
    const ctx = useAuth();
    const router = useRouter();
    const [showResult, setShowResult] = useState(true);
    const [score, setScore] = useState(0);
    const [finishTime, setFinishTime] = useState('');

    useEffect(() => {
        adjustBgSound(0.7);
        const services = getServices();
        const allCourseIsCompleted = services.completedAllCourse();
        
        if (!allCourseIsCompleted) {
            notify('error', 'Ada yang salah nih', 'Ayo selesaikan permainannya, supaya kamu bisa melihat nilai kamu');            
            setShowResult(false);
            router.push('/landing');
            return
        }

        const result = services.getScore();
        setFinishTime(localStorage.getItem('QUIZ_FINISH_TIME'));
        setScore(result);
    }, []);

    const getServices = () => {
        let courseFromCache = null;
        if (localStorage.getItem('course')) {
            courseFromCache = JSON.parse(localStorage.getItem('course')) || null;
        }
        
        const services = new Services(courseFromCache); 
        return services;
    };
    return (
        <Layout 
            style={{ backgroundImage: 'linear-gradient(180deg, #9A021F, #FB8C23)', color: 'white'}}
        >
            {showResult && (
                <div className={`d-flex align-items-center flex-column justify-content-center`}>
                    <div className="title">
                        <label style={{ fontSize: 15, fontWeight: 'normal'}}>Selamat untuk kelompok:</label><br/>                                        
                    </div>                
                    <span className="bold h1 text-uppercase">{ctx.user}</span>
                    <div 
                        className="mt-4 bg-info text-uppercase d-flex align-items-center justify-content-center"
                        style={{ width: 170, height: 50, borderRadius: 40 }}
                    >
                        <label>Nilai</label>                    
                    </div>
                    <div className="mt-4 text-uppercase d-flex align-items-center justify-content-center">
                        <label style={{ fontSize: 100}}>{score}</label>                    
                    </div>
                    <div>
                        <Image
                            alt="login"
                            src={images.result}
                            quality={100}
                            layout="intrinsic"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="captions h3">
                        <span>Kamu menyelesaikan permainan ini dalam waktu <span className="bold text-italic">{finishTime}</span> detik</span>                    
                    </div>
                    <div className="captions h3">
                        <span>Jangan lupa untuk kasih tau ke kaka pendampingmu ya</span>
                    </div>
                    <div className="footer">
                        <button 
                            className="btn btn-primary rounded mt-3"
                            onClick={() => router.push('/landing')}
                        >
                            Home
                        </button>
                    </div>
                </div>            
            )}
        </Layout>
    )
}

export default Result;