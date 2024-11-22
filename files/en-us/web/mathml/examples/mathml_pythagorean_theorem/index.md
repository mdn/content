---
title: Proving the Pythagorean theorem
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
page-type: guide
---

{{MathMLRef}}

This page outlines the proof of the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem). Three equations are organized in the {{MathMLElement("mtable")}} element to align the steps of the proof by the equal sign. The proof is also represented in [LaTeX](https://www.latex-project.org/) format in the {{MathMLElement("annotation")}} element.

## Proof

**Statement:** In a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides. Specifically, if <math><mi>a</mi></math> and <math><mi>b</mi></math> are the legs and <math><mi>c</mi></math> is the hypotenuse, then <math><semantics><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">a^2 + b^2 = c^2</annotation></semantics></math>.

**Proof:** We can prove the theorem algebraically by showing that on [this figure](https://www.cut-the-knot.org/pythagoras/proof31.gif) the area of the big square equals the area of the inner square (hypotenuse squared) plus the area of the four triangles:

{{ EmbedLiveSample("Proof", "", "100px") }}

<!-- prettier-ignore-start -->
```html
<math display="block">
  <semantics>
    <mtable>
      <!-- Step one -->
      <mtr>
        <mtd>
          <msup>
            <mrow>
              <mo>(</mo>
              <mi>a</mi>
              <mo>+</mo>
              <mi>b</mi>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>4</mn>
          <mo>⋅</mo>
          <mo>(</mo>
          <mfrac>
            <mn>1</mn>
            <mn>2</mn>
          </mfrac>
          <mi>a</mi>
          <mi>b</mi>
          <mo>)</mo>
        </mtd>
      </mtr>
      <!-- Step two -->
      <mtr>
        <mtd>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>2</mn>
          <mi>a</mi>
          <mi>b</mi>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <mn>2</mn>
          <mi>a</mi>
          <mi>b</mi>
        </mtd>
      </mtr>
      <!-- Step three -->
      <mtr>
        <mtd>
          <msup>
            <mi>a</mi>
            <mn>2</mn>
          </msup>
          <mo>+</mo>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
        </mtd>
        <mtd>
          <mo>=</mo>
        </mtd>
        <mtd>
          <msup>
            <mi>c</mi>
            <mn>2</mn>
          </msup>
        </mtd>
      </mtr>
    </mtable>
    <!-- Representation in TeX format -->
    <annotation encoding="application/x-tex">
      \begin{aligned}
      (a + b)^2 &= c^2 + 4 \cdot \left( \frac{1}{2} ab \right) \\
      a^2 + 2ab + b^2 &= c^2 + 2ab \\
      a^2 + b^2 &= c^2
      \end{aligned}
    </annotation>
  </semantics>
</math>
```
<!-- prettier-ignore-end -->
