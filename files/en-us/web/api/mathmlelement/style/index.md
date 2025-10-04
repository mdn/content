---
title: "MathMLElement: style property"
short-title: style
slug: Web/API/MathMLElement/style
page-type: web-api-instance-property
browser-compat: api.MathMLElement.style
---

{{APIRef("CSSOM")}}

The read-only **`style`** property of the {{domxref("MathMLElement")}} returns the _inline_ [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) of an element in the form of a live {{domxref("CSSStyleProperties")}} object.
This object can be used to get and set the inline styles of an element.

## Value

A live {{domxref("CSSStyleProperties")}} object.

> [!NOTE]
> Earlier versions of the specification returned a {{domxref("CSSStyleDeclaration")}} (from which {{domxref("CSSStyleProperties")}} is derived).
> See the [browser compatibility](#browser_compatibility) table for browser support information.

## Description

The values of the inline styles set in the element's [`style`](/en-US/docs/Web/HTML/Reference/Global_attributes/style) attribute are reflected by corresponding properties of the returned {{domxref("CSSStyleProperties")}} object.

> [!NOTE]
> {{domxref("CSSStyleProperties")}} has dash-named and corresponding {{Glossary("camel_case", "camel-case")}} named properties for **all** [CSS properties](/en-US/docs/Web/CSS/Properties) supported by the browser (not just those with inline styles).
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

### Enumerating style information

This example demonstrates how we can enumerate the dash-named properties of {{domxref("CSSStyleProperties")}}.

#### HTML

```html
<math>
  <mrow>
    <mi>f</mi>
    <mo stretchy="false">(</mo>
    <mi class="parameter" style="color: red; border-bottom: 1px solid">x</mi>
    <mo stretchy="false">)</mo>
    <mo>=</mo>
    <mi>x</mi>
  </mrow>
</math>
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

The following code iterates the enumerable properties of the `CSSStyleProperties` and logs the result.

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const element = document.querySelector(".parameter");
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
      } = '${elementStyle.getPropertyValue(elementStyle[prop])}'`,
    );
  }
}
```

#### Results

The result is shown below.
Note that only the element's longhand CSS properties are enumerated values (the inline shorthand property is not enumerated).

{{EmbedLiveSample("Enumerating style information", "100", "150")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- {{domxref("HTMLElement.style")}}
- {{domxref("SVGElement.style")}}
- {{domxref("MathMLElement.attributeStyleMap")}}
