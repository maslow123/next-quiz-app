import { useRouter } from "next/router";
import { setTimer } from "../../../utils";
import { Card } from "../../ui";

function Footer({ courseId, isQuiz = false, modalOpen = false, setModalOpen}){
    const router = useRouter();
    const footer = [
        {
            className: 'previous',
            text: 'Sebelumnya',
            onClick: () => router.back()
        },
        {
            className: 'home',
            text: 'Home',
            onClick: () => router.push('/landing')
        },
        {
            className: 'next',
            text: 'Selanjutnya',
            onClick: (courseId) => {
                if (isQuiz) {
                    return setModalOpen(modalOpen)
                }
                setTimer();
                router.push(`/quiz/${courseId}`)
            }
        },
    ];
    return(
        <footer className="d-flex justify-content-between align-items-center flex-wrap mt-5">
            {footer.map((f, i) => (                    
                <div className={f.className} key={i}>
                    <Card 
                        text={f.text}
                        fontSize={16}
                        onClick={() => f.onClick(courseId)}
                        style={{ width: '10rem', cursor: 'pointer' }}
                    />
                </div>
            ))}
            
        </footer> 
    );
}

export default Footer;