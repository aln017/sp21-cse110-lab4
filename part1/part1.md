## Part 1a

1. Line 9 prints 'values added: 20'
2. Line 13 prints 'final result: 10'
3. Line 9 prints 'values added: 20'
4. Line 13 has an error because the variable result's scope is limited to the if block that it is declared in. Therefore, it cannot be accessed or used in line 13.
5. Line 9 has an error because it is trying to assign a different number to a constant variable which is not possible due to the const keyword.
6. Line 13 has an error because the variable result's scope is limited to the if block. Therefore, it is not accessible by line 13.

## Part 1b


1. Line 12 will print the variable i which is equal to 3. This is because the variable i is incremented to the length of the prices array and it is accessible throughout the entire function, so it retains its value when accessed at line 12.

2. Line 13 will print the discountedPrice variable which is equal to 150. This is because the most recent value of discountedPrice is 300 * (0.5) which is 150. This variable is accessible by line 13 because of the var keyword.

3. Line 14 will print the finalPrice variable which is equal to 150. The most recent assignment of final price is (150*100)/100 = 150. Since finalPrice has the var keyword, it is accessible by line 14.

4. The function will return the array that countains [50, 100, 150]. The for loop is used to calculate what the price of an item is after the discount is applied to it. The value is then pushed to the discounted array. Since the discount is 0.5, all the values in the original array are halved in the discounted array.

5. Line 12 will have an error because the variable i is declared with the let keyword, which means it is only accessible in the block that it is declared in. Therefore, it is not accessible by line 12.

6. Line 13 will have an error because the variable discountedPrice is declared with the let keyword, which means it is only accessible in the for block that it was declared in. Therefore, it is not accessible by line 13.

7. Line 14 will print out the value 150. Since final price is declared in the same block as line 14, the let keyword allows finalPrice to be accessible by line 14.

8. The function will return the array that countains [50, 100, 150]. The for loop is used to calculate what the price of an item is after the discount is applied to it. The value is then pushed to the discounted array. Since the discount is 0.5, all the values in the original array are halved in the discounted array.

9. Line 11 will have an error because it is trying to access the variable i, but i is declared with the let keyword so it is only accessible in the for block.

10. Line 12 will print the length variable which has a value of 3. This is because length is assigned the value of the length of the prices array and is not reassigned for the rest of the function.

11. The function will return an array with the values [50, 100, 150]. This is because the for loop takes the prices in the given array, applies the discount to them, and pushes them to the new discounted array. Even though discounted is a const variable, it is only adding new values, not being reassigned. Since discountedPrice is being redeclared for every loop iteration, its value is updated without causing error.

12. 
    1. alert(student.name);
    2. alert(student['Grad Year']);
    3. student.greeting();
    4.  alert((student['Favorite Teacher']).name);
    5.  alert((student.courseLoad)[0]);

13. 
    1.  5 because the '3' is converted because the addition function converts all non-strings to numeric values.
    2.  1 because the '3' is converted due to the subtraction function converting non-strings to numeric values.
    3.  3 because null has a numeric value of 0 and the addition function converts null to its value.
    4.  3 because '3' and null are both non-strings with the numeric values 3 and 0 that are converted automatically by the addition function.
    5.  4 because true has a numeric value of 1 and it is automatically converted to 1 by the addition function.
    6.  0 because false and null both have numeric values of 0 and are converted automatically.
    7.  NaN because undefined is not a valid number so the numeric conversion fails and the result is not a number.
    8.  NaN because undefined is not a valid number so the numeric conversion fails and the result is not a number.

14.   
    1.  True because 2 is automatically converted to a number and is greater than 1.
    2.  False because they are both strings and are therefore compared in lexicographical order rather than numeric order. '2' comes after '1', so '2' is greater than '12'.
    3.  True because '2' is converted to a number so the two are equal.
    4.  False because === checks the values without type conversion and the two arguments are different types.
    5.  False because the numeric value of true is 1 which is not equal to 2.
    6.  True because Boolean(2) is true which is equivalent to the first argument.
  
15. == checks for equality after first converting the types of the arguments. For example, '2' == 2 is true because '2' is converted to a number. === checks equality without using type conversions. Therefore, '2' === 2 would be false since '2' is not converted and a string and a number cannot be equal.
    
16. part1b-question16.js
    
17. The result is newArr that contains [2, 4, 6]. The function modifyArray is called with the parameters [1,2,3] and doSomething. The function modifyArray calls doSomething inside of it and therefore executes doSomething and returns the value back to the push function in modifyArray. Each number in the given array is used as an argument in doSomething which multiplies it by 2 and pushes it into newArr.
    
18. part1b-question18.js
    
19. The output of the code is 1 4 3 2. 1 and 4 are printed first because they do not have any timeouts. 3 is printed after them even with a delay of 0 because it must wait for the next event cycle to be executed. 2 is printed last because of the 1 second delay.