// **************************************************************
// Types of interview questions.
    // Datastructures & algorithms
    // UI Wiget
    // JavaScript Domain Knowledge Question.
    // Behavioral questions
// **************************************************************


// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

const runningSum = (nums) => {
    let result = [];
    
    for(let i=0; i<nums.length; i++) {
        let sum = 0;
        for(let j=0; j<=i; j++) {
            sum += nums[j]
        }
        result.push(sum)
    }
    return result;
}; 

console.log(runningSum([1, 2, 3, 4]));

// and another... (best solution!)

const runningSums = (nums) => {
    for(let i=1; i<nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }
    return nums;
}

console.log(runningSums([1, 2, 3, 4]));

// and another...

const runSum = (nums) => {
    let previousSum = 0;
    let result = [];

    for(let i=0; i<nums.length; i++) {
        previousSum += nums[i];
        result.push(previousSum);
    }
    return result;
}

console.log(runSum([1, 2, 3, 4]));

