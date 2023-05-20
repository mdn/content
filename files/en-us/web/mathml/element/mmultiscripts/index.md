---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
page-type: mathml-element
browser-compat: mathml.elements.mmultiscripts
---

{{MathMLRef}}

The **`<mmultiscripts>`** [MathML](/en-US/docs/Web/MathML) element is used to attach an arbitrary number of subscripts and superscripts to an expression at once, generalizing the {{ MathMLElement("msubsup") }} element. Scripts can be either prescripts (placed before the expression) or postscripts (placed after it).

MathML uses the syntax below, that is a base expression, followed by an arbitrary number of postsubscript-postsuperscript pairs (attached in the given order) optionally followed by an `<mprescripts>` and an arbitrary number of presubscript-presuperscript pairs (attached in the given order). In addition, empty `<mrow>` elements can be used to represent absent scripts.

```html-nolint
<mmultiscripts>
  base
  postsubscript1 postsuperscript1
  postsubscript2 postsuperscript2
  postsubscript3 postsuperscript3
  ...
  postsubscriptN postsuperscriptN
  <mprescripts/>                ⎫
  presubscript1 presuperscript1 ⎪
  presubscript2 presuperscript2 ⎬ Optional
  presubscript3 presuperscript3 ⎪
  ...                           ⎪
  presubscriptM presuperscriptM ⎭
</mmultiscripts>
```

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes) as well as the following deprecated attributes:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum amount to shift the baseline of the subscript down.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : A [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage) indicating the minimum amount to shift the baseline of the superscript up.

> **Note:** For the `subscriptshift` and `superscriptshift` attributes, some browsers may also accept [legacy MathML lengths](/en-US/docs/Web/MathML/Attribute/Values#legacy_mathml_lengths).

## Examples

### Using `<mprescripts/>`

Children after the `<mprescripts/>` element are placed as pre-scripts (before the base expression):

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- base expression -->
    <mi>d</mi>      <!-- postsubscript -->
    <mi>c</mi>      <!-- postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- presubscript -->
    <mi>a</mi>      <!-- presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('mprescripts_example', 700, 200, "", "") }}

### Empty scripts

Empty `<mrow>` elements can be used to represent absent scripts:

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- base expression -->
    <mrow></mrow>   <!-- postsubscript -->
    <mi>c</mi>      <!-- postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- presubscript -->
    <mrow></mrow>   <!-- presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('none_example', 700, 200, "", "") }}

### Order of scripts

Here is a more complex example with many scripts, so you can see in which order they are attached to the base:

```html
<math display="block">
  <mmultiscripts>
    <mtext>base</mtext>
    <mtext>postsubscript1</mtext>
    <mtext>postsupscript1</mtext>
    <mtext>postsubscript2</mtext>
    <mtext>postsupscript2</mtext>
    <mtext>postsubscript3</mtext>
    <mtext>postsupscript3</mtext>
    <mtext>postsubscript4</mtext>
    <mtext>postsupscript4</mtext>
    <mprescripts />
    <mtext>presubscript1</mtext>
    <mtext>presupscript1</mtext>
    <mtext>presubscript2</mtext>
    <mtext>presupscript2</mtext>
    <mtext>presubscript3</mtext>
    <mtext>presupscript3</mtext>
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts_example', 700, 200, "", "") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ MathMLElement("msub") }} (Subscript)
- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
