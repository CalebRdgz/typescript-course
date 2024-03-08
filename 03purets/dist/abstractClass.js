"use strict";
//with abstract class, cant create a new object from it
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //implement Reels time calculation:
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
//create an object from TakePhoto (CANNOT MAKE OBJECT FROM ABSTRACT CLASS):
// const cr = new TakePhoto("test", "test");
//if we want to use this class into another class:
// cant implement it, but can extend TakePhoto:
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        //need super keyword that passes all required values:
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    //implement getSepia() from TakePhoto class:
    getSepia() {
        console.log("Sepia");
    }
}
const cr = new Instagram("test", "test", 3);
cr.getReelTime(); //can use this method we created in the TakePhoto abstract class
