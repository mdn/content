---
title: MathML tables
slug: Learn/MathML/First_steps/Tables
page-type: learn-module-chapter
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

Once all basic math notations are known, it remains to consider tabular layout which can be used for matrix-like expressions and other advanced math layout.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        Basic computer literacy,
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >basic software installed</a
        >, basic knowledge of
        <a
          href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >working with files</a
        >, and HTML basics (study
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction to HTML</a
        >. and <a href="/en-US/docs/Learn/HTML/Tables"
          >HTML tables</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To get familiar with MathML tabular elements and be aware of some
        use cases.
      </td>
    </tr>
  </tbody>
</table>

## MathML tabular elements

The MathML tabular elements are similar to the ones for [HTML tables](/en-US/docs/Learn/HTML/Tables): the `<mtable>` element represents a mathematical table, it has `<mtr>` elements as its children (representing rows), each of them having `<mtd>` elements as its children (representing cells). An `<mtable>` element can be inserted anywhere in a MathML formula. The `<mtd>` element can contain any number of MathML children and will lay them out as an `<mrow>` container.

Tables are typically used for matrix-like expressions (including vectors). Here is a basic example taken from the [article about the CSS `matrix()` function](/en-US/docs/Web/CSS/transform-function/matrix):

```html hidden
<link
  rel="stylesheet"
  href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
```

```html
<math display="block">
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtr>
      <mtr>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{ EmbedLiveSample('MathML_tabular_elements', 700, 200, "", "") }}

## Allowing cells to span multiple rows and columns

This is again similar to [HTML tables](/en-US/docs/Learn/HTML/Tables/Basics#allowing_cells_to_span_multiple_rows_and_columns). The `<mtd>` element accepts the `columnspan` and `rowspan` attributes to indicate that the cell spans multiples rows and columns. Below the inner matrix spans two columns of the outer matrix:

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My matrix with columnspan</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mo>(</mo>
        <mtable>
          <mtr>
            <mtd columnspan="2">
              <mrow>
                <mo>(</mo>
                <mtable>
                  <mtr>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtr>
                  <mtr>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtr>
                </mtable>
                <mo>)</mo>
              </mrow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>T</mi>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtr>
          <mtr>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtr>
        </mtable>
        <mo>)</mo>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('allowing_cells_to_span_multiple_rows_and_columns', 700, 200, "", "") }}

> **Note:** For historical reason, the MathML attribute for column spanning is called `columnspan` not `colspan`.

## Usage for advanced layout

Besides representing matrix-like objects, MathML tables are sometimes used for advanced layout inside mathematical formulas, for example in [Wikipedia's definition of Legendre symbol](https://en.wikipedia.org/wiki/Legendre_symbol). Here, the different cases are written on three different rows while the values and conditions are placed on two different columns.

```html hidden
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My first matrix</title>
    <link
      rel="stylesheet"
      href="https://fred-wang.github.io/MathFonts/LatinModern/mathfonts.css" />
  </head>
  <body>
    <math display="block">
      <mrow>
        <mrow>
          <mo>(</mo>
          <mfrac>
            <mi>a</mi>
            <mi>b</mi>
          </mfrac>
          <mo>)</mo>
        </mrow>
        <mo>=</mo>
        <mrow>
          <mo>{</mo>
          <mtable>
            <mtr>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;and&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is not a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a non-quadratic residue modulo&nbsp;</mtext>
                <mi>p</mi>
                <mo>;</mo>
              </mtd>
            </mtr>
            <mtr>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>if&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;is a multiple of&nbsp;</mtext>
                <mi>p</mi>
                <mo>.</mo>
              </mtd>
            </mtr>
          </mtable>
        </mrow>
      </mrow>
    </math>
  </body>
</html>
```

{{ EmbedLiveSample('Usage_for_advanced_layout', 700, 200, "", "") }}

> **Warning:** The [`<mtable>` article](/en-US/docs/Web/MathML/Element/mtable) provides more advanced layout options via special attributes such as alignment or spacing. These originated before CSS equivalents and were originally designed and intended for renderers which were not-CSS aware. However, these attributes may not be implemented in all browsers. In the future, it is likely that usages of `<mtable>` for layout-only purpose (i.e. not actual matrix-like objects) can be replaced with CSS-based alternatives.

## Summary

In this article, we've reviewed the `<mtable>`, `<mtr>` and `<mtd>` elements which are the equivalent of HTML elements for tables. We have seen how to use them for representing matrix-like objects and how it is sometimes used for advanced layout.

You've nearly finished this module — we only have one more thing to do. In the [three famous mathematical formulas assessment](/en-US/docs/Learn/MathML/First_steps/Three_famous_mathematical_formulas) you'll use your new knowledge to rewrite a small mathematical article using HTML and MathML.

{{LearnSidebar}}{{PreviousMenuNext("Learn/MathML/First_steps/Scripts", "Learn/MathML/First_steps/Three_famous_mathematical_formulas", "Learn/MathML/First_steps")}}

## See also

- [Learning about HTML tables](/en-US/docs/Learn/HTML/Tables)
- [The `<mtable>` element](/en-US/docs/Web/MathML/Element/mtable)
- [The `<mtr>` element](/en-US/docs/Web/MathML/Element/mtr)
- [The `<mtd>` element](/en-US/docs/Web/MathML/Element/mtd)
