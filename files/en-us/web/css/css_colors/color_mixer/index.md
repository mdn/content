---
title: Color mixer
slug: Web/CSS/CSS_colors/Color_mixer
page-type: guide
sidebar: cssref
---

This tool lets you mix two colors, `color-one` and `color-two`, using the [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) function. The source colors are shown on the outside, and the mixed color is shown in the middle. You can change colors by clicking on them and choosing a new color using the resulting color picker. You can also change the percentage of each color included in the mix using the sliders, and the color space using the drop-down menu.

```html hidden live-sample___color-mixer
<link rel="stylesheet" href="classic.min.css" />
<script src="pickr.es5.min.js"></script>

<div id="color-mixer">
  <h3>Color mixer</h3>
  <p>Click on 'color-one' and 'color-two' to select colors.</p>

  <label>color-one</label>
  <div>mixed-color</div>
  <label>color-two</label>

  <button
    id="color-one"
    type="button"
    class="color-one"
    aria-label="toggle color picker dialog"></button>
  <div id="mixed-color"></div>
  <button
    id="color-two"
    type="button"
    class="color-two"
    aria-label="toggle color picker dialog"></button>

  <label id="mix-output-text"></label>

  <div>
    <label id="percentage-one-label" for="percentage-one">50%</label>
    <input id="percentage-one" type="range" name="percent1" step="0.1" />
  </div>
  <div>
    <label id="percentage-two-label" for="percentage-two">50%</label>
    <input id="percentage-two" type="range" name="percent2" step="0.1" />
  </div>

  <label for="color-space">color space: </label>
  <select id="color-space">
    <option value="srgb">srgb</option>
    <option value="srgb-linear">srgb-linear</option>
    <option value="lab">lab</option>
    <option value="oklab" selected>oklab</option>
    <option value="xyz">xyz</option>
    <option value="xyz-d50">xyz-d50</option>
    <option value="xyz-d65">xyz-d65</option>
    <option value="hsl">hsl</option>
    <option value="hwb">hwb</option>
    <option value="lch">lch</option>
    <option value="oklch">oklch</option>
  </select>

  <label id="interpolation-method-label" for="interpolation-method"
    >interpolation method:
  </label>
  <select id="interpolation-method">
    <option value="shorter hue" selected>shorter hue</option>
    <option value="longer hue">longer hue</option>
    <option value="increasing hue">increasing hue</option>
    <option value="decreasing hue">decreasing hue</option>
  </select>
</div>
```

```css hidden live-sample___color-mixer
#color-mixer {
  margin: 0.5rem;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 150px 1fr 1fr 150px;
  grid-template-areas:
    "header            header          header              header"
    "text              text            text                text"
    "color-one-text    mix-text        mix-text            color-two-text"
    "color-picker-one  mix-output      mix-output          color-picker-two"
    "mix-output-text   mix-output-text mix-output-text     mix-output-text"
    "percent-one       percent-one     percent-two         percent-two"
    "color-space-label color-space     interpolation-label interpolation";
}

#color-mixer > * {
  padding: 0;
  margin: 0 auto;
}

#color-mixer > :nth-child(1) {
  grid-area: header;
}

#color-mixer > :nth-child(2) {
  grid-area: text;
  margin-bottom: 2rem;
}

#color-mixer > :nth-child(3) {
  grid-area: color-one-text;
}

#color-mixer > :nth-child(4) {
  grid-area: mix-text;
}

#color-mixer > :nth-child(5) {
  grid-area: color-two-text;
}

#color-mixer > :nth-child(6) {
  grid-area: color-picker-one;
  width: 100% !important;
  height: 100px !important;
  border-radius: 20% 0 0 20%;
  cursor: pointer;
  border: none;
  z-index: 1;
  box-shadow: -5px 5px 5px grey;
}

#color-mixer > :nth-child(7) {
  grid-area: mix-output;
  width: 100%;
  height: 100px;
}

#color-mixer > :nth-child(8) {
  grid-area: color-picker-two;
  width: 100%;
  height: 100px;
  border-radius: 0 20% 20% 0;
  cursor: pointer;
  border: none;
  z-index: 1;
  box-shadow: 5px 5px 5px grey;
}

#color-mixer > :nth-child(9) {
  grid-area: mix-output-text;
  margin: 1rem auto auto 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  height: 2.5rem;
}

#color-mixer > :nth-child(10) {
  grid-area: percent-one;
  width: 100%;
  display: flex;
}

#percentage-one-label,
#percentage-two-label {
  width: 2rem;
  text-align: end;
}

#color-mixer > :nth-child(11) {
  grid-area: percent-two;
  width: 100%;
  display: flex;
}

#color-mixer > :nth-child(12) {
  grid-area: color-space-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(13) {
  grid-area: color-space;
  margin: 0.5rem auto 0 1rem;
}

#color-mixer > :nth-child(14) {
  grid-area: interpolation-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(15) {
  grid-area: interpolation;
  margin: 0.5rem auto 0 1rem;
}

input[type="range"] {
  width: 80%;
}

label {
  font-family: monospace;
  margin: 1rem;
}

*:focus {
  outline: 2px dashed purple;
  outline-offset: 1px;
}
```

```js hidden live-sample___color-mixer
const polarColorSpaces = ["hsl", "hwb", "lch", "oklch"];
const root = document.querySelector(":root");

const colorSpace = document.getElementById("color-space");
const interpolationMethod = document.getElementById("interpolation-method");
const interpolationMethodLabel = document.getElementById(
  "interpolation-method-label",
);

const colorOne = document.getElementById("color-one");
const colorTwo = document.getElementById("color-two");
const mixedColor = document.getElementById("mixed-color");
const mixedOutputText = document.getElementById("mix-output-text");

const colorTextOne = document.getElementById("color-one-text");
const colorTextTwo = document.getElementById("color-two-text");

const percentageOneLabel = document.getElementById("percentage-one-label");
const percentageTwoLabel = document.getElementById("percentage-two-label");
const percentageOne = document.getElementById("percentage-one");
const percentageTwo = document.getElementById("percentage-two");

let pickerOne, pickerTwo;

function init() {
  const pickerOptions = {
    el: ".color-one",
    theme: "classic",
    useAsButton: true,
    default: "#ff7f50",
    position: "bottom-middle",
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        hsla: true,
        input: true,
        clear: false,
        save: true,
      },
    },
    swatches: [
      "rgb(244 67 54)",
      "rgb(233 30 99)",
      "rgb(156 39 176)",
      "rgb(103 58 183)",
      "rgb(63 81 181)",
      "rgb(33 150 243)",
      "rgb(3 169 244)",
      "rgb(0 188 212)",
      "rgb(0 150 136)",
      "rgb(76 175 80)",
      "rgb(139 195 74)",
      "rgb(205 220 57)",
      "rgb(255 235 59)",
      "rgb(255 193 7)",
    ],
  };

  pickerOne = Pickr.create(pickerOptions);
  pickerOne.setColor("#ff7f50");
  colorOne.style.setProperty("background-color", "#ff7f50");
  pickerOne.on("change", (color) => {
    colorOne.style.setProperty("background-color", color.toRGBA());
    updateColorMix();
  });
  pickerOne.on("cancel", (instance) => {
    colorOne.style.setProperty(
      "background-color",
      instance.getColor().toRGBA(),
    );
    updateColorMix();
  });
  pickerOne.on("show", (_, instance) => {
    instance.getRoot().app.querySelector(":is(button, [tabindex])").focus();
  });
  pickerOne.on("hide", (instance) => {
    colorOne.focus();
  });

  pickerOptions.el = ".color-two";
  pickerOptions.default = "#00ffff";
  pickerTwo = Pickr.create(pickerOptions);
  pickerTwo.setColor("#00ffff");
  colorTwo.style.setProperty("background-color", "#00ffff");
  pickerTwo.on("change", (color, source, instance) => {
    colorTwo.style.setProperty("background-color", color.toRGBA());
    updateColorMix();
  });
  pickerTwo.on("cancel", (instance) => {
    colorTwo.style.setProperty(
      "background-color",
      instance.getColor().toRGBA(),
    );
    updateColorMix();
  });
  pickerTwo.on("show", (_, instance) => {
    instance.getRoot().app.querySelector(":is(button, [tabindex])").focus();
  });
  pickerTwo.on("hide", (instance) => {
    colorTwo.focus();
  });

  percentageOne.addEventListener("input", (e) => {
    percentageOneLabel.innerText = e.target.value + "%";
    updateColorMix();
  });
  percentageTwo.addEventListener("input", (e) => {
    percentageTwoLabel.innerText = e.target.value + "%";
    updateColorMix();
  });
  colorSpace.addEventListener("change", (e) => {
    if (polarColorSpaces.includes(e.target.value)) {
      interpolationMethod.style.visibility = "visible";
      interpolationMethodLabel.style.visibility = "visible";
    } else {
      interpolationMethod.style.visibility = "hidden";
      interpolationMethodLabel.style.visibility = "hidden";
    }
    updateColorMix();
  });
  interpolationMethod.addEventListener("change", (e) => {
    updateColorMix();
  });

  interpolationMethod.style.visibility = "hidden";
  interpolationMethodLabel.style.visibility = "hidden";
}

function updateColorMix() {
  let colorMixFunction = "color-mix(in ";

  root.style.setProperty("--color-space", colorSpace.value);
  colorMixFunction += colorSpace.value;

  if (polarColorSpaces.includes(colorSpace.value)) {
    root.style.setProperty("--interpolation-method", interpolationMethod.value);
    colorMixFunction += ` ${interpolationMethod.value}, `;
  } else {
    root.style.setProperty("--interpolation-method", "");
    colorMixFunction += `, `;
  }
  root.style.setProperty(
    "--color-one",
    colorOne.style.getPropertyValue("background-color"),
  );
  root.style.setProperty("--percentage-one", percentageOne.value + "%");
  colorMixFunction += `${pickerOne.getColor().toHEXA().toString()} ${
    percentageOne.value
  }%, `;

  root.style.setProperty(
    "--color-two",
    colorTwo.style.getPropertyValue("background-color"),
  );
  root.style.setProperty("--percentage-two", percentageTwo.value + "%");
  colorMixFunction += `${pickerTwo.getColor().toHEXA().toString()} ${
    percentageTwo.value
  }%)`;

  mixedColor.style.setProperty("background-color", colorMixFunction);

  colorMixFunction += ` = ${
    window.getComputedStyle(mixedColor).backgroundColor
  }`;
  mixedOutputText.innerText = colorMixFunction;
}

init();
updateColorMix();
```

{{EmbedLiveSample("color-mixer", "", 400)}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
