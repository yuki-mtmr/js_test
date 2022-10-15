const array = [1,2,3];
const member = {
    'name': '本田',
    'height': 170,
    'hobby':'サッカー'
}
const member_2 = {
    'honda':{
        'height':170,
        'hobby':'サッカー'
    },
    'kagawa':{
        'height':165,
        'hobby':'サッカー'
    }
}
const scores = [10, 20, 30];
const myMap = new Map();
myMap.set('id', 3);
myMap.set('name', '本田');

for( score of scores ) {
    console.log(score);
}
console.log('テスト');
console.log(array);
console.log(member.name);
console.log(member_2.kagawa.height);
console.log(myMap.get('name'));
