// you can add new functions to array, string objects

String.prototype.yell = function() {
    return `OMG! Go Away, ${this}`
}

const res = "surya".yell();
console.log(res)


Array.prototype.pop = function () {
    return "Sorry! i wont pop."
}

const arr = [1, 2, 3];
console.log(arr.pop());