---
title: SVGlement.style
slug: Web/API/SVGElement/style
page-type: web-api-instance-property
browser-compat: api.SVGElement.style
---

{{APIRef("CSSOM")}}

he read-only **`style`** property of the {{domxref("HTMLElement")}} returns the _inline_ style of an element in the form of a live {{domxref("CSSStyleDeclaration")}} object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute.

This property is read-only, meaning it is not possible to assign a {{domxref("CSSStyleDeclaration")}} object to it. Nevertheless, it is possible to set an inline style by assigning a _string_ directly to the `style` property. In this case the string is forwarded to {{domxref("CSSStyleDeclaration.cssText")}}. Using `style` in this manner will completely overwrite all inline styles on the element.

Therefore, to add specific styles to an element without altering other style values, it is generally preferable to set individual properties on the {{domxref("CSSStyleDeclaration")}} object. For example, `element.style.backgroundColor = "red"`.

A style declaration is reset by setting it to `null` or an empty string, e.g., `elt.style.color = null`.

> **Note:** CSS property names are converted to JavaScript identifier with these rules:
>
> - If the property is made of one work, it remains as it is: `height` stays as is (in lowercase).
> - If the property is made of several words, separated by dashes, the dashes are removed and it is converted to _camelCase_: `background-attachment` becomes `backgroundAttachement`.
> - The property `float`, being a reserved JavaScript keyword, is converted to `cssFloat`.
>
> The `style` property has the same priority in the CSS cascade as an inline style declaration set via the `style` attribute.

## Value

A live {{domxref("CSSStyleDeclaration")}} object.

## Examples

### Getting style information

The `style` property is not useful for completely learning about the styles applied on the element, since it represents only the CSS declarations set in the element's inline `style` attribute, not those that come from style rules elsewhere, such as style rules in the {{HTMLElement("head")}} section, or external style sheets. To get the values of all CSS properties for an element you should use {{domxref("Window.getComputedStyle()")}} instead.

The following code snippet demonstrates the difference between the values obtained using the element's `style` property and that obtained using the `getComputedStyle()` method:

```html
<svg
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
```

```js
const element = document.querySelector("circle");
let out = "";
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element, null);

// We loop all styles (for…of doesn't work with CSStyleDeclaration)
for (const prop in computedStyle) {
  if (Object.hasOwn(computedStyle, prop)) {
    out += `${computedStyle[prop]} = '${elementStyle.getPropertyValue(
      computedStyle[prop]
    )}' > '${computedStyle[computedStyle[prop]]}'\n`;
  }
}

console.log(out);
```

The output is a long list of properties. The three interesting properties have the following values:

```
…
fill = 'red' > 'rgb(255, 0, 0)'
…
stroke = 'black' > 'rgb(0, 0, 0)'
…
stroke-width = '2px' > '2px'
…
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
