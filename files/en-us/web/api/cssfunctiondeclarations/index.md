---
title: CSSFunctionDeclarations
slug: Web/API/CSSFunctionDeclarations
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSFunctionDeclarations
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`CSSFunctionDeclarations`** interface of the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) represents a consecutive run of CSS declarations included within a {{cssxref("@function")}} body.

This can include [CSS custom properties](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), and the value of the `results` descriptor inside the `@function` body, but it doesn't include blocks such as {{cssxref("@media")}} at-rules that may be included. Such a block, included in the middle of a set of declarations, would cause the body contents to be broken up into separate `CSSFunctionDeclarations` objects, as seen in our [Multiple `CSSFunctionDeclarations`](#multiple_cssfunctiondeclarations) demo.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from {{domxref("CSSRule")}}._

- {{domxref("CSSFunctionDeclarations.style")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a {{domxref("CSSFunctionDescriptors")}} object representing the descriptors available in a {{cssxref("@function")}} body.

## Examples

### Basic `CSSFunctionDeclarations` usage

In this example, we define a CSS custom function and then access its declarations using the CSSOM.

#### CSS

Our CSS defines a custom function using the {{cssxref("@function")}} at-rule. The function is called `--lighter()`, and outputs a lightened version of an input color. `--lighter()` accepts two parameters, a {{cssxref("&lt;color>")}} and a {{cssxref("&lt;number>")}}. It returns an {{cssxref("color_value/oklch", "oklch()")}} color created using [relative color syntax](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors); the input color is transformed into an `oklch()` color and its lightness channel is increased by the input number.

```css live-sample___cssfunctiondeclarations-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  --someVar: 100;
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

We've also included a local [custom property](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) inside the function, `--someVar`, which isn't used, but illustrates what happens when multiple declarations are available continuously inside the `@function` body.

#### JavaScript

Our script starts by getting a reference to the stylesheet attached to our document using {{domxref("HTMLStyleElement.sheet")}}, then getting a reference to the only rule in the stylesheet, the `CSSFunctionRule` — via {{domxref("CSSStylesheet.cssRules")}}.

We then access the `CSSFunctionDeclarations` object representing the only continuous run of declarations inside the function using {{domxref("CSSGroupingRule.cssRules", "cssRules[0]")}}, access its descriptor's information using {{domxref("CSSFunctionDeclarations.style")}}, and then access the descriptor length and style information. All of this information is logged to the console.

```js live-sample___cssfunctiondeclarations-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.length);
console.log(cssFunc.cssRules[0].style.result);
```

Most notably:

- The `length` property is equal to `2`, as there are two parts to the descriptor's text (`--someVar: 100;` and `result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);`).
- The `result` property is equal to the `@function` body's `result` descriptor, which is `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)`.

### Multiple `CSSFunctionDeclarations`

In this example, we show how a `@media` at-rule inserted in the middle of a set of declarations causes two `CSSFunctionDeclarations` objects to be generated.

#### CSS

Our CSS shows a `@function` example taken from the specification, `--bar()`, which doesn't do much, but features a set of declarations separated by a `@media` block.

```css live-sample___multiple-cssfunctiondeclarations
@function --bar() {
  --x: 42;
  result: var(--y);
  @media (width > 1000px) {
    /* ... */
  }
  --y: var(--x);
}
```

#### JavaScript

Our script starts by getting a reference to the stylesheet attached to our document via {{domxref("HTMLStyleElement.sheet")}}, then getting a reference to the only rule in the stylesheet, the `CSSFunctionRule` — via {{domxref("CSSStylesheet.cssRules")}}.

We then access the {{domxref("CSSGroupingRule.cssRules")}}, logging its value to the console. This returns a {{domxref("CSSRuleList")}} object containing three objects:

- A `CSSFunctionDeclarations` object representing the `--x: 42;result: var(--y);` portion.
- A {{domxref("CSSMediaRule")}} object representing the `@media` at-rule.
- A second `CSSFunctionDeclarations` object representing the `--y: var(--x);` portion.

```js live-sample___multiple-cssfunctiondeclarations
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing both CSSFunctionDeclarations
console.log(cssFunc.cssRules);
```

We then log a few details of each `CSSFunctionDeclarations` object to the console — the object itself, the {{domxref("CSSFunctionDescriptors")}} object contained in its `style` property, and the {{domxref("CSSFunctionDescriptors.result")}} property.

```js live-sample___multiple-cssfunctiondeclarations
console.log(cssFunc.cssRules[0]); // First CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);

console.log(cssFunc.cssRules[2]); // Second CSSFunctionDeclarations
console.log(cssFunc.cssRules[2].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[2].style.result);
```

In the second case, `result` returns an empty string, because the second declarations portion does not contain a `result` descriptor.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}}
- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDescriptors")}}
