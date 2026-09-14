---
title: CSSUnparsedValue
slug: Web/API/CSSUnparsedValue
page-type: web-api-interface
browser-compat: api.CSSUnparsedValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSUnparsedValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents a property value that can't be parsed into a more specific type — typically the value of a [custom property](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties).

The object is an iterable that may contain string fragments and variable references.

The items can be accessed and set by index (`unparsedValue[0]`), and as an iterable it can be used with a {{jsxref("Statements/for...of", "for...of")}} loop or the spread syntax.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}}
  - : Creates a new `CSSUnparsedValue` object.

## Instance properties

- {{domxref("CSSUnparsedValue.length")}} {{ReadOnlyInline}}
  - : Returns the number of items in the object.

## Instance methods

_Also inherits methods from its parent interface, {{domxref("CSSStyleValue")}}._

- {{domxref("CSSUnparsedValue.entries()")}}
  - : Returns a new _array iterator_ that yields `[index, value]` pairs for each item in the object.
- {{domxref("CSSUnparsedValue.forEach()")}}
  - : Executes a provided function once for each item in the object.
- {{domxref("CSSUnparsedValue.keys()")}}
  - : Returns a new _array iterator_ that yields the index of each item in the object.
- {{domxref("CSSUnparsedValue.values()")}}
  - : Returns a new _array iterator_ that yields each item in the object.

## Description

A `CSSUnparsedValue` instance is an iterable of items, where each item is either a string representing a fragment of CSS text that wasn't further parsed, or a {{domxref("CSSVariableReferenceValue")}} object representing a {{cssxref("var", "var()")}} function in the value (if any were specified).

For example, given the custom property:

```css
--foo: 10px var(--bar, blue);
```

The `CSSUnparsedValue` for `--foo` has two items:

- `"10px "`: a plain string fragment.
- A `CSSVariableReferenceValue`: representing `var(--bar, blue)`, with its own {{domxref("CSSVariableReferenceValue.variable", "variable")}} (`"--bar"`) and {{domxref("CSSVariableReferenceValue.fallback", "fallback")}} (a nested `CSSUnparsedValue` for `blue`).

### Parsing a `CSSUnparsedValue` further

`CSSUnparsedValue` preserves the raw, unparsed text of a value: it doesn't interpret that text as a length, a color, or any other more specific type.

If you know what kind of value the text represents, you can parse it further using the static `parse()` method of the type you expect, such as {{domxref("CSSNumericValue/parse_static", "CSSNumericValue.parse()")}} for a numeric value with a unit, or the more general {{domxref("CSSStyleValue/parse_static", "CSSStyleValue.parse()")}}, which additionally requires you to specify the target CSS property name.

These `parse()` methods take a CSS text string, not a `CSSUnparsedValue` object.
However since `CSSUnparsedValue` inherits the {{domxref("CSSStyleValue.toString()")}} stringifier, it can be passed directly wherever a string is expected.
Parsing throws a `SyntaxError` if the text doesn't match the syntax expected by the type you're parsing it as.

## Examples

### Creating, reading, and updating a `CSSUnparsedValue`

This example creates a `CSSUnparsedValue`, then reads its items via `length`, indexed access, and iteration, and finally updates one of the items by assigning to its index.

```js
const value = new CSSUnparsedValue(["1em", "#445566", "-45px"]);

console.log(value.length); // 3
console.log(value[0]); // "1em"

for (const fragment of value) {
  console.log(fragment);
}
// "1em"
// "#445566"
// "-45px"

value[0] = "2em";
console.log(value[0]); // "2em"
```

### Reading and parsing a custom property's value

A `CSSUnparsedValue` is what you get back when you read the value of a custom property from a {{domxref("StylePropertyMapReadOnly")}}, since the browser cannot know in advance what kind of value the property holds.
This example reads the `--unit` custom property from an element's computed style map, then parses it into a {{domxref("CSSUnitValue")}} using {{domxref("CSSNumericValue/parse_static", "CSSNumericValue.parse()")}}.

```html
<button id="btn">Styled button</button>
```

```css
#btn {
  --unit: 1.2rem;
  padding: var(--unit);
}
```

```js
const styleMap = document.getElementById("btn").computedStyleMap();
const unit = styleMap.get("--unit");

console.log(unit); // CSSUnparsedValue {0: " 1.2rem", length: 1}
console.log(unit[0]); // " 1.2rem"

const parsedUnit = CSSNumericValue.parse(unit);
console.log(parsedUnit.value); // 1.2
console.log(parsedUnit.unit); // "rem"
```

See the [`CSSUnparsedValue` section](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide#cssunparsedvalue) of the _CSS Typed OM guide_ for more detail on this example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSVariableReferenceValue")}}
- {{domxref("CSSImageValue")}}
- {{domxref("CSSKeywordValue")}}
- {{domxref("CSSNumericValue")}}
- {{domxref("CSSPositionValue")}}
- {{domxref("CSSTransformValue")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
