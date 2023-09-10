// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const sourceOne = new Queue();
//    sourceOne.add(1);
//    sourceOne.add(2);
//    const sourceTwo = new Queue();
//    sourceTwo.add('Hi');
//    sourceTwo.add('There');
//    const q = weave(sourceOne, sourceTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    // const first = sourceOne && sourceOne.remove();
    // const second = sourceTwo && sourceTwo.remove();
    
    // if(!first && !second){
    //     return finalQueue;
    // }
    
    // finalQueue.add(first);
    // finalQueue.add(second);
    
    // return(weave(sourceOne, sourceTwo, finalQueue));

    const finalQueue = new Queue();
  
    while(sourceOne.peek() || sourceTwo.peek()){
      if(sourceOne.peek()){
        finalQueue.add(sourceOne.remove());
      }
      
      if(sourceTwo.peek()){
        finalQueue.add(sourceTwo.remove());
      }
    }
    
    return finalQueue;
    // const q = new Queue();

    // while (sourceOne.peek() || sourceTwo.peek()) {
    //     if (sourceOne.peek()) {
    //     q.add(sourceOne.remove());
    //     }

    //     if (sourceTwo.peek()) {
    //     q.add(sourceTwo.remove());
    //     }
    // }

    // return q;
}

module.exports = weave;
