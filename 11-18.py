# Given a positive integer num consisting only of digits 6 and 9.

# Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

# Example 1:

# Input: num = 9669
# Output: 9969
# Explanation:
# Changing the first digit results in 6669.
# Changing the second digit results in 9969.
# Changing the third digit results in 9699.
# Changing the fourth digit results in 9666.
# The maximum number is 9969.
# Example 2:

# Input: num = 9996
# Output: 9999
# Explanation: Changing the last digit 6 to 9 results in the maximum number.
# Example 3:

# Input: num = 9999
# Output: 9999
# Explanation: It is better not to apply any change.

def maximum69Number(num):
    digits = [int(d) for d in str(num)]
    for i in range(len(digits)):
        if digits[i] == 6:
            digits[i] = 9
            break
    result = ""
    for i in range(len(digits)):
        result += str(digits[i])
    return int(result)


print(maximum69Number(9669))
print(maximum69Number(9996))
print(maximum69Number(9999))


# A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

# A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

# Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

# Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

# Example 1:

# Input: "(()())(())"
# Output: "()()()"
# Explanation:
# The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
# After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
# Example 2:

# Input: "(()())(())(()(()))"
# Output: "()()()()(())"
# Explanation:
# The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
# After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
# Example 3:

# Input: "()()"
# Output: ""
# Explanation:
# The input string is "()()", with primitive decomposition "()" + "()".
# After removing outer parentheses of each part, this is "" + "" = "".

def removeOuterParentheses(S):
    reference = list(S)
    primitive = {}
    new = 1
    balance = 0
    result = ""
    for i in range(len(reference)):
        if S[i] == "(":
            balance += 1
        if S[i] == ")":
            balance -= 1
        if balance == 1 and S[i] == "(":
            primitive[str(new)] = [i+1]
        if balance == 0 and S[i] == ")":
            primitive[str(new)].append(i-1)
            new += 1
    for value in primitive.values():
        if value[1] < value[0]:
            result += ""
        else:
            for i in range(value[0], value[1]+1, 1):
                result += reference[i]
    return result


print(removeOuterParentheses("(()())(())"))
print(removeOuterParentheses("(()())(())(()(()))"))
print(removeOuterParentheses("()()"))


def removeOuterParentheses2(S):
    reference = list(S)
    add = False
    balance = 0
    result = ""
    for i in range(len(reference)):
        if S[i] == "(":
            balance += 1
        if S[i] == ")":
            balance -= 1
        if balance == 2 and S[i] == "(":
            add = True
        if balance == 0 and S[i] == ")":
            add = False
        if add == True:
            result += S[i]
    return result


print(removeOuterParentheses2("(()())(())"))
print(removeOuterParentheses2("(()())(())(()(()))"))
print(removeOuterParentheses2("()()"))
