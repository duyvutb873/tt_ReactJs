const arr = [1, 2, 3, 4]
Array.prototype.forEachNew = function(callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++){
        if (i in this) {
            callback.call(thisValue, this[i], i, this);
        }
    }
}

arr.forEachNew(function(value, index, arr){
    console.log(value, index, arr);
    // console.log(this);
}, {id: 123})
