/*

Debouncing:
```````````
Debouncing is a technique which is used to rate-limit a function until a certain amount of time. This can help us in preventing unwanted api calls.
Use Cases: Search bars, Login buttons, etc',

*/

// fun is the callback function passsed.
// delay is the no. of milliseconds the function should be delayed. (default 500 milliseconds)
const debounce = (fun, delay = 500) => {
    let timer;
    // We've to have a timer variable to keep track of time and clear Timeout. Else the function will be kept running even after the delay. 
    return (...args) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fun(...args);
        }, delay);
    } 
}