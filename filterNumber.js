//const num=process.argv[2];
//const evenodd=process.argv[3];
function filterNumbers(arr, criterion) {
    switch(criterion) {
        case 'even':
            return arr.filter(num => num % 2 === 0);
        case 'odd':
            return arr.filter(num => num % 2 !==0);
        default:
            return arr;
    }
}

console.log(filterNumbers([1,2,3,4,4,5,6],'even'));
console.log(filterNumbers([1,2,3,4,4,5,6],'odd'));
