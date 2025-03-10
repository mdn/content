---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryDescriptors
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSPositionTryDescriptors`** interface defines properties that represent the list of CSS descriptors that can be set in the body of a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

Each descriptor in the body of the corresponding {{cssxref("@position-try")}} at-rule can be accessed using either its property name in [bracket notation](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) or the camel-case version of the property name "propertyName" in [dot notation](/en-US/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation).
For example, you can access the CSS property "property-name" as `style["property-name"]` or `style.propertyName`, where `style` is a `CSSPositionTryDescriptors` instance.
A property with a single-word name like {{cssxref("height")}} can be accessed using either notation: `style["height"]` or `style.height`.

> [!NOTE]
> The {{domxref("CSSPositionTryRule")}} interface represents a {{cssxref("@position-try")}} at-rule, and the {{domxref("CSSPositionTryRule.style")}} property is an instance of this object.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSStyleDeclaration")}}._

The following property names, in snake-case (accessed using bracket notation) and camel-case (accessed using dot notation), each represent the value of a descriptor in the corresponding `@position-try` at-rule:

- `align-self` or `alignSelf` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("align-self")}} descriptor.
- `block-size` or `blockSize` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("block-size")}} descriptor.
- `bottom` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("bottom")}} descriptor.
- `height` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("height")}} descriptor.
- `inline-size` or `inlineSize` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inline-size")}} descriptor.
- `inset` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset")}} descriptor.
- `position-area` or `positionArea` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("position-area")}} descriptor.
- `inset-block` or `insetBlock` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-block")}} descriptor.
- `inset-block-end` or `insetBlockEnd` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-block-end")}} descriptor.
- `inset-block-start` or `insetBlockStart` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-block-start")}} descriptor.
- `inset-inline` or `insetInline` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-inline")}} descriptor.
- `inset-inline-end` or `insetInlineEnd` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-inline-end")}} descriptor.
- `inset-inline-start` or `insetInlineStart` {{experimental_inline}}
  - : A string representing the value of an {{cssxref("inset-inline-start")}} descriptor.
- `justify-self` or `justifySelf` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("justify-self")}} descriptor.
- `left` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("left")}} descriptor.
- `margin` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin")}} descriptor.
- `margin-block` or `marginBlock` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-block")}} descriptor.
- `margin-block-end` or `marginBlockEnd` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-block-end")}} descriptor.
- `margin-block-start` or `marginBlockStart` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-block-start")}} descriptor.
- `margin-bottom` or `marginBottom` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-bottom")}} descriptor.
- `margin-inline` or `marginInline` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-inline")}} descriptor.
- `margin-inline-end` or `marginInlineEnd` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-inline-end")}} descriptor.
- `margin-inline-start` or `marginInlineStart` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-inline-start")}} descriptor.
- `margin-left` or `marginLeft` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-left")}} descriptor.
- `margin-right` or `marginRight` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-right")}} descriptor.
- `margin-top` or `marginTop` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("margin-top")}} descriptor.
- `max-block-size` or `maxBlockSize` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("max-block-size")}} descriptor.
- `max-height` or `maxHeight` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("max-height")}} descriptor.
- `max-inline-size` or `maxInlineSize` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("max-inline-size")}} descriptor.
- `max-width` or `maxWidth` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("max-width")}} descriptor.
- `min-block-size` or `minBlockSize` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("min-block-size")}} descriptor.
- `min-height` or `minHeight` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("min-height")}} descriptor.
- `min-inline-size` or `minInlineSize` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("min-inline-size")}} descriptor.
- `min-width` or `minWidth` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("min-width")}} descriptor.
- `place-self` or `placeSelf` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("place-self")}} descriptor.
- `position-anchor` or `positionAnchor` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("position-anchor")}} descriptor.
- `right` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("right")}} descriptor.
- `top` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("top")}} descriptor.
- `width` {{experimental_inline}}
  - : A string representing the value of a {{cssxref("width")}} descriptor.

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
