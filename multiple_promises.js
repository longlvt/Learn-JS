const promise1 = Promise.resolve('Promise 1 completed')
const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Promise 2 completed')
    }, 2000)
})

// promise1.then(res => console.log(res))
// promise2.then(res => console.log(res))

Promise.all([promise1, promise2])
    .then(res => console.log(res))
// this will give use all the data resolved in those 2 promises at the same time.
// the final result will be in type of array.