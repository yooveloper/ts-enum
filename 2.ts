enum Person1 {
  name = '원영',
  phone = '010',
  country = '서울',
}

// console.log(Object.keys(Person1));

enum Person2 {
  name = '철수',
  phone = '011',
  country = '부산',
  age = 21,
}

console.log(Object.keys(Person2));
console.log(Object.values(Person2));
