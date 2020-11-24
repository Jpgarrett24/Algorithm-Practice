# Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

def countOdds(low:int, high:int):
    return (high-low)//2+int(low%2==1 or high%2==1)

# print(countOdds(3,7))
# print(countOdds(8,10))




# Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
# The operation of drinking a full water bottle turns it into an empty bottle.
# Return the maximum number of water bottles you can drink.

# Example 1:
# Input: numBottles = 9, numExchange = 3
# Output: 13
# Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
# Number of water bottles you can drink: 9 + 3 + 1 = 13.

# Example 2:
# Input: numBottles = 15, numExchange = 4
# Output: 19
# Explanation: You can exchange 4 empty bottles to get 1 full water bottle. 
# Number of water bottles you can drink: 15 + 3 + 1 = 19.
# Example 3:

# Input: numBottles = 5, numExchange = 5
# Output: 6
# Example 4:

# Input: numBottles = 2, numExchange = 3
# Output: 2

def numWaterBottles(numBottles, numExchange):
    result = 0
    result += numBottles
    empty = numBottles
    while empty >= numExchange:
        result += (empty // numExchange)
        empty = (empty // numExchange) + (empty % numExchange)
    return result

print(numWaterBottles(9,3))
print(numWaterBottles(15,4))
print(numWaterBottles(5,5))
print(numWaterBottles(2,3))