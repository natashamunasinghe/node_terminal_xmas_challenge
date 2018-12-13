const days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
const gifts = [
          "And a partridge in a pear tree.\n",
          "Two turtle doves",
          "Three French hens",
          "Four calling birds",
          "Five golden rings", 
          "Six geese a-laying",
          "Seven swans a-swimming",
          "Eight maids a-milking",
          "Nine ladies dancing",
          "Ten lords a-leaping",
          "Eleven pipers piping",
          "Twelve drummers drumming"    
      ];
  
    
    for (let i = 0; i < days.length; i++){

      console.log(`On the ${days[i]} day of Christmas\nmy true love sent to me`);
  
      if (i === 0) {
          console.log(`A partridge in a pear tree.\n`);
      } else {
          for (let j = i; j >= 0; j--) {
              console.log(gifts[j]);
          }
      }
  
  }


