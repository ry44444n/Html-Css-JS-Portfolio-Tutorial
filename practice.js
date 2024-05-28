function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }

const mid = Math.floor(arr.length / 2)
const left = arr.slice(0, mid)
const right = arr.slice(mid)
return mergeSort(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    const sortedArr = []
    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            sortedArr.push(left.shift())
    } else {
        sortedArr.push(right.shift())
    }
}

return [...sortedArr, ...left, ...right]
}

const arr = [0, 1, 4, 6, 2]
console.log(mergeSort(arr));