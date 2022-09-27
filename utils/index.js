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
                router.push(`/landing`);
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
    let startTime = Number(localStorage.getItem('startTime'));
    if (startTime) {        
        startTime = new Date(startTime);
        console.warn('startTime: ', startTime);

        const now = new Date();
        console.warn('now: ', now);

        let diffTime = now.getTime() - startTime.getTime();
        console.log('diffTime: ', diffTime);

        startTime.setTime(now.getTime() + diffTime);
        console.warn('after changes: ', startTime);
        
        return startTime

    } else {
        console.log('masuk else')
        startTime = new Date();
    }

    localStorage.setItem('startTime', startTime.getTime());
    console.log(startTime);
    return startTime;
}

const images = {
    result: '/images/trophy.png'
};


export { notify, setTimer, images };