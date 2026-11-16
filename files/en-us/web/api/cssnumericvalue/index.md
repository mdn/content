---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
page-type: web-api-interface
browser-compat: api.CSSNumericValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSNumericValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) is the base interface for objects that represent CSS numeric values, such as `10px`, `50%`, or `calc(1px + 2em)`.
It provides the common methods for basic arithmetic, comparing values, and converting between units.

> [!NOTE]
> `CSSNumericValue` can't be constructed directly.
> Instances are created by the [numeric factory functions](/en-US/docs/Web/API/CSS/factory_functions_static) such as `CSS.px()`, by {{domxref("CSSNumericValue.parse_static", "parse()")}}, or by reading a style, and are always one of its subtypes, listed below.

{{InheritanceDiagram}}

## Instance properties

None.

## Static methods

- {{domxref("CSSNumericValue.parse_static", "CSSNumericValue.parse()")}}
  - : Creates a `CSSNumericValue` from a string of CSS, such as `"42px"`.

## Instance methods

- {{domxref("CSSNumericValue.add()")}}
  - : Returns a new value that is the sum of the `CSSNumericValue` and the supplied values.
- {{domxref("CSSNumericValue.sub()")}}
  - : Returns a new value that is the `CSSNumericValue` minus the supplied values.
- {{domxref("CSSNumericValue.mul()")}}
  - : Returns a new value that is the `CSSNumericValue` multiplied by the supplied values.
- {{domxref("CSSNumericValue.div()")}}
  - : Returns a new value that is the `CSSNumericValue` divided by the supplied values.
- {{domxref("CSSNumericValue.min()")}}
  - : Returns the smallest of the `CSSNumericValue` and the supplied values, or a {{domxref("CSSMathMin")}} if they don't all have the same unit.
- {{domxref("CSSNumericValue.max()")}}
  - : Returns the largest of the `CSSNumericValue` and the supplied values, or a {{domxref("CSSMathMax")}} if they don't all have the same unit.
- {{domxref("CSSNumericValue.equals()")}}
  - : Returns `true` if every value passed is the same as the `CSSNumericValue`, written with the same values and units, and `false` otherwise.
- {{domxref("CSSNumericValue.to()")}}
  - : Converts the `CSSNumericValue` to a {{domxref("CSSUnitValue")}} in the specified unit.
- {{domxref("CSSNumericValue.toSum()")}}
  - : Converts the `CSSNumericValue` into a {{domxref("CSSMathSum")}} whose terms use only the specified units, or into the simplest such sum if no units are given.
- {{domxref("CSSNumericValue.type()")}}
  - : Returns a `CSSNumericType` dictionary that describes the type of the `CSSNumericValue`, such as a length or an angle.

## Interfaces based on CSSNumericValue

The following interfaces inherit from `CSSNumericValue`:

- {{domxref('CSSMathClamp')}}
- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}
- {{domxref('CSSMathValue')}}
- {{domxref('CSSUnitValue')}}

## Examples

### Doing arithmetic with numeric values

The following code adds and multiplies numeric values created with the [numeric factory functions](/en-US/docs/Web/API/CSS/factory_functions_static).
When the result can be written as a single value in one unit, the method returns a {{domxref("CSSUnitValue")}}.
Otherwise, it returns one of the {{domxref("CSSMathValue")}} subtypes, which keep the terms separate.

```js
const sameUnits = CSS.px(10).add(CSS.px(5));
console.log(sameUnits.constructor.name); // "CSSUnitValue"
console.log(sameUnits.toString()); // "15px"

const mixedUnits = CSS.px(10).add(CSS.percent(5));
console.log(mixedUnits.constructor.name); // "CSSMathSum"
console.log(mixedUnits.toString()); // "calc(10px + 5%)"

const doubled = CSS.px(10).mul(2);
console.log(doubled.toString()); // "20px"
```

### Growing a box with arithmetic

This example uses the arithmetic methods to make a box wider each time a button is clicked, up to a maximum width.
Note that there is hidden logging code that isn't relevant to the example.

#### HTML

First we define the box to grow, and the button we use to grow it.

```html
<div id="grow-box"></div>
<button id="grow-button">Grow by 20px</button>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

The box starts 100 pixels wide.

```css
#grow-box {
  width: 100px;
  height: 50px;
  margin-bottom: 1rem;
  background-color: #6666dd;
}
```

```css hidden
#log {
  height: 120px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

The code first gets the box and the button, and sets the maximum width as a `CSSUnitValue`.
It then uses {{domxref("Element.computedStyleMap", "computedStyleMap()")}} to get the box's starting width, and logs it along with its {{domxref("CSSNumericValue.type()", "type()")}}.

```js
const growBox = document.getElementById("grow-box");
const growButton = document.getElementById("grow-button");
const maxWidth = CSS.px(300);

const startWidth = growBox.computedStyleMap().get("width");
log(`start: ${startWidth}, type: ${JSON.stringify(startWidth.type())}`);
```

Each time the button is clicked, the handler reads the box's current width and uses {{domxref("CSSNumericValue.add()", "add()")}} to add 20 pixels to it.
It then uses {{domxref("CSSNumericValue.min()", "min()")}} to make sure the new width is never larger than `maxWidth`.
Because all the values are in `px`, each method returns a single `CSSUnitValue`, which the handler sets as the box's new width.

```js
growButton.addEventListener("click", () => {
  const width = growBox.computedStyleMap().get("width");
  const newWidth = width.add(CSS.px(20)).min(maxWidth);
  growBox.attributeStyleMap.set("width", newWidth);
  log(`width: ${newWidth}`);
});
```

#### Result

Click the button to grow the box.
The log starts with the box's width and its type, `{"length":1}`, which means the width is a length.
It then shows the new width after each click, and the box stops growing at `300px`.

{{EmbedLiveSample("Growing a box with arithmetic", 300, 250)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
