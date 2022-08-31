---
title: mathcolor
slug: Web/MathML/Global_attributes/mathcolor
tags:
  - Global attributes
  - MathML
  - Reference
  - Deprecated
browser-compat: mathml.global_attributes.mathcolor
---
{{MathMLRef("Global_attributes")}}{{Deprecated_Header}}

The **`mathcolor`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) sets the [color](/en-US/docs/Web/CSS/color) of a MathML element.

> **Note:** Use CSS for styling MathML whenever possible. The `mathcolor` attribute should only be included for applications that are not CSS-aware and will be overridden by the CSS `color` property , if set.

## Syntax

```html
<!-- Keyword values -->
<math mathcolor="currentcolor">

<!-- <named-color> values -->
<math mathcolor="red">
<math mathcolor="orange">
<math mathcolor="tan">
<math mathcolor="rebeccapurple">

<!-- <hex-color> values -->
<math mathcolor="#090">
<math mathcolor="#009900">
<math mathcolor="#090a">
<math mathcolor="#009900aa">

<!-- <rgb()> values -->
<math mathcolor="rgb(34, 12, 64, 0.6)">
<math mathcolor="rgba(34, 12, 64, 0.6)">
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgba(34 12 64 / 0.3)">
<math mathcolor="rgb(34.0 12 64 / 60%)">
<math mathcolor="rgba(34.6 12 64 / 30%)">

<!-- <hsl()> values -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsla(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsla(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.0 100% 50% / 60%)">
<math mathcolor="hsla(30.2 100% 50% / 60%)">

<!-- <hwb()> values -->
<math mathcolor="hwb(90 10% 10%)">
<math mathcolor="hwb(90 10% 10% / 0.5)">
<math mathcolor="hwb(90deg 10% 10%)">
<math mathcolor="hwb(1.5708rad 60% 0%)">
<math mathcolor="hwb(.25turn 0% 40% / 50%)">
```

### Values

- {{cssxref("&lt;color&gt;")}}
  - : Sets the color of the textual and decorative parts of the element,
    including e.g. fraction bars or radical symbols.

## Specifications

{{Specifications}}

- In MathML 3 and earlier versions, a more limited set of values was supported.
  Since MathML Core, the syntax matches CSS {{cssxref("&lt;color&gt;")}}
  values.

- This attribute was designed for MathML applications that are not CSS-aware.
  Since MathML Core, the use of equivalent CSS is recommended instead.

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
- {{cssxref("color")}}
