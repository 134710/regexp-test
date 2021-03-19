const str = `
010-1234-5678
asdfdsfsad123@gmail.com
https://naver.com
The quick brouwn fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)