# Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.

# Implement the ParkingSystem class:

# ParkingSystem(int big, int medium, int small) Initializes object of the ParkingSystem class. The number of slots for each parking space are given as part of the constructor.
# bool addCar(int carType) Checks whether there is a parking space of carType for the car that wants to get into the parking lot. carType can be of three kinds: big, medium, or small, which are represented by 1, 2, and 3 respectively. A car can only park in a parking space of its carType. If there is no space available, return false, else park the car in that size space and return true.

# Example 1:

# Input
# ["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
# [[1, 1, 0], [1], [2], [3], [1]]
# Output
# [null, true, true, false, false]

# Explanation
# ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
# parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
# parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
# parkingSystem.addCar(3); // return false because there is no available slot for a small car
# parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.

class ParkingSystem:
    def __init__(self, big: int, medium: int, small: int):
        self.spaces = {
            "big": big,
            "medium": medium,
            "small": small
        }

    def addCar(self, carType: int):
        if carType == 1:
            if self.spaces["big"] >= 1:
                self.spaces["big"] -= 1
                return True
            else:
                return False
        elif carType == 2:
            if self.spaces["medium"] >= 1:
                self.spaces["medium"] -= 1
                return True
            else:
                return False
        elif carType == 3:
            if self.spaces["small"] >= 1:
                self.spaces["small"] -= 1
                return True
            else:
                return False


parkingSystem = ParkingSystem(1, 1, 0)
print(parkingSystem.addCar(1))
print(parkingSystem.addCar(2))
print(parkingSystem.addCar(3))
print(parkingSystem.addCar(1))


# Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

# Example 1:

# Input: num = 14
# Output: 6
# Explanation:
# Step 1) 14 is even; divide by 2 and obtain 7.
# Step 2) 7 is odd; subtract 1 and obtain 6.
# Step 3) 6 is even; divide by 2 and obtain 3.
# Step 4) 3 is odd; subtract 1 and obtain 2.
# Step 5) 2 is even; divide by 2 and obtain 1.
# Step 6) 1 is odd; subtract 1 and obtain 0.
# Example 2:

# Input: num = 8
# Output: 4
# Explanation:
# Step 1) 8 is even; divide by 2 and obtain 4.
# Step 2) 4 is even; divide by 2 and obtain 2.
# Step 3) 2 is even; divide by 2 and obtain 1.
# Step 4) 1 is odd; subtract 1 and obtain 0.
# Example 3:

# Input: num = 123
# Output: 12

def numberOfSteps(num: int):
    steps = 0
    while num != 0:
        if num % 2 == 0:
            num = num/2
            steps += 1
        else:
            num -= 1
            steps += 1
    return steps


print(numberOfSteps(14))
print(numberOfSteps(8))
print(numberOfSteps(123))
