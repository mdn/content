---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryDescriptors
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSPositionTryDescriptors`** interface defines properties that represent the list of CSS descriptors that can be set in the body of a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

Each descriptor in the body of the corresponding {{cssxref("@position-try")}} at-rule can be accessed using either its property name in [bracket notation](/en-US/docs/Learn/JavaScript/Objects/Basics#bracket_notation) or the camel-case version of the property name "propertyName" in [dot notation](/en-US/docs/Learn/JavaScript/Objects/Basics#dot_notation).
For example, you can access the CSS property "property-name" as `style["property-name"]` or `style.propertyName`, where `style` is a `CSSPositionTryDescriptors` instance.
A property with a single-word name like {{cssxref("height")}} can be accessed using either notation: `style["height"]` or `style.height`.

> [!NOTE]
> The {{domxref("CSSPositionTryRule")}} interface represents a {{cssxref("@position-try")}} at-rule, and the {{domxref("CSSPositionTryRule.style")}} property is an instance of this object.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSStyleDeclaration")}}._

The property names in snake-case and camel-case are:

- `align-self` or `alignSelf`
  - : A string representing the value of an {{cssxref("align-self")}} descriptor in the corresponding `@position-try` at-rule.
- `block-size` or `blockSize`
  - : A string representing the value of a {{cssxref("block-size")}} descriptor in the corresponding `@position-try` at-rule.
- `bottom`
  - : A string representing the value of a {{cssxref("bottom")}} descriptor in the corresponding `@position-try` at-rule.
- `height`
  - : A string representing the value of a {{cssxref("height")}} descriptor in the corresponding `@position-try` at-rule.
- `inline-size` or `inlineSize`
  - : A string representing the value of an {{cssxref("inline-size")}} descriptor in the corresponding `@position-try` at-rule.
- `inset`
  - : A string representing the value of an {{cssxref("inset")}} descriptor in the corresponding `@position-try` at-rule.
- `position-area` or `positionArea`
  - : A string representing the value of a {{cssxref("position-area")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-block` or `insetBlock`
  - : A string representing the value of an {{cssxref("inset-block")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-block-end` or `insetBlockEnd`
  - : A string representing the value of an {{cssxref("inset-block-end")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-block-start` or `insetBlockStart`
  - : A string representing the value of an {{cssxref("inset-block-start")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-inline` or `insetInline`
  - : A string representing the value of an {{cssxref("inset-inline")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-inline-end` or `insetInlineEnd`
  - : A string representing the value of an {{cssxref("inset-inline-end")}} descriptor in the corresponding `@position-try` at-rule.
- `inset-inline-start` or `insetInlineStart`
  - : A string representing the value of an {{cssxref("inset-inline-start")}} descriptor in the corresponding `@position-try` at-rule.
- `justify-self` or `justifySelf`
  - : A string representing the value of a {{cssxref("justify-self")}} descriptor in the corresponding `@position-try` at-rule.
- `left`
  - : A string representing the value of a {{cssxref("left")}} descriptor in the corresponding `@position-try` at-rule.
- `margin`
  - : A string representing the value of a {{cssxref("margin")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-block` or `marginBlock`
  - : A string representing the value of a {{cssxref("margin-block")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-block-end` or `marginBlockEnd`
  - : A string representing the value of a {{cssxref("margin-block-end")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-block-start` or `marginBlockStart`
  - : A string representing the value of a {{cssxref("margin-block-start")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-bottom` or `margiBottom`
  - : A string representing the value of a {{cssxref("margin-bottom")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-inline` or `marginInline`
  - : A string representing the value of a {{cssxref("margin-inline")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-inline-end` or `marginInlineEnd`
  - : A string representing the value of a {{cssxref("margin-inline-end")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-inline-start` or `marginInlineStart`
  - : A string representing the value of a {{cssxref("margin-inline-start")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-left` or `marginLeft`
  - : A string representing the value of a {{cssxref("margin-left")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-right` or `marginRight`
  - : A string representing the value of a {{cssxref("margin-right")}} descriptor in the corresponding `@position-try` at-rule.
- `margin-top` or `marginTop`
  - : A string representing the value of a {{cssxref("margin-top")}} descriptor in the corresponding `@position-try` at-rule.
- `max-block-size` or `maxBlockSize`
  - : A string representing the value of a {{cssxref("max-block-size")}} descriptor in the corresponding `@position-try` at-rule.
- `max-height` or `maxHeight`
  - : A string representing the value of a {{cssxref("max-height")}} descriptor in the corresponding `@position-try` at-rule.
- `max-inline-size` or `maxInlineSize`
  - : A string representing the value of a {{cssxref("max-inline-size")}} descriptor in the corresponding `@position-try` at-rule.
- `max-width` or `maxWidth`
  - : A string representing the value of a {{cssxref("max-width")}} descriptor in the corresponding `@position-try` at-rule.
- `min-block-size` or `minBlockSize`
  - : A string representing the value of a {{cssxref("min-block-size")}} descriptor in the corresponding `@position-try` at-rule.
- `min-height` or `minHeight`
  - : A string representing the value of a {{cssxref("min-height")}} descriptor in the corresponding `@position-try` at-rule.
- `min-inline-size` or `minInlineSize`
  - : A string representing the value of a {{cssxref("min-inline-size")}} descriptor in the corresponding `@position-try` at-rule.
- `min-width` or `minWidth`
  - : A string representing the value of a {{cssxref("min-width")}} descriptor in the corresponding `@position-try` at-rule.
- `place-self` or `placeSelf`
  - : A string representing the value of a {{cssxref("place-self")}} descriptor in the corresponding `@position-try` at-rule.
- `position-anchor` or `positionAnchor`
  - : A string representing the value of a {{cssxref("position-anchor")}} descriptor in the corresponding `@position-try` at-rule.
- `right`
  - : A string representing the value of a {{cssxref("right")}} descriptor in the corresponding `@position-try` at-rule.
- `top`
  - : A string representing the value of a {{cssxref("top")}} descriptor in the corresponding `@position-try` at-rule.
- `width`
  - : A string representing the value of a {{cssxref("width")}} descriptor in the corresponding `@position-try` at-rule.

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSStyleDeclaration")}}._

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and three descriptors.

```css
@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.margin); // "0 0 0 10px"
console.log(tryOption.style["position-area"]); // "right"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("CSSPositionTryRule")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Handling overflow: try options and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
