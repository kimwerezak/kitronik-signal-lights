// Turns off all LEDs by grouping them, changing the rgb to 0,0,0
// You must show your color once it has been set.
let All_LED = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
All_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Black))
All_LED.show()
// LEDs are regrouped into front lights and back lights.
// The range parameter indicates which LED to start with and the number
// of consecutive LED's in that group (includeing the first).
let Front_Left_LED = All_LED.range(0, 1)
let Front_Right_LED = All_LED.range(1, 1)
let Back_Left_LED = All_LED.range(3, 1)
let Back_Right_LED = All_LED.range(2, 1)
// When called, this function turns on the left signal by turning on the front left light to 
// white and then turning it off while simultaneously turning on the back left light to red and repeating
// until the Microbit logo is touched.  Speed of the signal can be adjusted within the functions parameter.
function Left_Signal(speed: number) {
    pause(100)
    while (input.logoIsPressed() == false) {
        Front_Left_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        Front_Left_LED.setBrightness(50)
        Front_Left_LED.show()
        pause(speed)
        Front_Left_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Black))
        Front_Left_LED.show()
        Back_Left_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        Back_Left_LED.setBrightness(50)
        Back_Left_LED.show()
        pause(speed)
        Back_Left_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Black))
        Back_Left_LED.show()
    }
}

// When called, this function turns on the right signal by turning on the front left right to 
// white and then turning it off while simultaneously turning on the back right light to red and repeating
// until the Microbit logo is touched.  Speed of the signal can be adjusted within the functions parameter.
function Right_Signal(speed: number) {
    pause(100)
    while (input.logoIsPressed() == false) {
        Front_Right_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.White))
        Front_Right_LED.setBrightness(50)
        Front_Right_LED.show()
        pause(speed)
        Front_Right_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Black))
        Front_Right_LED.show()
        Back_Right_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        Back_Right_LED.setBrightness(50)
        Back_Right_LED.show()
        pause(speed)
        Back_Right_LED.setColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Black))
        Back_Right_LED.show()
    }
}

// When the a button is pressed, the right signal will turn on.
// When the b button is pressed, the right signal will turn on.
// To turn off either signal, touch the Microbit logo.
function main() {
    while (true) {
        if (input.buttonIsPressed(Button.B) == true) {
            Left_Signal(500)
        }
        
        if (input.buttonIsPressed(Button.A) == true) {
            Right_Signal(500)
        }
        
    }
}

main()
