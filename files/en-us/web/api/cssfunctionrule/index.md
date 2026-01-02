---
title: CSSFunctionRule
slug: Web/API/CSSFunctionRule
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSFunctionRule
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`CSSFunctionRule`** interface of the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) represents CSS {{cssxref("@function")}} (custom function) [at-rules](/en-US/docs/Web/CSS/Guides/Syntax/At-rules).

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from {{domxref("CSSGroupingRule")}}._

- {{domxref("CSSFunctionRule.name")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a string representing the custom function's name.
- {{domxref("CSSFunctionRule.returnType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a string representing the custom function's return type.

## Instance methods

_This interface also inherits methods from {{domxref("CSSGroupingRule")}}._

- {{domxref("CSSFunctionRule.getParameters()")}} {{experimental_inline}}
  - : Returns an array of objects representing the custom function's parameters.

## Examples

### Basic `CSSFunctionRule` usage

In this example, we define a CSS custom function and then access it using the CSSOM.

#### CSS

Our CSS defines a custom function using the {{cssxref("@function")}} at-rule. The function is called `--lighter()`, and outputs a lightened version of an input color. `--lighter()` accepts two parameters, a {{cssxref("&lt;color>")}} and a {{cssxref("&lt;number>")}}. It returns an {{cssxref("color_value/oklch", "oklch()")}} color created using [relative color syntax](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors); the input color is transformed into an `oklch()` color and its lightness channel is increased by the input number.

```css live-sample___cssfunctionrule-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Our script starts by getting a reference to the stylesheet attached to our document using {{domxref("HTMLStyleElement.sheet")}}, then getting a reference to the only rule in the stylesheet, the `CSSFunctionRule` — via {{domxref("CSSStylesheet.cssRules")}}. We then log each of the `CSSFunctionRule` members to the console.

```js live-sample___cssfunctionrule-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionRule members
console.log(cssFunc.name);
console.log(cssFunc.returnType);
console.log(cssFunc.getParameters());
```

- The `name` property is equal to `--lighter`.
- The `returnType` property is equal to `<color>`.
- The `getParameters()` method returns an array that looks like so:
  ```js
  [
    { name: "--color", type: "<color>" },
    { defaultValue: "0.2", name: "--lightness-adjust", type: "<number>" },
  ];
  ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}}
- {{domxref("CSSFunctionDescriptors")}}
- {{domxref("CSSFunctionDeclarations")}}
