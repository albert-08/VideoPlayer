class AutoPlay {
    constructor() { }
    run(player) {
        player.mute()
        player.play()
    }
}

class MediaPlayer {
    constructor(config) {
        this.media = config.el
        this.plugins = config.plugins || []

        this._initPlugins()
    }
    play() { 
        return this.media.play() 
    }
    pause() { 
        return this.media.pause() 
    }
    togglePlay() {
        if (this.media.paused) {
            this.play()
        } else {
            this.pause()
        }
    }
    mute(){
        return this.media.muted = true
    }
    unmute(){
        return this.media.muted = false
    }
    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        })
    }
}

const video = document.querySelector('video')
const player = new MediaPlayer({el: video, plugins: [new AutoPlay()]})

const playButton = document.querySelector('#playButton')
playButton.onclick = () => player.togglePlay()

const muteButton = document.querySelector('#muteButton')
muteButton.onclick = () => {
    if(player.media.muted){
        player.unmute()
    }else{
        player.mute()
    }
}