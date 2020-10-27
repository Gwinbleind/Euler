function firstSimpleFactor(N) {
   if (N < 2) return 0
   if (N % 2 === 0) return 2
   else for (let i = 3; i <= Math.sqrt(N); i++) {
      if (N % i === 0) return i
   }
   return 0;
}
function factor(N) {
   let res = []
   let x = firstSimpleFactor(N)
   if (x) {
      res.push(x)
      res.push(...factor(N / x))
   } else {
      res.push(N)
   }
   return res
}

function f11(a,b) {
   if (a > 9 && a < 100) {

   } else return [a,b]
}

let a = 9, b = 9;
let pal = 91*a+10*b;

f11(pal,1)
console.log('Number '+pal*11);
let x1 = firstSimpleFactor(pal);
console.log(x1+'*'+pal/x1);
let x2 = firstSimpleFactor(pal/x1);
console.log(x2*x1+'*'+pal/x1/x2);
let x3 = firstSimpleFactor(pal/x1/x2);
console.log(x3);