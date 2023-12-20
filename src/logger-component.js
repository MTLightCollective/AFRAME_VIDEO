AFRAME.registerComponent('logger-component', {
    init: function () {
        //console.log(this);

/*
    gripdown	The hand is closed into a fist without thumb raised.
    gripup	    The hand is no longer closed into a fist without thumb raised.
    pointup	    The hand is touching or pressing the trigger only.
    pointdown	The hand is no longer touching or pressing the trigger only.
    thumbup	    The hand is closed into a fist with thumb raised.
    thumbdown	The hand is no longer closed into a fist with thumb raised.
    pointingstart	The hand is pointing with index finger without thumb raised.
    pointingend	The hand is no longer pointing without thumb raised.
    pistolstart	The hand is pointing with index finger and thumb raised.
    pistolend	The hand is no longer pointing with thumb raised.
*/
        
        this.el.addEventListener('click',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('gripdown',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('gripup',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pointup',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pointdown',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('thumbup',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('thumbdown',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pointingstart',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pointingend',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pistolstart',  (evt) => {console.log('evenement : ', evt)});
        this.el.addEventListener('pistolend',  (evt) => {console.log('evenement : ', evt)});
    },

})