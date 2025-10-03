---
title: "CSSStyleDeclaration: setProperty() method"
short-title: setProperty()
slug: Web/API/CSSStyleDeclaration/setProperty
page-type: web-api-instance-method
browser-compat: api.CSSStyleDeclaration.setProperty
---

{{ APIRef("CSSOM") }}

The
**`CSSStyleDeclaration.setProperty()`** method interface sets
a new value for a property on a CSS style declaration object.

## Syntax

```js-nolint
setProperty(propertyName, value)
setProperty(propertyName, value, priority)
```

### Parameters

- `propertyName`
  - : A string representing the CSS property name (hyphen case) to be modified.
- `value` {{optional_inline}}
  - : A string containing the new property value. If not specified, treated
    as the empty string. A [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) value is treated the same as the empty string (`""`).
    > [!NOTE]
    > `value` must not contain `"!important"`, that should be set using the `priority` parameter.
- `priority` {{optional_inline}}
  - : A string allowing the CSS priority to be set to important. Only the values listed below are accepted:
    - `"important"` (case-insensitive) for setting the property as `!important`;
    - `""`, `undefined`, or `null` for removing the `!important` flag if present.

    Anything else causes the method to return early and no change to happen (unless `value` is empty, in which case the property is removed regardless of the `priority` value). `false`, for example, is not a valid priority value.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NoModificationAllowedError` {{domxref('DOMException')}}
  - : Thrown if the property or declaration block is read only.

## Alternative usage

If `priority` can be omitted, JavaScript has a special simpler
syntax for setting a CSS property on a style declaration object:

```js
style.cssPropertyName = "value";
```

## Examples

### Setting the box properties

In this example we have three buttons, which can be pressed to dynamically alter our box paragraph's border, background color, and text color to random values (see the live example at the end of this section).

The MDN [live sample](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples) infrastructure combines all the CSS blocks in the example into a single inline style with the id `css-output`, so we first use {{domxref("Document.querySelector()")}} to find that sheet.

We then loop through the different rules contained inside the stylesheet in the array found at [`stylesheet.cssRules`](/en-US/docs/Web/API/CSSStyleSheet/cssRules).
For each rule we check whether its [`CSSStyleRule.selectorText`](/en-US/docs/Web/API/CSSStyleRule/selectorText) is equal to the selector `.box p`, which is the one we want.

If so, we store a reference to this `CSSStyleRule` object in a variable.
We then use three functions to generate random values for the properties in question, and update the rule with these values.
In each case, this is done with the `setProperty()` method, for example `boxParaRule.style.setProperty('border', newBorder);`.

### HTML

```html
<div class="controls">
  <button class="border">Border</button>
  <button class="bgcolor">Background</button>
  <button class="color">Text</button>
</div>
<div class="box">
  <p>Box</p>
</div>
```

### CSS

```css
html {
  background: orange;
  font-family: sans-serif;
  height: 100%;
}

body {
  height: inherit;
  width: 80%;
  min-width: 500px;
  max-width: 1000px;
  margin: 0 auto;
}

.controls {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

div button {
  flex: 1;
  margin: 20px;
  height: 30px;
  line-height: 30px;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 70px);
}

.box p {
  width: 50%;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  height: 150px;
  line-height: 150px;
  background: red;
  border: 5px solid purple;
  color: white;
  transition: all 1s;
}
```

### JavaScript

```js
const borderBtn = document.querySelector(".border");
const bgColorBtn = document.querySelector(".bgcolor");
const colorBtn = document.querySelector(".color");
const box = document.querySelector(".box");

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}

// Find the inline stylesheet generated for MDN live samples
const stylesheet = document.querySelector("style#css-output").sheet;

const boxParaRule = [...stylesheet.cssRules].find(
  (r) => r.selectorText === ".box p",
);

function setRandomBorder() {
  const newBorder = `${random(1, 50)}px solid ${randomColor()}`;
  boxParaRule.style.setProperty("border", newBorder);
}

function setRandomBgColor() {
  const newBgColor = randomColor();
  boxParaRule.style.setProperty("background-color", newBgColor);
}

function setRandomColor() {
  const newColor = randomColor();
  boxParaRule.style.setProperty("color", newColor);
}

borderBtn.addEventListener("click", setRandomBorder);
bgColorBtn.addEventListener("click", setRandomBgColor);
colorBtn.addEventListener("click", setRandomColor);
```

### Result

{{EmbedLiveSample('Examples', '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
