---
title: "HTMLElement: style property"
short-title: style
slug: Web/API/HTMLElement/style
page-type: web-api-instance-property
browser-compat: api.HTMLElement.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("HTMLElement")}} returns the _inline_ [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) of an element in the form of a live {{domxref("CSSStyleProperties")}} object.
This object can be used to get and set the inline styles of an element.

## Value

A live {{domxref("CSSStyleProperties")}} object.

> [!NOTE]
> Earlier versions of the specification returned a {{domxref("CSSStyleDeclaration")}} (from which {{domxref("CSSStyleProperties")}} is derived).
> See the [browser compatibility](#browser_compatibility) table for browser support information.

## Description

The values of the inline styles set in the element's [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute are reflected by corresponding properties of the returned {{domxref("CSSStyleProperties")}} object.

> [!NOTE]
> {{domxref("CSSStyleProperties")}} has dash-named and corresponding {{Glossary("camel_case", "camel-case")}} named properties for **all** [CSS properties](/en-US/docs/Web/CSS/Reference/Properties) supported by the browser (not just those with inline styles).
> Properties that don't have a corresponding inline style are set to `""`.

Shorthand CSS properties of the element are expanded to their corresponding long-form properties.
For example, an element with style `"border-top: 1px solid black"` would be represented in the returned object by properties with the names {{cssxref("border-top")}} and `borderTop`, and the corresponding longhand properties {{cssxref("border-top-color")}} and `borderTopColor`, {{cssxref("border-top-style")}} and `borderTopStyle`, and {{cssxref("border-top-width")}} and `borderTopWidth`.

The `style` property is read-only, meaning it is not possible to assign a {{domxref("CSSStyleProperties")}} object to it.
Nevertheless, it is possible to set an inline style by assigning a _string_ directly to the property.
In this case the string can be read from {{domxref("CSSStyleDeclaration.cssText","cssText")}}.
Using `style` in this manner will completely overwrite all inline styles on the element.

To add specific styles to an element without altering other style values, it is generally preferable to set individual properties on the {{domxref("CSSStyleProperties")}} object.
For example, you can write `element.style.backgroundColor = "red"`.
A style declaration is reset by setting it to `null` or an empty string, e.g., `element.style.color = null`.

The `style` property has the same priority in the CSS cascade as an inline style declaration set via the `style` attribute.

## Examples

### Basic usage

This code example shows how you can read the inline styles of an element.
In each case it reads the dash-named style properties using {{DOMxRef("CSSStyleDeclaration/getPropertyPriority", "getPropertyValue()")}} and gets the camel case properties using the dot operator.

#### HTML

First we define a {{htmlelement("div")}} element and nested element that define different inline styles, using both shorthand and longhand form.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The following code gets the inner element, reads its style, and logs the dash-named and camel-case named CSS style properties.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Longhand styles
log(`"border-top" = '${elementStyle.getPropertyValue("border-top")}'`);
log(`"borderTop" = '${elementStyle.borderTop}'`);

// Expanded longhand styles
log(
  `"border-top-width" = '${elementStyle.getPropertyValue("border-top-width")}'`,
);
log(`"borderTopWidth" = '${elementStyle.borderTopWidth}'`);

log(
  `"border-top-style" = '${elementStyle.getPropertyValue("border-top-style")}'`,
);
log(`"borderTopStyle" = '${elementStyle.borderTopStyle}'`);

log(
  `"border-top-color" = '${elementStyle.getPropertyValue("border-top-color")}'`,
);
log(`"borderTopColor" = '${elementStyle.borderTopColor}'`);

// Original shorthand style
log(`"color" = '${elementStyle.getPropertyValue("color")}'`);
log(`"color" = '${elementStyle.color}'`);

// Defined on parent
log(`"font-weight" = '${elementStyle.getPropertyValue("font-weight")}'`);
log(`"fontWeight" = '${elementStyle.fontWeight}'`);
```

#### Results

The result is shown below.
In each case we see that the styles read using the dash and camel-case named properties are the same.
We also see that the {{cssxref("border-top")}} property corresponding to the element's `style` attribute is present, and that a longhand property is defined for each of its parts ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}).

{{EmbedLiveSample("Basic usage", "100", "280")}}

Note that `font-weight` is defined on the `CSSStyleProperties` (as are all other CSS properties, though we have not logged them).
However it is not an inline style for the nested element, so its value is set to the empty string (`""`).

### Enumerating style information

This example demonstrates how we can enumerate the dash-named properties of {{domxref("CSSStyleProperties")}}.

#### HTML

First we define a {{htmlelement("div")}} element and nested element that define different inline styles, using both shorthand and longhand form.
This is the same HTML as in the previous example.

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="log"></pre>
</div>
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

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The following code iterates the enumerable properties of the `CSSStyleProperties` and logs the result.

```js
const element = document.getElementById("elt");
const elementStyle = element.style;

// Loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // Check the property belongs to the CSSStyleProperties instance
  // Ensure the property is a numeric index (indicating a dash-named/inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    log(
      `${
        elementStyle[prop]
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}`,
    );
  }
}
```

#### Results

The result is shown below.
Note that only the element's longhand CSS properties are enumerated values (the inline shorthand property is not enumerated).

{{EmbedLiveSample("Enumerating style information", "100", "180")}}

### Updating border style

```html
<div id="box"></div>

<form name="FormName">
  <button id="btn1">Make border 20px-wide</button>
  <button id="btn2">Make border 5px-wide</button>
</form>
```

```css
#box {
  border: 5px solid green;
  width: 100px;
  height: 100px;
}
```

```js
function setBorderWidth(width) {
  document.getElementById("box").style.borderWidth = `${width}px`;
}

document.getElementById("btn1").addEventListener("click", () => {
  setBorderWidth(20);
});
document.getElementById("btn2").addEventListener("click", () => {
  setBorderWidth(5);
});
```

{{EmbedLiveSample("Updating border style", "", "200")}}

### Manipulating styles

In this example, some basic style properties of an HTML paragraph element are accessed using the style object on the element and that object's CSS style properties, which can be retrieved and set from the DOM. In this case, you are manipulating the individual styles directly. You can also use {{domxref("document.styleSheets", "styleSheets")}} and their rules to change styles for whole documents.

```html
<p id="pid">Some text</p>
<form>
  <p><button type="button">Change text</button></p>
</form>
```

```js
function changeText() {
  const p = document.getElementById("pid");

  p.style.color = "blue";
  p.style.fontSize = "18pt";
}

document.querySelector("button").addEventListener("click", () => {
  changeText();
});
```

{{EmbedLiveSample("Manipulating styles", "", "200")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.style")}}
- {{domxref("HTMLElement.attributeStyleMap")}}
- HTML [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute
