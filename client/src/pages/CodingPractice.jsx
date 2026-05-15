import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const problems = [
  {
    id: 1,
    title: "Palindrome Checker",
    difficulty: "Easy",
    tags: ["JavaScript", "Strings", "Algorithms"],
    company: "Google",
    prompt: "Write a function that checks whether a string is a palindrome. A palindrome reads the same backward as forward.",
    examples: [
      { input: '"racecar"', output: "true" },
      { input: '"hello"', output: "false" },
      { input: '"A man, a plan, a canal: Panama"', output: "true" },
    ],
    testCases: [
      { input: '"racecar"', expected: "true" },
      { input: '"hello"', expected: "false" },
      { input: '"A man, a plan, a canal: Panama"', expected: "true" },
      { input: '" "', expected: "true" },
      { input: '"0P"', expected: "false" },
    ],
    hint: "Normalize the string by removing non-alphanumeric characters and converting to lowercase, then compare it to its reverse.",
    solution: `function isPalindrome(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return s === s.split('').reverse().join('');
}`,
  },
  {
    id: 2,
    title: "Two Sum",
    difficulty: "Medium",
    tags: ["JavaScript", "Array", "HashMap"],
    company: "Amazon",
    prompt: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
    ],
    testCases: [
      { input: "[2,7,11,15], 9", expected: "[0,1]" },
      { input: "[3,2,4], 6", expected: "[1,2]" },
      { input: "[3,3], 6", expected: "[0,1]" },
      { input: "[1,2,3,4], 7", expected: "[2,3]" },
      { input: "[0,4,3,0], 0", expected: "[0,3]" },
    ],
    hint: "Use a hash map to store the complement of each number and its index.",
    solution: `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["JavaScript", "Stack", "String"],
    company: "Facebook",
    prompt: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      { input: '"()"', output: "true" },
      { input: '"()[]{}"', output: "true" },
      { input: '"(]"', output: "false" },
    ],
    testCases: [
      { input: '"()"', expected: "true" },
      { input: '"()[]{}"', expected: "true" },
      { input: '"(]"', expected: "false" },
      { input: '"([)]"', expected: "false" },
    ],
    hint: "Use a stack to keep track of opening brackets and check for matching closing brackets.",
    solution: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (char in map) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}`,
  },
  {
    id: 4,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    tags: ["JavaScript", "Linked List", "Recursion"],
    company: "Microsoft",
    prompt: "Merge two sorted linked lists and return it as a sorted list.",
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
    ],
    testCases: [
      { input: "[1,2,4], [1,3,4]", expected: "[1,1,2,3,4,4]" },
      { input: "[], []", expected: "[]" },
      { input: "[], [0]", expected: "[0]" },
    ],
    hint: "Use recursion or iteration to merge the lists while maintaining sorted order.",
    solution: `function mergeTwoLists(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}`,
  },
  {
    id: 5,
    title: "Maximum Subarray",
    difficulty: "Medium",
    tags: ["JavaScript", "Array", "Dynamic Programming"],
    company: "Google",
    prompt: "Given an integer array nums, find the contiguous subarray with the largest sum, and return its sum.",
    examples: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "[1]", output: "1" },
      { input: "[5,4,-1,7,8]", output: "23" },
    ],
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
      { input: "[1]", expected: "1" },
      { input: "[5,4,-1,7,8]", expected: "23" },
    ],
    hint: "Use Kadane's algorithm to track the maximum sum ending at each position.",
    solution: `function maxSubArray(nums) {
  let maxCurrent = maxGlobal = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    if (maxCurrent > maxGlobal) maxGlobal = maxCurrent;
  }
  return maxGlobal;
}`,
  },
  {
    id: 6,
    title: "Climbing Stairs",
    difficulty: "Easy",
    tags: ["JavaScript", "Dynamic Programming", "Math"],
    company: "Apple",
    prompt: "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    examples: [
      { input: "2", output: "2" },
      { input: "3", output: "3" },
    ],
    testCases: [
      { input: "2", expected: "2" },
      { input: "3", expected: "3" },
      { input: "4", expected: "5" },
    ],
    hint: "This is a Fibonacci sequence problem. The number of ways to reach step n is the sum of ways to reach step n-1 and n-2.",
    solution: `function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}`,
  },
  {
    id: 7,
    title: "Binary Tree Inorder Traversal",
    difficulty: "Medium",
    tags: ["JavaScript", "Tree", "DFS"],
    company: "Amazon",
    prompt: "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
    examples: [
      { input: "[1,null,2,3]", output: "[1,3,2]" },
    ],
    testCases: [
      { input: "[1,null,2,3]", expected: "[1,3,2]" },
      { input: "[]", expected: "[]" },
      { input: "[1]", expected: "[1]" },
    ],
    hint: "Use recursion or a stack to traverse the tree in inorder (left, root, right).",
    solution: `function inorderTraversal(root) {
  const result = [];
  function traverse(node) {
    if (node) {
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }
  }
  traverse(root);
  return result;
}`,
  },
  {
    id: 8,
    title: "Reverse Linked List",
    difficulty: "Easy",
    tags: ["JavaScript", "Linked List", "Recursion"],
    company: "Google",
    prompt: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    examples: [
      { input: "[1,2,3,4,5]", output: "[5,4,3,2,1]" },
    ],
    testCases: [
      { input: "[1,2,3,4,5]", expected: "[5,4,3,2,1]" },
      { input: "[1,2]", expected: "[2,1]" },
      { input: "[]", expected: "[]" },
    ],
    hint: "Iterate through the list and reverse the next pointers, or use recursion.",
    solution: `function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}`,
  },
  {
    id: 9,
    title: "Valid Anagram",
    difficulty: "Easy",
    tags: ["JavaScript", "String", "Sorting"],
    company: "Facebook",
    prompt: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" },
      { input: 's = "rat", t = "car"', output: "false" },
    ],
    testCases: [
      { input: '"anagram", "nagaram"', expected: "true" },
      { input: '"rat", "car"', expected: "false" },
      { input: '"a", "ab"', expected: "false" },
    ],
    hint: "Sort both strings and compare, or use a frequency count with a map.",
    solution: `function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let char of s) count[char] = (count[char] || 0) + 1;
  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}`,
  },
  {
    id: 10,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    tags: ["JavaScript", "String", "Array"],
    company: "Amazon",
    prompt: "Write a function to find the longest common prefix string amongst an array of strings.",
    examples: [
      { input: '["flower","flow","flight"]', output: '"fl"' },
      { input: '["dog","racecar","car"]', output: '""' },
    ],
    testCases: [
      { input: '["flower","flow","flight"]', expected: '"fl"' },
      { input: '["dog","racecar","car"]', expected: '""' },
      { input: '["a"]', expected: '"a"' },
    ],
    hint: "Compare characters at the same position across all strings until a mismatch.",
    solution: `function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return "";
    }
  }
  return prefix;
}`,
  },
  {
    id: 11,
    title: "Contains Duplicate",
    difficulty: "Easy",
    tags: ["JavaScript", "Array", "HashMap"],
    company: "Google",
    prompt: "Given an integer array nums, return true if any value appears at least twice in the array.",
    examples: [
      { input: "[1,2,3,1]", output: "true" },
      { input: "[1,2,3,4]", output: "false" },
    ],
    testCases: [
      { input: "[1,2,3,1]", expected: "true" },
      { input: "[1,2,3,4]", expected: "false" },
      { input: "[99,99]", expected: "true" },
    ],
    hint: "Use a Set to track seen numbers. If you find a number already in the set, return true.",
    solution: `function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}`,
  },
  {
    id: 12,
    title: "Product of Array Except Self",
    difficulty: "Medium",
    tags: ["JavaScript", "Array", "Math"],
    company: "Amazon",
    prompt: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    examples: [
      { input: "[1,2,3,4]", output: "[24,12,8,6]" },
    ],
    testCases: [
      { input: "[1,2,3,4]", expected: "[24,12,8,6]" },
      { input: "[2,3,4,5]", expected: "[60,40,30,24]" },
    ],
    hint: "Use prefix and suffix products. First pass computes prefix products, second pass computes final result.",
    solution: `function productExceptSelf(nums) {
  const result = new Array(nums.length).fill(1);
  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
}`,
  },
  {
    id: 13,
    title: "First Unique Character",
    difficulty: "Easy",
    tags: ["JavaScript", "String", "HashMap"],
    company: "Microsoft",
    prompt: "Given a string s, find the first non-repeating character in it and return its index. If no such character exists, return -1.",
    examples: [
      { input: '"leetcode"', output: "0" },
      { input: '"loveleetcode"', output: "2" },
      { input: '"aabb"', output: "-1" },
    ],
    testCases: [
      { input: '"leetcode"', expected: "0" },
      { input: '"loveleetcode"', expected: "2" },
      { input: '"aabb"', expected: "-1" },
    ],
    hint: "Count character frequencies and then find the first character with frequency 1.",
    solution: `function firstUniqChar(s) {
  const count = {};
  for (let char of s) count[char] = (count[char] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}`,
  },
  {
    id: 14,
    title: "Majority Element",
    difficulty: "Easy",
    tags: ["JavaScript", "Array", "Voting"],
    company: "Apple",
    prompt: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than n/2 times.",
    examples: [
      { input: "[3,2,3]", output: "3" },
      { input: "[2,2,1,1,1,2,2]", output: "2" },
    ],
    testCases: [
      { input: "[3,2,3]", expected: "3" },
      { input: "[2,2,1,1,1,2,2]", expected: "2" },
      { input: "[1]", expected: "1" },
    ],
    hint: "Use Boyer-Moore voting algorithm to find the majority element in linear time.",
    solution: `function majorityElement(nums) {
  let count = 0, candidate = 0;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}`,
  },
  {
    id: 15,
    title: "Rotate Array",
    difficulty: "Medium",
    tags: ["JavaScript", "Array"],
    company: "Google",
    prompt: "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.",
    examples: [
      { input: "[1,2,3,4,5], k=2", output: "[4,5,1,2,3]" },
      { input: "[1], k=0", output: "[1]" },
    ],
    testCases: [
      { input: "[1,2,3,4,5], 2", expected: "[4,5,1,2,3]" },
      { input: "[1], 0", expected: "[1]" },
      { input: "[-1], 2", expected: "[-1]" },
    ],
    hint: "Reverse the entire array, then reverse first k elements, then reverse remaining elements.",
    solution: `function rotate(nums, k) {
  k %= nums.length;
  const reverse = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++; end--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
}`,
  },
  {
    id: 16,
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    tags: ["JavaScript", "Array", "DP"],
    company: "Facebook",
    prompt: "Given an array prices where prices[i] is the price of a stock on the ith day, return the maximum profit you can achieve.",
    examples: [
      { input: "[7,1,5,3,6,4]", output: "5" },
      { input: "[7,6,4,3,1]", output: "0" },
    ],
    testCases: [
      { input: "[7,1,5,3,6,4]", expected: "5" },
      { input: "[7,6,4,3,1]", expected: "0" },
      { input: "[2,4,1]", expected: "2" },
    ],
    hint: "Track the minimum price seen so far and calculate profit at each step.",
    solution: `function maxProfit(prices) {
  let minPrice = prices[0], maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }
  return maxProfit;
}`,
  },
  {
    id: 17,
    title: "3Sum",
    difficulty: "Medium",
    tags: ["JavaScript", "Array", "Sorting"],
    company: "Amazon",
    prompt: "Given an integer array nums, return all unique triplets in the array which sum to the given target (0).",
    examples: [
      { input: "[-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
    ],
    testCases: [
      { input: "[-1,0,1,2,-1,-4]", expected: "[[-1,-1,2],[-1,0,1]]" },
      { input: "[0,0,0,0]", expected: "[[0,0,0]]" },
    ],
    hint: "Sort the array and use two pointers. For each element, find two other elements that sum to -element.",
    solution: `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i-1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left+1]) left++;
        while (left < right && nums[right] === nums[right-1]) right--;
        left++; right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}`,
  },
  {
    id: 18,
    title: "Group Anagrams",
    difficulty: "Medium",
    tags: ["JavaScript", "String", "HashMap"],
    company: "Google",
    prompt: "Given an array of strings strs, group the anagrams together. Anagrams can be in any order.",
    examples: [
      { input: '["eat","tea","tan","ate","nat","bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
    ],
    testCases: [
      { input: '["eat","tea","tan","ate","nat","bat"]', expected: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
      { input: '[""]', expected: '[[""]]' },
      { input: '["a"]', expected: '[["a"]]' },
    ],
    hint: "Use a hash map where the key is the sorted string. Group anagrams by this key.",
    solution: `function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }
  return Object.values(map);
}`,
  },
  {
    id: 19,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    tags: ["JavaScript", "Array", "Two Pointers"],
    company: "Microsoft",
    prompt: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place and return the count of unique elements.",
    examples: [
      { input: "[1,1,2]", output: "2" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", output: "5" },
    ],
    testCases: [
      { input: "[1,1,2]", expected: "2" },
      { input: "[0,0,1,1,1,2,2,3,3,4]", expected: "5" },
      { input: "[1]", expected: "1" },
    ],
    hint: "Use two pointers: one to track the position for unique elements and one to iterate through the array.",
    solution: `function removeDuplicates(nums) {
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
}`,
  },
  {
    id: 20,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    tags: ["JavaScript", "Array", "DP"],
    company: "Amazon",
    prompt: "Given an elevation map represented by an array of heights, compute how much water it can trap after raining.",
    examples: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
    ],
    testCases: [
      { input: "[0,1,0,2,1,0,1,3,2,1,2,1]", expected: "6" },
      { input: "[4,2,0,3,2,5]", expected: "9" },
    ],
    hint: "For each position, calculate the water level as min(leftMax, rightMax) - height[i]. Precompute left and right max arrays.",
    solution: `function trap(height) {
  if (!height.length) return 0;
  const n = height.length;
  const leftMax = new Array(n), rightMax = new Array(n);
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) leftMax[i] = Math.max(leftMax[i-1], height[i]);
  rightMax[n-1] = height[n-1];
  for (let i = n-2; i >= 0; i--) rightMax[i] = Math.max(rightMax[i+1], height[i]);
  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return water;
}`,
  },
  {
    id: 21,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["JavaScript", "Array", "Binary Search"],
    company: "Google",
    prompt: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    examples: [
      { input: "[1,3], [2]", output: "2" },
      { input: "[1,2], [3,4]", output: "2.5" },
    ],
    testCases: [
      { input: "[1,3], [2]", expected: "2" },
      { input: "[1,2], [3,4]", expected: "2.5" },
    ],
    hint: "Use binary search on the smaller array to partition both arrays such that left half equals right half.",
    solution: `function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const n = merged.length;
  return n % 2 === 0 ? (merged[n/2-1] + merged[n/2]) / 2 : merged[Math.floor(n/2)];
}`,
  },
  {
    id: 22,
    title: "LRU Cache",
    difficulty: "Medium",
    tags: ["JavaScript", "Design", "HashMap"],
    company: "Apple",
    prompt: "Design and implement a data structure for LRU (Least Recently Used) Cache.",
    examples: [
      { input: 'capacity=2, put(1,1), put(2,2), get(1)→1, put(3,3), get(2)→-1', output: "Correct order maintained" },
    ],
    testCases: [
      { input: 'LRUCache(2)', expected: "initialized" },
      { input: 'put(1,1)', expected: "done" },
      { input: 'get(1)', expected: "1" },
    ],
    hint: "Combine a HashMap and DoublyLinkedList. HashMap stores key->node, LinkedList maintains order.",
    solution: `class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}`,
  },
  {
    id: 23,
    title: "Word Ladder",
    difficulty: "Medium",
    tags: ["JavaScript", "BFS", "Graph"],
    company: "Facebook",
    prompt: "Find the shortest path from beginWord to endWord, changing one letter at a time, where each intermediate word exists in a word list.",
    examples: [
      { input: 'beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]', output: "5" },
    ],
    testCases: [
      { input: 'hit,cog,[hot,dot,dog,lot,log,cog]', expected: "5" },
      { input: 'hit,cog,[hot,dot,dog,lot,log]', expected: "0" },
    ],
    hint: "Use BFS. Start from beginWord and explore neighbors by changing one letter at a time.",
    solution: `function ladderLength(beginWord, endWord, wordList) {
  const set = new Set(wordList);
  if (!set.has(endWord)) return 0;
  const queue = [[beginWord, 1]];
  while (queue.length) {
    const [word, length] = queue.shift();
    if (word === endWord) return length;
    for (let i = 0; i < word.length; i++) {
      for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
        const newWord = word.slice(0,i) + String.fromCharCode(c) + word.slice(i+1);
        if (set.has(newWord)) {
          set.delete(newWord);
          queue.push([newWord, length + 1]);
        }
      }
    }
  }
  return 0;
}`,
  },
  {
    id: 24,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    tags: ["JavaScript", "Linked List", "Heap"],
    company: "Google",
    prompt: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    examples: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,1,3,4,4,5,6]" },
    ],
    testCases: [
      { input: "[[1,4,5],[1,3,4],[2,6]]", expected: "[1,1,2,1,3,4,4,5,6]" },
      { input: "[]", expected: "[]" },
    ],
    hint: "Use a min-heap (priority queue) to merge lists efficiently. Keep the smallest element at the top.",
    solution: `function mergeKLists(lists) {
  const merged = [];
  for (let list of lists) {
    let curr = list;
    while (curr) {
      merged.push(curr.val);
      curr = curr.next;
    }
  }
  return merged.sort((a,b) => a-b);
}`,
  },
  {
    id: 25,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    tags: ["JavaScript", "DP", "Regex"],
    company: "Google",
    prompt: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*'.",
    examples: [
      { input: 's="aa", p="a"', output: "false" },
      { input: 's="aa", p="a*"', output: "true" },
    ],
    testCases: [
      { input: '"aa", "a"', expected: "false" },
      { input: '"aa", "a*"', expected: "true" },
      { input: '"ab", ".*"', expected: "true" },
    ],
    hint: "Use dynamic programming. dp[i][j] represents if s[0...i-1] matches p[0...j-1].",
    solution: `function isMatch(s, p) {
  const dp = Array(s.length+1).fill(null).map(() => Array(p.length+1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j < p.length; j++) if (p[j] === '*') dp[0][j+1] = dp[0][j-1];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j-1] === '*') {
        dp[i][j] = dp[i][j-2] || (dp[i-1][j] && (s[i-1] === p[j-2] || p[j-2] === '.'));
      } else {
        dp[i][j] = dp[i-1][j-1] && (s[i-1] === p[j-1] || p[j-1] === '.');
      }
    }
  }
  return dp[s.length][p.length];
}`,
  },
  {
    id: 26,
    title: "Longest Substring Without Repeating",
    difficulty: "Medium",
    tags: ["JavaScript", "String", "Sliding Window"],
    company: "Amazon",
    prompt: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { input: '"abcabcbb"', output: "3" },
      { input: '"bbbbb"', output: "1" },
      { input: '"pwwkew"', output: "3" },
    ],
    testCases: [
      { input: '"abcabcbb"', expected: "3" },
      { input: '"bbbbb"', expected: "1" },
      { input: '"pwwkew"', expected: "3" },
      { input: '""', expected: "0" },
    ],
    hint: "Use a sliding window with a hash map to track character frequencies and the start of the window.",
    solution: `function lengthOfLongestSubstring(s) {
  let maxLen = 0, start = 0;
  const charMap = {};
  for (let end = 0; end < s.length; end++) {
    if (charMap[s[end]]) start = Math.max(start, charMap[s[end]]);
    charMap[s[end]] = end + 1;
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}`,
  },
  {
    id: 27,
    title: "Number of Islands",
    difficulty: "Medium",
    tags: ["JavaScript", "DFS", "Graph"],
    company: "Amazon",
    prompt: "Given an m x n 2D grid map of 1s and 0s where 1 represents land and 0 represents water, return the number of islands.",
    examples: [
      { input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: "1" },
    ],
    testCases: [
      { input: '[[1,1,0],[0,1,0]]', expected: "1" },
      { input: '[[1,0,1]]', expected: "2" },
    ],
    hint: "Use DFS or BFS. For each unvisited 1, start a DFS and count it as one island.",
    solution: `function numIslands(grid) {
  if (!grid.length) return 0;
  let count = 0;
  const dfs = (i, j) => {
    if (i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j]!==1) return;
    grid[i][j] = 0;
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        count++;
      }
    }
  }
  return count;
}`,
  },
  {
    id: 28,
    title: "Coin Change",
    difficulty: "Medium",
    tags: ["JavaScript", "DP", "Greedy"],
    company: "Microsoft",
    prompt: "You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins needed to make up that amount.",
    examples: [
      { input: "coins=[1,2,5], amount=5", output: "1" },
      { input: "coins=[2], amount=3", output: "-1" },
    ],
    testCases: [
      { input: "[1,2,5], 5", expected: "1" },
      { input: "[2], 3", expected: "-1" },
      { input: "[10], 10", expected: "1" },
    ],
    hint: "Use dynamic programming. dp[i] represents the fewest coins needed to make amount i.",
    solution: `function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] > amount ? -1 : dp[amount];
}`,
  },
  {
    id: 29,
    title: "Wildcard Matching",
    difficulty: "Hard",
    tags: ["JavaScript", "DP", "String"],
    company: "Google",
    prompt: "Given an input string s and a pattern p containing only lowercase letters, numbers, '?' and '*', implement pattern matching.",
    examples: [
      { input: 's="aa", p="a"', output: "false" },
      { input: 's="aa", p="*"', output: "true" },
    ],
    testCases: [
      { input: '"aa", "a"', expected: "false" },
      { input: '"aa", "*"', expected: "true" },
      { input: '"cb", "?a"', expected: "false" },
    ],
    hint: "Use DP or greedy approach with two pointers. Handle '?' and '*' wildcards appropriately.",
    solution: `function isMatch(s, p) {
  const dp = Array(s.length+1).fill(null).map(() => Array(p.length+1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j < p.length; j++) if (p[j] === '*') dp[0][j+1] = dp[0][j];
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j-1] === '*') {
        dp[i][j] = dp[i-1][j] || dp[i][j-1];
      } else {
        dp[i][j] = dp[i-1][j-1] && (s[i-1] === p[j-1] || p[j-1] === '?');
      }
    }
  }
  return dp[s.length][p.length];
}`,
  },
  {
    id: 30,
    title: "Word Search II",
    difficulty: "Hard",
    tags: ["JavaScript", "Trie", "DFS"],
    company: "Facebook",
    prompt: "Given an m x n board of character cells and a list of strings words, return all words on the board.",
    examples: [
      { input: 'board=[["o","a","a"],["e","t","a"],["t","a","n"]], words=["oath","pea","eat","rain"]', output: '["eat","oath"]' },
    ],
    testCases: [
      { input: '[[o,a,a],[e,t,a],[t,a,n]], [oath,pea,eat,rain]', expected: '[eat,oath]' },
      { input: '[[a,b],[c,d]], [abc,ad,bad,baa]', expected: '[ad,baa]' },
    ],
    hint: "Build a Trie from words and use DFS on the board to find words that match Trie paths.",
    solution: `function findWords(board, words) {
  const result = new Set();
  const trie = {};
  for (let word of words) {
    let node = trie;
    for (let char of word) {
      node[char] = node[char] || {};
      node = node[char];
    }
    node.word = word;
  }
  const dfs = (i, j, node) => {
    if (node.word) {
      result.add(node.word);
      node.word = null;
    }
    if (i<0 || i>=board.length || j<0 || j>=board[0].length) return;
    const char = board[i][j];
    if (!node[char]) return;
    board[i][j] = '#';
    dfs(i+1,j,node[char]); dfs(i-1,j,node[char]); dfs(i,j+1,node[char]); dfs(i,j-1,node[char]);
    board[i][j] = char;
  };
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(i, j, trie);
    }
  }
  return [...result];
}`,
  },
];

function CodingPractice() {
  const navigate = useNavigate();
  const { darkMode } = useContext(AppContext);
  const [selectedProblem, setSelectedProblem] = useState(problems[0]);
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(
    "function solve(input) {\n  // type your code here\n  return input;\n}"
  );
  const [output, setOutput] = useState("");
  const [notesVisible, setNotesVisible] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState("All");
  const [companyFilter, setCompanyFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    setVisibleCount(10);
  }, [difficultyFilter, companyFilter, tagFilter]);

  const filteredProblems = useMemo(() => {
    return problems.filter(problem => {
      if (difficultyFilter !== "All" && problem.difficulty !== difficultyFilter) return false;
      if (companyFilter !== "All" && problem.company !== companyFilter) return false;
      if (tagFilter !== "All" && !problem.tags.includes(tagFilter)) return false;
      return true;
    });
  }, [difficultyFilter, companyFilter, tagFilter]);

  const displayedProblems = useMemo(
    () => filteredProblems.slice(0, visibleCount),
    [filteredProblems, visibleCount]
  );

  const loadMoreQuestions = () => {
    setVisibleCount((prev) => Math.min(prev + 10, filteredProblems.length));
  };

  const runCode = () => {
    // Validate that code contains actual logic
    if (code.trim().length < 30 || !code.includes("return")) {
      setOutput("❌ Please write actual code with a return statement.");
      return;
    }

    const testResults = selectedProblem.testCases.map((test, index) => {
      try {
        // Parse input
        let inputs = [];
        const inputStr = test.input.trim();
        if (inputStr.includes(', ')) {
          const parts = inputStr.split(', ');
          for (let part of parts) {
            try {
              inputs.push(JSON.parse(part));
            } catch (e) {
              inputs.push(part);
            }
          }
        } else {
          try {
            inputs = [JSON.parse(inputStr)];
          } catch (e) {
            inputs = [inputStr];
          }
        }

        // Execute code
        let result;
        if (language === "JavaScript") {
          const codeWithReturn = code + '\n return solve;';
          try {
            const userFunction = new Function(codeWithReturn)();
            result = userFunction(...inputs);
          } catch (e) {
            return {
              test: index + 1,
              input: test.input,
              expected: test.expected,
              actual: "Runtime Error: " + e.message,
              passed: false,
            };
          }
        } else {
          return {
            test: index + 1,
            input: test.input,
            expected: test.expected,
            actual: "Language not supported for execution",
            passed: false,
          };
        }

        // Convert result to string for comparison
        let actual;
        if (typeof result === "string") {
          actual = JSON.stringify(result);
        } else if (Array.isArray(result) || typeof result === "object") {
          actual = JSON.stringify(result);
        } else {
          actual = String(result);
        }

        // Compare with expected
        const passed = actual === test.expected;

        return {
          test: index + 1,
          input: test.input,
          expected: test.expected,
          actual: actual,
          passed: passed,
        };
      } catch (e) {
        return {
          test: index + 1,
          input: test.input,
          expected: test.expected,
          actual: "Error: " + e.message,
          passed: false,
        };
      }
    });

    const allPassed = testResults.every(t => t.passed);
    const resultText = testResults.map(r => 
      `Test ${r.test}: ${r.passed ? "✅ PASSED" : "❌ FAILED"}\n  Input: ${r.input}\n  Expected: ${r.expected}\n  Got: ${r.actual}`
    ).join("\n\n");

    if (allPassed) {
      setOutput("🎉 All tests passed!\n\n" + resultText);
    } else {
      setOutput("Some tests failed:\n\n" + resultText);
    }
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    setCode(getTemplateCode(newLang));
  };

  const getTemplateCode = (languageToLoad) => {
    const lang = languageToLoad || language;

    if (lang === "JavaScript") {
      return "function solve(input) {\n  // type your code here\n  return input;\n}";
    }
    if (lang === "Python") {
      return "def solve(input):\n    # type your code here\n    return input";
    }
    if (lang === "Java") {
      return "public class Solution {\n    public Object solve(Object input) {\n        // type your code here\n        return input;\n    }\n}";
    }
    if (lang === "C++") {
      return "#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> solve(vector<int> input) {\n    // type your code here\n    return input;\n}";
    }

    return "function solve(input) {\n  // type your code here\n  return input;\n}";
  };

  const loadTemplate = () => {
    setCode(getTemplateCode());
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "linear-gradient(135deg, #020617 0%, #111827 100%)"
          : "linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)",
        color: darkMode ? "white" : "#020617",
      }}
    >
      <div style={styles.sidebar}>
        <h1 style={styles.logo}>AI</h1>
        <button style={styles.menuButton} onClick={() => navigate("/dashboard")}>🏠</button>
        <button style={styles.menuButton} onClick={() => navigate("/quiz")}>🧠</button>
        <button style={styles.menuButton} onClick={() => navigate("/interview")}>🎤</button>
        <button style={styles.menuButton} onClick={() => navigate("/resume")}>📄</button>
      </div>

      <div style={styles.main}>
        <div style={styles.headerRow}>
          <div>
            <h1 style={styles.heading}>Coding Practice Lab</h1>
            <p style={styles.subheading}>
              Pick a problem, write code, and preview output instantly.
            </p>
          </div>
          <button style={styles.actionButton} onClick={() => setNotesVisible((prev) => !prev)}>
            {notesVisible ? "Hide Tips" : "Show Tips"}
          </button>
        </div>

        <div style={styles.filtersRow}>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="All">All Companies</option>
            <option value="Google">Google</option>
            <option value="Amazon">Amazon</option>
            <option value="Facebook">Facebook</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Apple">Apple</option>
          </select>
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="All">All Topics</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Array">Array</option>
            <option value="String">String</option>
            <option value="Dynamic Programming">Dynamic Programming</option>
            <option value="Tree">Tree</option>
            <option value="Linked List">Linked List</option>
          </select>
        </div>

        <div style={styles.grid}>
          <div style={styles.problemPanel}>
            <div style={styles.sectionHeader}>
              <h2 style={styles.sectionTitle}>Problem Bank</h2>
            </div>
            <div style={styles.problemList}>
              {displayedProblems.map((problem) => (
                <button
                  key={problem.id}
                  style={{
                    ...styles.problemCard,
                    borderColor: selectedProblem.id === problem.id ? "#60a5fa" : "rgba(148,163,184,0.3)",
                  }}
                  onClick={() => setSelectedProblem(problem)}
                >
                  <div>
                    <h3 style={styles.problemTitle}>{problem.title}</h3>
                    <p style={styles.problemMeta}>{problem.company} • {problem.difficulty}</p>
                  </div>
                  <div style={styles.tagList}>
                    {problem.tags.map((tag) => (
                      <span key={tag} style={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
            {filteredProblems.length > visibleCount && (
              <button style={styles.loadMoreButton} onClick={loadMoreQuestions}>
                Load More Questions
              </button>
            )}
          </div>

          <div style={styles.editorPanel}>
            <div style={styles.editorHeader}>
              <div>
                <h2 style={styles.sectionTitle}>{selectedProblem.title}</h2>
                <p style={styles.problemPrompt}>{selectedProblem.prompt}</p>
              </div>
              <select
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
                style={{
                  ...styles.languageSelect,
                  background: darkMode ? "rgba(15, 23, 42, 0.9)" : "white",
                  color: darkMode ? "white" : "#020617",
                }}
              >
                {['JavaScript', 'Python', 'Java', 'C++'].map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={styles.codeArea}
            />

            <div style={styles.toolRow}>
              <button style={styles.runButton} onClick={runCode}>Run Code</button>
              <button style={styles.demoButton} onClick={loadTemplate}>Load Template</button>
            </div>

            <div style={styles.outputCard}>
              <h3 style={styles.outputTitle}>Output Preview</h3>
              <pre style={styles.outputText}>{output || "Run your code to see feedback."}</pre>
            </div>

            {notesVisible && (
              <div style={{
                marginTop: "24px",
                background: darkMode ? "rgba(37, 99, 235, 0.09)" : "rgba(37, 99, 235, 0.2)",
                borderRadius: "24px",
                padding: "24px",
                color: darkMode ? "#e0f2fe" : "#020617",
              }}>
                <h3 style={styles.notesTitle}>Hints & Sample Tests</h3>
                <p>{selectedProblem.hint}</p>
                <ul style={{
                  marginTop: "16px",
                  paddingLeft: "20px",
                  color: darkMode ? "#cbd5e1" : "#020617",
                  lineHeight: 1.8,
                }}>
                  {selectedProblem.examples.map((item, index) => (
                    <li key={index}>Input: {item.input} → Output: {item.output}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  sidebar: {
    width: "100px",
    background: "rgba(15, 23, 42, 0.95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30px",
    gap: "24px",
  },
  logo: {
    fontSize: "40px",
    color: "white",
  },
  menuButton: {
    width: "56px",
    height: "56px",
    borderRadius: "18px",
    border: "none",
    background: "rgba(30, 41, 59, 0.85)",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "40px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "30px",
    gap: "20px",
  },
  heading: {
    fontSize: "44px",
    margin: 0,
  },
  subheading: {
    marginTop: "12px",
    color: "#94a3b8",
    maxWidth: "660px",
    lineHeight: 1.75,
  },
  actionButton: {
    border: "none",
    borderRadius: "16px",
    padding: "14px 22px",
    background: "linear-gradient(135deg, #2563eb, #60a5fa)",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
  },
  filtersRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  filterSelect: {
    border: "1px solid rgba(148, 163, 184, 0.3)",
    borderRadius: "12px",
    padding: "10px 16px",
    background: "rgba(15, 23, 42, 0.9)",
    color: "white",
    fontSize: "14px",
    minWidth: "160px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "28px",
  },
  problemPanel: {
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "28px",
    padding: "28px",
    minHeight: "720px",
  },
  sectionHeader: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "26px",
    margin: 0,
  },
  problemList: {
    display: "grid",
    gap: "16px",
  },
  problemCard: {
    width: "100%",
    borderRadius: "22px",
    border: "1px solid rgba(148, 163, 184, 0.25)",
    background: "rgba(255, 255, 255, 0.04)",
    padding: "22px",
    color: "white",
    cursor: "pointer",
    textAlign: "left",
  },
  problemTitle: {
    margin: 0,
    fontSize: "20px",
  },
  problemMeta: {
    marginTop: "10px",
    color: "#94a3b8",
    fontSize: "14px",
  },
  tagList: {
    marginTop: "16px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  tag: {
    padding: "8px 14px",
    borderRadius: "999px",
    background: "rgba(96, 165, 250, 0.15)",
    color: "#7dd3fc",
    fontSize: "13px",
  },
  editorPanel: {
    background: "rgba(15, 23, 42, 0.9)",
    borderRadius: "28px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    minHeight: "720px",
  },
  editorHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "18px",
  },
  problemPrompt: {
    color: "#cbd5e1",
    marginTop: "10px",
    lineHeight: 1.8,
  },
  languageSelect: {
    borderRadius: "16px",
    border: "1px solid rgba(148, 163, 184, 0.25)",
    padding: "12px 16px",
    minWidth: "170px",
  },
  codeArea: {
    flex: 1,
    borderRadius: "24px",
    border: "1px solid rgba(148, 163, 184, 0.2)",
    background: "rgba(15, 23, 42, 0.85)",
    color: "white",
    fontFamily: "SFMono-Regular, Consolas, 'Courier New', monospace",
    fontSize: "15px",
    padding: "24px",
    minHeight: "360px",
    resize: "vertical",
  },
  toolRow: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "18px",
  },
  runButton: {
    border: "none",
    borderRadius: "16px",
    padding: "14px 24px",
    background: "linear-gradient(135deg, #22c55e, #14b8a6)",
    color: "white",
    cursor: "pointer",
    fontWeight: 700,
  },
  demoButton: {
    border: "1px solid rgba(148, 163, 184, 0.35)",
    borderRadius: "16px",
    background: "transparent",
    color: "white",
    padding: "14px 24px",
    cursor: "pointer",
  },
  outputCard: {
    marginTop: "24px",
    borderRadius: "24px",
    background: "rgba(255, 255, 255, 0.04)",
    padding: "22px",
    minHeight: "120px",
  },
  loadMoreButton: {
    width: "100%",
    marginTop: "20px",
    border: "none",
    borderRadius: "16px",
    padding: "14px 22px",
    background: "rgba(37, 99, 235, 0.95)",
    color: "white",
    cursor: "pointer",
    fontSize: "15px",
  },
  outputTitle: {
    margin: "0 0 14px 0",
    fontSize: "18px",
  },
  outputText: {
    margin: 0,
    color: "#cbd5e1",
    whiteSpace: "pre-wrap",
    lineHeight: 1.7,
  },
  notesCard: {
    marginTop: "24px",
    background: "rgba(37, 99, 235, 0.09)",
    borderRadius: "24px",
    padding: "24px",
    color: "#e0f2fe",
  },
  notesTitle: {
    margin: "0 0 14px 0",
    fontSize: "20px",
  },
  exampleList: {
    marginTop: "16px",
    paddingLeft: "20px",
    color: "#cbd5e1",
    lineHeight: 1.8,
  },
};

export default CodingPractice;
