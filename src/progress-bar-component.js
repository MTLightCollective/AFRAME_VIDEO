AFRAME.registerComponent('progress-bar', {
    schema: {
        target: {type: 'selector', default:'#video'},
        attribute: {default:false}
    },
    init: function () {
        console.log(this);
    },
    tick: function () {
        if(!this.data.target) return;
        var video = this.data.target.components.material.material.map.image;
        var percent = (video.currentTime / video.duration) * 100;
        //this.el.setAttribute('geometry', 'width', percent);
        //modifier scale.x et position.x
        //entityEl.object3D.position.set(1, 2, -3)
        console.log(percent);

        if(this.data.attribute){
            this.el.setAttribute(
                'position', `${((percent/100 - 1)/2)} 0 0.001`
            );
            this.el.setAttribute(
                'scale',  `${percent/100} 1 1`
            );
        }
        else {
            this.el.object3D.scale.x = percent/100;
            this.el.object3D.position.x = ((percent/100 - 1)/2);
        }
    }
})