---
title: CSSMathValue
slug: Web/API/CSSMathValue
page-type: web-api-interface
browser-compat: api.CSSMathValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSMathValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) is the base interface for objects representing complex numeric values produced by the CSS {{cssxref("calc()")}}, {{cssxref("min()")}}, {{cssxref("max()")}}, and {{cssxref("clamp()")}} functions.

> [!NOTE]
> `CSSMathValue` cannot be constructed directly.
> Instances are returned by the platform (for example via {{domxref("StylePropertyMapReadOnly.get()")}}) as one of its subtypes, listed below.

{{InheritanceDiagram}}

## Instance properties

- {{domxref('CSSMathValue.operator')}} {{ReadOnlyInline}}
  - : Returns the operator that the current subtype represents.

## Static methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSNumericValue")}}._

## Instance methods

_Also inherits methods from its parent interface, {{DOMxRef("CSSNumericValue")}}._

## Interfaces based on CSSMathValue

- {{DOMxRef('CSSMathClamp')}}
- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}

## Examples

### `calc()` representations

This example shows how the {{domxref("CSSMathValue.operator", "operator")}} property identifies the operation represented by a {{cssxref("calc()")}} value's `CSSMathValue` subtype, including for a nested value.

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
  width: calc(30% - 20px);
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

log(`type: ${width.constructor.name}`);
log(`operator: ${width.operator}`);
log(`nested value type: ${width.values[1].constructor.name}`);
log(`nested value operator: ${width.values[1].operator}`);
```

#### Result

`width` is represented by a `CSSMathSum` object whose `operator` is `"sum"`, because `calc(30% - 20px)` is represented as an addition of `30%` and the negation of `20px`.
The second nested value's type is `CSSMathNegate` and its `operator` is `"negate"` (reflecting that negation).

{{EmbedLiveSample("`calc()` representations", 300, 170)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
