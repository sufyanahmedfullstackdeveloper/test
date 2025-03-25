/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
let prefix=""
const loopIteration=words[0]

for(let i=0;i<loopIteration.length;i++)
{
  const char=loopIteration[i];
  
  for(let j=1;j<words.length;j++)
  {
 
      if(words[j][i]!==char)
      {
          return prefix
      }
  }
  prefix=prefix+char;
}

return prefix
}

console.log(result(words));