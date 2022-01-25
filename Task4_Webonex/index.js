/*Take two numbers and perform all the arithmetic 
operations over them*/
a=24;
b=12;
console.log("Add",a+b);
console.log("Subtract",a-b);
console.log("Multiplication",a*b);
console.log("Division",a/b);
console.log("Exponent",a**b);
console.log("Mode",a%b);
console.log("Increment",a++);
console.log("Decrement",a--);

 //2. Take 2 numbers and 2 strings and perform addition operation on them in same sequence. 
x1="str1";
x2="str2";
x3=2;
x4=4;
console.log(x3+x4+x2+x1);

//3. Take 2 Strings and 2 numbers and perform addition operation on them in same sequence
console.log(x1+x2+x3+x4);

 // 4. Write an operation to get its result as NaN.  
let l;
let r=1;
r+=l;
console.log(r);

// 5. Take 2 boolean letiables as true and false and perform And and Or logical operation over them and print the result as well as operation 
x=true;
y=false;
console.log("And operation",x&&y);
console.log("Or operation",x||y);

// Take 2 variables and compare them using == and === such that result of both the comparisons operation is not equal."
let t1=5
let t2="5"
console.log(t1==t2);
console.log(t1===t2);