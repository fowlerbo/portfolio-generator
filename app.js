const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const animalArray = ["dog", "cat", "pig"];

animalArray.push("cow");

const personObj = {
  name: "Bryant",
  age: 99,
};

personObj.age = 100;
personObj.occupation = "Developer";

//Notice the lack of parentheses around the ` parameter?
const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => {
    console.log(profileItem);
  });
};

printProfileData(profileDataArgs);
