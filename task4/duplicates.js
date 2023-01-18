function findDuplicates(arr){
    var duplicates = []
    var seen = new Set()
    for (var i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])){
            duplicates.push(arr[i])
        } else {
            seen.add(arr[i])
        }
    }
    return duplicates
}

const input = [1,2,3,4,4,5,6,7,8,8,9,9]
const duplicates = findDuplicates(input)
console.log(duplicates)

//The output is 4,8,9