---
title: <mo>
slug: Web/MathML/Element/mo
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mo
---
{{MathMLRef}}

The MathML `<mo>` element represents an operator in a broad sense. Besides operators in strict mathematical meaning, this element also includes "operators" like parentheses, separators like comma and semicolon, or "absolute value" bars.

## Attributes

- accent
  - : If the operator is used as an [under](/en-US/docs/Web/MathML/Element/munder)- or [overscript](/en-US/docs/Web/MathML/Element/mover) this attribute specifies whether the operator should be treated as an accent.
    Allowed values are `true` or `false`.
- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- dir
  - : The text direction. Possible values are either `ltr` (left to right) or `rtl` (right to left).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- fence
  - : There is no visual effect for this attribute, but it specifies whether the operator is a fence (such as parentheses).
    Allowed values are `true` or `false`.
- href
  - : Used to set a hyperlink to a specified URI.
- lspace
  - : The amount of space before the operator (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units). The constant `thickmathspace` (5/18em) is the default value.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathsize
  - : The size of the content. See [length](/en-US/docs/Web/CSS/length) for possible values.
    Deprecated values are: `small`, `normal` and `big`. These will be removed in the future.
- mathvariant

  - : This attribute specifies the logical class of the operator which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;

      <math><mo mathvariant="normal">Example</mo></math>

    - `bold` ;

      <math><mo mathvariant="bold">Example</mo></math>

    - `italic` ;

      <math><mo mathvariant="italic">Example</mo></math>

    - `bold-italic` ;

      <math><mo mathvariant="bold-italic">Example</mo></math>

    <!---->

    - `double-struck` ;

      <math><mo mathvariant="double-struck">Example</mo></math>

    - `bold-fraktur` ;

      <math><mo mathvariant="bold-fraktur">Example</mo></math>

    - `script` ;

      <math><mo mathvariant="script">Example</mo></math>

    - `bold-script` ;

      <math><mo mathvariant="bold-script">Example</mo></math>

    - `fraktur` ;

      <math><mo mathvariant="fraktur">Example</mo></math>

    <!---->

    - `sans-serif` ;

      <math><mo mathvariant="sans-serif">Example</mo></math>

    - `bold-sans-serif` ;

      <math><mo mathvariant="bold-sans-serif">Example</mo></math>

    - `sans-serif-italic` ;

      <math><mo mathvariant="sans-serif-italic">Example</mo></math>

    - `sans-serif-bold-italic` ;

      <math><mo mathvariant="sans-serif-bold-italic">Example</mo></math>

    - `monospace` ;

      <math><mo mathvariant="monospace">Example</mo></math>

    <!---->

    - `initial` ;

      <math><mo mathvariant="initial">مثال</mo></math>

    - `tailed` ;

      <math><mo mathvariant="tailed">مثال</mo></math>

    - `looped` ;

      <math><mo mathvariant="looped">مثال</mo></math>

    - `stretched` ;

      <math><mo mathvariant="stretched">مثال</mo></math>

- maxsize

  - : If `stretchy` is `true`, this attribute specifies the maximum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/en-US/docs/Web/MathML/Attribute/Values#lengths)

- minsize

  - : If `stretchy` is `true`, this attribute specifies the minimum size of the operator. Allowed values are:

    - `infinity`
    - an arbitrary [length](/en-US/docs/Web/MathML/Attribute/Values#lengths)

- movablelimits
  - : Specifies whether attached under- and overscripts move to sub- and superscript positions when `displaystyle` is `false`.
    Allowed values are either `true` or `false.`
- rspace
  - : The amount of space after the operator (see [length](/en-US/docs/Web/MathML/Attribute/Values#lengths) for values and units). The constant `thickmathspace` (5/18em) is the default value.
- separator
  - : There is no visual effect for this attribute, but it specifies whether the operator is a separator (such as commas).
    Allowed values are `true` or `false`.
- stretchy
  - : Specifies whether the operator stretches to the size of the adjacent element.
    Allowed values are `true` or `false`.
- symmetric
  - : If `stretchy` is `true`, this attribute specifies whether the operator should be vertically symmetric around the imaginary math axis (centered fraction line).
    The default value is `true` if **stretchy** is set to `true` and otherwise `false`. Allowed values are `true` or `false`.

## Examples

```html
<math>

<mrow>
  <mn>5</mn>
  <mo>+</mo>
  <mn>5</mn>
</mrow>

<mrow>
  <mo> [ </mo> <!-- default form value: prefix -->
  <mrow>
    <mn> 0 </mn>
    <mo> ; </mo> <!-- default form value: infix -->
    <mn> 1 </mn>
  </mrow>
  <mo> ) </mo> <!-- default form value: postfix -->
</mrow>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Starting with Gecko 16.0 {{ geckoRelease("16.0") }} the default values for `lspace` and `rspace` have been corrected to match the MathML3 specification. They now default to the constant `thickmathspace` (5/18em).
- Some `mathvariant` values are only implemented starting with Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) and require appropriate [math fonts](/en-US/docs/Mozilla/MathML_Project/Fonts).
- Any [linebreaking](https://www.w3.org/TR/MathML3/chapter3.html#presm.lbattrs) or [indentation attributes](https://www.w3.org/TR/MathML3/chapter3.html#presm.lbindent.attrs) are not implemented yet. See {{ bug("534962") }}.
