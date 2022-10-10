import Swal from 'sweetalert2';

const notify = (
    type, 
    title = '', 
    message, 
    correctAnswer, 
    lastQuiz = false, 
    course, 
    isQuiz = false, 
    router
) => {
    Swal.fire({
        icon: type,
        title,
        html: message,    
        showCancelButton: true,
        confirmButtonText: 'OK',    
    })
    .then(res => {
        if (res.isConfirmed && isQuiz ) {
            if ((lastQuiz && course.counter === 0 && !correctAnswer) || (lastQuiz && correctAnswer)) {
                
                localStorage.removeItem('QUIZ_START_TIME');
                router.push(`/result`);
                return
            }

            if(correctAnswer || (!correctAnswer && course.counter < 1)) {            
                router.push(`/course/${Number(course.id) + 1}`);
                return
            }            
        }
    })
};

const setTimer = () => {
    let startTime = Number(localStorage.getItem('QUIZ_START_TIME'));
    if (startTime) {        
        startTime = new Date(startTime);
        const now = new Date();
        let diffTime = now.getTime() - startTime.getTime();

        startTime.setTime(now.getTime() + diffTime);        
        return startTime

    } else {
        startTime = new Date();
    }

    localStorage.setItem('QUIZ_START_TIME', startTime.getTime());
    return startTime;
}

const questionImage = '/images/question/';
const wordImage = '/images/word/';
const images = {
    result: '/images/trophy.png',
    logo: '/images/unpam.png',
    questions: {
        computer: `${questionImage}Komputer-Edit.png`,
        motherboard: `${questionImage}Motherboard-Edit.png`,
        processor: `${questionImage}PROCESSOR-Edit.png`,
        ram: `${questionImage}RAM-Edit.png`,
        cpu: `${questionImage}CPU-Edit.png`,
        hardisk: `${questionImage}HardDisk-Edit.png`,
        monitor: `${questionImage}monitor-Edit.png`,
        keyboard: `${questionImage}Keyboard-Edit.png`,
        speaker: `${questionImage}Speaker-Edit.png`,
        webcam: `${questionImage}webcam-Edit.png`,
        power_supply: `${questionImage}PowerSupply-Edit.png`,
        mouse: `${questionImage}Mouse-Edit.png`
    },
    word: {        
        computer: `${wordImage}Komputer-Jawaban.png`,
        motherboard: `${wordImage}Motherboard-Jawaban.png`,
        processor: `${wordImage}PROCESSOR-Jawaban.png`,
        ram: `${wordImage}RAM-Jawaban.png`,
        cpu: `${wordImage}Speaker-Jawaban.png`,
        hardisk: `${wordImage}HardDisk-Jawaban.png`,
        monitor: `${wordImage}monitor-Jawaban.png`,
        keyboard: `${wordImage}Keyboard-Jawaban.png`,
        speaker: `${wordImage}Speaker-Jawaban.png`,
        webcam: `${wordImage}webcam-Jawaban.png`,
        power_supply: `${wordImage}PowerSupply-Jawaban.png`,
        mouse: `${wordImage}Mouse-Jawaban.png`
    }
};

const pathSound = '/sounds/';
const sounds = {
    landing: `${pathSound}halaman_utama.wav`,
    answer: {
        limit: `${pathSound}jawaban_salah3.wav`,
        wrong: `${pathSound}jawaban_salah.wav`,
        correct: `${pathSound}jawaban_benar2.wav`,
    },
    button: `${pathSound}Tombol.wav`,
    commonButton: `${pathSound}commonButton.wav`,
    quiz: {
        1: `${pathSound}quiz1.wav`,
        2: `${pathSound}quiz2.wav`,
        3: `${pathSound}quiz3.wav`,
        4: `${pathSound}quiz4.wav`,
        5: `${pathSound}quiz5.wav`,
        6: `${pathSound}quiz6.wav`,
        7: `${pathSound}quiz7.wav`,
        8: `${pathSound}quiz8.wav`,
        9: `${pathSound}quiz9.wav`,
        10: `${pathSound}quiz10.wav`,
    },
    gameFinished: '/sounds/selesai_game.wav'
};

const playSound = (path) => {    
    const audio = new Audio(path);
    audio.play();    
}

const stopBgSound = () => {
    const bgSound = document.getElementById('bgsound');
    bgSound.pause();
};

const playBgSound = () => {
    const bgSound = document.getElementById('bgsound');
    bgSound.play();
};

const adjustBgSound = (volume) => {
    const bgSound = document.getElementById('bgsound');
    bgSound.volume = volume;
};

const checkBgSoundIsActive = () => {
    const bgSound = document.getElementById('bgsound');
    if (bgSound?.currentTime < 1 || bgSound?.paused) {
        bgSound.play();
    }
}



const myLoader = ({ src }) => {
    return src;
};

export { notify, setTimer, images, myLoader, sounds, playSound, stopBgSound, playBgSound, adjustBgSound, checkBgSoundIsActive };