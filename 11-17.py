# There are 3n piles of coins of varying size, you and your friends will take piles of coins as follows:

# In each step, you will choose any 3 piles of coins (not necessarily consecutive).
# Of your choice, Alice will pick the pile with the maximum number of coins.
# You will pick the next pile with maximum number of coins.
# Your friend Bob will pick the last pile.
# Repeat until there are no more piles of coins.
# Given an array of integers piles where piles[i] is the number of coins in the ith pile.

# Return the maximum number of coins which you can have.

# Example 1:

# Input: piles = [2,4,1,2,7,8]
# Output: 9
# Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
# Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
# The maximum number of coins which you can have are: 7 + 2 = 9.
# On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.
# Example 2:

# Input: piles = [2,4,5]
# Output: 4
# Example 3:

# Input: piles = [9,8,7,6,5,1,2,3,4]
# Output: 18

def maxCoins(piles):
    result = 0
    coins = {
        "alice": [],
        "me": [],
        "bob": []
    }
    piles.sort()
    while len(piles) > 0:
        coins["alice"].append(piles[len(piles)-1])
        piles.pop(len(piles)-1)
        coins["me"].append(piles[len(piles)-1])
        piles.pop(len(piles)-1)
        coins["bob"].append(piles[0])
        piles.pop(0)
    for i in range(len(coins["me"])):
        result += coins["me"][i]
    return result


print(maxCoins([2, 4, 1, 2, 7, 8]))
print(maxCoins([2, 4, 5]))
print(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4]))


# You are given an array nums of non-negative integers. nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
# Notice that x does not have to be an element in nums.
# Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

# Example 1:

# Input: nums = [3,5]
# Output: 2
# Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.
# Example 2:

# Input: nums = [0,0]
# Output: -1
# Explanation: No numbers fit the criteria for x.
# If x = 0, there should be 0 numbers >= x, but there are 2.
# If x = 1, there should be 1 number >= x, but there are 0.
# If x = 2, there should be 2 numbers >= x, but there are 0.
# x cannot be greater since there are only 2 numbers in nums.
# Example 3:

# Input: nums = [0,4,3,0,4]
# Output: 3
# Explanation: There are 3 values that are greater than or equal to 3.
# Example 4:

# Input: nums = [3,6,7,7,0]
# Output: -1

def specialArray(nums):
    result = 0
    while result <= len(nums):
        count = 0
        for i in range(len(nums)):
            if nums[i] >= result:
                count += 1
        if count == result:
            return result
        result += 1
    return -1


print(specialArray([3, 5]))
print(specialArray([0, 0]))
print(specialArray([0, 4, 3, 0, 4]))
print(specialArray([3, 6, 7, 7, 0]))
