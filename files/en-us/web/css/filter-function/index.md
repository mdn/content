---
title: <filter-function>
slug: Web/CSS/filter-function
page-type: css-type
browser-compat: css.types.filter-function
---

{{CSSRef}}

The **`<filter-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.

## Syntax

The `<filter-function>` data type is specified using one of the filter functions listed below. Each function requires an argument which, if invalid, results in no filter being applied.

- {{cssxref("filter-function/blur", "blur()")}}
  - : Blurs the image.
- {{cssxref("filter-function/brightness", "brightness()")}}
  - : Makes the image brighter or darker.
- {{cssxref("filter-function/contrast", "contrast()")}}
  - : Increases or decreases the image's contrast.
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
  - : Applies a drop shadow behind the image.
- {{cssxref("filter-function/grayscale", "grayscale()")}}
  - : Converts the image to grayscale.
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
  - : Changes the overall hue of the image.
- {{cssxref("filter-function/invert", "invert()")}}
  - : Inverts the colors of the image.
- {{cssxref("filter-function/opacity", "opacity()")}}
  - : Makes the image transparent.
- {{cssxref("filter-function/saturate", "saturate()")}}
  - : Super-saturates or desaturates the input image.
- {{cssxref("filter-function/sepia", "sepia()")}}
  - : Converts the image to sepia.

## Formal syntax

{{csssyntax}}

## Examples

### Filter function comparison

This example provides a simple graphic, along with a select menu to allow you to choose between the different types of filter function, and a slider to allow you to vary the values used inside the filter function. Updating the controls updates the filter effect in real time, allowing you to investigate the effects of different filters.

```css
div {
  width: 100%;
  height: 512px;
  background: url(fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
  filter: <filter-function>(<value>);
}
```

Where the `<filter-function>` is the filter you select from the drop down and the `<value>` is the values you set with the slider:

```html live-sample___filter-functions
<div></div>
<ul>
  <li>
    <label for="filter-select">Choose a filter function:</label>
    <select id="filter-select">
      <option selected>blur</option>
      <option>brightness</option>
      <option>contrast</option>
      <option>drop-shadow</option>
      <option>grayscale</option>
      <option>hue-rotate</option>
      <option>invert</option>
      <option>opacity</option>
      <option>saturate</option>
      <option>sepia</option>
    </select>
  </li>
  <li><input type="range" /><output></output></li>
  <li>
    <p>Current value: <code></code></p>
  </li>
</ul>
```

```css live-sample___filter-functions
div {
  width: 100%;
  height: 512px;
  background-image: url(https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png);
  background-repeat: no-repeat;
  background-position: center center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%;
}

output {
  width: 5%;
  text-align: center;
}

select {
  width: 40%;
  margin-left: 2px;
}
```

```js hidden live-sample___filter-functions
const selectElem = document.querySelector("select");
const divElem = document.querySelector("div");
const slider = document.querySelector("input");
const output = document.querySelector("output");
const curValue = document.querySelector("p code");

selectElem.addEventListener("change", () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener("input", () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  switch (filter) {
    case "blur":
      slider.value = 0;
      slider.min = 0;
      slider.max = 30;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "brightness":
    case "contrast":
    case "saturate":
      slider.value = 1;
      slider.min = 0;
      slider.max = 4;
      slider.step = 0.05;
      slider.setAttribute("data-unit", "");
      break;
    case "drop-shadow":
      slider.value = 0;
      slider.min = -20;
      slider.max = 40;
      slider.step = 1;
      slider.setAttribute("data-unit", "px");
      break;
    case "opacity":
      slider.value = 1;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "grayscale":
    case "invert":
    case "sepia":
      slider.value = 0;
      slider.min = 0;
      slider.max = 1;
      slider.step = 0.01;
      slider.setAttribute("data-unit", "");
      break;
    case "hue-rotate":
      slider.value = 0;
      slider.min = 0;
      slider.max = 360;
      slider.step = 1;
      slider.setAttribute("data-unit", "deg");
      break;
    default:
      console.error("Unknown filter set");
  }
}

function setDiv(filter) {
  const unit = slider.getAttribute("data-unit");
  const offset = `${Math.round(slider.value)}${unit}`;
  const radius = `${Math.round(Math.abs(slider.value / 2))}${unit}`;
  divElem.style.filter =
    filter === "drop-shadow"
      ? `${selectElem.value}(${offset} ${offset} ${radius})`
      : `${selectElem.value}(${slider.value}${unit})`;

  updateOutput();
  updateCurValue();
}

function updateOutput() {
  output.textContent = slider.value;
}

function updateCurValue() {
  curValue.textContent = `filter: ${divElem.style.filter}`;
}

setSlider(selectElem.value);
setDiv(selectElem.value);
```

{{EmbedLiveSample("filter-functions", "", "700px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}
