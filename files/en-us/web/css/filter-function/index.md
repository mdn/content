---
title: <filter-function>
slug: Web/CSS/filter-function
tags:
  - CSS
  - CSS Data Type
  - Data Type
  - Filter Effects
  - NeedsCompatTable
  - Reference
browser-compat: css.types.filter-function
---
{{CSSRef}}

The **`<filter-function>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a graphical effect that can change the appearance of an input image. It is used in the {{cssxref("filter")}} and {{cssxref("backdrop-filter")}} properties.

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

#### HTML

```html
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
  <li>
    <input type="range"><output></output>
  </li>
  <li>
    <p>Current value: <code></code></p>
  </li>
</ul>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png) no-repeat center;
}

li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

input {
  width: 60%
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

#### JavaScript

```js
const selectElem = document.querySelector('select');
const divElem = document.querySelector('div');
const slider = document.querySelector('input');
const output = document.querySelector('output');
const curValue = document.querySelector('p code');

selectElem.addEventListener('change', () => {
  setSlider(selectElem.value);
  setDiv(selectElem.value);
});

slider.addEventListener('input', () => {
  setDiv(selectElem.value);
});

function setSlider(filter) {
  if (filter === 'blur') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 30;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if (filter === 'brightness' || filter === 'contrast' || filter === 'saturate') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 4;
    slider.step = 0.05;
    slider.setAttribute('data-unit', '');
  } else if (filter === 'drop-shadow') {
    slider.value = 0;
    slider.min = -20;
    slider.max = 40;
    slider.step = 1;
    slider.setAttribute('data-unit', 'px');
  } else if (filter === 'opacity') {
    slider.value = 1;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if (filter === 'grayscale' || filter === 'invert' || filter === 'sepia') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 1;
    slider.step = 0.01;
    slider.setAttribute('data-unit', '');
  } else if (filter === 'hue-rotate') {
    slider.value = 0;
    slider.min = 0;
    slider.max = 360;
    slider.step = 1;
    slider.setAttribute('data-unit', 'deg');
  }
}

function setDiv(filter) {
  const unit = slider.getAttribute('data-unit');
  const offset = `${Math.round(slider.value)}${unit}`;
  const radius = `${Math.round(Math.abs(slider.value / 2))}${unit}`;
  divElem.style.filter = filter === 'drop-shadow'
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

#### Result

{{EmbedLiveSample('Filter_function_comparison', '100%', 500)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Properties that use this data type: {{cssxref("filter")}} and {{cssxref("backdrop-filter")}}
