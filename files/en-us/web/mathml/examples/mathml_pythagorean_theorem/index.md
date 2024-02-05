---
title: Proving the Pythagorean theorem
slug: Web/MathML/Examples/MathML_Pythagorean_Theorem
page-type: guide
---

{{MathMLRef}}

We will now prove the [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem):

**Statement**: In a right triangle, the square of the hypotenuse is equal to
the sum of the squares of the other two sides.

i.e., If a and b are the legs and c is the hypotenuse then

<!-- @prettier-ignore -->
<math>
  <mrow>
    <msup>
      <mi>a</mi>
      <mn>2</mn>
    </msup>
    <mo>+</mo>
    <msup>
      <mi>b</mi>
      <mn>2</mn>
    </msup>
    <mo>=</mo>
    <msup>
      <mi>c</mi>
      <mn>2</mn>
    </msup>
  </mrow>
</math>.

**Proof:** We can prove the theorem algebraically by showing that on
[this figure](http://www.cut-the-knot.org/pythagoras/proof31.gif)
the area of the big square equals the area of the inner square (hypotenuse
squared) plus the area of the four triangles:

<math display="block">
  <mtable>
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
</math>
