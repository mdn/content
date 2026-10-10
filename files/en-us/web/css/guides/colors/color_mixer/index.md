---
title: Color mixer
slug: Web/CSS/Guides/Colors/Color_mixer
page-type: guide
sidebar: cssref
---

This tool lets you mix two colors in any color space using the {{cssxref("color_value/color-mix")}} function and copy the resulting color in any CSS color format.

The two input colors, `color-one` and `color-two`, are shown on the outside, and the mixed color returned by the function is shown in the middle. Click the outer swatches to select new colors to mix. Use the sliders to change the percentages of each input color included in the mix. Use the drop-down menu to change the color space of the function's output. The resulting color's values in different formats appear in a table following the widget and can be copied. You can also click a color format name to learn more about it.

```html hidden live-sample___color-mixer
<div id="color-mixer">
  <div>color-one</div>
  <div>mixed-color</div>
  <div>color-two</div>

  <div id="color-background">
    <button
      id="color-one"
      type="button"
      class="color-one"
      aria-label="Open the color one picker dialog"></button>
    <div id="mixed-color"></div>
    <button
      id="color-two"
      type="button"
      class="color-two"
      aria-label="Open the color two picker dialog"></button>
  </div>
  <div>
    <label
      id="percentage-one-label"
      for="percentage-one"
      aria-label="color one percentage">
      50%
    </label>
    <input id="percentage-one" type="range" name="percent1" step="0.01" />
  </div>
  <div>
    <label
      id="percentage-two-label"
      for="percentage-two"
      aria-label="color two percentage">
      50%
    </label>
    <input id="percentage-two" type="range" name="percent2" step="0.01" />
  </div>

  <label for="color-space">Color space: </label>
  <select id="color-space">
    <option value="srgb">sRGB</option>
    <option value="srgb-linear">sRGB-linear</option>
    <option value="hsl">HSL</option>
    <option value="hwb">HWB</option>
    <option value="lab">Lab</option>
    <option value="lch">LCH</option>
    <option value="oklab" selected>Oklab</option>
    <option value="oklch">OkLCh</option>
    <option value="xyz-d50">XYZ-D50</option>
    <option value="xyz-d65">XYZ-D65</option>
  </select>

  <label id="interpolation-method-label" for="interpolation-method">
    Hue interpolation method:
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
      <tbody>
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
              step="0.01" />
          </td>
        </tr>
      </tbody>
    </table>
    <div><button id="picker-ok-button">Ok</button></div>
  </dialog>
</div>
<hr />
<table id="output-colors">
  <caption>
    Mixed color in different formats:
  </caption>
  <tbody>
    <tr id="rgb-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/rgb"
          target="_blank">
          RGB
        </a>
      </th>
      <td><button id="copy-rgb-button">Copy</button><span></span></td>
    </tr>
    <tr id="hex">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/hex-color"
          target="_blank"
          >HEX</a
        >
      </th>
      <td><button id="copy-hex-button">Copy</button><span></span></td>
    </tr>
    <tr id="hsl-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/hsl"
          target="_blank">
          HSL
        </a>
      </th>
      <td><button id="copy-hsl-button">Copy</button><span></span></td>
    </tr>
    <tr id="hwb-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/hwb"
          target="_blank">
          HWB
        </a>
      </th>
      <td><button id="copy-hwb-button">Copy</button><span></span></td>
    </tr>
    <tr id="color-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color"
          target="_blank">
          color()
        </a>
      </th>
      <td><button id="copy-color-button">Copy</button><span></span></td>
    </tr>
    <tr id="lab-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/lab"
          target="_blank">
          Lab
        </a>
      </th>
      <td><button id="copy-lab-button">Copy</button><span></span></td>
    </tr>
    <tr id="lch-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/lch"
          target="_blank">
          LCH
        </a>
      </th>
      <td><button id="copy-lch-button">Copy</button><span></span></td>
    </tr>
    <tr id="oklab-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklab"
          target="_blank">
          Oklab
        </a>
      </th>
      <td><button id="copy-oklab-button">Copy</button><span></span></td>
    </tr>
    <tr id="oklch-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch"
          target="_blank">
          OkLCh
        </a>
      </th>
      <td><button id="copy-oklch-button">Copy</button><span></span></td>
    </tr>
    <tr id="xyz-d50-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Color_space#xyz-d50"
          target="_blank">
          XYZ D50
        </a>
      </th>
      <td><button id="copy-xyz-d50-button">Copy</button><span></span></td>
    </tr>
    <tr id="xyz-d65-function">
      <th>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Color_space#xyz"
          target="_blank">
          XYZ D65
        </a>
      </th>
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
  background: #dddddd;
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
  grid-area: color-one-label;
}

#color-mixer > :nth-child(2) {
  grid-area: mix-label;
}

#color-mixer > :nth-child(3) {
  grid-area: color-two-label;
}

#color-mixer > :nth-child(4) {
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
  border-radius: 10%;
}

#color-one {
  height: 100px;
  flex: 1 1 100%;
  border-radius: 20% 0 0 20%;
  cursor: pointer;
  border: none;
  z-index: 1;
  box-shadow: -5px 5px 5px grey;
  background-color: coral;
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
  background-color: cyan;
}

#color-mixer > :nth-child(5) {
  grid-area: percent-one;
  width: 100%;
  display: flex;
}

#percentage-one-label,
#percentage-two-label {
  width: 2rem;
  text-align: end;
}

#color-mixer > :nth-child(6) {
  grid-area: percent-two;
  width: 100%;
  display: flex;
}

#color-mixer > :nth-child(7) {
  grid-area: color-space-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(8) {
  grid-area: color-space;
  margin: 0.5rem auto 0 1rem;
}

#color-mixer > :nth-child(9) {
  grid-area: interpolation-label;
  margin: 0.5rem 0 0 auto;
}

#color-mixer > :nth-child(10) {
  grid-area: interpolation;
  margin: 0.5rem auto 0 1rem;
}

#color-mixer > :nth-child(11) {
  grid-area: mix-output-text;
  margin: 1rem 0;
  padding: 1rem 0;
  text-align: center;
  background-color: #dfdfde;
  font-family: monospace;
}

input[type="range"] {
  width: 80%;
}

label {
  margin: 1rem;
}

*:focus {
  outline: 2px dashed purple;
  outline-offset: 1px;
}

table {
  width: 100%;
}
caption {
  font-family: sans-serif;
}
th {
  padding: 5px 15px;
  background-color: #ededed;
}
td {
  background-color: #dedede;
  font-family: monospace;
  padding: 5px;
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

const get = (id) => document.getElementById(id);
const colorSpace = get("color-space");
const interpolationMethod = get("interpolation-method");
const pickerDialog = get("picker-dialog");
const colorTextInput = get("color-text");
const colorInput = get("color-input");
const colorOpacitySlider = get("color-opacity");
const mixedColorDiv = get("mixed-color");
const colors = ["one", "two"].map((name, i) => ({
  button: get(`color-${name}`),
  slider: get(`percentage-${name}`),
  label: get(`percentage-${name}-label`),
  rgba: i === 0 ? [255, 127, 80, 1] : [0, 255, 255, 1],
}));
let currentColor;

function toHex(rgba) {
  return `#${rgba
    .slice(0, rgba[3] === 1 ? 3 : 4)
    .map((value, i) =>
      Math.floor(i === 3 ? value * 255 : value)
        .toString(16)
        .padStart(2, "0"),
    )
    .join("")}`;
}

function colorToRGBA(color) {
  const ctx = new OffscreenCanvas(1, 1).getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  const [r, g, b, alpha] = ctx.getImageData(0, 0, 1, 1).data;
  return [r, g, b, alpha / 255];
}

const multiply = (matrix, vector) =>
  matrix.map((row) =>
    row.reduce((sum, value, i) => sum + value * vector[i], 0),
  );
const rgbToLinear = (c) =>
  c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const fixed = (values, digits) =>
  values.map((v) => v.toFixed(digits)).join(" ");

function toHSL(rgb) {
  const [r, g, b] = rgb.map((value) => value / 255);
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h = 0;
  if (delta !== 0) {
    if (max === r) h = ((g - b) / delta) % 6;
    else if (max === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;
  }
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  const l = (max + min) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  return [h, Number((s * 100).toFixed(1)), Number((l * 100).toFixed(1))];
}

function xyzToLab(xyz) {
  const white = [0.3457 / 0.3585, 1, 0.2958 / 0.3585];
  const [x, y, z] = xyz.map((value, i) => {
    const v = value / white[i];
    return v > 0.0088564516 ? Math.cbrt(v) : v * 903.2962962962963 + 16 / 116;
  });
  return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
}

function labToLCH([l, a, b]) {
  let h = Math.atan2(b, a) * (180 / Math.PI);
  if (h < 0) h += 360;
  return [l, Math.sqrt(a * a + b * b), h];
}

function displayOutputColors(color) {
  const rgba = colorToRGBA(color);
  const rgb = rgba.slice(0, 3);
  const alpha = rgba[3] < 1 ? ` / ${rgba[3].toFixed(3)}` : "";
  const rgbAlpha = rgba[3] ? alpha : "";
  const linear = rgb.map((value) => rgbToLinear(value / 255));
  const [xyzD50, xyzD65] = [LRGB_XYZ_D50_MATRIX, LRGB_XYZ_D65_MATRIX].map(
    (matrix) =>
      multiply(
        matrix,
        linear.map((v) => v * 255),
      ).map((v) => v / 255),
  );
  const lab = xyzToLab(xyzD50);
  const oklab = multiply(
    LMS_LAB_MATRIX,
    multiply(LRGB_LMS_MATRIX, linear).map(Math.cbrt),
  );
  const [h, s, l] = toHSL(rgb);
  const chroma = s * (1 - Math.abs(l / 50 - 1));
  const white = (l - chroma / 2).toFixed(0);
  const black = (100 - l - chroma / 2).toFixed(0);
  const outputs = {
    hex: toHex(rgba),
    "rgb-function": `rgb(${rgb.map(Math.round).join(" ")}${rgbAlpha})`,
    "color-function": `color(srgb ${fixed(
      rgb.map((v) => v / 255),
      3,
    )}${rgbAlpha})`,
    "hsl-function": `hsl(${h.toFixed(0)} ${s.toFixed(0)}% ${l.toFixed(0)}%${alpha})`,
    "hwb-function": `hwb(${h} ${white}% ${black}%${alpha})`,
  };
  for (const [name, values, digits] of [
    ["lab", lab, 3],
    ["lch", labToLCH(lab), 3],
    ["oklab", oklab, 5],
    ["oklch", labToLCH(oklab), 5],
    ["xyz-d50", xyzD50, 5],
    ["xyz-d65", xyzD65, 5],
  ]) {
    const prefix = name.startsWith("xyz") ? `color(${name} ` : `${name}(`;
    outputs[`${name}-function`] = `${prefix}${fixed(values, digits)}${alpha})`;
  }
  for (const [id, text] of Object.entries(outputs)) {
    get(id).querySelector("span").innerText = text;
  }
}

function updateColorMix() {
  const polar = ["hsl", "hwb", "lch", "oklch"].includes(colorSpace.value);
  const method = polar ? ` ${interpolationMethod.value}` : "";
  for (const element of [
    interpolationMethod,
    get("interpolation-method-label"),
  ]) {
    element.style.visibility = polar ? "visible" : "hidden";
  }
  const stops = colors.map(
    ({ rgba, slider }) => `${toHex(rgba)} ${slider.value}%`,
  );
  const mix = `color-mix(in ${colorSpace.value}${method}, ${stops.join(", ")})`;
  mixedColorDiv.style.backgroundColor = mix;
  get("mix-output-text").innerText = mix;
  displayOutputColors(getComputedStyle(mixedColorDiv).backgroundColor);
}

function syncPicker() {
  colorTextInput.value = toHex(currentColor.rgba);
  colorInput.value = toHex(currentColor.rgba.slice(0, 3));
  colorOpacitySlider.value = currentColor.rgba[3];
}

colors.forEach((color) => {
  color.slider.addEventListener("input", () => {
    color.label.innerText = `${color.slider.value}%`;
    updateColorMix();
  });
  color.button.addEventListener("click", () => {
    currentColor = color;
    syncPicker();
    pickerDialog.showModal();
  });
});
for (const control of [colorSpace, interpolationMethod]) {
  control.addEventListener("change", updateColorMix);
}

colorTextInput.addEventListener("input", () => {
  currentColor.rgba = colorToRGBA(colorTextInput.value);
  // Preserve the text being edited while updating the other controls.
  colorInput.value = toHex(currentColor.rgba.slice(0, 3));
  colorOpacitySlider.value = currentColor.rgba[3];
});
colorInput.addEventListener("input", () => {
  currentColor.rgba.splice(
    0,
    3,
    ...[1, 3, 5].map((i) => parseInt(colorInput.value.slice(i, i + 2), 16)),
  );
  syncPicker();
});
colorOpacitySlider.addEventListener("input", () => {
  const alpha = colorOpacitySlider.valueAsNumber;
  if (alpha >= 0 && alpha <= 1) {
    currentColor.rgba[3] = alpha;
    colorTextInput.value = toHex(currentColor.rgba);
  }
});
get("picker-ok-button").addEventListener("click", () => {
  colors.forEach(({ button, rgba }) => {
    button.style.backgroundColor = toHex(rgba);
  });
  pickerDialog.close();
  updateColorMix();
});

document.querySelectorAll("#output-colors button").forEach((button) => {
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(button.nextElementSibling.innerText);
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 1000);
  });
});

updateColorMix();
```

{{EmbedLiveSample("color-mixer", "", 760, "", "", "", "clipboard-write", "allow-popups")}}

## See also

- {{CSSXref("&lt;color&gt;")}}
- {{CSSXref("&lt;color-interpolation-method&gt;")}}
- {{cssxref("hue")}}
- [CSS relative colors](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors)
