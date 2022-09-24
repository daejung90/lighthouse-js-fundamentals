function number(){
    const result = [];
    for (let i= 100; i <= 200; i++){
if(i % 3 === 0 && i % 4 === 0){
    result.push('LoopyLighthouse')
} else if (i % 3 === 0){
    result.push('Lighthouse')
} else if (i% 4 === 0){
    result.push('Loopy')
}else {
    result.push(i)
}
    }
return result;
}



console.log(number())