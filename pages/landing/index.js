import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Layout } from "../../components/common";
import { Card } from "../../components/ui";
import { adjustBgSound, checkBgSoundIsActive, playSound, sounds } from "../../utils";
import styles from "./Landing.module.css";

function Landing() {
    const router = useRouter();    
    
    useEffect(() => {
        checkBgSoundIsActive();
        adjustBgSound(1);
        localStorage.removeItem('QUIZ_START_TIME');
    }, []);
    const logout = () => {
        localStorage.clear();
        router.push('/');
    };

    const cards = [
        {
            text: 'MULAI',
            onClick: () => router.push('/course/1')
        },
        {
            text: 'TENTANG',
            onClick: () => router.push('/about-us')
        },
        {
            text: 'NILAI KAMU',
            onClick: () => router.push('/result')
        },
        {
            text: 'KELUAR',
            onClick: () => logout()
        }
    ]
    return (
        <Layout>
            {/* <ReactAudioPlayer
                src={sounds.landing}
                autoPlay
                
            /> */}
            <div className={styles.container}>
                {cards.map((card, key) => (
                    <div key={key}>                    
                        <Card 
                            fontSize={24}
                            key={key}
                            text={card.text} 
                            onClick={card.onClick}
                            style={{ 
                                width: '18rem',
                                cursor: 'pointer',
                            }}
                        />
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Landing;