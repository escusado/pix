#include <Adafruit_NeoPixel.h>

#define PIN 52
#define NUM_LEDS (60 * 4)

Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRB | NEO_KHZ800);

long lastMillis;


void setup() {
    Serial.begin(9600);
    strip.begin();
    strip.show(); // Initialize all pixels to 'off'
}

int k = 0;
int d = 1;

void loop() {
    long nowMillis = millis();

    if(k==NUM_LEDS){
      d = -1;
    }
    if(k==0){
      d=1;
    }
    k+=d;
    clearStrip();
    strip.setPixelColor(k, strip.Color(2, 200, 50));
    strip.show();
    lastMillis = nowMillis;
}

void clearStrip(){
    for(int i = 0; i<NUM_LEDS; i++){
        strip.setPixelColor(i, 0);
    }
}