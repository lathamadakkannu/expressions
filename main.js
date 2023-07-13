

a=10,b=5,c=20;
d=(a<b)&&(a++)<=c;
console.log("d="+d)

a=1,b=2,c=3;
d=!((a=b)&&(a&b<c));
console.log("d="+d)

a=2,b=4,c=3;
d=(a<=b)&&(a%b<c);
console.log("d="+d)

a=1,b=2,c=3;
d=(a*b)&&(b*c)&&(c*a);
console.log("d="+d)

a=5,b=5,c=7;
d=(a!=b)||(b<c);
console.log("d="+d)

a=10,b=12,c=23;
d=(a==b)&&(c=+b)||(b/a);
console.log("d="+d)

a=5,b=10,c=25;
d=(a<=c)||(b=-c)||!(c>a);
console.log("d="+d)

a=15,b="Hello",c=10;
d=(a===b)||(a*=b)||(c<a);
console.log("d="+d)

a=5,b="20",c=15;
d=(a*b)&&(a%b)||(a/c);
console.log("d="+d)

a=3,b="5",c=4;
d=(a+b)*(b<c)%(c-b);
console.log("d="+d)


/*expressions test*/

a=4; b=7; c="1";
d=(a-c+a)||(b*a)&&(a*c);
console.log("d="+d)

a=3; b=1; c="a";
d=(a-c)&&(b%a)&&(a||c);
console.log("d="+d)

a=9; b=4; c=2;
d=(a===b)||!(a+c)&&(a*c);
console.log("d="+d)

a=3; b=7; c="a";
d=(a-c+a)||(b%a)&&(a+c);
console.log("d="+d)

a="9"; b=4; c=2;
d=(a>c)<(a+c)||(a+c);
console.log("d="+d)

a=2,b=4,c=3;
d=(a==b)&&(b==c);
console.log("d="+d)

a=7,b=5,c=4;
d=(a<b)||(b<c)||(a<c);
console.log("d="+d)

a=5,b=5,c=10;
d=(a==b)||(c==a)||(b==c);
console.log("d="+d)

a=4,b=3,c=5;
d=(a<b)||(b<a)||(c<a);
console.log("d="+d)

a=4,b=3,c=8;
d=(a>b)&&(b>c)&&(c>b);
console.log("d="+d)