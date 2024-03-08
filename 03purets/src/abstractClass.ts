//with abstract class, cant create a new object from it
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  //getSepia() method is void (doesnt return anything)
  //abstract = not going to provide definition
  abstract getSepia(): void;
  //implement Reels time calculation:
  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

//create an object from TakePhoto (CANNOT MAKE OBJECT FROM ABSTRACT CLASS):
// const cr = new TakePhoto("test", "test");

//if we want to use this class into another class:
// cant implement it, but can extend TakePhoto:
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    //need super keyword that passes all required values:
    super(cameraMode, filter);
  }
  //implement getSepia() from TakePhoto class:
  getSepia(): void {
    console.log("Sepia");
  }
}

const cr = new Instagram("test", "test", 3);
cr.getReelTime(); //can use this method we created in the TakePhoto abstract class
