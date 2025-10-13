---
title: "HTMLElement: style property"
short-title: style
slug: Web/API/HTMLElement/style
page-type: web-api-instance-property
browser-compat: api.HTMLElement.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("HTMLElement")}} returns the _inline_ style of an element in the form of a live {{domxref("CSSStyleDeclaration")}} object that contains a list of all styles properties for that element with values assigned only for the attributes that are defined in the element's inline [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute.

Shorthand properties are expanded. If you set `style="border-top: 1px solid black"`, the longhand properties ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}) are set instead.

This property is read-only, meaning it is not possible to assign a {{domxref("CSSStyleDeclaration")}} object to it. Nevertheless, it is possible to set an inline style by assigning a _string_ directly to the `style` property. In this case the string is forwarded to {{domxref("CSSStyleDeclaration.cssText")}}. Using `style` in this manner will completely overwrite all inline styles on the element.

Therefore, to add specific styles to an element without altering other style values, it is generally preferable to set individual properties on the {{domxref("CSSStyleDeclaration")}} object. For example, you can write `element.style.backgroundColor = "red"`.

A style declaration is reset by setting it to `null` or an empty string, e.g., `elt.style.color = null`.

> [!NOTE]
> CSS property names are converted to JavaScript identifier with these rules:
>
> - If the property is made of one word, it remains as it is: `height` stays as is (in lowercase). As `float` is a reserved keyword in JavaScript, this property name was historically converted to `cssFloat`. All modern browsers now support the direct use of `float` in JavaScript to access the `float` CSS property, but `cssFloat` is used in older browsers and is still supported as an alias in modern browsers.
> - If the property is made of several words, separated by dashes, the dashes are removed and it is converted to {{Glossary("camel_case", "camel case")}}: `background-attachment` becomes `backgroundAttachment`.
>
> The `style` property has the same priority in the CSS cascade as an inline style declaration set via the `style` attribute.

## Value

A live {{domxref("CSSStyleDeclaration")}} object.

## Examples

### Getting style information

The following code snippet demonstrates how the values obtained using the element's `style` property relates to the style set on the HTML attribute:

```html
<div style="font-weight: bold;">
  <div style="border-top: 1px solid blue; color: red;" id="elt">
    An example div
  </div>
  <pre id="out"></pre>
</div>
```

```js
const element = document.getElementById("elt");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all the element's styles using `for...in`
for (const prop in elementStyle) {
  // We check if the property belongs to the CSSStyleDeclaration instance
  // We also ensure that the property is a numeric index (indicating an inline style)
  if (
    Object.hasOwn(elementStyle, prop) &&
    !Number.isNaN(Number.parseInt(prop, 10))
  ) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

Note `font-weight` is not listed as a value for `elementStyle` as it is not defined within the `style` attribute of the element itself. Rather, it is inherited from the definition on its parent. Also note that the shorthand {{cssxref("border-top")}} property, defined in the `style` attribute, is not listed directly. Rather, it is replaced by the three corresponding longhand properties ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}).

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
