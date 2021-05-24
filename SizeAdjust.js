const Options = {
  minWidth: 420,
  maxWidth: 1365,
  measure: "rem"
}

const CSSDeclarations = [
  {
    selector: "h1",
    propAndValue: [
      { property: "font-size", min: 2.2, max: 5 },
      { property: "line-height", min: 2.6, max: 5.4 },
      { property: "margin-bottom", min: 1, max: 1.5 }
    ]
  },

  {
    selector: "div",
    propAndValue: [
      { property: "width", min: 25, max: 50 },
      { property: "height", min: 10, max: 20 }
    ]
  },

  {
    selector: "p",
    propAndValue: [
      { property: "font-size", min: 1.4, max: 3.4 },
      { property: "line-height", min: 1.8, max: 3.8 }
    ]
  }
]

const SizeAdjust = {
  createStyleEl() {
    const styleEl = document.createElement('style')
    styleEl.setAttribute("id", "size-adjust")
    document.querySelector('head').appendChild(styleEl)
    styleEl.insertAdjacentHTML("beforebegin", "<!-- Style injected by SizeAdjust (github.com/ruuuff) -->")
  },

  scale(num, in_min, in_max, out_min, out_max) {
    let value = (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
    
    value <= out_min ? value = out_min : value
    value >= out_max ? value = out_max : value

    return value
  },

  callScaleWithParameters(min, max) {
    return SizeAdjust.scale(Number(document.documentElement.clientWidth), Number(Options.minWidth), Number(Options.maxWidth), Number(min), Number(max))
  },

  innerStyles() {
    const style = document.querySelector('head style#size-adjust')
    style.innerHTML = ""

    CSSDeclarations.forEach(({ selector, propAndValue }) => {
      style.insertAdjacentHTML("beforeend", `${selector} {`)

      propAndValue.forEach(({ property, min, max }) => {
        const size = SizeAdjust.callScaleWithParameters(min, max).toFixed(2)

        style.insertAdjacentHTML("beforeend", `  ${property}: ${size + Options.measure};`)
      })
      style.insertAdjacentHTML("beforeend", `}
      `)
    })
  },
}

SizeAdjust.createStyleEl()
SizeAdjust.innerStyles()
window.addEventListener('resize', SizeAdjust.innerStyles)