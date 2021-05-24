# ⚙️ Project

I created this project, using **JavaScript**, to solve a need of mine, to adjust sizes (at first, font size) depending on the size of the user's viewport, in a **more responsive** and **intuitive** way than mediaqueries, from CSS.

# ✈️ Technologies

- HTML
- CSS
- JavaScript

# 💻 Result

> COMING SOON...

# 🤷‍♂️ How to use?

In the <a href="https://github.com/RuuuFF/responsive-adjust/blob/master/SizeAdjust.js">SizeAdjust.js</a> file have an object called **Options** and an array called **CSSDeclarations**.

Starting with **Options**:

```js
const Options = {
  minWidth: 420,
  maxWidth: 1365,
  measure: "rem",
};
```

In the object **Options**, i'm passing the minimum (_minWidth_) amount and the maximum (_maxWidth_) of the viewport (**in px**), so that it scales the size while between these two values, with them, the _measure_ that I will use (**important for the next part**).

Now in the array **CSSDeclarations**:

```js
const CSSDeclarations = [
  {
    selector: "h1",
    propAndValue: [
      { property: "font-size", min: 2.2, max: 5 },
      { property: "line-height", min: 2.6, max: 5.4 },
    ],
  },

  {
    selector: "div",
    propAndValue: [
      { property: "width", min: 25, max: 50 },
      { property: "height", min: 10, max: 20 },
    ],
  },
];
```

In the array **CSSDeclarations** i add objects (how many do you need). Inside each object (declaration) I have the _selector_ and an array called _propAndValue_.

In _selector_ i pass, obviously, the selector, as if it were in CSS (class, id, pseudo-elements, etc).

Inside _propAndValue_ i have an array with objects (how many do you need), inside the object i set the _property_ (like font-size), the _min_ size and _max_ size you want scale.

So, while the screen is between _420px_ e _1365px_, font-size of element **h1** will scale between 2.2rem to 5rem and line-height between 2.6rem to 5.4rem. Same happens with **div** selector and properties width and height values.

# ⚖ License

<a href="https://github.com/RuuuFF/responsive-adjust/blob/master/LICENSE">The MIT License</a>

Copyright (c) 2021 Carlos Daniel
