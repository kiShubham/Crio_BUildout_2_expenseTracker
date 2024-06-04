let obj = { iOS: 600, Android: 700, Web: 200 };
console.log([...Object.keys(obj)]);
console.log(Object.values(obj));

let bject = { food: 1000, travel: 5000, entertaiment: 3000 };

// come with percentage of individual and then take that particular percentage from 400px

// 1000+5000+3000 = 9000 (100 %;)
// (1000/9000)*100 ->11.11 %
// (5000/9000)*100 -> 55.55 %;
// (3000/9000)*100 -> 33.33 %  'no Math.floor tke ;

//now take that particular percentage from 400px ;
//11.11*(400/100) => 44.44    ||44
//55.55*(400/100) => 222.2   ||220
//33.33*(400/100) => 133.32 ||132 . Math.floor take

//44+222+133 => 399 ;
//44.44 + 222.2 + 133.32 = 399.96

const handlebarsLength = (data1) => {
  let data = { food: 1000, travel: 5000, entertaiment: 3000 };
  let percentage = { food: "", travel: "", entertaiment: "" };
  let total = data.food + data.entertaiment + data.travel;

  percentage.food = (data.food / total) * 100;
  percentage.travel = (data.travel / total) * 100;
  percentage.entertaiment = (data.entertaiment / total) * 100;
  let boxLength = 400; //400px

  let length = { food: "", travel: "", entertaiment: "" };
  length.food = Math.floor((boxLength / 100) * percentage.food);
  length.travel = Math.floor((boxLength / 100) * percentage.travel);
  length.entertaiment = Math.floor((boxLength / 100) * percentage.entertaiment);

  return length;
};

const calculateBarLengths = (expenses) => {
  const totalExpenses = Object.values(expenses).reduce(
    (total, amount) => total + amount,
    0
  );
  const percentages = {};

  for (const category in expenses) {
    percentages[category] = (expenses[category] / totalExpenses) * 100;
  }
  const boxLength = 400; // 400px
  const barLengths = {};

  for (const category in percentages) {
    barLengths[category] = Math.floor(
      (boxLength / 100) * percentages[category]
    );
  }

  return barLengths;
};

console.log(handlebarsLength());
const expenses = { food: 1000, travel: 5000, entertainment: 3000 };
const barLengths = calculateBarLengths(expenses);
console.log(barLengths);
