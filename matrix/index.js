// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



    function matrix(n){
        const results = [];
        
        for(let i = 0; i < n; i ++ ){
          results[i] = [];
        }
        
        let counter = 1;
        let startRow = 0;
        let startColumn = 0;
        let endRow = n - 1;
        let endColumn = n - 1;
        
        while(startRow <= endRow && startColumn <= endColumn){
          // First row
          for(let i = startColumn; i <= endColumn; i ++){
            results[startRow][i] = counter;
            counter ++;
          }
          
          startRow ++;
          
          // Last column
          for( let j = startRow; j <= endRow; j ++ ){
            results[j][endColumn] = counter;
            counter ++;
          }
          
          endColumn --;
          
          //Bottom row
          for( let k = endColumn ; k >= startColumn ; k -- ){
            results[endRow][k] = counter;
            counter ++
          }
          
          endRow --;
          
          // Middle row
          for(let l = endRow ; l >= startRow; l --){
            results[l][startColumn] = counter;
            counter ++ ;
          }
          
          startColumn ++;
          
          console.log('proceso',results);  
         
        }
        return results
      }


module.exports = matrix;
