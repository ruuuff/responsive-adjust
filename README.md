# ⚙️ Project

I created this project, using **JavaScript**, to solve a need of mine, to adjust sizes depending on the size of the user's viewport, in a **more responsive** and **intuitive** way than mediaqueries, from CSS.

# ✈️ Technologies

- HTML
- CSS
- JavaScript

# 💻 Result

<div align="center">
  <img src="https://i.imgur.com/5gonwVC.gif" alt="Responsive Adjust" />
</div>

# 🤷‍♂️ How to use?

In the <a href="https://github.com/RuuuFF/responsive-adjust/blob/master/ResponsiveAdjust.js">ResponsiveAdjust.js</a> file have an object called **Options** and an array called **CSSDeclarations**.

Starting with **Options**:

```js
const Options = {
  minWidth: 480,
  maxWidth: 1365,
  measure: "rem",
};
```

In the object **Options**, i'm passing the minimum (_minWidth_) amount and the maximum (_maxWidth_) of the viewport (**in px**), so that it scales the size while between these two values, with them, the _measure_ that will use (**important for the next part**).

Now in the array **CSSDeclarations**:

```js
const CSSDeclarations = [
  {
    selector: ":root",
    propAndValue: [
      { property: "--xlarge", min: 2.5, max: 5 },
      { property: "--large", min: 1.7, max: 3.4 },
    ],
  },

  {
    selector: "div",
    propAndValue: [
      { property: "width", min: 30, max: 60 },
      { property: "height", min: 12.5, max: 25 },
    ],
  },
];
```

In the array **CSSDeclarations** add objects (how many do you need). Inside each object (declaration) have the _selector_ and an array called _propAndValue_.

In _selector_ pass, obviously, the selector, as if it were in CSS (class, id, pseudo-elements, etc).

Inside _propAndValue_ have an array with objects (how many do you need), inside the object set the _property_ (like font-size, variables, etc), the _min_ size and _max_ size you want scale.

So, while the screen is between _480px_ e _1365px_, using **:root** selector, the size of the variable **--xlarge** will scale between 2.5rem to 5rem and **--large** between 1.7rem to 3.4rem. Same happens with **div** selector and properties width and height values.

# ⚖ License

<a href="https://github.com/RuuuFF/responsive-adjust/blob/master/LICENSE">The MIT License</a>

Copyright (c) 2021 Carlos Daniel
