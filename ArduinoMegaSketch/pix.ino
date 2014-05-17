#include <Adafruit_NeoPixel.h>

#define PIN 53
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
    strip.setPixelColor(k,     strip.Color(255, 0, 0));
    strip.setPixelColor(k-d,   strip.Color(100, 0, 0));
    strip.setPixelColor(k-d*2, strip.Color(10, 0, 0));
    strip.setPixelColor(k-d*3,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*4,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*5,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*6,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*7,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*8,  strip.Color(0, 9, 9));
    strip.setPixelColor(k-d*9,  strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*10, strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*11, strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*12, strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*13, strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*14, strip.Color(0, 4, 4));
    strip.setPixelColor(k-d*15, strip.Color(0, 1, 1));
    strip.setPixelColor(k-d*16, strip.Color(0, 1, 1));
    strip.setPixelColor(k-d*17, strip.Color(0, 1, 1));
    strip.setPixelColor(k-d*18, strip.Color(0, 1, 1));
    strip.setPixelColor(k-d*19, strip.Color(0, 1, 1));
    strip.setPixelColor(k-d*20, strip.Color(0, 1, 1));
    strip.show();
    lastMillis = nowMillis;

    // delay(100);

}

void clearStrip(){
    for(int i = 0; i<NUM_LEDS; i++){
        strip.setPixelColor(i, 0);
    }
}