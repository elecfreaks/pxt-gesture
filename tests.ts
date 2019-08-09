gesture.onGesture(gestureType.Left, function () {
    basic.showArrow(ArrowNames.West)
})
gesture.onGesture(gestureType.Right, function () {
    basic.showArrow(ArrowNames.East)
})
gesture.initGesture()
basic.forever(function () {
    serial.writeLine("" + gesture.getGestureModel())
})
