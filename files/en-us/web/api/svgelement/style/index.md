---
title: "SVGElement: style property"
short-title: style
slug: Web/API/SVGElement/style
page-type: web-api-instance-property
browser-compat: api.SVGElement.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("SVGElement")}} returns the _inline_ style of an element in the form of a live {{domxref("CSSStyleDeclaration")}} object that contains a list of all styles properties for that element with values assigned only for the attributes that are defined in the element's inline [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute.

Shorthand properties are expanded. If you set `style="border-top: 1px solid black"`, the longhand properties ({{cssxref("border-top-color")}}, {{cssxref("border-top-style")}}, and {{cssxref("border-top-width")}}) are set instead.

This property is read-only, meaning it is not possible to assign a {{domxref("CSSStyleDeclaration")}} object to it. Nevertheless, it is possible to set an inline style by assigning a _string_ directly to the `style` property. In this case the string is forwarded to {{domxref("CSSStyleDeclaration.cssText")}}. Using `style` in this manner will completely overwrite all inline styles on the element.

Therefore, to add specific styles to an element without altering other style values, it is generally preferable to set individual properties on the {{domxref("CSSStyleDeclaration")}} object. For example, you can write `element.style.backgroundColor = "red"`.

A style declaration is reset by setting it to `null` or an empty string, e.g., `elt.style.color = null`.

> **Note:** CSS property names are converted to JavaScript identifier with these rules:
>
> - If the property is made of one word, it remains as it is: `height` stays as is (in lowercase).
> - If the property is made of several words, separated by dashes, the dashes are removed and it is converted to _camelCase_: `background-attachment` becomes `backgroundAttachment`.
> - The property `float`, being a reserved JavaScript keyword, is converted to `cssFloat`.
>
> The `style` property has the same priority in the CSS cascade as an inline style declaration set via the `style` attribute.

## Value

A live {{domxref("CSSStyleDeclaration")}} object.

## Examples

### Getting style information

The following code snippet demonstrates how the `style` attribute is translated into a list of entries in {{domxref("CSSStyleDeclaration")}} :

```html
<svg
  width="50"
  height="50"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 250 250"
  width="250"
  height="250">
  <circle
    cx="100"
    cy="100"
    r="50"
    id="circle"
    style="fill: red; stroke: black; stroke-width: 2px;" />
</svg>
<pre id="out"></pre>
```

```js
const element = document.querySelector("circle");
const out = document.getElementById("out");
const elementStyle = element.style;

// We loop through all styles (for…of doesn't work with CSStyleDeclaration)
for (const prop in elementStyle) {
  if (Object.hasOwn(elementStyle, prop)) {
    out.textContent += `${
      elementStyle[prop]
    } = '${elementStyle.getPropertyValue(elementStyle[prop])}'\n`;
  }
}
```

{{EmbedLiveSample("Getting_style_information", "100", "130")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
