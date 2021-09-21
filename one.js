

const students = [
	['Devid',['htm', 'css', 'react', 'js'], [1,2,3,4,5]],
    ['John', [ 'htm', 'cdd', 'reqct', 'js' ], [11,22,33,44,55] ]
]

function cnvarr(arr){
  var obj = {};
  arr.forEach(item => {
    // console.log(item[2])
   obj.name = item[0]
   obj.skills = item[1]
   obj.scores = item[2]

  })
  return obj;
}

console.log(cnvarr(students))
