---
title: <mn>
slug: Web/MathML/Element/mn
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mn
---
{{MathMLRef}}

The MathML `<mn>` element represents a numeric literal which is normally a sequence of digits with a possible separator (a dot or a comma). However,  it is also allowed to have arbitrary text in it which is actually a numeric quantity, for example "eleven".

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

  - : This attribute specifies the logical class of the number which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value) ;

      <math><mn mathvariant="normal">Example</mn></math>

    - `bold` ;

      <math><mn mathvariant="bold">Example</mn></math>

    - `italic` ;

      <math><mn mathvariant="italic">Example</mn></math>

    - `bold-italic` ;

      <math><mn mathvariant="bold-italic">Example</mn></math>

    <!---->

    - `double-struck` ;

      <math><mn mathvariant="double-struck">Example</mn></math>

    - `bold-fraktur` ;

      <math><mn mathvariant="bold-fraktur">Example</mn></math>

    - `script` ;

      <math><mn mathvariant="script">Example</mn></math>

    - `bold-script` ;

      <math><mn mathvariant="bold-script">Example</mn></math>

    - `fraktur` ;

      <math><mn mathvariant="fraktur">Example</mn></math>

    <!---->

    - `sans-serif` ;

      <math><mn mathvariant="sans-serif">Example</mn></math>

    - `bold-sans-serif` ;

      <math><mn mathvariant="bold-sans-serif">Example</mn></math>

    - `sans-serif-italic` ;

      <math><mn mathvariant="sans-serif-italic">Example</mn></math>

    - `sans-serif-bold-italic` ;

      <math><mn mathvariant="sans-serif-bold-italic">Example</mn></math>

    - `monospace` ;

      <math><mn mathvariant="monospace">Example</mn></math>

    <!---->

    - `initial` ;

      <math><mn mathvariant="initial">مثال</mn></math>

    - `tailed` ;

      <math><mn mathvariant="tailed">مثال</mn></math>

    - `looped` ;

      <math><mn mathvariant="looped">مثال</mn></math>

    - `stretched` ;

      <math><mn mathvariant="stretched">مثال</mn></math>

## Examples

```html
<math>

  <mn> 0 </mn>

  <mn> 1.337 </mn>

  <mn> twelve </mn>

  <mn> XVI </mn>

  <mn> 2e10 </mn>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Some `mathvariant` values are only implemented starting with Gecko 28.0 {{ geckoRelease("28.0") }} and require appropriate [math fonts](/en-US/docs/Mozilla/MathML_Project/Fonts).
