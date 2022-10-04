enum RadioMessage {
    message2 = 1435,
    message4 = 29926,
    message3 = 31126,
    message5 = 42976,
    message1 = 49434
}
radio.onReceivedMessage(RadioMessage.message4, function () {
    cuteBot.moveTime(cuteBot.Direction.right, 50, 1)
})
radio.onReceivedMessage(RadioMessage.message3, function () {
    cuteBot.stopcar()
})
radio.onReceivedMessage(RadioMessage.message5, function () {
    cuteBot.moveTime(cuteBot.Direction.left, 50, 1)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    cuteBot.moveTime(cuteBot.Direction.backward, 50, 1)
})
radio.onReceivedMessage(RadioMessage.message3, function () {
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 1)
})
radio.setGroup(8)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
	
})
