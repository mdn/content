---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
page-type: web-api-interface
status:
  - experimental
browser-compat: api.CSSPositionTryDescriptors
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

The **`CSSPositionTryDescriptors`** interface describes an object representing a {{cssxref("@position-try")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestor {{domxref("CSSStyleDeclaration")}}._

The `CSSPositionTryDescriptors` interface defines properties that represent the [CSS properties that can be set inside a `@position-try` at rule](/en-US/docs/Web/CSS/@position-try#declaration-list).

There are 35 CSS properties that can be accessed as CSS property names or camel-case. For each one:

- `CSSPositionTryDescriptors.propertyName`
  - : Represents the property value set in the `@position-try` at-rule using the camel-cased property name.
- `CSSPositionTryDescriptors["property-name"]`
  - : Represents the property value set in the `@position-try` at-rule using the CSS property name.

The instance properties are listed below:

| CSS&nbsp;property                  | Camel-case                                    | Property name                                      |
| ---------------------------------- | --------------------------------------------- | -------------------------------------------------- |
| {{cssxref("align-self")}}          | `CSSPositionTryDescriptors.alignSelf`         | `CSSPositionTryDescriptors["align-self"]`          |
| {{cssxref("block-size")}}          | `CSSPositionTryDescriptors.blockSize`         | `CSSPositionTryDescriptors["block-size"]`          |
| {{cssxref("bottom")}}              | `CSSPositionTryDescriptors.bottom`            | `CSSPositionTryDescriptors["bottom"]`              |
| {{cssxref("height")}}              | `CSSPositionTryDescriptors.height`            | `CSSPositionTryDescriptors["height"]`              |
| {{cssxref("inline-size")}}         | `CSSPositionTryDescriptors.inlineSize`        | `CSSPositionTryDescriptors["inline-size"]`         |
| {{cssxref("inset")}}               | `CSSPositionTryDescriptors.inset`             | `CSSPositionTryDescriptors["inset"]`               |
| {{cssxref("inset-area")}}          | `CSSPositionTryDescriptors.insetArea`         | `CSSPositionTryDescriptors["inset-area"]`          |
| {{cssxref("inset-block")}}         | `CSSPositionTryDescriptors.insetBlock`        | `CSSPositionTryDescriptors["inset-block"]`         |
| {{cssxref("inset-block-end")}}     | `CSSPositionTryDescriptors.insetBlockEnd`     | `CSSPositionTryDescriptors["inset-block-end"]`     |
| {{cssxref("inset-block-start")}}   | `CSSPositionTryDescriptors.insetBlockStart`   | `CSSPositionTryDescriptors["inset-block-start"]`   |
| {{cssxref("inset-inline")}}        | `CSSPositionTryDescriptors.insetInline`       | `CSSPositionTryDescriptors["inset-inline"]`        |
| {{cssxref("inset-inline-end")}}    | `CSSPositionTryDescriptors.insetInlineEnd`    | `CSSPositionTryDescriptors["inset-inline-end"]`    |
| {{cssxref("inset-inline-start")}}  | `CSSPositionTryDescriptors.insetInlineStart`  | `CSSPositionTryDescriptors["inset-inline-start"]`  |
| {{cssxref("justify-self")}}        | `CSSPositionTryDescriptors.justifySelf`       | `CSSPositionTryDescriptors["justify-self"]`        |
| {{cssxref("left")}}                | `CSSPositionTryDescriptors.left`              | `CSSPositionTryDescriptors["left"]`                |
| {{cssxref("margin")}}              | `CSSPositionTryDescriptors.margin`            | `CSSPositionTryDescriptors["margin"]`              |
| {{cssxref("margin-block")}}        | `CSSPositionTryDescriptors.marginBlock`       | `CSSPositionTryDescriptors["margin-block"]`        |
| {{cssxref("margin-block-end")}}    | `CSSPositionTryDescriptors.marginBlockEnd`    | `CSSPositionTryDescriptors["margin-block-end"]`    |
| {{cssxref("margin-block-start")}}  | `CSSPositionTryDescriptors.marginBlockStart`  | `CSSPositionTryDescriptors["margin-block-start"]`  |
| {{cssxref("margin-bottom")}}       | `CSSPositionTryDescriptors.marginBottom`      | `CSSPositionTryDescriptors["margin-bottom"]`       |
| {{cssxref("margin-inline")}}       | `CSSPositionTryDescriptors.marginInline`      | `CSSPositionTryDescriptors["margin-inline"]`       |
| {{cssxref("margin-inline-end")}}   | `CSSPositionTryDescriptors.marginInlineEnd`   | `CSSPositionTryDescriptors["margin-inline-end"]`   |
| {{cssxref("margin-inline-start")}} | `CSSPositionTryDescriptors.marginInlineStart` | `CSSPositionTryDescriptors["margin-inline-start"]` |
| {{cssxref("margin-left")}}         | `CSSPositionTryDescriptors.marginLeft`        | `CSSPositionTryDescriptors["margin-left"]`         |
| {{cssxref("margin-right")}}        | `CSSPositionTryDescriptors.marginRight`       | `CSSPositionTryDescriptors["margin-right"]`        |
| {{cssxref("margin-top")}}          | `CSSPositionTryDescriptors.marginTop`         | `CSSPositionTryDescriptors["margin-top"]`          |
| {{cssxref("max-block-size")}}      | `CSSPositionTryDescriptors.maxBlockSize`      | `CSSPositionTryDescriptors["max-block-size"]`      |
| {{cssxref("max-height")}}          | `CSSPositionTryDescriptors.maxHeight`         | `CSSPositionTryDescriptors["max-height"]`          |
| {{cssxref("max-inline-size")}}     | `CSSPositionTryDescriptors.maxInlineSize`     | `CSSPositionTryDescriptors["max-inline-size"]`     |
| {{cssxref("max-width")}}           | `CSSPositionTryDescriptors.maxWidth`          | `CSSPositionTryDescriptors["max-width"]`           |
| {{cssxref("min-block-size")}}      | `CSSPositionTryDescriptors.minBlockSize`      | `CSSPositionTryDescriptors["min-block-size"]`      |
| {{cssxref("min-height")}}          | `CSSPositionTryDescriptors.minHeight`         | `CSSPositionTryDescriptors["min-height"]`          |
| {{cssxref("min-inline-size")}}     | `CSSPositionTryDescriptors.minInlineSize`     | `CSSPositionTryDescriptors["min-inline-size"]`     |
| {{cssxref("min-width")}}           | `CSSPositionTryDescriptors.minWidth`          | `CSSPositionTryDescriptors["min-width"]`           |
| {{cssxref("place-self")}}          | `CSSPositionTryDescriptors.placeSelf`         | `CSSPositionTryDescriptors["place-self"]`          |
| {{cssxref("position-anchor")}}     | `CSSPositionTryDescriptors.positionAnchor`    | `CSSPositionTryDescriptors["position-anchor"]`     |
| {{cssxref("right")}}               | `CSSPositionTryDescriptors.right`             | `CSSPositionTryDescriptors["right"]`               |
| {{cssxref("top")}}                 | `CSSPositionTryDescriptors.top`               | `CSSPositionTryDescriptors["top"]`                 |
| {{cssxref("width")}}               | `CSSPositionTryDescriptors.width`             | `CSSPositionTryDescriptors["width"]`               |

## Instance methods

_No specific methods; inherits methods from its ancestor {{domxref("CSSStyleDeclaration")}}._

## Examples

The CSS includes a `@position-try` at-rule with a name of `--custom-right` and three descriptors.

```css
@position-try --custom-right {
  inset-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.margin); // "0 0 0 10px"
console.log(tryOption.style["inset-area"]); // "right"
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
