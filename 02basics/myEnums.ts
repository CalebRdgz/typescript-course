//plane seats:
// const AISLE = 0;
// const MIDDLE = 1;
// const WINDOW = 2;

// if (seat == AISLE) {
// }

//do this with enums:
//enum members default to: AISLE = 0, MIDDLE = 1, WINDOW = 2, FOURTH = 3...
//if ASLE = 10, then MIDDLE = 11, WINDOW = 12, FOURTH = 13...
//default starts with 0, the next member will always be +1 even if the member before is a string:
enum SeatChoice {
  AISLE = "AISLE",
  MIDDLE = 1,
  WINDOW,
  FOURTH,
}

const hcSeat = SeatChoice.AISLE;
