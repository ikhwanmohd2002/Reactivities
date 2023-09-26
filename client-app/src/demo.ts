let data: number | string = 42;
data = "42";

export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "ikhwan",
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound),
};
const duck2: Duck = {
  name: "dikhwan",
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound),
};

duck1.makeSound("QUACK");
duck2.makeSound("Sound");
export const ducks = [duck1, duck2];
