export function movingPrevArray(arr, prod) {
    let newArray = [...arr];
    const index = newArray.findIndex((element) => element === prod)

    if(index !== -1) {
        newArray.splice(index, 1)
        return newArray
    }
}
