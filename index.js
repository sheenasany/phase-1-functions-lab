function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation)
}

function distanceFromHqInFeet(someValue) {
    return 264 * distanceFromHqInBlocks(someValue)
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let distanceInFeet = distanceTravelledInFeet(start, destination)
    let fare;
    // create an if statement to show what the fare would be depending on the distance traveled in fee
    if (distanceInFeet < 400) {
        fare = 0
    } 
    else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * .02;
    } 
    else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        fare = 25 
    } 
    else {
        fare = "cannot travel that far"
    }
    return fare;
}