import ClassRoom from "./0-classroom";

function initializeRooms() {
    let x = [19, 20, 34].map((size) => new ClassRoom(size))
    return x
}

console.log(initializeRooms())
