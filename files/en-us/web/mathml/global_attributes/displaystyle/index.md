---
title: displaystyle
slug: Web/MathML/Global_attributes/displaystyle
page-type: mathml-attribute
browser-compat: mathml.global_attributes.displaystyle
---

{{MathMLRef}}

The **`displaystyle`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) is a boolean setting the [math-style](/en-US/docs/Web/CSS/math-style) of a MathML element.

## Example

In this example, an [munder](/en-US/docs/Web/MathML/Element/munder) element is used to attach a script "A" to a base "∑". By default, the summation symbol is rendered with the [font-size](/en-US/docs/Web/CSS/font-size) inherited from its parent and the A as a scaled down subscript. With the explicit `displaystyle="true"` attribute, the summation symbol is instead drawn bigger and the "A" becomes an underscript.

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 1.5rem;
}
```

```html
<math>
  <munder>
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
  <munder displaystyle="true">
    <mo>∑</mo>
    <mi>A</mi>
  </munder>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## Syntax

```html-nolint
<math displaystyle="true">
<math displaystyle="false">
```

### Values

- `true`
  - : Sets the display style to `normal`.
- `false`
  - : Sets the display style to `compact`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
- The [scriptlevel](/en-US/docs/Web/MathML/Global_attributes/scriptlevel) global attribute.
- {{cssxref("font-size")}}
- {{cssxref("math-depth")}}
- {{cssxref("math-style")}}
