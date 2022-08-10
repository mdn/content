---
title: dir
slug: Web/MathML/Global_attributes/dir
tags:
  - Global attributes
  - MathML
  - Reference
browser-compat: mathml.global_attributes.dir
---
{{MathMLRef("Global_attributes")}}

The **`dir`** [global attribute](/en-US/docs/Web/MathML/Global_attributes) is an enumerated attribute that indicates the directionality of the MathML element.

## Syntax

```html
<!-- Moroccan style -->
<math dir="ltr">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>3</mn>
    <mi>ب</mi>
  </msup>
</math>

<!-- Maghreb/Machrek style -->
<math dir="rtl">
  <msqrt>
    <mi>س</mi>
  </msqrt>
  <mo>=</mo>
  <msup>
    <mn>٣</mn>
    <mi>ب</mi>
  </msup>
</math>
```

### Values

- `ltr`, which means _left to right_ and is used to render mathematical expressions from the left to the right (e.g. English or Moroccan style);
- `rtl`, which means _right to left_ and is used to render mathematical expressions from the right to the left (e.g. Maghreb or Machrek style);

> **Note:**
>
> - This attribute can be overridden by the CSS property {{ cssxref("direction") }}, if a CSS page is active and the element supports these properties.
> - As the directionality of mathematics is semantically related to its content and not to its presentation, it is recommended that web developers use this attribute instead of the related CSS properties when possible. That way, the formulas will display correctly even on a browser that doesn't support CSS or has the CSS deactivated.
> - The `dir` attribute is used to set the directionality of math formulas, which is often from right to left in Arabic speaking world. However, languages written from right to left often embed mathematical content written from left to right. Consequently, the `auto` keyword from the HTML `dir` attribute is not recognized and by default the [user agent stylesheet](/en-US/docs/Web/CSS/Cascade#user-agent_stylesheets) resets the direction property on the [`math`](/en-US/docs/Web/MathML/Element/math) element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- All [global attributes](/en-US/docs/Web/MathML/Global_attributes).
- {{cssxref("direction")}}
- The HTML {{htmlattrxref("dir")}} global attribute
