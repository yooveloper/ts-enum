{
  enum Animal {
    Dog = 'dog',
    Cat = 'cat',
    Pig = 'pig',
  }

  function getAnimal(param: (typeof Animal)[keyof typeof Animal]) {
    console.log(param);
  }

  getAnimal(Animal.Dog);
  // getAnimal('dog');
}
