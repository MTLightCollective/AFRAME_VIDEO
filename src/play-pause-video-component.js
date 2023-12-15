AFRAME.registerComponent('play-pause-video', {
    playBool:true,
    schema: {
      target: {type: 'selector', default:'#videosphere'},
    },
    init: function () {
      this.playBool = true
      console.log("init")
      this.clickEvent = this.clickEvent.bind(this)
      this.el.addEventListener('click', this.clickEvent);
      
    },
    clickEvent:function (event) {
        console.log("clicked",event)
        var video = this.data.target.components.material.material.map.image;
        if(this.playBool == false)return;
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
    },
    remove: function () {
      this.el.removeEventListener('click', this.clickEvent);
    },
    play: function () {
      this.playBool = true;
    },
    pause: function () {
      this.playBool = false;
      var video = this.data.target.components.material.material.map.image;
      video.pause();
    }
  });