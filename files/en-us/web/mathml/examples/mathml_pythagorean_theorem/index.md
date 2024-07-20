---
title: Proving the Pythagorean theorem
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
page-type: guide
---

{{MathMLRef}}

We will now prove the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem):

**Statement**: In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. Specifically, if <math><mi>a</mi></math> and <math><mi>b</mi></math> are the legs and <math><mi>c</mi></math> is the hypotenuse, then <math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="TeX">a^2 + b^2 = c^2</annotation></semantics></math>.

**Proof:** We can prove the theorem algebraically by showing that on [this figure](http://www.cut-the-knot.org/pythagoras/proof31.gif) the area of the big square equals the area of the inner square (hypotenuse squared) plus the area of the four triangles:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mtable><mtr><mtd><msup><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>)</mo></mrow><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><mo>⋅</mo><mo>(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><mi>b</mi><mo>)</mo></mtd></mtr><mtr><mtd><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd><mo>=</mo></mtd><mtd><msup><mi>c</mi><mn>2</mn></msup></mtd></mtr></mtable><annotation encoding="TeX">\begin{align*} (a + b)^2 &= c^2 + 4 \cdot \left( \frac{1}{2} ab \right) \\ a^2 + 2ab + b^2 &= c^2 + 2ab \\ a^2 + b^2 &= c^2 \end{align*}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->
