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
// starts at index of 1, [1], so the index of 0, [0], is still 1 in the new array. So start with index of [1], which = 2 in the input so nums[i], (index of 1 position) = 2 + nums[i - 1], which is the index position of [1] - index position [0], which = 3 in the new array. (2 + (2-1)).
// next i = 2, index position of [2], so nums[i] (index position [2]) = nums[i](3) + nums[i - 1](index position [1]), which is 3, so 3 + 3 = 6 in the new array at index position [2].  

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


// github commits activity to make an array of objects for each week of commits
// (in react)
// import "./styles.css";

// https://api.github.com/repos/facebook/react/stats/commit_activity

const API = "https://api.github.com/repos/facebook/react/stats/commit_activity";
let largetCommitDay = 0;
const container = document.getElementById("container");
let weeksCount;

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    weeksCount = data.length; // 52

    data.forEach((week) => {
      if (Math.max(...week.days) > largetCommitDay) {
        largetCommitDay = Math.max(...week.days);
      }
    });

    console.log("largets day", largetCommitDay);

    const range = largetCommitDay / 4; // 4.5

    const entries = [
      [range, "#000"],
      [range * 2, "#222"],
      [range * 3, "#555"],
      [range * 4, "#888"]
    ];

    data.forEach((week) => {
      const div = document.createElement("div");
      // div.classList.add("flex");

      for (let j = 0; j < week.days.length; j++) {
        let hexCode;
        const commitCount = week.days[j];

        for (let k = 0; k < entries.length; k++) {
          if (commitCount === 0) {
            hexCode = "#fff";
          } else if (commitCount < entries[k][0]) {
            hexCode = entries[k][1];
            break;
          }
        }

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner-div");

        innerDiv.style.backgroundColor = hexCode;
        div.append(innerDiv);
      }

      container.append(div);
    });

    // 16
  });

// document.body.insertAdjacentElement("beforeend", container);


// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. /// Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0

const numJewelsInStones = (jewels, stones) => {
    let count = 0;
    const set = {};
    for (let j = 0; j < jewels.length; j++) {
        set[jewels[j]] = 1;
    }
    for (let s = 0; s < stones.length; s++) {
        count += set[stones[s]] || 0;
    }
    return count;
}; 
console.log(numJewelsInStones('aA', 'aAAbbbb'));


// and another...
const numberOfJewelsAndStones = (J, S) => {
    let count = 0;

    for(const jewel of J) {
        for(const stone of S) {
            if(jewel === stone) {
                count ++
            }
        }
    }
    return count;
};
console.log(numberOfJewelsAndStones('aA', 'aAAbbb'));


