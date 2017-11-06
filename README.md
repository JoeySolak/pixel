# Pixel

The goal of this project is to simulate a pixel and to give it operations that one could reasonable argue it can preform.  A pixel is a point which represents a color; this point is broken into 3 other colors to mix: red, green, and blue

## RGB

The scale of each color in the pixel ranges from 0 to 255. [r,g,b]
  -  [0,0,0] represents black
  -  [255,255,255] represents white


## Add functions

Create three functions which increase the r-value, g-value, or the b-value of each pixel.  If the number goes below 0 or above 255, cap it at these limits.  **Do not** return anything!  new = old (then math).
  -  addRed(n)
  -  addGreen(n)
  -  addBlue(n)

##  Brighten

This function instead of adding a constant value to an individual r,g,b-value, multiplies each r,g,b-value by the same percent p.  The percent p should be a decimal input.  **Do not** return anything!
  -  pixel.brighten(0.10) would theoretically raise the brightness by 10%
  -  pixel.brighten(-0.50) would decrease the brightness by a half.

##  Complement

This function **will return** a pixel object which represents the complement color to your current pixel.  The complement of an r,g,b-value is the value which makes it add up to 255.  For example...

  -  mypixel
      +  red = 50
      +  green = 100
      +  blue = 200
  -  complement pixel should be
      +  red = 205
      +  green = 155
      +  blue = 55

## Gray scale

This function finds the average r,g,b-value and **returns** the value: its a simgle number.
