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