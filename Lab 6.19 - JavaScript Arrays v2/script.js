// Put your solution here


function divideArray(numbers){
    let evenNums = []
    let oddNums = []

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0)
            evenNums.push(numbers[i])

        else
            oddNums.push(numbers[i])
    }

    evenNums.sort(function(a, b) {
        return a - b
    })

    oddNums.sort(function(a, b){
        return a - b
    })

    console.log("Even numbers:");
    if (evenNums.length === 0) {
        console.log("None");
    } else {
        for (let i = 0; i < evenNums.length; i++) {
            console.log(evenNums[i]);
        }
    }

    console.log("Odd numbers:");
    if (oddNums.length === 0) {
        console.log("None");
    } else {
        for (let i = 0; i < oddNums.length; i++) {
            console.log(oddNums[i]);
        }
    }
}