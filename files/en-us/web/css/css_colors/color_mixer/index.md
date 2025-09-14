---
title: Color mixer
slug: Web/CSS/CSS_colors/Color_mixer
page-type: guide
sidebar: cssref
---

This tool lets you mix two colors, `color-one` and `color-two`, using the [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix) function. The source colors are shown on the outside, and the mixed color is shown in the middle. You can change colors by clicking on them and choosing a new color using the resulting color picker. You can also change the percentage of each color included in the mix using the sliders, and the color space using the drop-down menu.

```html hidden live-sample___color-mixer
<div id="color-mixer">
  <h3>Color mixer</h3>
  <p>Click on 'color-one' and 'color-two' to select colors.</p>

  <div>color-one</div>
  <div>mixed-color</div>
  <div>color-two</div>

  <div id="color-background">
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
  </div>
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
    <option value="srgb">sRGB</option>
    <option value="srgb-linear">sRGB-linear</option>
    <option value="hsl">HSL</option>
    <option value="hwb">HWB</option>
    <option value="lch">LCH</option>
    <option value="oklch">OkLCh</option>
    <option value="lab">Lab</option>
    <option value="oklab" selected>Oklab</option>
    <option value="xyz-d50">XYZ-D50</option>
    <option value="xyz-d65">XYZ-D65</option>
  </select>

  <label id="interpolation-method-label" for="interpolation-method">
    interpolation method:
  </label>
  <select id="interpolation-method">
    <option value="shorter hue" selected>shorter hue</option>
    <option value="longer hue">longer hue</option>
    <option value="increasing hue">increasing hue</option>
    <option value="decreasing hue">decreasing hue</option>
  </select>
  <div id="mix-output-text"></div>
  <dialog id="picker-dialog">
    <div>Pick a color</div>
    <table>
      <tr>
        <td><label for="color-text">Enter color:</label></td>
        <td><input type="text" id="color-text" value="#bada55" /></td>
      </tr>
      <tr>
        <td><label for="color-input">Pick color:</label></td>
        <td><input type="color" id="color-input" value="#bada55" /></td>
      </tr>
      <tr>
        <td><label for="color-opacity">Select an opacity:</label></td>
        <td>
          <input
            type="range"
            id="color-opacity"
            value="1"
            min="0"
            max="1"
            step="0.1" />
        </td>
      </tr>
    </table>
    <div><button id="picker-ok-button">Ok</button></div>
  </dialog>
</div>
<hr />
<table id="output-colors">
  <caption>
    Following is the output color in various color spaces:
  </caption>
  <tbody>
    <tr id="hex">
      <th>Hexadecimal</th>
      <td><button id="copy-hex-button">Copy</button><span></span></td>
    </tr>
    <tr id="rgb-function">
      <th>RGB</th>
      <td><button id="copy-rgb-button">Copy</button><span></span></td>
    </tr>
    <tr id="color-function">
      <th>color(srgb)</th>
      <td><button id="copy-color-button">Copy</button><span></span></td>
    </tr>
    <tr id="hsl-function">
      <th>HSL</th>
      <td><button id="copy-hsl-button">Copy</button><span></span></td>
    </tr>
    <tr id="hwb-function">
      <th>HWB</th>
      <td><button id="copy-hwb-button">Copy</button><span></span></td>
    </tr>
    <tr id="lab-function">
      <th>Lab</th>
      <td><button id="copy-lab-button">Copy</button><span></span></td>
    </tr>
    <tr id="oklab-function">
      <th>Oklab</th>
      <td><button id="copy-oklab-button">Copy</button><span></span></td>
    </tr>
    <tr id="lch-function">
      <th>LCH</th>
      <td><button id="copy-lch-button">Copy</button><span></span></td>
    </tr>
    <tr id="oklch-function">
      <th>OkLCh</th>
      <td><button id="copy-oklch-button">Copy</button><span></span></td>
    </tr>
    <tr id="xyz-d50-function">
      <th>XYZ D50</th>
      <td><button id="copy-xyz-d50-button">Copy</button><span></span></td>
    </tr>
    <tr id="xyz-d65-function">
      <th>XYZ D65</th>
      <td><button id="copy-xyz-d65-button">Copy</button><span></span></td>
    </tr>
  </tbody>
</table>
```

```css hidden live-sample___color-mixer
#picker-dialog[open] {
  position: fixed;
  top: 30%;
  z-index: 100;
  padding: 1rem;
  width: 70vw;
  background: #ddd;
  display: flex;
  flex-flow: column;
  align-items: center;
}

#picker-dialog #color-opacity {
  width: 200px;
}

#picker-dialog > div:first-child {
  font-weight: bold;
  margin-bottom: 1rem;
}

#picker-dialog > div {
  width: max-content;
  margin: 0.4rem auto;
  white-space: nowrap;
}

#picker-dialog #color-text {
  width: 200px;
}

#picker-dialog label {
  margin: 1rem 0;
}

#picker-dialog button {
  width: 100px;
  margin-top: 1rem;
}

dialog#picker-dialog table {
  width: fit-content;
}

#color-mixer {
  margin: 0.5rem;
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 150px 1fr 1fr 150px;
  grid-template-areas:
    "header            header           header              header"
    "text              text             text                text"
    "color-one-label   mix-label        mix-label           color-two-label"
    "color-background  color-background color-background    color-background"
    "percent-one       percent-one      percent-two         percent-two"
    "color-space-label color-space      interpolation-label interpolation"
    "mix-output-text   mix-output-text  mix-output-text     mix-output-text";
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
  grid-area: color-one-label;
}

#color-mixer > :nth-child(4) {
  grid-area: mix-label;
}

#color-mixer > :nth-child(5) {
  grid-area: color-two-label;
}

#color-mixer > :nth-child(6) {
  grid-area: color-background;
  background:
    linear-gradient(
      0deg,
      transparent 0 38%,
      47%,
      rgb(0 0 0 / 0.7) 50%,
      white 50% 100%
    ),
    conic-gradient(
      black 0 90deg,
      transparent 90deg 180deg,
      black 180deg 270deg,
      transparent 270deg 360deg
    );
  background-size:
    100% 100%,
    20px 20px;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: 10% 10% 10% 10%;
}

#color-one {
  height: 100px;
  flex: 1 1 100%;
  border-radius: 20% 0 0 20%;
  cursor: pointer;
  border: none;
  z-index: 1;
  box-shadow: -5px 5px 5px grey;
  background-color: #ff7f50;
}

#mixed-color {
  flex: 2 0.7 100%;
  height: 100px;
}

#color-two {
  height: 100px;
  flex: 1 1 100%;
  border-radius: 0 20% 20% 0;
  cursor: pointer;
  border: none;
  z-index: 1;
  box-shadow: 5px 5px 5px grey;
  background-color: #00ffff;
}

#color-mixer > :nth-child(7) {
  grid-area: percent-one;
  width: 100%;
  display: flex;
}

#percentage-one-label,
#percentage-two-label {
  width: 2rem;
  text-align: end;
}

#color-mixer > :nth-child(8) {
  grid-area: percent-two;
  width: 100%;
  display: flex;
}

#color-mixer > :nth-child(9) {
  grid-area: color-space-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(10) {
  grid-area: color-space;
  margin: 0.5rem auto 0 1rem;
}

#color-mixer > :nth-child(11) {
  grid-area: interpolation-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(12) {
  grid-area: interpolation;
  margin: 0.5rem auto 0 1rem;
}

#color-mixer > :nth-child(13) {
  grid-area: mix-output-text;
  margin: 1rem auto auto 1rem;
  font-weight: bold;
  font-size: 0.8rem;
  height: 2.5rem;
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

table {
  width: 100%;
}
td,
th {
  padding: 3px 15px;
}
th {
  background-color: #ededed;
}
td {
  background-color: #dedede;
  font-family: monospace;
  padding: 0;
}

#output-colors th {
  padding-right: 0;
  width: 20%;
}

#output-colors td button {
  margin-right: 0.4rem;
}
```

```js hidden live-sample___color-mixer
const root = document.querySelector(":root");

const colorSpace = document.getElementById("color-space");
const interpolationMethod = document.getElementById("interpolation-method");
const interpolationMethodLabel = document.getElementById(
  "interpolation-method-label",
);

const colorOneButton = document.getElementById("color-one");
const colorTwoButton = document.getElementById("color-two");
const mixedColorDiv = document.getElementById("mixed-color");
const mixedOutputText = document.getElementById("mix-output-text");

const percentageOneLabel = document.getElementById("percentage-one-label");
const percentageTwoLabel = document.getElementById("percentage-two-label");
const percentageOneSlider = document.getElementById("percentage-one");
const percentageTwoSlider = document.getElementById("percentage-two");

// pop up dialog elements
const pickerDialog = document.getElementById("picker-dialog");
const colorTextInput = document.getElementById("color-text");
const colorInput = document.getElementById("color-input");
const colorOpacitySlider = document.getElementById("color-opacity");
const pickerOkButton = document.getElementById("picker-ok-button");

// color output spans
const hexOutput = document.querySelector("#hex td > span");
const colorFunctionOutput = document.querySelector("#color-function td > span");
const rgbFunctionOutput = document.querySelector("#rgb-function td > span");
const hslFunctionOutput = document.querySelector("#hsl-function td > span");
const hwbFunctionOutput = document.querySelector("#hwb-function td > span");
const labFunctionOutput = document.querySelector("#lab-function td > span");
const oklabFunctionOutput = document.querySelector("#oklab-function td > span");
const lchFunctionOutput = document.querySelector("#lch-function td > span");
const oklchFunctionOutput = document.querySelector("#oklch-function td > span");
const xyzD50FunctionOutput = document.querySelector(
  "#xyz-d50-function td > span",
);
const xyzD65FunctionOutput = document.querySelector(
  "#xyz-d65-function td > span",
);

const LRGB_LMS_MATRIX = [
  [0.4122214708, 0.5363325363, 0.0514459929],
  [0.2119034982, 0.6806995451, 0.1073969566],
  [0.0883024619, 0.2817188376, 0.6299787005],
];

const LMS_LAB_MATRIX = [
  [+0.2104542553, +0.793617785, -0.0040720468],
  [+1.9779984951, -2.428592205, +0.4505937099],
  [+0.0259040371, +0.7827717662, -0.808675766],
];

// srgb-linear to xyz-d50
// matrix taken from http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
const LRGB_XYZ_D50_MATRIX = [
  [0.4360747, 0.3850649, 0.1430804],
  [0.2225045, 0.7168786, 0.0606169],
  [0.0139322, 0.0971045, 0.7141733],
];

// srgb-linear to xyz-d65
// matrix taken from http://www.brucelindbloom.com/index.html?Eqn_RGB_to_XYZ.html
const LRGB_XYZ_D65_MATRIX = [
  [0.4124564, 0.3575761, 0.1804375],
  [0.2126729, 0.7151522, 0.072175],
  [0.0193339, 0.119192, 0.9503041],
];

const polarColorSpaces = ["hsl", "hwb", "lch", "oklch"];
const colorOne = { r: 255, g: 127, b: 80, alpha: 1.0 };
const colorTwo = { r: 0, g: 255, b: 255, alpha: 1.0 };
let currentColor = null;

function rgbToLinear(c) {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function intToHex(i) {
  return Math.floor(i).toString(16).padStart(2, "0").toUpperCase();
}

function rgbToHEXText(c) {
  return `#${intToHex(c.r)}${intToHex(c.g)}${intToHex(c.b)}`;
}

function colorToRGBA(c) {
  const ctx = new OffscreenCanvas(1, 1).getContext("2d");
  ctx.fillStyle = c;
  ctx.fillRect(0, 0, 1, 1);
  const data = ctx.getImageData(0, 0, 1, 1).data;
  return {
    r: data[0],
    g: data[1],
    b: data[2],
    alpha: data[3] / 255,
  };
}

function multiplyByMatrix(matrix, tuple) {
  let i = [0, 0, 0];
  let j = matrix.length;
  let k = matrix[0].length;
  for (let l = 0; l < j; l++)
    for (let m = 0; m < k; m++) i[l] += matrix[l][m] * tuple[m];
  return i;
}

function rgbaToHEXAText(color) {
  const hexText = rgbToHEXText(color);
  if (color.alpha === 1.0) {
    return hexText;
  }
  const alpha = intToHex(color.alpha * 255);
  return `${hexText}${alpha}`;
}

function rgbaToHSLA(color) {
  let { r, g, b, a: alpha } = color;
  // Let's have r, g, b in the range [0, 1]
  r = r / 255;
  g = g / 255;
  b = b / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h, s, l;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else h = (r - g) / delta + 4;
  h = Math.round(h * 60);

  // We want an angle between 0 and 360°
  if (h < 0) {
    h += 360;
  }

  l = (max + min) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = Number((s * 100).toFixed(1));
  l = Number((l * 100).toFixed(1));

  return { h, s, l, alpha };
}

function toHSLAText(color) {
  const { h, s, l, alpha } = rgbaToHSLA(color);
  return `hsl(${h.toFixed(0)} ${s.toFixed(0)}% ${l.toFixed(0)}%${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbaToHWBAText(color) {
  let { h, s, l, alpha } = rgbaToHSLA(color);
  const chroma = s * (1 - Math.abs(l / 50 - 1));
  let W = (l - chroma / 2).toFixed(0);
  let B = (100 - l - chroma / 2).toFixed(0);
  return `hwb(${h} ${W}% ${B}%${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function rgbaToXYZD50(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255) * 255;
  g = rgbToLinear(g / 255) * 255;
  b = rgbToLinear(b / 255) * 255;

  const xyz = multiplyByMatrix(LRGB_XYZ_D50_MATRIX, [r, g, b]);
  return { x: xyz[0] / 255, y: xyz[1] / 255, z: xyz[2] / 255, a: alpha };
}

function rgbaToXYZD50Text(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  return `color(xyz-d50 ${xyz.x.toFixed(5)} ${xyz.y.toFixed(5)} ${xyz.z.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function rgbaToXYZD65(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255) * 255;
  g = rgbToLinear(g / 255) * 255;
  b = rgbToLinear(b / 255) * 255;

  const xyz = multiplyByMatrix(LRGB_XYZ_D65_MATRIX, [r, g, b]);
  return { x: xyz[0] / 255, y: xyz[1] / 255, z: xyz[2] / 255, a: alpha };
}

function rgbaToXYZD65Text(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD65(color);
  return `color(xyz-d65 ${xyz.x.toFixed(5)} ${xyz.y.toFixed(5)} ${xyz.z.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

const D65 = [0.3457 / 0.3585, 1, 0.2958 / 0.3585];
function xyzToLab(color) {
  let { x, y, z, alpha } = color;
  [x, y, z] = [x, y, z].map((v, i) => {
    v = v / D65[i];
    return v > 0.0088564516 ? Math.cbrt(v) : v * 903.2962962962963 + 16 / 116;
  });
  return { l: 116 * y - 16, a: 500 * (x - y), b: 200 * (y - z), alpha };
}

function rgbaToLabText(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  const lab = xyzToLab(xyz);
  return `lab(${lab.l.toFixed(3)} ${lab.a.toFixed(3)} ${lab.b.toFixed(3)}${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbToOklab(color) {
  let { r, g, b, alpha } = color;
  r = rgbToLinear(r / 255);
  g = rgbToLinear(g / 255);
  b = rgbToLinear(b / 255);
  const lms = multiplyByMatrix(LRGB_LMS_MATRIX, [r, g, b]).map((v) =>
    Math.cbrt(v),
  );

  const oklab = multiplyByMatrix(LMS_LAB_MATRIX, lms);
  return { l: oklab[0], a: oklab[1], b: oklab[2], a: alpha };
}

function toOkLabText(color) {
  let { alpha } = color;
  const oklab = rgbToOklab(color);
  return `oklab(${oklab.l.toFixed(5)} ${oklab.a.toFixed(5)} ${oklab.b.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
}

function labToLCH(color) {
  const { l, a, b, alpha } = color;
  const c = Math.sqrt(a * a + b * b);
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) {
    h += 360;
  }
  return { l, c, h, alpha };
}

function toLCHText(color) {
  let { alpha } = color;
  const xyz = rgbaToXYZD50(color);
  const lab = xyzToLab(xyz);
  const lch = labToLCH(lab);
  return `lch(${lch.l.toFixed(3)} ${lch.c.toFixed(3)} ${lch.h.toFixed(3)}${
    alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""
  })`;
}

function rgbaToOkLCh(color) {
  const lab = rgbToOklab(color);
  const oklch = labToLCH(lab);
  return { l: oklch.l, c: oklch.c, h: oklch.h, alpha: color.alpha };
}

function toOkLChText(color) {
  let { alpha } = color;
  const oklch = rgbaToOkLCh(color);
  return `oklch(${oklch.l.toFixed(5)} ${oklch.c.toFixed(5)} ${oklch.h.toFixed(
    5,
  )}${alpha < 1.0 ? ` / ${alpha.toFixed(3)}` : ""})`;
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
    colorOneButton.style.getPropertyValue("background-color"),
  );
  root.style.setProperty("--percentage-one", percentageOneSlider.value + "%");
  colorMixFunction += `${rgbaToHEXAText(colorOne)} ${
    percentageOneSlider.value
  }%, `;

  root.style.setProperty(
    "--color-two",
    colorTwoButton.style.getPropertyValue("background-color"),
  );
  root.style.setProperty("--percentage-two", percentageTwoSlider.value + "%");
  colorMixFunction += `${rgbaToHEXAText(colorTwo)} ${
    percentageTwoSlider.value
  }%)`;

  mixedColorDiv.style.setProperty("background-color", colorMixFunction);

  const mixedColorText = window.getComputedStyle(mixedColorDiv).backgroundColor;
  colorMixFunction += ` = ${mixedColorText}`;
  mixedOutputText.innerText = colorMixFunction;
  displayOutputColors(mixedColorText);
}

function displayOutputColors(color) {
  let rgbaColor = colorToRGBA(color);

  hexOutput.innerText = rgbaToHEXAText(rgbaColor);

  rgbFunctionOutput.innerText = `rgb(${Math.round(rgbaColor.r)} ${Math.round(
    rgbaColor.g,
  )} ${Math.round(rgbaColor.b)}`;
  if (rgbaColor.alpha && rgbaColor.alpha < 1.0) {
    rgbFunctionOutput.innerText += ` / ${rgbaColor.alpha.toFixed(3)}`;
  }
  rgbFunctionOutput.innerText += `)`;

  colorFunctionOutput.innerText = `color(srgb ${(rgbaColor.r / 255).toFixed(
    3,
  )} ${(rgbaColor.g / 255).toFixed(3)} ${(rgbaColor.b / 255).toFixed(3)}`;
  if (rgbaColor.alpha && rgbaColor.alpha < 1.0) {
    colorFunctionOutput.innerText += ` / ${rgbaColor.alpha.toFixed(3)}`;
  }
  colorFunctionOutput.innerText += `)`;

  hslFunctionOutput.innerText = toHSLAText(rgbaColor);

  hwbFunctionOutput.innerText = rgbaToHWBAText(rgbaColor);
  labFunctionOutput.innerText = rgbaToLabText(rgbaColor);
  xyzD50FunctionOutput.innerText = rgbaToXYZD50Text(rgbaColor);
  xyzD65FunctionOutput.innerText = rgbaToXYZD65Text(rgbaColor);
  lchFunctionOutput.innerText = toLCHText(rgbaColor);
  oklabFunctionOutput.innerText = toOkLabText(rgbaColor);
  oklchFunctionOutput.innerText = toOkLChText(rgbaColor);
}

function setColorToDialog() {
  colorTextInput.value = rgbaToHEXAText(currentColor);
  colorInput.value = rgbToHEXText(currentColor);
  colorOpacitySlider.value = currentColor.alpha;
}

function init() {
  percentageOneSlider.addEventListener("input", (e) => {
    percentageOneLabel.innerText = e.target.value + "%";
    updateColorMix();
  });

  percentageTwoSlider.addEventListener("input", (e) => {
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

  interpolationMethod.addEventListener("change", () => {
    updateColorMix();
  });

  interpolationMethod.style.visibility = "hidden";
  interpolationMethodLabel.style.visibility = "hidden";

  colorOneButton.addEventListener("click", () => {
    currentColor = colorOne;
    setColorToDialog();
    pickerDialog.showModal();
  });

  colorTwoButton.addEventListener("click", () => {
    currentColor = colorTwo;
    setColorToDialog();
    pickerDialog.showModal();
  });

  colorTextInput.addEventListener("input", (e) => {
    const color = colorToRGBA(e.target.value);
    Object.assign(currentColor, color);
    colorInput.value = rgbToHEXText(currentColor);
    colorOpacitySlider.value = currentColor.alpha;
  });

  colorInput.addEventListener("input", (e) => {
    const text = e.target.value;
    currentColor.r = parseInt(text.slice(1, 3), 16);
    currentColor.g = parseInt(text.slice(3, 5), 16);
    currentColor.b = parseInt(text.slice(5, 7), 16);
    colorTextInput.value = rgbaToHEXAText(currentColor);
    colorOpacitySlider.value = 1.0;
  });

  colorOpacitySlider.addEventListener("input", (e) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 1) {
      currentColor.alpha = value;
      colorTextInput.value = rgbaToHEXAText(currentColor);
    }
  });

  pickerOkButton.addEventListener("click", () => {
    colorOneButton.style.setProperty(
      "background-color",
      rgbaToHEXAText(colorOne),
    );
    colorTwoButton.style.setProperty(
      "background-color",
      rgbaToHEXAText(colorTwo),
    );
    pickerDialog.close();
    updateColorMix();
  });

  document.querySelectorAll("#output-colors button").forEach((button) => {
    button.addEventListener("click", (e) => {
      // get parent element
      const text = e.target.nextElementSibling.innerText;
      navigator.clipboard.writeText(text);
      e.target.innerText = "Copied!";
      setTimeout(() => {
        e.target.innerText = "Copy";
      }, 1000);
    });
  });

  updateColorMix();
}

init();
```

{{EmbedLiveSample("color-mixer", "", 750, "", "", "", "clipboard-write")}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("&lt;hue&gt;")}}
- [CSS relative colors](/en-US/docs/Web/CSS/CSS_colors/Relative_colors)
