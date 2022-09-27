import Swal from 'sweetalert2';

const notify = (type, title = '', message) => {
    Swal.fire({
        icon: type,
        title,
        text: message,
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

function getSecondsDiff(startDate, endDate) {
    const msInSecond = 1000;
  
    return Math.round(
      Math.abs(endDate - startDate) / msInSecond
    );
}

export { notify, setTimer };