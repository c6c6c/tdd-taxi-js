export default function givenKmAndMinuteThenPrice(km, minute) {
  let price = 6;
  if (minute) price += minute * 0.25;
  if (km > 2) price += (km - 2) * 0.8;
  if (km > 8) price += (km - 8) * 0.8 * 0.5;
  return Math.round(price);
}
