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
  
      var i;
      let j;

      for (i = 0; i < days.length; i++ ) {
         for (j = 0; j < gifts[i].length; j++ ) {
          // let arrayTwo = gifts[i];
          // console.log(arrayTwo)
          // answer.push(arrayTwo);
          // console.log(answer);
        // console.log(`On the ${days[i]} day of Xmas`, gifts[i]);
        console.log(`On the ${days[i]} day of Xmas,${gifts[i]}`);

          // console.log(answer);    
        }
    }
    


