const skills = [
  { text: "Html 2 anos", img: "html.png" },
  { text: "css 2 anos", img: "css.png" },
  { text: "javaScript 2 anos", img: "js.jpg" },
  { text: "TypeScript 7 meses", img: "typescript.png" },
  { text: "React js/ts 2 anos", img: "react.png" },
  { text: "Redux 1.6 anos", img: "redux.png" },
  { text: "Next js/ts 1 ano", img: "next.png" },
  { text: "Sass 2 anos", img: "sass.png" },
  { text: "BootStrap 1.5 anos", img: "bootStrap.png" },
  { text: "MongoDb 7 meses ", img: "mongodb.png" },
  { text: "NodeJs 1.6 ano ", img: "nodejs.png" },
  { text: "React FireBase 1 ano ", img: "firebase.png" },
  { text: "Express 1.5 ano ", img: "express.png" },
  { text: "Figma Design 1.3 ano ", img: "figma.png" },
];

const List = document.getElementById("list");

skills.map((elem, i) => {
  List.innerHTML += `<li id="${i}">
    <img src="assets/${elem.img}" />
    <span>${elem.text}</span>
  </li>`;
});
