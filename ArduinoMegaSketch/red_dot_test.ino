// // This code is pretty horrible, but it's a one-off experiment so what did you expect?
// // Maybe you should start wit one of the Neopixel examples and work from there.

// #include <Adafruit_NeoPixel.h>

// #define PIN 52
// #define NUM_LEDS (60 * 4)

// #define MIN(x, y) ((x < y) ? (x) :(y))
// #define MAX(x, y) ((x > y) ? (x) :(y))

// Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_LEDS, PIN, NEO_GRB | NEO_KHZ800);

// long lastMillis;

// char intensity[NUM_LEDS] = {};
// char hue[NUM_LEDS] = {};

// char desaturate_val = 2;

// uint32_t xmax = desaturate_val * 255 + 255;

// void setup() {
//     Serial.begin(9600);
//     strip.begin();
//     strip.show(); // Initialize all pixels to 'off'
//     lastMillis = millis();

//     randomSeed(analogRead(0));
// }
// int k = 0;
// int d = 1;
// void loop() {
//     long nowMillis = millis();
//     unsigned delta = (nowMillis - lastMillis) / 4;

//     if (random(255) < delta * 32) {
//         int led = random(NUM_LEDS);
//         intensity[led] = 255;
//         hue[led] = random(255);
//     }

//     for (int i=0; i<NUM_LEDS; i++) {
// //        if (intensity[i]) {
// //            int r = (int)intensity[i] * ((int)random(55) + 10) / 255 * x(vr(hue[i])) / xmax;
// //            int g = (int)intensity[i] * ((int)random(55) + 57) / 255 * x(vg(hue[i])) / xmax;
// //            int b = (int)intensity[i] * ((int)random(55) + 400) / 255 * x(vb(hue[i])) / xmax;
// //            strip.setPixelColor(i, strip.Color(r, g, b));
// //            if (intensity[i] > delta) {
// //                intensity[i] -= delta;
// //            } else {
// //                intensity[i] = 0;
// //            }
// //        } else {
// //            strip.setPixelColor(i, 0);
// //        }
//           strip.setPixelColor(i, 0);
//     }
//     if(k==NUM_LEDS){
//       d = -1;
//     }
//     if(k==0){
//       d=1;
//     }
//     k+=d;
//     strip.setPixelColor(k, strip.Color(0, 255, 0));
//     lastMillis = nowMillis;
//     strip.show();
// }

// uint32_t x(int d) {
//     return desaturate_val * 255 + d;
// }

// int vr(byte WheelPos) {
//   if(WheelPos < 85) {
//    return WheelPos * 3;
//   } else if(WheelPos < 170) {
//    WheelPos -= 85;
//    return 255 - WheelPos * 3;
//   } else {
//    WheelPos -= 170;
//    return 0;
//   }
// }


// int vg(byte WheelPos) {
//   if(WheelPos < 85) {
//    return 255 - WheelPos * 3;
//   } else if(WheelPos < 170) {
//    WheelPos -= 85;
//    return 0;
//   } else {
//    WheelPos -= 170;
//    return WheelPos * 3;
//   }
// }


// int vb(byte WheelPos) {
//   if(WheelPos < 85) {
//    return 0;
//   } else if(WheelPos < 170) {
//    WheelPos -= 85;
//    return WheelPos * 3;
//   } else {
//    WheelPos -= 170;
//    return 255 - WheelPos * 3;
//   }
// }
