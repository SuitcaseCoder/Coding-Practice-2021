// -------------------- JANUARY 14, 2021 ---------------------------

// ***** CHALLENGE ONE *****

// // Make a program that filters a list of strings and returns a list with only your friends name in it.

// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"] 

function friend(friends){
  
    //   create new empty array for friends
    let actualFriends = [];

    //   loop through array of friends
    friends.map(friend => { 
        console.log(friend);
        //   get the length of the string being passed in
        let length = friend.length; 
        console.log(length);

        //  if length == 4 push to empty arr
        if (length === 4 ){
            actualFriends.push(friend)
        } 
        console.log(actualFriends);
        
    }) 
    return actualFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


// alternative solution: 
function friendTwo(friends){
    return friends.filter(n => n.length === 4)
}

console.log(friendTwo(["Ryan", "Kieran", "Mark"]));


// ***** CHALLENGE TWO *****
//       find a needle in the haystack -> if a word matches 'needle' return the index of that word within that array

function findNeedle(haystack) {
    //   map through array of mambo jumbo
      
      let count = 0;
      let result;
      haystack.map(word => {
    //     increase count at every iteration
        let position = count++ 
        // console.log('first: ' + position);
        // if word matches 'needle'
        if ( word == "needle"){
    //       return index --> need a counter variable that holds the count we're on maybe minus one
            result = `found the needle at position ${position} `;
        //   return  result; 
        }
      })
      return result;
      
}

console.log('running the function: ' + findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// better solution:
function findNeedleTwo(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}

console.log('running the function: ' + findNeedleTwo(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));



// ***** CHALLENGE THREE *****
// //     Return an array, where the first element is the count of positives numbers and the second   element is sum of negative numbers.

// // If the input array is empty or null, return an empty array. 

// function countPositivesSumNegatives(input) {
  
//     //   define two arrays -> one for positives and one for negatives
//     //   then sum each of the arrays up
//     // return a new array with just the two sums
      
//       let positives = [];
//       let negatives = [];
//       let sums = [];
  
//    if (input == null || input.length == 0)
//       return [];

//       input.map(num => {
//         if(num < 0) {
//             negatives.push(num)
//             } else if (num > 0) {
//         positives.push(num)
//       }
//       })

//       let posLength = positives.length;
//       let negSum = negatives.reduce((a, b) => a + b, 0);
//     //   console.log(negSum);
//       sums.push(posLength, negSum);
      
//         return sums;
//     }

// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));




