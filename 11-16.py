# Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

# Return the array in the form [x1,y1,x2,y2,...,xn,yn].


# Example 1:

# Input: nums = [2,5,1,3,4,7], n = 3
# Output: [2,3,5,4,1,7]
# Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
# Example 2:

# Input: nums = [1,2,3,4,4,3,2,1], n = 4
# Output: [1,4,2,3,3,2,4,1]
# Example 3:

# Input: nums = [1,1,2,2], n = 2
# Output: [1,2,1,2]


def shuffle(nums, n):
    result = []
    i = 0
    while i < n:
        result.append(nums[i])
        result.append(nums[i+n])
        i += 1
    return result


print(shuffle([2, 5, 1, 3, 4, 7], 3))
print(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
print(shuffle([1, 1, 2, 2], 2))


# Given a valid (IPv4) IP address, return a defanged version of that IP address.

# A defanged IP address replaces every period "." with "[.]".

# Example 1:

# Input: address = "1.1.1.1"
# Output: "1[.]1[.]1[.]1"
# Example 2:

# Input: address = "255.100.50.0"
# Output: "255[.]100[.]50[.]0"

def defangIPaddr(address):
    result = ""
    for i in range(len(address)):
        if address[i] != ".":
            result += address[i]
        else:
            result += "[.]"
    return result


print(defangIPaddr('1.1.1.1'))
print(defangIPaddr('255.100.50.0'))
