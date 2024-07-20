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

```html
<!-- Make this math equation a link to Wikipedia's article
     about the Pythagorean theorem. -->
<math href="https://en.wikipedia.org/wiki/Pythagorean_theorem">
  <mi>c</mi>
  <mo>=</mo>
  <!-- Make this square root a link to corresponding
       SageMath's calculation. -->
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

## Specifications

The `href` attribute is not defined in any browser-oriented specification but you can find a description in [MathML 4](https://w3c.github.io/mathml/#interf_link).

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
