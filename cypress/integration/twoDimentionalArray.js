
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

function wordsearch(board, word) {
   let x = board.length;
   let y = board[0].length
   let wordLength = word.length;
   
   for(let i = 0; i < x; i++){
      for(let j = 0; j < y; j++){
         if(depthFirstSearch(i,j,0)) return true;//word found
      }
   }

/**
 * @param i row position
 * @param j column position
 * @param k index of current char in the word
 * @return {boolean}
 */
   
   function depthFirstSearch(i,j,wordindex)
   {
        if(i >= 0 && i < x && j >= 0 && j < y && wordindex < wordLength && board[i][j] == word[wordindex])
        {
           if(wordindex == wordLength - 1) return true;//word found
           
           wordindex = wordindex + 1; //next word
            
           let temp = board[i][j];//storing for retracking
           board[i][j] = "*";//to avoid revisiting the same character
            
           let found = depthFirstSearch(i + 1,j,wordindex) || depthFirstSearch(i,j + 1,wordindex) || depthFirstSearch(i - 1,j,wordindex) || depthFirstSearch(i,j - 1,wordindex);
           
           board[i][j] = temp;//retrack
            
           return found;
        }
        return false;  
   }
   
   return false;//if match not found
}
console.log(wordsearch([["x", "c", "a"],["d", "y", "t"],["o", "g", "z"]],"cat"))
console.log(wordsearch([["x", "c", "a"],["d", "y", "t"],["o", "g", "z"]],"dog"))
console.log(wordsearch([["x", "c", "a"],["d", "y", "t"],["o", "g", "z"]],"god"))
console.log(wordsearch([["x", "c", "a"],["d", "y", "t"],["o", "g", "z"]],"fool"))
console.log(wordsearch([["x", "c", "a"],["d", "y", "t"],["o", "g", "z"]],"test"))
console.log(wordsearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))
console.log(wordsearch([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"))
