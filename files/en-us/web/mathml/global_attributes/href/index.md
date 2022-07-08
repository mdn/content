---
title: href
slug: Web/MathML/Global_attributes/href
tags:
  - Global attributes
  - MathML
  - Reference
browser-compat: mathml.global_attributes.href
---
{{MathMLRef("Global_attributes")}}

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

{{Specifications}}

- `href` is defined in MathML 3 on all elements but is currently not integrated into MathML Core.

- MathML 2 had no direct support for linking, and instead followed the W3C Recommendation ["XML Linking Language"](https://www.w3.org/TR/2010/REC-xlink11-20100506/) in defining links using the `xlink:href` attribute.

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
