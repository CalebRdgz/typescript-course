"use strict";
// interface TakePhoto {
//   //while taking the photo, couple things should be defined:
//   cameraMode: string;
//   filter: string;
//   burst: number;
// }
// //implement Story feature:
// interface Story {
//   createStory(): void;
// }
// //in the app, if someone wants to create a feature of taking photos, they should follow this interface
// class Instagram implements TakePhoto {
//   //the TakePhoto interface properties MUST be in this Instagram class constructor:
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number
//   ) {}
// }
// class Youtube implements TakePhoto, Story {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     //add more properties to this constructor:
//     public short: boolean
//   ) {}
//   //createStory() MUST be here, implemented by Story interface:
//   createStory(): void {
//       console.log("Story was created");
//   }
// }
