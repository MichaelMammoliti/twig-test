# Twig Coding Challenge
The goal of this exercise is to write some executable code.
We hope that you will not find this particularly difficult and it should not take more than one hour . However, please treat this task as though you were writing production-ready code that will be maintained by others, who may or may not have been familiar with the original requirement.

We do not require a user-facing interface of any kind. You should implement a function or class that can be called on to provide the following behaviour:
- Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
- Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

Example pseudo-code:
```
groupArrayElements([ 1 , 2 , 3 ], 3 );
// [[ 1, 2 ], [ 3, 4 ], [ 5 ]]
```

### Advice
In addition to a working solution, we are looking for evidence of how and why it works with regards to the desired behaviour.
You may provide notes alongside your solution, but do not document your code any differently than you
would in a real-world situation.

### What language or framework should I use?
We would prefer the code to be written in JavaScript or Python, but you may write it in a language of your choice. You will not be penalised for writing the code using another language, but if JavaScript or Python are not your primary languages, we will give consideration to this if you attempt your solution using either.

### How should I share the code?
We’ll leave that up to you. All that we ask is that there are clear instructions on how to execute the code.
Please be aware that if you wish to send your solution by email email antivirus scanners often block ZIP
files, particularly if they contain code!


# Notes
We can split our function in `4 phases`: Iteration, Creation, Insertion, Return.

## 1. Iteration
given the `arr` argument we loop through it to generate the expected output.

## 2. Creation
we create a `parent array` if:
  - is the first iteration or
  - the last `item`'s `length` in the parent array is equal to maximum amount of number we should have inside that array (this is calculated by dividing the parent array's length by `limit`);

## 3. Insertion:
  - we insert (`push`) our array into the `parent array` (`accumulator` or `acc` for short) if the conditions in the `"Creation"` step are met.
  - we then `push` the current `item` processed into the last array of our `parent array`.

## 4. Return:
  - when we are done with the loop, we return the value to have access it from outside the function.
