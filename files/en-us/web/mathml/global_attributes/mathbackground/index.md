---
title: mathbackground
slug: Web/MathML/Global_attributes/mathbackground
page-type: mathml-attribute
status:
  - deprecated
browser-compat: mathml.global_attributes.mathbackground
---

{{MathMLRef}}{{Deprecated_Header}}

The **`mathbackground`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) sets the [background-color](/en-US/docs/Web/CSS/background-color) of a MathML element.

> [!NOTE]
> Use CSS for styling MathML whenever possible. The `mathbackground` attribute should only be included for applications that are not CSS-aware and will be overridden by the CSS `background-color` property value, if set.

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
<math display="block" mathbackground="wheat">
  <msqrt>
    <mi>x</mi>
  </msqrt>
</math>
```

{{EmbedLiveSample("Example", "", 150)}}

## Syntax

```html-nolint
<!-- Keyword values -->
<math mathbackground="red">
<math mathbackground="indigo">

<!-- Hexadecimal value -->
<math mathbackground="#bbff00"> <!-- Fully opaque -->
<math mathbackground="#bf0"> <!-- Fully opaque shorthand -->
<math mathbackground="#11ffee00"> <!-- Fully transparent -->
<math mathbackground="#1fe0"> <!-- Fully transparent shorthand -->
<math mathbackground="#11ffeeff"> <!-- Fully opaque -->
<math mathbackground="#1fef"> <!-- Fully opaque shorthand -->

<!-- RGB value -->
<math mathbackground="rgb(255 255 128)"> <!-- Fully opaque -->
<math mathbackground="rgb(117 190 218 / 50%)"> <!-- 50% transparent -->

<!-- HSL value -->
<math mathbackground="hsl(50 33% 25%)"> <!-- Fully opaque -->
<math mathbackground="hsl(50 33% 25% / 75%)"> <!-- 75% opaque, i.e. 25% transparent -->
```

### Values

- {{cssxref("&lt;color&gt;")}}
  - : The uniform color of the background.

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
- {{cssxref("background-color")}}
