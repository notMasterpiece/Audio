const audio = {
    _audio: null,
    _initialization: false,


    isAudioInitialization() {
        return !!this._initialization;
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



    play() {
       this._audio.play();
    },

    pause() {
        this._audio.pause();
    }

};


export default audio;