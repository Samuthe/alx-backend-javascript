// import ClassRoom from "./0-classroom";

// function initializeRooms() {
//     let x = [19, 20, 34].map((size) => new ClassRoom(size))
//     return x
// }

// console.log(initializeRooms())

import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
