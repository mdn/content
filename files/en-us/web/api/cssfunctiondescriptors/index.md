---
title: CSSFunctionDescriptors
slug: Web/API/CSSFunctionDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSFunctionDescriptors
---

{{ APIRef("CSSOM") }}{{SeeCompatTable}}

The **`CSSFunctionDescriptors`** interface of the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) represents the descriptors contained within a set of CSS declarations represented by a {{domxref("CSSFunctionDeclarations")}} object.

A `CSSFunctionDescriptors` object is accessed via the {{domxref("CSSFunctionDeclarations.style")}} property.

{{InheritanceDiagram}}

## Instance properties

_This interface also inherits properties from {{domxref("CSSStyleDeclaration")}}._

- {{domxref("CSSFunctionDescriptors.result")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Returns a string representing a `result` descriptor, if one exists in the associated set of declarations.

## Examples

### Basic `CSSFunctionDescriptors` usage

In this example, we define a CSS custom function and then access its declarations using the CSSOM.

#### CSS

Our CSS defines a custom function using the {{cssxref("@function")}} at-rule. The function is called `--lighter()`, and outputs a lightened version of an input color. `--lighter()` accepts two parameters, a {{cssxref("&lt;color>")}} and a {{cssxref("&lt;number>")}}. It returns an {{cssxref("color_value/oklch", "oklch()")}} color created using [relative color syntax](/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors); the input color is transformed into an `oklch()` color and its lightness channel is increased by the input number.

```css live-sample___cssfunctiondescriptors-basics
@function --lighter(--color <color>, --lightness-adjust <number>: 0.2) returns
  <color> {
  result: oklch(from var(--color) calc(l + var(--lightness-adjust)) c h);
}
```

#### JavaScript

Our script starts by getting a reference to the stylesheet attached to our document using {{domxref("HTMLStyleElement.sheet")}}, then getting a reference to the only rule in the stylesheet, the `CSSFunctionRule` — via {{domxref("CSSStylesheet.cssRules")}}.

We then access the `CSSFunctionDeclarations` object representing the only continuous run of declarations inside the function using {{domxref("CSSGroupingRule.cssRules", "cssRules[0]")}}, access its descriptor's information using {{domxref("CSSFunctionDeclarations.style")}}, and then access the descriptor style information. All of this information is logged to the console.

```js live-sample___cssfunctiondescriptors-basics
// Get a CSSFunctionRule
const cssFunc = document.getElementById("css-output").sheet.cssRules[0];

// Accessing CSSFunctionDeclarations and CSSFunctionDescriptors
console.log(cssFunc.cssRules[0]); // CSSFunctionDeclarations
console.log(cssFunc.cssRules[0].style); // CSSFunctionDescriptors
console.log(cssFunc.cssRules[0].style.result);
```

Most notably, the `result` property is equal to the `@function` body's `result` descriptor, which is `oklch(from var(--color) calc(l + var(--lightness-adjust)) c h)`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@function")}}
- {{domxref("CSSFunctionRule")}}
- {{domxref("CSSFunctionDeclarations")}}
