#Turns off all LEDs by grouping them, changing the rgb to 0,0,0
#You must show your color once it has been set.
All_LED = Kitronik_Move_Motor.create_move_motor_zipled(4)
All_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLACK))
All_LED.show()

#LEDs are regrouped into front lights and back lights.
#The range parameter indicates which LED to start with and the number
#of consecutive LED's in that group (includeing the first).
Front_Left_LED = All_LED.range(0, 1)
Front_Right_LED = All_LED.range(1,1)
Back_Left_LED = All_LED.range(3, 1)
Back_Right_LED = All_LED.range(2,1) 


#When called, this function turns on the left signal by turning on the front left light to 
#white and then turning it off while simultaneously turning on the back left light to red and repeating
#until the Microbit logo is touched.  Speed of the signal can be adjusted within the functions parameter.
def Left_Signal(speed):
    pause(100)
    while (input.logo_is_pressed() ==False):
        Front_Left_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.WHITE))
        Front_Left_LED.set_brightness(50)
        Front_Left_LED.show()
        pause(speed)
        Front_Left_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLACK))
        Front_Left_LED.show()
        Back_Left_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.RED))
        Back_Left_LED.set_brightness(50)
        Back_Left_LED.show()
        pause(speed)
        Back_Left_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLACK))
        Back_Left_LED.show()
        
        
#When called, this function turns on the right signal by turning on the front left right to 
#white and then turning it off while simultaneously turning on the back right light to red and repeating
#until the Microbit logo is touched.  Speed of the signal can be adjusted within the functions parameter.
def Right_Signal(speed):
    pause(100)
    while (input.logo_is_pressed() ==False): 
        Front_Right_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.WHITE))
        Front_Right_LED.set_brightness(50)
        Front_Right_LED.show()
        pause(speed)
        Front_Right_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLACK))
        Front_Right_LED.show()
        Back_Right_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.RED))
        Back_Right_LED.set_brightness(50)
        Back_Right_LED.show()
        pause(speed)
        Back_Right_LED.set_color(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.BLACK))
        Back_Right_LED.show()

#When the a button is pressed, the right signal will turn on.
#When the b button is pressed, the right signal will turn on.
#To turn off either signal, touch the Microbit logo.
def main():
    while True:
        if input.button_is_pressed(Button.B)==True:
            Left_Signal(500)
        if input.button_is_pressed(Button.A)==True:
            Right_Signal(500)

main()




        