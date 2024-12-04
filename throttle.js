/*
Throttling:
```````````

Thorttling is also used like a rate-limiting technique. But, It calls the function immidiately. 
Then, Prevent the function from called again until a certain period of time (delay).
Once the time is passed, The function will be called once again.

This feature is widely used in Infinite-Scroll Feature.

*/

// fun is the callback function passsed.
// delay is the no. of milliseconds the function should be delayed
const throttle = (fun, delay) => {
    let last = 0; // This keeps track of the last time the function was called.
    return (...args) => {
        let now = new Date().getTime();
        // If the difference between now and the last time the function was called is less than the delay, do nothing.
        if(now - last < delay) return;
        // Else, Update the last time the function was called to the current time.
        last = now;
        return fun(...args);
    }
}