---
title: CSSMathMax
slug: Web/API/CSSMathMax
page-type: web-api-interface
browser-compat: api.CSSMathMax
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathMax`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the CSS {{CSSXref('max','max()')}} function.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathMax.CSSMathMax", "CSSMathMax()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathMax` object.

## Instance properties

_Also inherits properties from its parent interface, {{DOMxRef("CSSMathValue")}}._

- {{domxref('CSSMathMax.values')}} {{ReadOnlyInline}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSMathValue")}}._

## Description

The CSS {{cssxref("max", "max()")}} function takes one or more comma-separated values as arguments and returns the largest of them.

If all arguments are absolute values, such as pixel lengths, `max()` is resolved to a single value at parse time, represented by the CSS Typed Object Model as a {{domxref("CSSUnitValue")}}.
If the `max()` expression can't be resolved to a single value at parse time (say, because one of its arguments uses a relative unit like `vw` or `%`), the function is represented as a `CSSMathMax` object, and the arguments passed to `max()` (or to the `CSSMathMax()` constructor) are exposed as the `values` property.

Note that `CSSMathMax` represents the `max()` function, not its resolved value.
In order to determine the value of a property using `max()`, you need to read its computed style (for example with {{domxref("Window.getComputedStyle", "getComputedStyle()")}}).

## Examples

### Basic usage

The following code creates a `CSSMathMax` instance from three values, then reads back its `operator` and `values` properties.

```js
const max = new CSSMathMax(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(max.constructor.name); // "CSSMathMax"
console.log(max.operator); // 'max'
console.log(max.values); // CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(max.values[0]); // CSSUnitValue {value: 10, unit: "px"}
```

### `max()` representations

This example shows how {{cssxref("max", "max()")}} is represented by a {{domxref("CSSUnitValue")}} or a `CSSMathMax`, depending on whether all of its arguments are absolute values.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` is set using a `max()` whose arguments are all absolute lengths, so the browser can resolve it to a single fixed value immediately.
`font-size` is set using a `max()` where one argument uses the relative unit `vw`, so the browser can't resolve it until layout (this will be represented by a `CSSMathMax`).

```css
#demoBox {
  width: max(10px, 50px);
  font-size: max(1rem, 5vw);
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
`font-size` is represented by a `CSSMathMax` object that exposes the `max()` function's original operands.

{{EmbedLiveSample("`max()` representations", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
