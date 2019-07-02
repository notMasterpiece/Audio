export const normalizeAudioCurentTime = time => {
    if (time === 0) {
        return '0:00';
    }
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return `${minutes}:${(seconds >= 10) ? seconds : '0' + seconds}`;
};


export const formatSecondsAsTime = time => {
    var hr  = Math.floor(time / 3600);
    var min = Math.floor((time - (hr * 3600))/60);
    var sec = Math.floor(time - (hr * 3600) -  (min * 60));

    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec  = "0" + sec;
    }

    return `${(hr > 0) ? (hr + ':' + min + ':' + sec) : (min + ':' + sec)}`;
};