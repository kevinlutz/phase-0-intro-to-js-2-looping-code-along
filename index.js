const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(arr, eventName) {
  const messages = [];
  for (let i = 0; i < arr.length; i++) {
    messages.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

let num = 10;
while (num >= 0) {
  console.log(num);
  num--;
}
