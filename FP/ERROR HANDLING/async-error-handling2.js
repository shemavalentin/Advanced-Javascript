
// even though try and catch are used in synchronous but
// we can use then in asynchronous codes as long as we are using async await.

// example

async function() {
    try {
        await Promise.reject('Oopsie')
    } catch (err) {
        console.log(err)
    }
    console.log('is this still good?')
}

// let's make it an IIFE to avoid error of naming the function

(async function() {
    try {
        await Promise.reject('Oopsie')
    } catch (err) {
        console.log(err)
    }
    console.log('is this still good?')
})

// now we are able to handle errors in asynchronous as if we are using
// synchronous by using try and catch.