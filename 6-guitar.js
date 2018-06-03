/**
 * Copyright GenieMob 2018
 * Propulser la créativité | Ignite creativity
 */


let instrument = 6;


basic.showString("GUITARE");
basic.forever(() => {
  if(input.acceleration(Dimension.Strength) > 1200) {
    bluetooth.advertiseUid(49374, instrument, 7, false);
    basic.showLeds(`
      . . # . .
      . . # . .
      . # # # .
      . . # . .
      . # # # .
    `);
  }
  else {
    bluetooth.stopAdvertising();
    basic.showLeds(`
      . . . . .
      . . . . .
      . . . . .
      . . . . .
      . . . . .
    `);
  }
});
