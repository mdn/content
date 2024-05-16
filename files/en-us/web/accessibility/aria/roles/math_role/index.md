---
title: "ARIA: math role"
slug: Web/Accessibility/ARIA/Roles/math_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#math
---

{{AccessibilitySidebar}}

The `math` role indicates that the content represents a mathematical expression.

## Description

Content with the role `math` is intended to be marked up in an accessible format such as [MathML](/en-US/docs/Web/MathML), or with another type of textual representation, which can be converted to an accessible format by the browser or a polyfill library.

Unfortunately, browser support for MathML is not universal. While using an image of a mathematical expression is not optimal, if you do use image, use the `math` role.
Make sure any images of math are labeled by an `alt` attribute that describes the mathematical expression as it would be spoken.

If the math element has only presentational children and the accessible name is intended to convey the mathematical expression, use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) to provide a string that represents the expression. If the math element contains navigable content that conveys the mathematical expression and a visible label for the expression is present, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby). Otherwise, use `aria-label` to name the expression, e.g., `aria-label="Pythagorean Theorem"`.

## Examples

If you use image or non-semantic HTML to create an equation, use the `math` role.

<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
   a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>

The above pythagorean theorem is written accessibly as:

```html
<div role="math" aria-label="a^{2} + b^{2} = c^{2}">
  a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
</div>
```

Had an image been used, the `alt` attribute would be used along with the `math` role:

```html
<img src="pythagorean_theorem.gif" alt="a^{2} + b^{2} = c^{2}" role="math" />
```

## Specifications

{{Specifications}}

## See also

- [MathML on MDN](/en-US/docs/Web/MathML) and the [`<math>`](/en-US/docs/Web/MathML/Element/math) element (not HTML)
- [The MathML specification](https://www.w3.org/TR/MathML3/)
