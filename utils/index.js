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
        text: message,    
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

const images = {
    result: '/images/trophy.png',
    logo: '/images/unpam.png'
};

const sounds = {
    landing: '/sounds/halaman_utama.wav',
    answer: {
        limit: '/sounds/jawaban_salah3.wav',
        wrong: '/sounds/jawaban_salah.wav',
        correct: '/sounds/jawaban_benar2.wav',
    }
};

const playSound = (path, type) => {    
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
    if (bgSound?.currentTime < 1) {
        bgSound.play();
    }
}



const myLoader = ({ src }) => {
    return src;
};

export { notify, setTimer, images, myLoader, sounds, playSound, stopBgSound, playBgSound, adjustBgSound, checkBgSoundIsActive };