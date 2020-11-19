# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Output: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]

def twoSum(nums, target):
    for i in range(len(nums)):
        for j in range(i+1, len(nums), 1):
            if nums[i] + nums[j] == target:
                return [i, j]


print(twoSum([2, 7, 11, 15], 9))
print(twoSum([3, 2, 4], 6))
print(twoSum([3, 3], 6))


# In a string s of lowercase letters, these letters form consecutive groups of the same character.
# For example, a string like s = "abbxxxxzyy" has the groups "a", "bb", "xxxx", "z", and "yy".
# A group is identified by an interval [start, end], where start and end denote the start and end indices (inclusive) of the group. In the above example, "xxxx" has the interval [3,6].
# A group is considered large if it has 3 or more characters.
# Return the intervals of every large group sorted in increasing order by start index.

# Example 1:

# Input: s = "abbxxxxzzy"
# Output: [[3,6]]
# Explanation: "xxxx" is the only large group with start index 3 and end index 6.
# Example 2:

# Input: s = "abc"
# Output: []
# Explanation: We have groups "a", "b", and "c", none of which are large groups.
# Example 3:

# Input: s = "abcdddeeeeaabbbcd"
# Output: [[3,5],[6,9],[12,14]]
# Explanation: The large groups are "ddd", "eeee", and "bbb".
# Example 4:

# Input: s = "aba"
# Output: []

def largeGroupPositions(s):
    if len(s) < 3:
        return []
    result = []
    start = 0
    while start < len(s)-2:
        end = start
        while s[end+1] == s[start]:
            end += 1
            if end == len(s)-1:
                break
        if end - start >= 2:
            result.append([start, end])
            start = end
        start += 1
    return result


print(largeGroupPositions("abbxxxxzzy"))
print(largeGroupPositions("abc"))
print(largeGroupPositions("abcdddeeeeaabbbcd"))
print(largeGroupPositions("aba"))
print(largeGroupPositions("aaa"))
print(largeGroupPositions("babaaaabbb"))
