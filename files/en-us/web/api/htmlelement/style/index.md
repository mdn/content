---
title: HTMLElement.style
slug: Web/API/HTMLElement/style
page-type: web-api-instance-property
tags:
  - API
  - CSSOM
  - HTMLElement
  - Property
  - Reference
  - Style
browser-compat: api.HTMLElement.style
---
{{APIRef("CSSOM")}}

The **`style`** read-only property returns the _inline_ style of an element in the form of a {{domxref("CSSStyleDeclaration")}} object that contains a list of all styles properties for that element with values assigned for the attributes that are defined in the element's inline [`style` attribute](/en-US/docs/Web/HTML/Global_attributes/style).

> **Note:** See the [CSS Properties Reference](/en-US/docs/Web/CSS/CSS_Properties_Reference) for a list of the CSS properties accessible via `style`. The `style` property has the same (and highest) priority in the CSS cascade as an inline style declaration set via the `style` attribute.

## Value

A {{domxref("CSSStyleDeclaration")}} object, with the following properties:

- computed flag
  - : Unset.
- parent CSS rule
  - : Null.
- owner node
  - : `this`

## Setting styles

While this property is considered read-only, it is possible to set an inline style by assigning a string directly to the `style` property. In this case the string is forwarded to {{domxref("CSSStyleDeclaration.cssText")}}. Using `style` in this manner will completely overwrite all inline styles on the element.

Therefore, to add specific styles to an element without altering other style values, it is generally preferable to set individual properties on the {{domxref("CSSStyleDeclaration")}} object. For example, `element.style.backgroundColor = "red"`.

A style declaration is reset by setting it to `null` or an empty string, e.g., `elt.style.color = null`.

### Getting style information

The `style` property is not useful for completely learning about the styles applied on the element, since it represents only the CSS declarations set in the element's inline `style` attribute, not those that come from style rules elsewhere, such as style rules in the {{HTMLElement("head")}} section, or external style sheets. To get the values of all CSS properties for an element you should use {{domxref("Window.getComputedStyle()")}} instead.

The following code snippet demonstrates the difference between the values obtained using the element's `style` property and that obtained using the `getComputedStyle()` method:

```html
<!DOCTYPE html>
<html lang="en-US">
  <body style="font-weight:bold;">
    <div style="color:red" id="myElement">..</div>
  </body>
</html>
```

```js
const element = document.getElementById("myElement");
let out = "";
const elementStyle = element.style;
const computedStyle = window.getComputedStyle(element, null);

for (const prop in elementStyle) {
  if (Object.hasOwn(elementStyle, prop)) {
    out += `  ${prop} = '${elementStyle[prop]}' > '${computedStyle[prop]}'\n`;
  }
}
console.log(out);
```

The output would be something like:

```
…
fontWeight = '' > 'bold'
color = 'red' > 'rgb(255, 0, 0)'
…
```

Note the presence of the value `bold` for `font-weight` in the computed style and the absence of it in the element's `style` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
