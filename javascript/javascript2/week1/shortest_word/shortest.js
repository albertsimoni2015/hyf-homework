// Find the shortest word
const danishWords = ['bil', 'plante', 'kaffe','bog', 'ø', 'planetrium'];
function shortestElement(array){
    return array.reduce(function(prevWord, currWord){
        if(currWord.length < prevWord.length){
            return currWord;
        }
        else 
        return prevWord;

    })
}
console.log(shortestElement(danishWords));