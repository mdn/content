---
title: mathvariant
slug: Web/MathML/Global_attributes/mathvariant
page-type: mathml-attribute
browser-compat: mathml.global_attributes.mathvariant
---

{{MathMLRef}}

The **`mathvariant`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) sets a logical class for textual elements, which is visually
distinguished by using special [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols).
Except for [`mi`](/en-US/docs/Web/MathML/Element/mi) elements with a single character,
which are by convention italic, no special classes are used by default.

> **Note:** When possible, directly use [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) instead of an explicit `mathvariant` attribute.

## Syntax

```html
<math>
  <!-- a normal "A" -->
  <mtext>A</mtext>

  <!-- an italic "A" i.e. "𝐴" -->
  <mtext mathvariant="italic">A</mtext>

  <!-- an italic "A" i.e. "𝐴"
     (automatic italicization for 'mi' elements with one character) -->
  <mi>A</mi>

  <!-- a normal "A" -->
  <mi mathvariant="normal">A</mi>

  <!-- a normal "cos" -->
  <mi>cos</mi>

  <!-- a bold "cos" i.e. "𝐜𝐨𝐬" -->
  <mi mathvariant="bold">cos</mi>

  <!-- a double-struck "A" i.e. "𝔸" -->
  <mi mathvariant="double-struck">A</mi>

  <!-- a fraktur "A" i.e. "𝔄" -->
  <mi mathvariant="fraktur">A</mi>

  <!-- a looped "ب" i.e. "𞺁" -->
  <mi mathvariant="looped">ب</mi>

  <!-- a stretched "ب" i.e. "𞹡" -->
  <mi mathvariant="stretched">ب</mi>
</math>
```

### Values

- `normal`
  - : Use default rendering (no transformations applied).
- `bold`
  - : Try and use bold characters e.g. "𝐀".
- `italic`
  - : Try and use italic characters e.g. "𝐴".
- `bold-italic`
  - : Try and use bold-italic characters e.g. "𝑨".
- `double-struck`
  - : Try and use double-struck characters e.g. "𝔸".
- `bold-fraktur`
  - : Try and use bold-fraktur characters e.g. "𝕬".
- `script`
  - : Try and use script characters e.g. "𝒜".
- `bold-script`
  - : Try and use bold-script characters e.g. "𝓐".
- `fraktur`
  - : Try and use fraktur characters e.g. "𝔄".
- `sans-serif`
  - : Try and use sans-serif characters e.g. "𝖠".
- `bold-sans-serif`
  - : Try and use bold-sans-serif characters e.g. "𝗔".
- `sans-serif-italic`
  - : Try and use sans-serif-italic characters e.g. "𝘈".
- `sans-serif-bold-italic`
  - : Try and use sans-serif-bold-italic characters e.g. "𝘼".
- `monospace`
  - : Try and use monospace characters e.g. "𝙰".
- `initial`
  - : Try and use initial characters e.g. "𞸢".
- `tailed`
  - : Try and use tailed characters e.g. "𞹂".
- `looped`
  - : Try and use looped characters e.g. "𞺂".
- `stretched`
  - : Try and use stretched characters e.g. "𞹢".

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
- {{cssxref("text-transform")}}
