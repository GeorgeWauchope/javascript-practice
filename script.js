//press a button, and 5 seconds later, text appears, using ASYNC to achieve this delayed response
let h1 = document.createElement("h1");
let button1 = document.createElement("button");
let image = document.createElement("img");

h1.innerText = "Click the button below to load an image in 5 seconds";
button1.innerText = "Click me";
image.src = "https://miro.medium.com/max/1920/0*z1mm6izqSeDiKukb";

document.body.append(h1, button1);

button1.addEventListener("click", () => {
  setTimeout(() => {
    button1.insertAdjacentElement("afterend", image);
  }, 5000);
});

// let h1 = document.createElement("h1");
// let button = document.createElement("button");
// let p = document.createElement("p");
// let button2 = document.createElement("button");

// h1.innerText = "Click the button below to see more text";
// button.innerText = "Click me";
// p.innerText = "This is new text, click the below button to delete this.";
// button2.innerText = "Click me to delete";

// document.body.append(h1, button);

// button.addEventListener("click", () => {
//   button.insertAdjacentElement("afterend", p);
//   p.insertAdjacentElement("afterend", button2);
// });

// button2.addEventListener("click", () => {
//   p.remove();
//   button2.remove();
// });

// let h1 = document.createElement('h1');
// let button = document.createElement('button');
// let p = document.createElement('p');
// let button2 = document.createElement('button');

// h1.innerText = 'Click the button below!';
// button.innerText = 'Click me';
// p.innerText = 'Hi, click the below button to delete this.';
// button2.innerText = 'Click me to delete';

// document.body.append(h1, button);

// button.addEventListener('click', () => {
//   button.insertAdjacentElement('afterend', p);
//   p.insertAdjacentElement('afterend', button2);
// });

// button2.addEventListener('click', () => {
//   p.remove();
//   button2.remove();
// });

// let firstButton = document.createElement('button');
// let p = document.createElement('p');
// let secondButton = document.createElement('button');

// firstButton.innerText = 'CLICK ME';
// p.innerText = 'Click the below second button to delete everything'
// secondButton.innerText = 'I am second button'

// document.body.append(firstButton);

// firstButton.addEventListener('click', function() {
//     firstButton.insertAdjacentElement('afterend', p)
//     p.insertAdjacentElement('afterend', secondButton);
// })

// secondButton.addEventListener('click', function() {
//     firstButton.remove()
//     p.remove()
//     secondButton.remove()
// })

//Below code shows how to create a div and insert elements into the div:

// let div = document.createElement('div');
// let p = document.createElement('p');
// let h2 = document.createElement('h2');

// p.innerText = 'I am a paragraph inside a div';
// h2.innerText = 'I am an h2';

// document.body.append(div);

// div.append(p, h2);

// Below code is more examples of creating elements, adding innerText, addEventListener etc

// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// let button = document.createElement('button');

// h1.innerText = 'Hi, my name is George.';
// p.innerText =
//   'I live in Cancun with my girlfriend Luisa. Yo estoy aprendiendo español y codificacion todos los dias.';

// document.body.appendChild(h1);

// h1.insertAdjacentElement('afterend', p);

// button.innerText = 'Click Me!';

// p.insertAdjacentElement('afterend', button);

// button.addEventListener('click', function () {
//   let h2 = document.createElement('h2');
//   h2.innerText = 'I am an h2';
//   button.insertAdjacentElement('afterend', h2);

//   let removeH2Button = document.createElement('button');
//   removeH2Button.innerText = 'Click me to delete h2';
//   h2.insertAdjacentElement('afterend', removeH2Button);
//   removeH2Button.addEventListener('click', function() {
//       h2.remove()
//       removeH2Button.remove()
//   })
// });
