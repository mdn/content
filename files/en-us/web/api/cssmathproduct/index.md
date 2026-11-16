---
title: CSSMathProduct
slug: Web/API/CSSMathProduct
page-type: web-api-interface
browser-compat: api.CSSMathProduct
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

The **`CSSMathProduct`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the product of two or more {{domxref('CSSNumericValue')}} values — in cases where the result can't be represented as a single value.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathProduct.CSSMathProduct", "CSSMathProduct()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathProduct` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref('CSSMathProduct.values')}} {{ReadOnlyInline}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

A `CSSMathProduct` is produced whenever a multiplication or division can't be resolved to a single value.
This happens when any of the values is itself a calculation rather than a single unit value — for example, multiplying or dividing a sum such as `1px + 2%`.
It also happens for a multiplication when more than one value has a unit, for example `10px * 20px` or a length times a percentage, and for a division whenever a divisor has a unit, for example `10px / 2px` or `10 / 2px`.

{{domxref('CSSNumericValue.mul','mul()')}} returns a single {{domxref('CSSUnitValue')}} only if every value is a `CSSUnitValue` and all of them, or all but one, are plain numbers.
{{domxref('CSSNumericValue.div','div()')}} works the same way, except that every divisor must be a plain number.
Otherwise, both methods return a `CSSMathProduct`.

[`StylePropertyMapReadOnly.get()`](/en-US/docs/Web/API/StylePropertyMapReadOnly/get) returns a `CSSMathProduct` the same way — for a {{cssxref("calc()")}} value that resolves to a multiplication or division it can't combine into one value.

`CSSMathProduct` represents the product expression itself, not a resolved value.
To get the resolved value, use {{domxref("Window.getComputedStyle", "getComputedStyle()")}}.

## Examples

### Basic usage

The following code creates a `CSSMathProduct` instance from two values, then reads back its `operator` and `values` properties.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.constructor.name); // "CSSMathProduct"
console.log(product.operator); // 'product'
console.log(product.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `calc()` representations

This example shows how a {{cssxref("calc()")}} multiplication is represented by a {{domxref("CSSUnitValue")}} or a `CSSMathProduct`, depending on whether it can be resolved to a single value.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` is set using a `calc()` product of a length and a plain number, so the browser can resolve it to a single fixed value immediately.
`font-size` is set using a `calc()` product that multiplies a plain number by a parenthesized sum of `1rem` and `5vw`; since the sum itself can't be combined into a single value (it mixes units), the product can't either, and this will be represented by a `CSSMathProduct`.

```css
#demoBox {
  width: calc(10px * 2);
  font-size: calc(2 * (1rem + 5vw));
}
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
  logElement.innerText += `${text}\n`;
}
```

First we find the demo box's style rule and read its `width` and `font-size` values using {{domxref("CSSStyleRule.styleMap", "styleMap")}}.

```js
const demoBox = document.querySelector("#demoBox");

const rules = document.getElementById("css-output").sheet.cssRules;
const rule = [...rules].find((r) => r.selectorText === "#demoBox");
const styleMap = rule.styleMap;
const width = styleMap.get("width");
const fontSize = styleMap.get("font-size");
```

We then log the type and value of the CSS Typed OM representations, followed by the computed (resolved) values.

```js
log("width");
log(` type: ${width.constructor.name}`);
log(` value: ${width}`);
log(` resolved: ${getComputedStyle(demoBox).width}`);

log("\nfont-size");
log(` type: ${fontSize.constructor.name}`);
log(` values: [${[...fontSize.values].join(", ")}]`);
log(` resolved: ${getComputedStyle(demoBox).fontSize}`);
```

#### Result

`width` is represented by a `CSSUnitValue` object, which has a value that matches the resolved width.
`font-size` is represented by a `CSSMathProduct` object that exposes the `calc()` product's original terms.

{{EmbedLiveSample("`calc()` representations", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.mul", "mul()")}}
- {{domxref("CSSNumericValue.div", "div()")}}
- {{domxref("CSSMathValue.operator")}}
- {{domxref("CSSMathInvert")}}
- {{domxref("CSSMathSum")}}
