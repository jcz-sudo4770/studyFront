function permutations(s) {
  if (s.length <= 1) {
    return [s]
  }
  const result = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const rest = s.slice(0, i) + s.slice(i + 1)
    const restPermutations = permutations(rest) //[bc,cb]
    for (let j = 0; j < restPermutations.length; j++) {
      result.push(char + restPermutations[j])
    }
  }
  return [...new Set(result)]
}
console.log(permutations('abc'))

function groupAnagrams(strs) {
  const obj = new Object()
  for (let s of strs) {
    const count = new Array(26).fill(0)
    for (let c of s) {
      count[c.charCodeAt() - 'a'.charCodeAt()]++
    }
    obj[count] ? obj[count].push(s) : (obj[count] = [s])
  }
  console.log(obj)
}
groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
