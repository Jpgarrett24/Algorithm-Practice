# Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
# A string is represented by an array if the array elements concatenated in order forms the string.


# Example 1:
# Input:
word1 = ["ab", "c"]
word2 = ["a", "bc"]
# Output: true
# Explanation:
# word1 represents string "ab" + "c" -> "abc"
# word2 represents string "a" + "bc" -> "abc"
# The strings are the same, so return true.

# Example 2:
# Input:
word3 = ["a", "cb"]
word4 = ["ab", "c"]
# Output: false

# Example 3:
# Input: 
word5  = ["abc", "d", "defg"]
word6 = ["abcddefg"]
# Output: true

def arrayStringsAreEqual(word1, word2):
    test1 = ""
    test2 = ""
    for string in word1:
        test1 += string
    for string in word2:
        test2 += string
    if test1 == test2:
        return True
    else:
        return False

print(arrayStringsAreEqual(word1, word2))
print(arrayStringsAreEqual(word3, word4))
print(arrayStringsAreEqual(word5, word6))



# Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
# Return the answer in an array.

# Example 1:
# Input: 
nums1 = [8,1,2,2,3]
# Output: [4,0,1,1,3]
# Explanation: 
# For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
# For nums[1]=1 does not exist any smaller number than it.
# For nums[2]=2 there exist one smaller number than it (1). 
# For nums[3]=2 there exist one smaller number than it (1). 
# For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

# Example 2:
# Input:
nums2 = [6,5,4,8]
# Output: [2,1,0,3]

# Example 3:
# Input:
nums3 = [7,7,7,7]
# Output: [0,0,0,0]

def smallerNumbersThanCurrent(nums):
    result = []
    for i in range(len(nums)):
        count = 0
        for j in range(0, len(nums), 1):
            if j != i and nums[j] < nums[i]:
                count += 1
        result.append(count)
    return result

print(smallerNumbersThanCurrent(nums1))
print(smallerNumbersThanCurrent(nums2))
print(smallerNumbersThanCurrent(nums3))
