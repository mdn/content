---
title: CSSMathSum
slug: Web/API/CSSMathSum
page-type: web-api-interface
browser-compat: api.CSSMathSum
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

The **`CSSMathSum`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the sum of two or more {{domxref('CSSNumericValue')}} values — in cases where the result can't be represented as a single value.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathSum.CSSMathSum", "CSSMathSum()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathSum` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref('CSSMathSum.values')}} {{ReadOnlyInline}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

A `CSSMathSum` is produced whenever an addition or subtraction can't be resolved to a single value — for example, when the operands use different units, such as a length and a percentage.

Calling {{domxref('CSSNumericValue.add','add()')}} or {{domxref('CSSNumericValue.sub','sub()')}} on operands that can't be combined returns a `CSSMathSum`; if every operand shares the same unit, they resolve immediately to a single {{domxref('CSSUnitValue')}} instead.
{{domxref('CSSNumericValue.toSum','toSum()')}}, by contrast, always returns a `CSSMathSum`, even when its terms could be combined into a single value.

[`StylePropertyMapReadOnly.get()`](/en-US/docs/Web/API/StylePropertyMapReadOnly/get) returns a `CSSMathSum` the same way — for a {{cssxref("calc()")}} value that resolves to an addition or subtraction it can't combine into one value.

`CSSMathSum` represents the sum expression itself, not a resolved value.
To get the resolved value, use {{domxref("Window.getComputedStyle", "getComputedStyle()")}}.

## Examples

### Basic usage

The following code creates a `CSSMathSum` instance from three values, then reads back its `operator` and `values` properties.

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.constructor.name); // "CSSMathSum"
console.log(sum.operator); // 'sum'

console.log(sum.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(sum.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `calc()` representations

This example shows how a {{cssxref("calc()")}} addition is represented by a {{domxref("CSSUnitValue")}} or a `CSSMathSum`, depending on whether its terms share a unit.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` is set using a `calc()` sum whose terms are both `px` lengths, so the browser can resolve it to a single fixed value immediately.
`font-size` is set using a `calc()` sum that mixes `rem` and `vw`, so the browser can't combine the terms until layout (this will be represented by a `CSSMathSum`).

```css
#demoBox {
  width: calc(10px + 5px);
  font-size: calc(1rem + 5vw);
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
`font-size` is represented by a `CSSMathSum` object that exposes the `calc()` sum's original terms.

{{EmbedLiveSample("`calc()` representations", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericValue.add", "add()")}}
- {{domxref("CSSNumericValue.sub", "sub()")}}
- {{domxref("CSSNumericValue.toSum", "toSum()")}}
- {{domxref("CSSMathValue.operator")}}
- {{domxref("CSSMathNegate")}}
- {{domxref("CSSMathProduct")}}
