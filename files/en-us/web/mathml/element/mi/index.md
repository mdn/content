---
title: <mi>
slug: Web/MathML/Element/mi
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:Token Elements
browser-compat: mathml.elements.mi
---
{{MathMLRef}}

The MathML `<mi>` element indicates that the content should be rendered as an **identifier** such as function names, variables or symbolic constants. You can also have arbitrary text in it to mark up terms.

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

  - : This logical class of the identifier, which varies in typography. That is, although the names suggest the typographic style for the class, semantically, items with the same class are treated "the same" within an expression, which might or might not involve displaying them with the named typography. The following values are allowed:

    - `normal` (Default value for _more than one character_) ;

      <math><mi mathvariant="normal">Example</mi></math>

    - `bold` ;

      <math><mi mathvariant="bold">Example</mi></math>

    - `italic` (Default value for _a single character_) ;

      <math><mi mathvariant="italic">Example</mi></math>

    - `bold-italic` ;

      <math><mi mathvariant="bold-italic">Example</mi></math>

    <!---->

    - `double-struck` ;

      <math><mi mathvariant="double-struck">Example</mi></math>

    - `bold-fraktur` ;

      <math><mi mathvariant="bold-fraktur">Example</mi></math>

    - `script` ;

      <math><mi mathvariant="script">Example</mi></math>

    - `bold-script` ;

      <math><mi mathvariant="bold-script">Example</mi></math>

    - `fraktur` ;

      <math><mi mathvariant="fraktur">Example</mi></math>

    <!---->

    - `sans-serif` ;

      <math><mi mathvariant="sans-serif">Example</mi></math>

    - `bold-sans-serif` ;

      <math><mi mathvariant="bold-sans-serif">Example</mi></math>

    - `sans-serif-italic` ;

      <math><mi mathvariant="sans-serif-italic">Example</mi></math>

    - `sans-serif-bold-italic` ;

      <math><mi mathvariant="sans-serif-bold-italic">Example</mi></math>

    - `monospace` ;

      <math><mi mathvariant="monospace">Example</mi></math>

    <!---->

    - `initial` ;

      <math><mi mathvariant="initial">مثال</mi></math>

    - `tailed` ;

      <math><mi mathvariant="tailed">مثال</mi></math>

    - `looped` ;

      <math><mi mathvariant="looped">مثال</mi></math>

    - `stretched` ;

      <math><mi mathvariant="stretched">مثال</mi></math>

## Examples

```html
<math>

  <mi> y </mi>

  <mi> sin </mi>

  <mi mathvariant="monospace"> x </mi>

  <mi mathvariant="bold"> &pi; </mi>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Some `mathvariant` values are only implemented starting with Gecko 28.0 {{ geckoRelease("28.0") }} and require appropriate [math fonts](/en-US/docs/Mozilla/MathML_Project/Fonts).
