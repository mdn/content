---
title: <mtext>
slug: Web/MathML/Element/mtext
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mtext
---
{{MathMLRef}}

The MathML \<mtext> element is used to render arbitrary text with _no_ notational meaning, such as comments or annotations.

To display text _with_ notational meaning, use {{ MathMLElement("mi") }} and {{ MathMLElement("mo") }} instead.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- dir
  - : The text direction. Possible values are either `ltr` (left to right) or `rtl` (right to left).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathsize
  - : The size of the content. See [length](/en-US/docs/Web/CSS/length) for possible values.
    Deprecated values are: `small`, `normal` and `big`. These will be removed in the future.
- mathvariant

  - : This attribute specifies the logical class of the identifier, which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;

      <math><mtext mathvariant="normal">Example</mtext></math>

    - `bold` ;

      <math><mtext mathvariant="bold">Example</mtext></math>

    - `italic` ;

      <math><mtext mathvariant="italic">Example</mtext></math>

    - `bold-italic` ;

      <math><mtext mathvariant="bold-italic">Example</mtext></math>

    <!---->

    - `double-struck` ;

      <math><mtext mathvariant="double-struck">Example</mtext></math>

    - `bold-fraktur` ;

      <math><mtext mathvariant="bold-fraktur">Example</mtext></math>

    - `script` ;

      <math><mtext mathvariant="script">Example</mtext></math>

    - `bold-script` ;

      <math><mtext mathvariant="bold-script">Example</mtext></math>

    - `fraktur` ;

      <math><mtext mathvariant="fraktur">Example</mtext></math>

    <!---->

    - `sans-serif` ;

      <math><mtext mathvariant="sans-serif">Example</mtext></math>

    - `bold-sans-serif` ;

      <math><mtext mathvariant="bold-sans-serif">Example</mtext></math>

    - `sans-serif-italic` ;

      <math><mtext mathvariant="sans-serif-italic">Example</mtext></math>

    - `sans-serif-bold-italic` ;

      <math><mtext mathvariant="sans-serif-bold-italic">Example</mtext></math>

    - `monospace` ;

      <math><mtext mathvariant="monospace">Example</mtext></math>

    <!---->

    - `normal` (Default) ;

      <math><mtext>مثال</mtext></math>

    - `initial` ;

      <math><mtext mathvariant="initial">مثال</mtext></math>

    - `tailed` ;

      <math><mtext mathvariant="tailed">مثال</mtext></math>

    - `looped` ;

      <math><mtext mathvariant="looped">مثال</mtext></math>

    - `stretched` ;

      <math><mtext mathvariant="stretched">مثال</mtext></math>

## Examples

```html
<math>

  <mtext> Theorem of Pythagoras </mtext>

  <mtext> /* comment here */ </mtext>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Some `mathvariant` values are only implemented starting with Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) and require appropriate [math fonts](/en-US/docs/Mozilla/MathML_Project/Fonts).
