---
title: "CSSMathValue: operator property"
short-title: operator
slug: Web/API/CSSMathValue/operator
page-type: web-api-instance-property
browser-compat: api.CSSMathValue.operator
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`operator`** read-only property of the {{domxref("CSSMathValue")}} interface returns the operator that the current subtype represents.
For example, if the current `CSSMathValue` subtype is `CSSMathSum`, this property will return the string `"sum"`.

## Value

A {{jsxref('String')}}.

| Interface                     | Value       |
| ----------------------------- | ----------- |
| {{domxref('CSSMathSum')}}     | `"sum"`     |
| {{domxref('CSSMathProduct')}} | `"product"` |
| {{domxref('CSSMathMin')}}     | `"min"`     |
| {{domxref('CSSMathMax')}}     | `"max"`     |
| {{domxref('CSSMathClamp')}}   | `"clamp"`   |
| {{domxref('CSSMathNegate')}}  | `"negate"`  |
| {{domxref('CSSMathInvert')}}  | `"invert"`  |

## Examples

### Basic usage

This example shows how the `operator` property identifies the operation represented by a {{cssxref("calc()")}} value's `CSSMathValue` subtype, including for a nested value.

#### HTML

```html
<div id="demoBox">Text</div>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

`width` is set using a `calc()` subtraction, which is represented as a `CSSMathSum` whose second term is negated.

```css
#demoBox {
  width: calc(50% - 0.5vw);
}
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

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText += `${text}\n`;
}
```

We read the `width` value using {{domxref("Element.computedStyleMap()", "computedStyleMap()")}}, then log its `operator` and the `operator` of its nested value.

```js
const styleMap = document.querySelector("#demoBox").computedStyleMap();
const width = styleMap.get("width");

log(`operator: ${width.operator}`);
log(`nested value operator: ${width.values[1].operator}`);
```

#### Result

`width` is represented by a `CSSMathSum` object whose `operator` is `"sum"`, because `calc(50% - 0.5vw)` is represented as an addition of `50%` and the negation of `0.5vw`.
The second nested value's `operator` is `"negate"`, reflecting that negation.

{{EmbedLiveSample("Basic usage", 300, 170)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
