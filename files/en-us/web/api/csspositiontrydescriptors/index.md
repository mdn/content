---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryDescriptors
---

{{APIRef("CSSOM")}}

The **`CSSPositionTryDescriptors`** interface describes an object representing a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSStyleDeclaration")}}._

The `CSSPositionTryDescriptors` interface defines around 70 properties that represent all of the [possible CSS properties that can be set inside a `@position-try` at rule](/en-US/docs/Web/CSS/@position-try#declaration-list). It wouldn't be practical or useful to create a separate reference page for each of these properties, but you can find a full list in the [Browser compatibility](#browser_compatibility) section below.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSStyleDeclaration")}}._

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and several declarations in its body.

```css
@position-try --custom-right {
  inset-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}
```

```js
let myRules = document.styleSheets[0].cssRules;
let tryOptionStyles = myRules[0].style; // a CSSPositionTryDescriptors object
console.log(tryOptionStyles.margin); // Logs "0 0 0 10px" to the console.
console.log(tryOptionStyles.insetArea); // Logs "right" to the console.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@position-try")}}
- {{cssxref("position-try-options")}}
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
