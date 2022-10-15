import styles from "./Card.module.css";

function Card({ text, fontSize, children, ...rest}) {
    return (
        <div 
            className={`card ${styles['bg-card']} d-flex justify-content-center align-items-center mb-3`}              
            {...rest} 
        >
            <div className="card-body d-flex justify-content-center align-items-center">
                <div 
                    className={`card-text text-white`} 
                    style={{ fontSize }}
                    
                >
                    {text}
                </div>
                {children}
            </div>
        </div>
    )
}

export default Card;