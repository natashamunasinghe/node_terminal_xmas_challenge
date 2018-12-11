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
      let answer = [];
      // let answerTwo = [];

      for (i = 0; i < days.length; i++) {
          let array = days[i];
          // console.log(array);
          answer.push(array);

         for (j = 0; j < gifts[i].length; j++) {
          let arrayTwo = gifts[i];
          // console.log(arrayTwo);
          // answer.push(arrayTwo);
          // console.log(answer);
          // answer.push(`${array} day of Xmas,`, arrayTwo);   
          // console.log(answer);    
        }
    }
    




//If/else statement
// function test(x, y) {
//     const days = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];

//     const gifts = [
//         "And a partridge in a pear tree.\n",
//         "Two turtle doves",
//         "Three French hens",
//         "Four calling birds",
//         "Five golden rings", 
//         "Six geese a-laying",
//         "Seven swans a-swimming",
//         "Eight maids a-milking",
//         "Nine ladies dancing",
//         "Ten lords a-leaping",
//         "Eleven pipers piping",
//         "Twelve drummers drumming"    
//     ];
  
//       if (days) {
//         if (days[0]); 
//           console.log(`It's the first ${days[0]} of Xmas`);
//           console.log(gifts[0]);
//           if (days[1]); 
//             console.log(`It's the second ${days[1]} of Xmas`);
//             console.log(gifts[1]);
//               if (days[2]); 
//                 console.log(`It's the third ${days[2]} of Xmas`);
//                 console.log(gifts[2]);
//                   if (days[3]); 
//                     console.log(`It's the fourth ${days[3]} of Xmas`);
//                     console.log(gifts[3]);
//                       if (days[4]); 
//                         console.log(`It's the fifth ${days[4]} of Xmas`);
//                         console.log(gifts[4]);
//                         if (days[5]); 
//                           console.log(`It's the sixth ${days[5]} of Xmas`);
//                           console.log(gifts[5]);
//                           if (days[6]); 
//                             console.log(`It's the seventh ${days[6]} of Xmas`);
//                             console.log(gifts[6]);
//                             if (days[7]); 
//                               console.log(`It's the eighth ${days[7]} of Xmas`);
//                               console.log(gifts[7]);
//                                 if (days[8]); 
//                                   console.log(`It's the ninth ${days[8]} of Xmas`);
//                                   console.log(gifts[8]);
//                                     if (days[9]); 
//                                       console.log(`It's the tenth ${days[9]} of Xmas`);
//                                       console.log(gifts[9]);
//                                         if (days[10]); 
//                                           console.log(`It's the eleventh ${days[10]} of Xmas`);
//                                           console.log(gifts[10]);
//                                             if (days[11]); 
//                                               console.log(`It's the twelvth ${days[11]} of Xmas`);
//                                               console.log(gifts[11]);
      
//     } else {
//       throw new Error(`It's not Xmas silly!`);
//     }
//   }




