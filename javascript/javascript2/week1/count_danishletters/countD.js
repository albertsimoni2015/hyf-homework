// Find and count the danish letter




function danishLetters(array) {
    let danLetters1 = 0; //to count æ
    let danLetters2 = 0; //to count ø
    let danLetters3 = 0; //to count å
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'æ') {
            danLetters1++;
        } else if (array[i] === 'ø') {
            danLetters2++;
        } else if (array[i] === 'å') {
            danLetters3++;
        }
    }
    console.log(array);
    console.log(
        'total: ' +
        (danLetters1 + danLetters2 + danLetters3) +
        ', æ: ' +
        danLetters1 +
        ' , ø: ' +
        danLetters2 +
        ' , å: ' +
        danLetters3
    );
} 
console.log(danishLetters('jeg har en blå bil'));
console.log(danishLetters("blå grød med røde bær"));

