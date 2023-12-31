// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // let each = [] ;
    // for(let i = 0; i < n; i++){
    //     for(let j = 0; j < n; j++){
    //     each[i] = "#"
    //     if(i < j){
    //         each[j] = " "; 
    //     }
    //     }
    //     console.log(each.join(''))
    // }

    let each = new Array(n).fill(' ') ;
    for(let i = 0; i < n; i++){
        each[i] = "#"
        console.log(each.join(''))
    }
}

module.exports = steps;
