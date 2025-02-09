function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false} = user;
  
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

let d = new Date(2012, 1, 20, 3, 12);
alert( d );

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  
    return days[date.getDay()];
}
  
let date = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date) ); // ПТ
