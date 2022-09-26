function loopyLighthouse(range, multiple, words) {
    let start = range[0];
    let end = range[1];
    let mult1 = multiple[0];
    let mult2 = multiple[1];
    let word1 = words[0];
    let word2 = words[1];

    for (let i = start; i <= end; i++ ){
        if (i % mult1 === 0 && i % mult2 === 0) {
            console.log(word1 + word2)
        } else if (i % mult1 === 0){
            console.log(word1);
        } else if (i % mult2 === 0){
            console.log(word2)
        }else {
            console.log(i)
        }
    }
}


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);