const Options = {
  minWidth: 480,
  maxWidth: 1365,
  measure: "rem",
}

const CSSDeclarations = [
  {
    selector: ":root",
    propAndValue: [
      { property: "--xlarge", min: 2.5, max: 5 },
      { property: "--large", min: 1.7, max: 3.4 },
    ],
  },

  {
    selector: "h1",
    propAndValue: [
      { property: "margin-bottom", min: 1, max: 2 }
    ],
  },

  {
    selector: "div",
    propAndValue: [
      { property: "width", min: 30, max: 60 },
      { property: "height", min: 12.5, max: 25 },
    ],
  },
]

const ResponsiveAdjust = {
  createStyleEl() {
    const styleEl = document.createElement("style")
    styleEl.setAttribute("id", "responsive-adjust")
    document.querySelector("head").appendChild(styleEl)
    styleEl.insertAdjacentHTML("beforebegin", "<!-- Style injected by ResponsiveAdjust (github.com/ruuuff/responsive-adjust) -->")
  },

  scale(num, in_min, in_max, out_min, out_max) {
    const percentage = (num - in_min) / (in_max - in_min)
    let value = percentage * (out_max - out_min) + out_min

    value < out_min ? value = out_min : value
    value > out_max ? value = out_max : value

    return value
  },

  callScaleWithParameters: (min, max) => ResponsiveAdjust.scale(
    Number(document.documentElement.clientWidth),
    Number(Options.minWidth),
    Number(Options.maxWidth),
    Number(min),
    Number(max)
  ),

  formatSize: sizeToFormat => parseFloat(sizeToFormat.toFixed(3)),

  innerStyles() {
    const style = document.querySelector("head style#responsive-adjust")
    style.innerHTML = ""

    for (const [index, { selector, propAndValue }] of CSSDeclarations.entries()) {
      style.insertAdjacentHTML("beforeend", `${selector} {`)

      for (const { property, min, max } of propAndValue) {
        const scaledValue  = this.callScaleWithParameters(min, max)
        const size = this.formatSize(scaledValue)

        style.insertAdjacentHTML("beforeend",`  ${property}: ${size + Options.measure};`)
      }

      style.insertAdjacentHTML("beforeend", index !== CSSDeclarations.length - 1 ? `}
      ` : `}`)
    }
  },

  start() {
    this.createStyleEl()
    this.innerStyles()
    window.addEventListener("resize", () => this.innerStyles())
  },
};

ResponsiveAdjust.start()