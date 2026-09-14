---
title: CSSMathMin
slug: Web/API/CSSMathMin
page-type: web-api-interface
browser-compat: api.CSSMathMin
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathMin`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the CSS {{CSSXref('min','min()')}} function.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathMin.CSSMathMin", "CSSMathMin()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathMin` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref('CSSMathMin.values')}} {{ReadOnlyInline}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

The CSS {{cssxref("min", "min()")}} function takes one or more comma-separated values as arguments and returns the smallest of them.

If all arguments are absolute values, such as pixel lengths, `min()` is resolved to a single value at parse time, represented by the CSS Typed Object Model as a {{domxref("CSSUnitValue")}}.
If the `min()` expression can't be resolved to a single value at parse time (say, because one of its arguments uses a relative unit like `vw` or `%`), the function is represented as a `CSSMathMin` object, and the arguments passed to `min()` (or to the `CSSMathMin()` constructor) are exposed as the `values` property.

Note that `CSSMathMin` represents the `min()` function, not its resolved value.
In order to determine the value of a property using `min()`, you need to read its computed style (for example with {{domxref("Window.getComputedStyle", "getComputedStyle()")}}).

## Examples

### Basic usage

The following code creates a `CSSMathMin` instance from three values, then reads back its `operator` and `values` properties.

```js
const min = new CSSMathMin(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(min.constructor.name); // "CSSMathMin"
console.log(min.operator); // 'min'
console.log(min.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(min.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `min()` representations

This example shows how {{cssxref("min", "min()")}} is represented by a {{domxref("CSSUnitValue")}} or a `CSSMathMin`, depending on whether all of its arguments are absolute values.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` is set using a `min()` whose arguments are all absolute lengths, so the browser can resolve it to a single fixed value immediately.
`font-size` is set using a `min()` where one argument uses the relative unit `vw`, so the browser can't resolve it until layout (this will be represented by a `CSSMathMin`).

```css
#demoBox {
  width: min(10px, 50px);
  font-size: min(1rem, 5vw);
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
`font-size` is represented by a `CSSMathMin` object that exposes the `min()` function's original operands.

{{EmbedLiveSample("`min()` representations", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
