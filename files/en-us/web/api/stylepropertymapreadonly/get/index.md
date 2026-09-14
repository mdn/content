---
title: "StylePropertyMapReadOnly: get() method"
short-title: get()
slug: Web/API/StylePropertyMapReadOnly/get
page-type: web-api-instance-method
browser-compat: api.StylePropertyMapReadOnly.get
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`get()`** method of the {{domxref("StylePropertyMapReadOnly")}} interface returns a {{domxref("CSSStyleValue")}}-derived object for the first value of the specified property.

Use {{domxref("StylePropertyMapReadOnly.getAll", "getAll()")}} to get all the values of a CSS property that can have multiple values, such as {{cssxref("background-image")}} or {{cssxref("transition")}}.

## Syntax

```js-nolint
get(property)
```

### Parameters

- `property`
  - : The name of the property.
    Custom property names (starting with `--`) are matched case-sensitively; standard property names are not.

### Return value

A {{domxref("CSSStyleValue")}}-derived object, or {{jsxref("undefined")}} if `property` has no value in the map.

The concrete type of the returned object depends on the property and its value.
For example, a property assigned a keyword might return a {{domxref("CSSKeywordValue")}}, while a property assigned the result of a mathematical operation might return a {{domxref("CSSMathSum")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `property` is not a valid CSS property name.

## Examples

### Basic usage

This example shows how to get a few properties and their values.

#### HTML

First we create a link inside a paragraph:

```html
<p>
  <a href="https://example.com">Link</a>
</p>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The CSS styles the `font-weight` of the paragraph, and defines and uses a custom property for the color of the link:

```css
p {
  font-weight: bold;
}
a {
  --color: red;
  color: var(--color);
}
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

First we call [`computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap) on the element to get its style map: a `StylePropertyMapReadOnly` object.
We create an array of properties of interest and use the `get()` method of `StylePropertyMapReadOnly` to log only those values.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
// get the element and its style map
const myElement = document.querySelector("a");
const styleMap = myElement.computedStyleMap();

// array of properties we're interested in
const properties = ["font-weight", "border-left-color", "color", "--color"];

// log the value of each property of interest
for (const property of properties) {
  log(`${property}: ${styleMap.get(property)}`);
}
```

#### Result

{{EmbedLiveSample("Basic usage", 120, 200)}}

### Getting different value types

This example demonstrates that `get()` can return objects of different types, depending on the property and its value.

First it applies a number of different properties to an element using CSS.
It then reads them back via JavaScript and logs the constructor name and value of each property.
The logging code itself isn't part of the demonstration, so it's hidden here.

#### HTML

First we define an {{htmlelement("div")}} with id `demoBox` to which we'll add styles.

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

```css
#demoBox {
  --my-custom-property: "some text";
  opacity: 0.5;
  width: calc(30% - 20px);
  display: block;
  transform: translate(10px, 10px);
}
```

```css hidden
#log {
  height: 330px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Next we use [`computedStyleMap()`](/en-US/docs/Web/API/Element/computedStyleMap) to get the `StylePropertyMapReadOnly` object for the demo box, and iterate through each of the properties we added, logging their constructor name and value.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

```js
const styleMap = document.querySelector("#demoBox").computedStyleMap();
const properties = [
  "opacity",
  "display",
  "width",
  "transform",
  "--my-custom-property",
];

for (const property of properties) {
  const value = styleMap.get(property);
  log(property);
  log(`  type: ${value.constructor.name}`);
  log(`  value: ${value}\n`);
}
```

#### Result

{{EmbedLiveSample("Getting different value types", 120, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("StylePropertyMapReadOnly.getAll", "getAll()")}}
- {{domxref("StylePropertyMapReadOnly.has", "has()")}}
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [Learning Houdini: the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
