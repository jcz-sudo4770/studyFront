// function longestSonSequence(strArr){
//     let sortArr = Array.from(new Set(trArr.sort((a,b)=>{return a - b})))
//     console.log(sortArr)
//     let maxLength = 0
//     let result = []
//     for(let index = 0;index < sortArr.length;index++){
//         const item = strArr[index]
//         if(result.length){
//             if(item - result[result.length - 1]===1){
//                 result.push(item)
//             }else{
//                 maxLength = Math.max(maxLength,result.length)
//                 result = [item]
//             }
//         }else{
//             result.push(item)
//         }
//     }
//     return Math.max(maxLength,result.length)
// }
// console.log(longestSonSequence([1,0,1,2]))

function longStr(strArr){
    const set = new Set(strArr)
    let maxLength = 0
    console.log(set)
    Array.from(set).filter(item).forEach(item=>{
        console.log(item)
        let currentItem = item
        let currentLength = 1
        while(set.has(currentItem + 1)){
            currentLength++
            currentItem++
        }
        maxLength = Math.max(maxLength,currentLength)
    })
    return maxLength
}
console.log(longStr([100,4,200,1,3,2]))
// console.log(new Set([1,2,3,4,5,6,7]))