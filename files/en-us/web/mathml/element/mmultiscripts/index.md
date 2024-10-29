---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
page-type: mathml-element
browser-compat: mathml.elements.mmultiscripts
---

{{MathMLRef}}

The **`<mmultiscripts>`** [MathML](/en-US/docs/Web/MathML) element is used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the {{ MathMLElement("msubsup") }} element. Scripts can be either pre-scripts (placed **before** the expression) or post-scripts (placed **after** it).

MathML uses the syntax below, that is a base expression, followed by an arbitrary number of post-subscript and post-superscript pairs (attached in the given order) optionally followed by an {{ MathMLElement("mprescripts") }} element and an arbitrary number of pre-subscript and pre-superscript pairs (attached in the given order). In addition, empty {{ MathMLElement("mrow") }} elements can be used to represent absent scripts.

```html-nolint
<mmultiscripts>
  base
  post-sub-script-1 post-sup-script-1
  post-sub-script-2 post-sup-script-2
  post-sub-script-3 post-sup-script-3
  ...
  post-sub-script-N post-sup-script-N
  <mprescripts />                    ⎫
  pre-sub-script-1 pre-sup-script-1  ⎪
  pre-sub-script-2 pre-sup-script-2  ⎬ Optional
  pre-sub-script-3 pre-sup-script-3  ⎪
  ...                                ⎪
  pre-sub-script-M pre-sup-script-N  ⎭
</mmultiscripts>
```

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following deprecated attributes:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the subscript down.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A {{cssxref("length-percentage")}} indicating the minimum amount to shift the baseline of the superscript up.

> [!NOTE]
> For the `subscriptshift` and `superscriptshift` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Values#legacy_mathml_lengths).

## Examples

### Using `<mprescripts>`

Children after the `<mprescripts>` element are placed as pre-scripts (before the base expression):

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mi>a</mi> <!-- post-sub-script -->
    <mi>b</mi> <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi> <!-- pre-sub-script -->
    <mi>d</mi> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('using_mprescripts', 700, 200, "", "") }}

### Empty scripts

Empty `<mrow>` elements can be used to represent absent scripts:

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>    <!-- base expression -->
    <mrow></mrow> <!-- post-sub-script -->
    <mi>b</mi>    <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi>    <!-- pre-sub-script -->
    <mrow></mrow> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('empty_scripts', 700, 200, "", "") }}

### Order of scripts

Here is a more complex example with many scripts, so you can see in which order they are attached to the base:

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mn>1</mn> <!-- post-sub-script-1 -->
    <mn>2</mn> <!-- post-sup-script-1 -->
    <mn>3</mn> <!-- post-sub-script-2 -->
    <mn>4</mn> <!-- post-sup-script-2 -->
    <mprescripts />
    <mn>5</mn> <!-- pre-sub-script-1 -->
    <mn>6</mn> <!-- pre-sup-script-1 -->
    <mn>7</mn> <!-- pre-sub-script-2 -->
    <mn>8</mn> <!-- pre-sup-script-2 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts', 700, 200, "", "") }}

## Technical summary

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/en-US/docs/Web/Accessibility/ARIA/Roles">Implicit ARIA role</a>
    </th>
    <td>
      None
    </td>
  </tr>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
