AFRAME.registerComponent('pointer-component', {
    target: null,
    init: function () {
        console.log(this);

        // hand events
        this.el.addEventListener('gripdown',  (evt) => {
            console.log('evenement : ', evt)
            this.el.setAttribute('raycaster', {
                'enabled': true,
                'showLine': true,
            });
        });
        this.el.addEventListener('gripup',  (evt) => {
            console.log('evenement : ', evt)
            this.el.setAttribute('raycaster', {
                'enabled': false,
                'showLine': false,
            });
        });
        /*
        this.el.addEventListener('pointdown',  (evt) => {
            console.log('evenement : ', evt)
        });*/
        this.el.addEventListener('pistolstart',  (evt) => {
            console.log('evenement : ', evt, this.target)
            this.target.emit('click');
        });/*
        this.el.addEventListener('pistolend',  (evt) => {
            console.log('evenement : ', evt)
        });*/

        // raycaster events

        this.el.addEventListener('raycaster-intersection',  (evt) => {
            console.log('evenement : ', evt)
            this.target = evt.detail.els[0];
            this.target.emit('mouseenter');
        });

        this.el.addEventListener('raycaster-closest-entity-changed',  (evt) => {
            console.log('evenement : ', evt)
            this.target.emit('mouseleave');
            this.target = evt.detail.els[0];
            this.target.emit('mouseenter');
        });

        this.el.addEventListener('raycaster-intersection-cleared',  (evt) => {
            console.log('evenement : ', evt)
            this.target.emit('mouseleave');
            this.target = null;
        });
    },

})