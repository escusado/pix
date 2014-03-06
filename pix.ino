int led = 9;           // the pin that the LED is attached to
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by
int stripLength = 60;
int potPosition = 0;
int potSpeed = 30;
int delta = 0;

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 9 to be an output:
  pinMode(led, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {

  //init controls, p1, p2 (pins)
  if(pin1){
    delta = 1;
  }

  potPosition = potPosition+delta;

  O OOO OOOOO OOOOOOO OOOOOOOOOO OO OOOOOOOOOO OOOOOOO OOOOO OOO O

  delay(potSpeed);
}
