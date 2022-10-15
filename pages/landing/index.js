import { useRouter } from "next/router";
import { useEffect } from "react";
import { Layout } from "../../components/common";
import { Card } from "../../components/ui";
import { useAuth } from "../../context/auth";
import { adjustBgSound, checkBgSoundIsActive, playSound, sounds } from "../../utils";
import styles from "./Landing.module.css";

function Landing() {
    const router = useRouter();        
    const { setUser } = useAuth();

    useEffect(() => {
        checkBgSoundIsActive();
        adjustBgSound(1);
        localStorage.removeItem('QUIZ_START_TIME');
    }, []);
    const logout = () => {
        localStorage.clear();
        setUser('');
        router.push('/');
    };

    const redirect = (path) => {
        playSound(sounds.commonButton);
        router.push(path);
    }
    const cards = [
        {
            text: 'MULAI',
            onClick: () => redirect('/course/1')
        },
        {
            text: 'TENTANG',
            onClick: () => redirect('/about-us')
        },
        {
            text: 'NILAI KAMU',
            onClick: () => redirect('/result')
        },
        {
            text: 'KELUAR',
            onClick: () => logout()
        }
    ]
    return (
        <Layout>
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