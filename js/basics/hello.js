console.log("Hello, World!");
// Calling "alert" function will work only from Browser.
// You cannot use "alert" function directly in JavaScript.
// Explanation:
// https://intellij-support.jetbrains.com/hc/en-us/community/posts/206334589-alert-is-not-defined
// https://stackoverflow.com/questions/11618456/node-js-alert-causes-crash
// Workaround:
// https://stackoverflow.com/questions/1042138/how-to-check-if-function-exists-in-javascript
// Use this:
// if (typeof alert !== "undefined") {
// OR use below:
if (typeof alert === "function") {
    alert("'Hello World' from My first JavaScript Program.")
}
