export function movingPrevArray(src, dest)  {
    let i = 0;
    while ( i < src.length ) {
        var item = src[i];
        if (item.selected) {
            src.splice(i,1);
            dest.push(item);
        }
        else i++;
    }
}