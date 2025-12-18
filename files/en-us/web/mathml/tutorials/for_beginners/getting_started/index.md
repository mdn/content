---
title: Getting started with MathML
short-title: Getting started
slug: Web/MathML/Tutorials/For_beginners/Getting_started
page-type: tutorial-chapter
sidebar: mathmlref
---

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}

In this article, we will take a simple HTML document and see how to add MathML formulas into it, introducing a few elements along the way.

## Inserting formulas in HTML via the \<math> element

MathML uses the same syntax as HTML to represent a tree of elements and attributes. In particular, each mathematical formula is represented by an element `<math>` which can be placed inside an HTML page. In the following document, it is inside a paragraph of text:

```html live-sample___inserting_formulas_in_HTML
<p>
  The fraction
  <math>
    <mfrac>
      <mn>1</mn>
      <mn>3</mn>
    </mfrac>
  </math>
  is not a decimal number.
</p>
```

The `<mfrac>` element specifies a fraction with a numerator (its first child) and a denominator (its second child). This is how it renders in your browser:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> [!WARNING]
> If you just see "1 3" instead of a fraction, then your browser may not support MathML. Check out the [browser compatibility table](/en-US/docs/Web/MathML/Reference/Element/math#browser_compatibility) for further details.

### The display attribute

Note that in the previous example, the formula is on the same line as the text of the paragraph. However, it is quite common to instead render large mathematical formulas centered on their own line as shown below. To achieve that, you need to attach a `display="block"` attribute on the `<math>` element.

```html hidden live-sample___the_display_attribute
<p>
  The fraction
  <math display="block">
    <mfrac>
      <mn>1</mn>
      <mn>3</mn>
    </mfrac>
  </math>
  is not a decimal number.
</p>
```

{{ EmbedLiveSample('The_display_attribute', 700, 100, "", "") }}

You may also notice some subtle change in the appearance: the text and vertical spacing of the fraction becomes a bit bigger. Without the `display="block"` attribute, the height is minimized to avoid disturbing the flow of the surrounding text. With the `display="block"` attribute, priority is instead put on legibility of the mathematical formula.

> [!NOTE]
> This corresponds to the LaTeX's concept of _inline_ formulas (delimited by dollar signs `$...$`) and _display_ formulas (delimited by `\[...\]`).

> [!NOTE]
> The appearance change mentioned above is actually controlled by the {{cssxref("math-style")}} property which is initially `normal` for `<math display="block">` and `compact` otherwise. In some MathML subtrees, this property can then automatically become `compact` but we will ignore this subtlety for this introductory tutorial. Again, this is similar to LaTeX.

## Grouping with the \<mrow> element

The `<math>` element can actually contain an arbitrary number of children and will essentially render them in a row. For instance, the simple formula "1 + 2 + 3" would be encoded like this in MathML:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

The `<mrow>` element is a generic container that performs similar layout but can be placed anywhere in the MathML subtree. It is helpful to group several elements together. For instance, the numerator of the following fraction (its first child) is "one plus two".

```html
<math>
  <mfrac>
    <mrow>
      <mn>1</mn>
      <mo>+</mo>
      <mn>2</mn>
    </mrow>
    <mn>3</mn>
  </mfrac>
</math>
```

### Your turn: Writing nested expressions

As an exercise, figure out how to write the following expressions using only the MathML elements we've seen so far. If you are stuck or want to verify the solution, check the source code of the example.

```html hidden live-sample___nested-expressions
<ol>
  <li>
    "one half" plus "two third":
    <!-- It's correct but unnecessary to group the children of the math element with an mrow element. -->
    <math>
      <mfrac>
        <mn>1</mn>
        <mn>2</mn>
      </mfrac>
      <mo>+</mo>
      <mfrac>
        <mn>2</mn>
        <mn>3</mn>
      </mfrac>
    </math>
  </li>
  <li>
    "one plus two plus three" over "four plus five":
    <math>
      <mfrac>
        <mrow>
          <mn>1</mn>
          <mo>+</mo>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
        <mrow>
          <mn>4</mn>
          <mo>+</mo>
          <mn>5</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
  <li>
    "one quarter" over "two plus three":
    <math>
      <mfrac>
        <mfrac>
          <mn>1</mn>
          <mn>4</mn>
        </mfrac>
        <mrow>
          <mn>2</mn>
          <mo>+</mo>
          <mn>3</mn>
        </mrow>
      </mfrac>
    </math>
  </li>
</ol>
```

{{ EmbedLiveSample('nested_expressions', 700, 200, "", "") }}

## Summary

In this article, we have taken a look at how to use the `<math>` element to insert a mathematical formula inside a HTML document. We have learned about rendering differences between `<math>` elements that use `display="block"` or not. In addition, we stumbled upon a couple of other MathML elements: `<mfrac>` for fractions, `<mrow>` for grouping and finally a few text elements. We will analyze these [text containers](/en-US/docs/Web/MathML/Tutorials/For_beginners/Text_containers) further in the next article.

## See also

- [Using MathML](/en-US/docs/Web/MathML/Guides/Authoring#using_mathml)
- [The `<math>` element](/en-US/docs/Web/MathML/Reference/Element/math)
- [The `<mfrac>` element](/en-US/docs/Web/MathML/Reference/Element/mfrac)
- [The `<mrow>` element](/en-US/docs/Web/MathML/Reference/Element/mrow)
- {{cssxref("math-style")}} property
- {{cssxref("math-depth")}} property

{{NextMenu("Web/MathML/Tutorials/For_beginners/Text_containers", "Web/MathML/Tutorials/For_beginners")}}
