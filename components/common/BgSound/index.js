import { checkBgSoundIsActive, sounds } from "../../../utils";
import ReactAudioPlayer from 'react-audio-player';

function BgSound({ children }) {    
    const click = () => {
        checkBgSoundIsActive();
    }
    return (
        <div id="wrapper" onClick={() => click()}>
            <ReactAudioPlayer autoPlay src={sounds.landing} id="bgsound" loop/>
            { children }
        </div>
    )
}

export default BgSound;