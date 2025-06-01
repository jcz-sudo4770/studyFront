function longStr(strArr){
    const set = new Set(strArr)
    let maxLength = 0
    set.forEach(item=>{
        let currentLength = 1
        while(set.has(item + 1)){
            currentLength++
        }
        maxLength = Math.max(maxLength,currentLength)
    })
    return maxLength
}
console.log(longStr([1,0,1,2]))