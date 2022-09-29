import { useAuth } from "../../../context/auth";
import Timer from "../../ui/Timer";

function Header({ withScore = false, offsetTimestamp, score = 0 }){
    const ctx = useAuth();

    return(
        <div className="headers d-flex justify-content-between align-items-center mb-3 h4 bold">
            <div className="timer">
                <Timer offsetTimestamp={offsetTimestamp}/>
            </div>
            
            {withScore && (
                <div className="score">
                    <label className="badge bg-info" style={{ fontSize: 30}}>{score}</label>
                </div>
            )}
            
            <div className="groupName text-uppercase">
                <label>{ctx?.user}</label>
            </div>
        </div>
    );
}

export default Header;