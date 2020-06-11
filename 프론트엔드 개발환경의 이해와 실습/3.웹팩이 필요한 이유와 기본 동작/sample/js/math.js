/* 함수 원형
function sum(a, b) {
    return a + b;
}
*/

/* IIFE
var math = math || {};

(function() {
    function sum(a, b) {
        return a + b;
    }

    math.sum = sum;
})();
*/

// ES2015 표준 모듈

export function sum(a, b) {
    return a + b;
}