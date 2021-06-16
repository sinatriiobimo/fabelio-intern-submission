export function randomArrayShuffle(array) {

  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
    array.sort((a, b) => a.idc - b.idc);
  }

    console.log(array)
    
    return array;
}

