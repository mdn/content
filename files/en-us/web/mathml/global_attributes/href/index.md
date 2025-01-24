---
title: href
slug: Web/MathML/Global_attributes/href
page-type: mathml-attribute
status:
  - non-standard
browser-compat: mathml.global_attributes.href
---

{{MathMLRef}}{{Non-standard_header}}

The **`href`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) creates a hyperlink on the MathML element pointing to the specified URL.

## Example

The first equation links to the Wikipedia article about the [mass-energy equivalence](https://en.wikipedia.org/wiki/Mass-energy_equivalence). The square root part of the second equation is a link to the [SageMath](https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO) calculation.

> [!NOTE]
> You should avoid nesting MathML elements with the `href` attributes, just like {{htmlelement("a")}} elements, as is will lead to user confusion and accessibility issues.

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
<math
  display="block"
  href="https://en.wikipedia.org/wiki/Mass-energy_equivalence">
  <mrow>
    <mi>E</mi>
    <mo>=</mo>
    <mi>m</mi>
    <msup>
      <mi>c</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>

<math display="block">
  <mi>c</mi>
  <mo>=</mo>
  <msqrt href="https://sagecell.sagemath.org/?z=eJwrLiwq0TCOM9I2iTPSBAAeqgPO">
    <msup>
      <mn>3</mn>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mn>4</mn>
      <mn>2</mn>
    </msup>
  </msqrt>
  <mo>=</mo>
  <mn>5</mn>
</math>
```

{{ EmbedLiveSample("Example", "", 150) }}

## Syntax

```html-nolint
<math href="https://example.com/">
```

### Values

- `URL`
  - : The URL to which the hyperlink points.

## Specifications

The `href` attribute is not defined in any browser-oriented specification but you can find a description in [MathML 4](https://w3c.github.io/mathml/#interf_link).

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
