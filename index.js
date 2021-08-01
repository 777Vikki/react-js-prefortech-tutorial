// Q1. Write a function to get the sum of n natural numbers.

const getNaturalSum = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getNaturalSum(6));

// Q2. write the function to check if the number is even or not by using only if else statement

const isEven = (num) => {
    return num % 2? 'Odd': 'Even';
}

console.log(isEven(2));

// Q3. Write a function it check if the number is prime or not.

const isPrime = (num) => {
    let isPrimeNumber = num + ' is Not a Prime';
    for(let i=2; i<num; i++) {
        if(num % i !== 0) {
            isPrimeNumber = num + ' is Prime';
        }
    }
    return isPrimeNumber;
}

console.log(isPrime(5))

// Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only.
const weekDaySwitch = (num) => {
    let weekDayResult = '';
    switch(num) {
        case 1: weekDayResult = 'Sunday';
            break;
        case 2: weekDayResult = 'Monday';
            break;
        case 3: weekDayResult = 'Tuesday';
            break;
        case 4: weekDayResult = 'Wednesday';
            break;
        case 5: weekDayResult = 'Thursday';
            break;
        case 6: weekDayResult = 'Friday';
            break;
        case 7: weekDayResult = 'Saturday';
            break;
        default:  weekDayResult = 'Invalid Input'
    }

    return weekDayResult;
 }

 console.log(weekDaySwitch(9))

 // Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

 const weekDayIf = (num) => {
    let weekDayResult = 'Invalid Input';
    if(num >= 1 && num <= 7) {
        if(num === 1) {
            weekDayResult = 'Sunday';
        } else if(num === 2) {
            weekDayResult = 'Monday';
        } else if(num === 3) {
            weekDayResult = 'Tuesday';
        } else if(num === 4) {
            weekDayResult = 'Wednesday';
        } else if(num === 5) {
            weekDayResult = 'Thursday';
        } else if(num === 6) {
            weekDayResult = 'Friday';
        } else if(num === 7) {
            weekDayResult = 'Saturday';
        }
    }
    return weekDayResult;
}

console.log(weekDayIf(4))

// Q6. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.

const getWeekDayTernary = (num) => {
    let weekDayResult = num === 1 ? 'Sunday' : num === 2 ? 'Monday' : num === 3 ? 'Tuesday' : num === 4 ? 'Wednesday' : num === 5 ? 'Thursday' : num === 6 ? 'Friday' : num === 7 ? 'Saturday' : 'Invalid Input';
    return weekDayResult;
}

console.log(getWeekDayTernary(0))


// Q7. WAF to search an element in the array?

const includesArray = (arr, num) => {
    return arr.includes(num)? 'Present' : 'Not Present';
}

console.log(includesArray([1, 3], 4));

// Q8. WAF to find the max in the array?

const getMaxArray = (arr) => {
    if(arr.length) {
        let maxNum = arr[0];
        for(let i=0; i<arr.length; i++) {
            if(arr[i] > maxNum) {
                maxNum = arr[i];
            }
        }
        return maxNum;
    } 
}

console.log(getMaxArray([5, 8, 3, 2, 4, 0]))

// Q9. WAF to find the min in the array?

const getMinArray = (arr) => {
    if(arr.length) {
        let minNum = arr[0];
        for(let i=0; i<arr.length; i++) {
            if(arr[i] < minNum) {
                minNum = arr[i];
            }
        }
        return minNum;
    } 
}

console.log(getMinArray([5, 8, 3, 2, 4]))

// Q10. WAF to find the factorial of n

const getFactorial = (num) => {
    let fact = num;
   while(num > 1) {
       fact *= num - 1
       num--;
   }
   return fact;
}

console.log(getFactorial(4));

// Q11. WAF to reverse an array.

const reverseArray = (arr) => {
    let array = [];
    for(let i=arr.length-1; i>=0; i--) {
        array.push(arr[i]);
    }
    return array;
}

console.log(reverseArray([4, 2, 6, 8, 6]));


// Q12. WAF to reverse a string.

const reverseString = (str) => {
    let res = '';
    for(let i=str.length-1; i>=0; i--) {
        res += str[i];
    }
    return res;
}

console.log(reverseString('Vivek Kumar'));

// Q13. WAF to remove the duplicate chars in the string


const removeDuplicate = (str) => {
    let res = '';
    for(let i=0; i<str.length-1; i++) {
        if(!res.includes(str[i])) {
            res += str[i];
        }
    }
    return res;
}

console.log(removeDuplicate('VIVEK'));


// Q14. WAF to check if the number is a palindrome or not.

const isPalindrome = (num) => {
    let revNumber = '';
    let number = num;
    while(number > 0) {
        revNumber = revNumber + num%10;
        number = Math.floor(number/10);
    }
    if(num === Number(revNumber)) {
        return 'Palindrome'
    } else {
        return 'Not Palindrome'
    }
}

console.log(isPalindrome(55));

// Q15. WAF to check if the string entered is the palindrome string or not.
const isStringPalindrome = (str) => {
    let revStr = '';
    for(let i=str.length-1; i>=0; i--) {
        revStr += str[i];
    }
    if(str === revStr) {
        return 'Palindrome'
    } else {
        return 'Not Palindrome'
    }
}

console.log(isStringPalindrome('VIV'))

// Q16. WAF to count the number of words in the string.

const countString = (str) => {
    let count = 0;
    if(str) {
        count++;
        while(str) {
            str = str.slice(0, 3) + str.slice(4);
            str = str.substring(1);
            count++;
        }
    }
    return count;
}

console.log(countString('Vivek'));

// Q17. WAF to print the number of days in the month using switch case.

const getDaysInMonth = (month) => {
    switch(month) {
        case 'Jan': return 31;
        case 'Feb': return 28;
        case 'Mar': return 31;
        case 'Apr': return 30;
        case 'May': return 31;
        case 'Jun': return 30;
        case 'Jul': return 31;
        case 'Aug': return 31;
        case 'Sep': return 30;
        case 'Oct': return 31;
        case 'Nov': return 30;
        case 'Dec': return 31;
        default: return 'Not Valid'
    }
}

console.log(getDaysInMonth('Jan'));


// Q18. WAF to check if the number is 0, -ve or +ve using switch case.

const checkNumer = (num) => {
    const sign = num === 0? 0 : num > 1? 1 : -1;
    switch(sign) {
        case 1: return 'Positive';
        case -1: return 'Negative';
        default: return 'Zero';
    }
}

console.log(checkNumer(0));

// Q19. WAF to check if the number is even or not using if else

const isEvanNumber = (num) => {
    if(num % 2) {
        return 'Not even';
    } else {
        return 'Even'
    }
}

console.log(isEvanNumber(4))

// Q20. WAF to check if the number is even or not using switch case.

const isEvanNumber1 = (num) => {
    let res = num % 2;
    switch(res) {
        case 0: return 'Even';
        default: return 'Not Even'
    }
}

console.log(isEvanNumber1(3))

// Q21. WAF to reverse only words in the string.
// 	Example:
// 	“Hello this is sample”
// 	o/p
// 	‘olleH sight si elpmas’

const getReverseWord = (words) => {
    words = words.split(' ');
    let res = [];
    for(let i=0; i<words.length; i++) {
        let rev = '';
        for(let j=words[i].length-1; j>=0; j--) {
            rev += words[i][j]
        }
        res.push(rev);
    }
    return res.join(' ');
}

console.log(getReverseWord('Hello this is sample'))

// Q22. WAF to count the occurrence of a given characters in the string.

const getCount = (str) => {
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(isNaN(str[i])) {
            count++;
        }
    } 
    return count;
}

console.log(getCount('12Viv23ek'));




