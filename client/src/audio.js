const audio = {
    _audio: new Audio('https://res.cloudinary.com/g-r-a-w-d-a-n-i-n/video/upload/v1562050702/audio/%D0%9B%D1%83%D1%87%D1%88%D0%B0%D1%8F_%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0_%D0%98%D1%8E%D0%BB%D1%8C_2019_%D0%97%D0%B0%D1%80%D1%83%D0%B1%D0%B5%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BF%D0%B5%D1%81%D0%BD%D0%B8_%D0%A5%D0%B8%D1%82%D1%8B_%D0%9F%D0%BE%D0%BF%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D1%8B%D0%B5_%D0%9F%D0%B5%D1%81%D0%BD%D0%B8_%D0%A1%D0%BB%D1%83%D1%88%D0%B0%D1%82%D1%8C_%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE_2019.mp3'),
    _initialization: false,
    _playing: true,

    setVolume(volume) {
        this._audio.volume = volume / 100;
    },

    isAudioInitialization() {
        return !!this._initialization;
    },

    isAudioPlay() {
        return !!this.playing;
    },


    init(audio) {
        this._initialization = false;
        this._audio = new Audio(audio.url);
    },


    loadedmetadata(callback) {
        this._audio.onloadedmetadata = () => {
            this._initialization = true;
            callback(this._audio.duration);
        };
    },


    timeupdate(callback) {
        this._audio.ontimeupdate = () => {
            callback(this._audio.currentTime);
        }
    },



    play() {
       this.playing = true;
       this._audio.play();
    },

    pause() {
        this._audio.pause();
        this.playing = false;
    }

};


export default audio;