var findLadders = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    let q = []
    let ans = []
    let level = 0
    q.push([beginWord])
    let usedOnLevel = []
    usedOnLevel.push(beginWord)
    while(q.length>0){
        let listOfNodes = q.shift()
        console.log("level",level,listOfNodes)
        //erase words from list if level surpassed the level
        if(listOfNodes.length>level){
            console.log("!!!!!!!!!!!!!!,listOfNodes",listOfNodes,level)
            level++
            for(let usedWord of usedOnLevel){
                wordSet.delete(usedWord)
            }

        }
        console.log("after---",level,"listOfNodes",listOfNodes,wordSet)

        let word = listOfNodes[listOfNodes.length-1]
        if(word===endWord){
            console.log("######",ans,listOfNodes)
            if(ans.length===0){
                ans.push(listOfNodes)
            }
            // if the path is of same length as the first path then push it
            else if(ans[0].length===listOfNodes.length){
                ans.push(listOfNodes)
            }
        }
        for(let i = 0 ; i < word.length ; i++){
            console.log("i--", i, "word[i]--", word[i],level,listOfNodes,q,wordSet)
            for(let j = 0 ; j < 26 ; j++){
                let word2 = word.split('')
                word2[i] = String.fromCharCode(j+97)
                word2 = word2.join('')
                if(wordSet.has(word2)){
                    //pushing word2 into listOfNodes
                     listOfNodes.push(word2)
                     //pushing copy of listOfNodes into q
                     q.push(listOfNodes.slice());
                     //now removing word2 from listOfNodes because  hit , hot , dot -> and hit,hot,lot
                    listOfNodes.pop()
                    //pushing word to usedWord
                     usedOnLevel.push(word2)
                }
            }
        }
    }

    console.log("ans", ans)
};

console.log(findLadders("hit","cog",["hot","dot","dog","lot","log","cog"]))