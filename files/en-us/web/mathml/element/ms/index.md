---
title: <ms>
slug: Web/MathML/Element/ms
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.ms
---
{{MathMLRef}}

The MathML `<ms>` element represents a _string literal_ meant to be interpreted by programming languages and computer algebra systems. By default, string literals are displayed as enclosed by double quotes (`&quot;`); by using the `lquote` and `rquote` attributes, you can set custom characters to display. Note that quotation marks should not be specified unless they are part of the string literal. The content of an `<ms>` element is not an ASCII string per se, but rather a sequence of characters and {{ MathMLElement("malignmark") }} elements.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- dir
  - : The text direction. Possible values are either `ltr` (left to right) or `rtl` (right to left).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- lquote
  - : The opening quote character (depends on [`dir`](#attr-dir)) to enclose the content. The default value is "`&quot;".`
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

      <math><ms mathvariant="normal">Example</ms></math>

    - `bold` ;

      <math><ms mathvariant="bold">Example</ms></math>

    - `italic` ;

      <math><ms mathvariant="italic">Example</ms></math>

    - `bold-italic` ;

      <math><ms mathvariant="bold-italic">Example</ms></math>

    <!---->

    - `double-struck` ;

      <math><ms mathvariant="double-struck">Example</ms></math>

    - `bold-fraktur` ;

      <math><ms mathvariant="bold-fraktur">Example</ms></math>

    - `script` ;

      <math><ms mathvariant="script">Example</ms></math>

    - `bold-script` ;

      <math><ms mathvariant="bold-script">Example</ms></math>

    - `fraktur` ;

      <math><ms mathvariant="fraktur">Example</ms></math>

    <!---->

    - `sans-serif` ;

      <math><ms mathvariant="sans-serif">Example</ms></math>

    - `bold-sans-serif` ;

      <math><ms mathvariant="bold-sans-serif">Example</ms></math>

    - `sans-serif-italic` ;

      <math><ms mathvariant="sans-serif-italic">Example</ms></math>

    - `sans-serif-bold-italic` ;

      <math><ms mathvariant="sans-serif-bold-italic">Example</ms></math>

    - `monospace` ;

      <math><ms mathvariant="monospace">Example</ms></math>

    <!---->

    - `initial` ;

      <math><ms mathvariant="initial">مثال</ms></math>

    - `tailed` ;

      <math><ms mathvariant="tailed">مثال</ms></math>

    - `looped` ;

      <math><ms mathvariant="looped">مثال</ms></math>

    - `stretched` ;

      <math><ms mathvariant="stretched">مثال</ms></math>

- rquote
  - : The closing quote mark (depends on [`dir`](#attr-dir)) to enclose the content. The default value is "`&quot;".`

## Examples

```html
<math>

  <ms lquote="„" rquote="“"> abc </ms>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Some `mathvariant` values are only implemented starting with Gecko 28.0 (Firefox 28.0 / Thunderbird 28.0 / SeaMonkey 2.25) and require appropriate [math fonts](/en-US/docs/Mozilla/MathML_Project/Fonts).
