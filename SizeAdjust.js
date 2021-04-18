Options = {
  minWidth: 420,
  maxWidth: 1365,
  measure: "rem"
},

CSSSelectors = [
  {
    selector: "h1",
    propAndValue: [
      {
        property: "font-size",
        min: 2.2,
        max: 5,
      },
      {
        property: "line-height",
        min: 2.4,
        max: 5.4,
      }
    ]
  },

  {
    selector: "div",
    propAndValue: [
      {
        property: "width",
        min: 25,
        max: 50,
      },
      {
        property: "height",
        min: 10,
        max: 20,
      }
    ]
  }
]

const SizeAdjust = {
  scale(num, in_min, in_max, out_min, out_max) {
    let value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    
    value <= out_min ? value = out_min : value
    value >= out_max ? value = out_max : value
    
    return value
  },

  scaler(min, max) {
    const screenWidth = Number(window.innerWidth)

    return SizeAdjust.scale(screenWidth, Number(Options.minWidth), Number(Options.maxWidth), Number(min), Number(max))
  },

  createStyleEl() {
    const head = document.getElementsByTagName('head')[0]
    const style = document.createElement('style')
    head.appendChild(style)
    style.insertAdjacentHTML("beforebegin", "<!-- Style injected by SizeAdjust (github.com/ruuuff) -->")
  },

  sizeAdjust() {
    const style = document.getElementsByTagName('style')[0]

    style.innerHTML = ""

    CSSSelectors.forEach(obj => {
      const { selector, propAndValue } = obj

      style.insertAdjacentHTML("beforeend", `${selector} {`)

      propAndValue.forEach(prop => {
        const { property, min, max } = prop

        const getSize = SizeAdjust.scaler(min, max).toFixed(1)

        style.insertAdjacentHTML("beforeend", `  ${property}: ${String(getSize + Options.measure)};`)
      })
      style.insertAdjacentHTML("beforeend", `}
      `)
    })
  },
}

SizeAdjust.createStyleEl()
SizeAdjust.sizeAdjust()
window.addEventListener('resize', SizeAdjust.sizeAdjust)
