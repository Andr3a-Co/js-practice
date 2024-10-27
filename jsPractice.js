
//Object Cosntructor
const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll"
const bookPubYear = 1865
const bookISBN = 9798369203415

// Your code goes here
function Book (title, author, ISBN, publicationYear) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.publicationYear = publicationYear;   

}

const result = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

//Template literals 
//const cameraStory = `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it 
//${cameraAge(myCamera.year)} years old. It's a ${myCamera.format} camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;

//DOM Queuries

const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

//Create navbar using DOM 
function createNavMenu(document) {
      // Your code goes here
      const newNav = document.createElement("nav");
      newNav.classList.add("main-navigation");
      const newUl = document.createElement("ul");
      newUl.innerHTML = navContent;
      newNav.append(newUl);
      document.querySelector(".siteheader").append(newNav);
}

const result2 = document.querySelector(".siteheader").outerHTML;

//Arrays

//Create array with []
const deskArray = [
    "pen",
    "camera",
    "phone",
    "notebook",
    "headphones",
    "laptop",
    "light bulb",
    "USB drive",
    "elephant"
];

const processArray = deskArray => {

    let newDeskArr = [...deskArray]; //spread operator shallow copy of the existing array 

    // Your code goes here
    newDeskArr.pop();// Remove last item from array
    newDeskArr.sort();//Sort array in alphabetic order
    const lastItem = newDeskArr.pop();
    newDeskArr.unshift(lastItem);//Move item to the first position of the array 
    const itemUSB = newDeskArr.indexOf("USB drive"); //find index number of given string/numvalue
    newDeskArr.push(newDeskArr.splice(itemUSB, 1));//push place item to the last position
    const itemLaptop = newDeskArr.indexOf("laptop"); 
    newDeskArr.splice(itemLaptop, 1); //splice add or remove elements of an existing array (index position, number of items to remove)
    // Your code ends here

    return newDeskArr;
};

//Function and methods

//function act by itself
//Method act by the call of an object

//declaration - can be redeclared
function doSomeMath(a,b) {
    let c = a+b;
    return c;
}

//function expression - same scope locally and cannot be redeclared
const doMath = function (a,b) {
    let c = a * b;
    return c;
}

//call function 
doSomeMath(4,5);
doMath(4,5);

//Inmediately invoked using () at the end of the delaration

//Example
const greenPack = {
    name: "Frog Pack",
    color: "green",
    volume: 8,
    pocketNum: 3,
  };
  
  const addPack = function (currentPack) {
    const newArticle = document.createElement("article"); //wrap it in the article tag
    //add value in the inner DOM
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
      </ul>
    `;
    return newArticle;
  };
  
  const main = document.querySelector("main"); // select main tag from HTML <main> <article></article> </main>
  main.append(addPack(greenPack));//append or add data injecting it to the HTML 

  //Arrow function +
  //Simpler way to write anonymos functions
  // Can be called only after they are declared
  const addPack2 =  (currentPack) => {
    const newArticle = document.createElement("article"); //wrap it in the article tag
    //add value in the inner DOM
    newArticle.innerHTML = `
      <h1>${currentPack.name}</h1>
      <ul>
        <li>Volume: ${currentPack.volume}</li>
        <li>Color: ${currentPack.color}</li>
        <li>Number of pockets: ${currentPack.pocketNum}</li>
      </ul>
    `;
    return newArticle;
  };

  //Practice function 
  let message = 'Hello world' // Try edit me


// Log to console
console.log(message)

//function declaration
function editMessage(newMessage) {
  this.message = newMessage;  
  return console.log(newMessage);
}

editMessage("Hola");
document.querySelector('header').innerHTML = message

//Function decoration
const newElement = function (message) {
  const newHeader = document.createElement("h1");
  newHeader.innerHTML = `<h1>${message} </h1>`;
  return newHeader
}

const main2 = document.querySelector('header');
main2.append(newElement("New header"));

//Arrow function
const newElement2 = (message) => {
  const newHeader = document.createElement("h2");
  newHeader.innerHTML = `<h2>${message} </h2>`;
  return newHeader;
}

main2.append(newElement2("header2"))

let age = 36;
let description;

switch(true) {
  case age < 30:
    description = "new"
    break;
  case age >= 30 && age < 365:
    description = "has been used";
    break;
  case age >= 365 && age <= 1095:
    description = "is really old";
    break;
  default:
    description = `unkown ${age}`;

}

//Loops through array

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const nestedObjects = {
  item01: {
    name: "piggy",
    type: "toy",
    weight: 30,
  },
  item02: {
    name: "headlamp",
    type: "equipment",
    weight: 120,
  },
  item03: {
    name: "pen",
    type: "tool",
    weight: 30,
  },
  item04: {
    name: "pencil",
    type: "tool",
    weight: 30,
  },
  item05: {
    name: "eraser",
    type: "tool",
    weight: 40,
  },
  item06: {
    name: "water bottle",
    type: "equipment",
    weight: 1300,
  },
};

const article = document.querySelector("article");
const listObjects = document.createElement("ul");

//For loop
for(let i = 0; i < stuff.length; i++) {
  let listItem = document.createElement("li");
  listItem.innerHTML = stuff[i];
  listObjects.append(listItem);
}

//For of loop
for(const item of stuff) {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  listObjects.append(listItem);
}

//forEach loop
stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  listObjects.append(listItem);
})


//For in loop to traverse objects with nedted data
for (const singleObject in nestedObjects) {
  let listItem = document.createElement("li");
   listItem.innerHTML = `Name: ${nestedObjects[singleObject].name}`;
  listObjects.append(listItem);
}

//map method creates a new array to handle objects

const newArray = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
})

//Iterate to get the values from array to print 
newArray.forEach((item) => {
  listObjects.append(item);
})

//example
function createBackpackMarkup(document) {
  // Replace the code below with the correct solution:
  
  const content = backpackObjectArray.map ((backpack) => {

      let articleElement = document.createElement("article");
      articleElement.setAttribute("id", backpack.id)


      articleElement.innerHTML = `
      <h1>${backpack.name}</h1>
      <ul>
          <li>Volume:<span> ${backpack.volume}l</span></li>
          <li>Color:<span> ${backpack.color}</span></li>
          <li>Age:<span> ${backpack.backpackAge()} days old</span></li>
          <li>Number of pockets:<span> ${backpack.pocketNum}</span></li>
      </ul>
      `
      return articleElement;
  })
  

  
  return content;
}

//Events
let button = document.querySelector(".lid-toggle");
let newArg = "The argument I want to pass to the callback function!";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });
  
  const container = document.querySelector(".container");
  const button2 = document.querySelector(".cta-button");
  
  // Log when the button is clicked in the console.
  button.addEventListener("click", () => {
    button2.classList.toggle("active");
    console.log("Button was clicked!");
  }, false);











