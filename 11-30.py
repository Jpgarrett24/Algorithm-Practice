import math
# Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
# You can use each character in text at most once. Return the maximum number of instances that can be formed.

# Example 1:
# Input: text = "nlaebolko"
# Output: 1
# Example 2:

# Input: text = "loonbalxballpoon"
# Output: 2
# Example 3:

# Input: text = "leetcode"
# Output: 0

def maxNumberOfBalloons(text:str):
    result = math.inf
    available = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0,
    }
    for i in range(len(text)):
        if text[i] in available:
            available[text[i]] += 1
    for key, value in available.items():
        if key != 'l' and key != 'o' and result > value:
            result = value
        if key == 'l' or key == 'o':
            if value//2 <= result:
                result = value//2
    return result

print(maxNumberOfBalloons("nlaebolko"))
print(maxNumberOfBalloons("loonbalxballpoon"))
print(maxNumberOfBalloons("leetcode"))
print(maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"))
print(maxNumberOfBalloons("ballon"))