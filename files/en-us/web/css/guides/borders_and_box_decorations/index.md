---
title: CSS borders and box decorations
short-title: Borders and box decorations
slug: Web/CSS/Guides/Borders_and_box_decorations
page-type: css-module
spec-urls: https://drafts.csswg.org/css-borders-4/
sidebar: cssref
---

The **CSS borders and box decorations** module provides properties for adding borders, shaped corners, and box shadows to elements. This module extends borders and box decorations introduced in the [CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module, adding {{cssxref("corner-shape")}} and `border-shape` properties, logical {{cssxref("border-radius")}} properties, longhand properties for the {{cssxref("box-shadow")}} property, and properties to create partial borders.

## Borders and box decorations in action

Select a `superellipse()` value from the drop down menu to change the border shape. Use the slider to change the border radius size. Toggle the checkbox to hide and show the box shadow.

```html hidden
<p>
  <label for="corner-shape-choice"
    >Choose a <code>superellipse()</code> value:</label
  >
  <select id="corner-shape-choice">
    <option>superellipse(infinity)</option>
    <option>superellipse(5)</option>
    <option>superellipse(3)</option>
    <option>superellipse(2)</option>
    <option>superellipse(1.5)</option>
    <option>superellipse(1)</option>
    <option>superellipse(0.5)</option>
    <option>superellipse(0)</option>
    <option>superellipse(-0.5)</option>
    <option selected>superellipse(-1)</option>
    <option>superellipse(-1.5)</option>
    <option>superellipse(-2)</option>
    <option>superellipse(-3)</option>
    <option>superellipse(-5)</option>
    <option>superellipse(-infinity)</option>
  </select>
</p>
<p>
  <label for="radius">Choose a <code>border-radius</code> value:</label>
  <input
    type="range"
    step="5"
    min="0"
    max="100"
    value="30"
    id="radius"
    list="tens" />
  <datalist id="tens">
    <option value="0" label="0"></option>
    <option value="20" label="20px"></option>
    <option value="40" label="40px"></option>
    <option value="60" label="60px"></option>
    <option value="80" label="80px"></option>
    <option value="100" label="100px"></option>
  </datalist>
</p>

<p>
  <input type="checkbox" id="check" />
  <label for="check">Toggle the box-shadow</label>
</p>
<div></div>
```

```css hidden
div {
  width: 100%;
  height: 200px;
  background-color: plum;
  background-image:
    repeating-linear-gradient(transparent 0 19px, #00000022 19px 20px),
    repeating-linear-gradient(to left, transparent 0 19px, #00000022 19px 20px);
}

div {
  box-shadow: 3px 3px 5px rgb(0 0 0 / 0.5);
  border-radius: 30px;
}
body:has(input:checked) div {
  box-shadow: none;
}

@layer pageSetUp {
  html {
    font-family: "Helvetica", "Arial", sans-serif;
  }
  body {
    max-width: 600px;
    min-width: fit-content;
    margin: 20px auto;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  select {
    padding: 3px 5px;
  }
  code {
    font-weight: bolder;
  }
}
```

```js hidden
const rectangle = document.querySelector("div");
const select = document.querySelector("select");
const range = document.getElementById("radius");

function setCornerShape() {
  rectangle.style.cornerShape = select.value;
  rectangle.style.borderRadius = `${range.value}px`;
  rectangle.innerHTML = `<pre>div {
  corner-shape: ${select.value};
  border-radius: ${range.value}px;
}</pre>`;
}

select.addEventListener("change", setCornerShape);
range.addEventListener("input", setCornerShape);
setCornerShape();
```

{{EmbedLiveSample("backgrounds", "", "350px")}}

## Reference

### Properties

- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-bottom-color")}}
- {{cssxref("border-bottom-left-radius")}}
- {{cssxref("border-bottom-right-radius")}}
- {{cssxref("border-bottom-style")}}
- {{cssxref("border-bottom-width")}}
- {{cssxref("border-color")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-left")}}
- {{cssxref("border-left-color")}}
- {{cssxref("border-left-style")}}
- {{cssxref("border-left-width")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("border-top")}}
- {{cssxref("border-top-color")}}
- {{cssxref("border-top-left-radius")}}
- {{cssxref("border-top-right-radius")}}
- {{cssxref("border-top-style")}}
- {{cssxref("border-top-width")}}
- {{cssxref("box-shadow")}}
- {{cssxref("corner-block-end-shape")}}
- {{cssxref("corner-block-start-shape")}}
- {{cssxref("corner-bottom-left-shape")}}
- {{cssxref("corner-bottom-right-shape")}}
- {{cssxref("corner-bottom-shape")}}
- {{cssxref("corner-end-end-shape")}}
- {{cssxref("corner-end-start-shape")}}
- {{cssxref("corner-inline-end-shape")}}
- {{cssxref("corner-inline-start-shape")}}
- {{cssxref("corner-left-shape")}}
- {{cssxref("corner-right-shape")}}
- {{cssxref("corner-shape")}}
- {{cssxref("corner-start-end-shape")}}
- {{cssxref("corner-start-start-shape")}}
- {{cssxref("corner-top-left-shape")}}
- {{cssxref("corner-top-right-shape")}}
- {{cssxref("corner-top-shape")}}

The CSS borders and box decorations module level 4 also introduces the `border-shape`, `border-limit`, and `border-clip` properties, along with the `border-clip-bottom`, `border-clip-left`, `border-clip-right`, `border-clip-top` longhand properties. Currently, no browsers support these features. The module also introduces component properties for the well supported {{cssxref("border-radius")}} and {{cssxref("box-shadow")}} properties, including `border-block-end-radius`, `border-block-start-radius`, `border-bottom-radius`, `border-inline-end-radius`, `border-inline-start-radius`, `border-right-radius`, `border-top-radius`, `box-shadow-blur`, `box-shadow-color`, `box-shadow-offset`, `box-shadow-position`, and `box-shadow-spread`. These component properties are also as yet unsupported.

### Data types

- {{cssxref("corner-shape-value")}}

### Functions

- {{cssxref("superellipse()")}}

## Guides

- [Learn CSS: the box model](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
  - : Learn how borders and other box model properties impact the CSS box model.

## Related concepts

- {{cssxref("box-sizing")}} property
- {{cssxref("box-decoration-break")}} property
- {{cssxref("text-shadow")}} property
- {{cssxref("url_value", "&lt;url&gt;")}} CSS type
- [`<color>`](/en-US/docs/Web/CSS/Reference/Properties/color) data type
- [`<image>`](/en-US/docs/Web/CSS/Reference/Values/image) data type
- [`<position>`](/en-US/docs/Web/CSS/Reference/Properties/position) data type
- [`currentColor`](/en-US/docs/Web/CSS/Reference/Values/color_value#currentcolor_keyword) keyword

[CSS backgrounds and borders](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders) module

- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("background")}} shorthand
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- {{cssxref("border-image-outset")}}
- {{cssxref("border-image-repeat")}}
- {{cssxref("border-image-slice")}}
- {{cssxref("border-image-source")}}
- {{cssxref("border-image-width")}}
- {{cssxref("border-image")}} shorthand

## Specifications

{{Specifications}}

## See also

- {{cssxref("filter")}}
- {{cssxref("backdrop-filter")}}
- [`drop-shadow()`](/en-US/docs/Web/CSS/Reference/Values/filter-function/drop-shadow) filter function
- [Applying color to HTML elements using CSS](/en-US/docs/Web/CSS/Guides/Colors/Applying_color)
- [Border-image generator](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
- [Border-radius generator](/en-US/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
