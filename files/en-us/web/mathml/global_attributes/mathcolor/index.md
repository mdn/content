---
title: mathcolor
slug: Web/MathML/Global_attributes/mathcolor
page-type: mathml-attribute
status:
  - deprecated
browser-compat: mathml.global_attributes.mathcolor
---

{{MathMLRef}}{{Deprecated_Header}}

The **`mathcolor`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) sets the [color](/en-US/docs/Web/CSS/color) of a MathML element.

> [!NOTE]
> Use CSS for styling MathML whenever possible. The `mathcolor` attribute should only be included for applications that are not CSS-aware and will be overridden by the CSS `color` property, if set.

## Example

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  align-items: center;
  font-size: 1.5rem;
}
```

```html
<math display="block">
  <msqrt mathcolor="tomato">
    <mi mathcolor="darkgreen">x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## Syntax

```html-nolint
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
<math mathcolor="rgb(34 12 64 / 0.6)">
<math mathcolor="rgb(34.6 12 64 / 60%)">

<!-- <hsl()> values -->
<math mathcolor="hsl(30, 100%, 50%, 0.6)">
<math mathcolor="hsl(30 100% 50% / 0.6)">
<math mathcolor="hsl(30.2 100% 50% / 60%)">

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
