import { useRouter } from "next/router";
import { Card } from "../../ui";

function Footer({ courseId }){
    const router = useRouter();
    const footer = [
        {
            className: 'previous',
            text: 'Sebelumnya',
            onClick: () => {}
        },
        {
            className: 'home',
            text: 'Home',
            onClick: () => {}
        },
        {
            className: 'next',
            text: 'Selanjutnya',
            onClick: (courseId) => router.push(`/quiz/${courseId}`)
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