---
title: Getting started with MathML
slug: Learn/MathML/First_steps/Getting_started
tags:
  - Beginner
  - MathML
  - Landing
---
{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

In this article, we will take a simple HTML document and view how to add MathML formulas into it, introducing a few elements along the way.

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
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To understand the basic syntax of MathML and how to integrate it in
        HTML pages.
      </td>
    </tr>
  </tbody>
</table>

## Inserting formulas in HTML via the `<math>` element

MathML uses the same syntax as HTML to represent a tree of elements and
attributes. In particular, each mathematical formula is represented by an
element `<math>` which can be placed inside an HTML page. In the following
document, it is inside a paragraph of text:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
 <title>My first math page</title>
</head>
<body>

 <p>The fraction
   <math>
     <mfrac>
       <mn>1</mn>
       <mn>3</mn>
     </mfrac>
   </math>
   is not a decimal number.</p>

</body>
</html>
```

The `<mfrac>` element specifies a fraction with a numerator (its first child)
and a denominator (its second child). This is how it renders in your browser:

{{ EmbedLiveSample('Inserting_formulas_in_HTML', 700, 100, "", "") }}

> **Warning:** If you just see "1 3" instead of a fraction, then your browser may not support MathML. Check out the [browser compatibility table](/en-US/docs/Web/MathML/Element/math#browser_compatibility) for further details.

### Inline and display modes

Note that in the previous example, the formula is on the same line as the text
of the paragraph, this is called *inline* mode. However, it is quite common for
large mathematical formulas to use *display* mode: they are instead centered on
their own line as shown below. To achieve that, one only need to attach a
`display="block"` attribute on the `<math>` element.

```html hidden
<!DOCTYPE html>
<html lang="en-US">
<head>
 <title>My first math page</title>
</head>
<body>

 <p>The fraction
   <math display="block">
     <mfrac>
       <mn>1</mn>
       <mn>3</mn>
     </mfrac>
   </math>
   is not a decimal number.</p>

</body>
</html>
```

{{ EmbedLiveSample('Inline_and_display_modes', 700, 100, "", "") }}

You may also notice some subtle change in the appearance: the text and vertical
spacing of the fraction becomes a bit bigger.
In *inline* mode, the height is minimized to avoid disturbing the flow
of the surrounding text. In *display* mode, priority is instead put on
legibility of the mathematical formula.

> **Note:** This corresponds to the LaTeX's concept of *inline* formulas
> (delimited by dollar signs `$...$`) and *display* formulas (delimited by
> `\[...\]`).

## Grouping with the `<mrow>` element

The `<math>` element can actually contain an arbitrary number of children and
will essentially render them in a row. For instance, the simple formula
"1 + 2 + 3" would be be encoded like this in MathML:

```html
<math>
  <mn>1</mn>
  <mo>+</mo>
  <mn>2</mn>
  <mo>+</mo>
  <mn>3</mn>
</math>
```

The `<mrow>` element is a generic container that performs similar layout but
can be placed anywhere in the MathML subtree. It is helpful to group several
elements together. For instance, the numerator of the following fraction (its
first child) is "one plus two".

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

### Active learning: nested expressions

As an exercise, figure out how to write the following expressions using
only the MathML elements we've seen so far. If you are stuck or want to verify
the solution, check the source code of the example.

```html hidden
<ol>
<li>"one half" plus "two third":
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
<li>"one plus two plus three" over "four plus five":
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
<li>"one quarter" over "two plus three":
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

{{ EmbedLiveSample('Active_learning_nested_expressions', 700, 200, "", "") }}

## Summary

In this article, we have taken a look at how to use the `<math>` element to insert a mathematical formula inside a HTML document. We have learned about the difference between *inline* and *display* formulas and how to specify them via the `display` attribute of the `<math>` element.
In addition, we stumbled upon a couple of other MathML elements: `<mfrac>` for fractions, `<mrow>` for grouping and finally a few text elements. We will analyze these [text containers](/en-US/docs/Learn/MathML/First_steps/Text_containers) further in the next article.

{{LearnSidebar}}{{NextMenu("Learn/MathML/First_steps/Text_containers", "Learn/MathML/First_steps")}}

## See also

* [Using MathML](/en-US/docs/Web/MathML/Authoring#using_mathml)
* [The `<math>` element](/en-US/docs/Web/MathML/Element/math)
* [The `<mfrac>` element](/en-US/docs/Web/MathML/Element/mfrac)
* [The `<mrow>` element](/en-US/docs/Web/MathML/Element/mrow)
* [The `math-depth` property](/en-US/docs/Web/CSS/math-depth)
