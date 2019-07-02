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