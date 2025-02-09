alert( null || 2 || undefined );//2
alert( alert(1) || 2 || alert(3) );// 1, 2
alert( null || 2 && 3 || 4 );//3
let value = NaN;

value &&= 10;
value ||= 20;
value &&= 30;
value ||= 40;

alert(value);//30