import { useRouter } from "next/router";
import { Layout } from "../../components/common";
import { Card } from "../../components/ui";
import styles from "./Landing.module.css";

function Landing() {
    const router = useRouter();    
    
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
            onClick: () => console.log('tentang')
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