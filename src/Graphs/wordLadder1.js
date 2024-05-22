//Word Ladder _ I
// Word Ladder - 127

// A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

// Every adjacent pair of words differs by a single letter.
// Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
// sk == endWord
// Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

// Example 1:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
// Output: 5
// Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
// Example 2:

// Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
// Output: 0
// Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.

// Constraints:

// 1 <= beginWord.length <= 10
// endWord.length == beginWord.length
// 1 <= wordList.length <= 5000
// wordList[i].length == beginWord.length
// beginWord, endWord, and wordList[i] consist of lowercase English letters.
// beginWord != endWord
// All the words in wordList are unique.
var ladderLength = function (beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  let q = [];
  q.push([beginWord, 1]);
  while (q.length > 0) {
    let [word, step] = q.shift();
    // console.log("word", word)
    if (word === endWord) return step;
    //loop over each letter of word , i.e for word hat -> h,a,t
    for (let i = 0; i < word.length; i++) {
      console.log("i--", i, "word[i]--", word[i]);
      for (let j = 0; j < 26; j++) {
        // since I need to change each character of word to check if it is in wordSet
        // either i would have done slice , or i have split array and then join
        let word2 = word.split("");
        // console.log("word2 -- ", word2,"word2[i]--" ,word2[i], "j--", j, "String.fromCharCode(j+97)--", String.fromCharCode(j+97))
        word2[i] = String.fromCharCode(j + 97);
        word2 = word2.join("");
        // console.log("word2 After ---", word2)
        if (wordSet.has(word2)) {
          // console.log("word2 when adding ---!!", word2)
          if (word2 === endWord) return step + 1;
          q.push([word2, step + 1]);
          wordSet.delete(word2);
        }
      }
    }
  }
  return 0;
};

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
);
