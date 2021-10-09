---
title: <menclose>
slug: Web/MathML/Element/menclose
tags:
  - MathML
  - MathML Reference
  - MathML:Element
  - MathML:General Layout Schemata
browser-compat: mathml.elements.menclose
---
{{MathMLRef}}

The MathML `<menclose>` element renders its content inside an enclosing notation specified by the `notation` attribute.

## Attributes

- class, id, style
  - : Provided for use with [stylesheets](/en-US/docs/Web/CSS).
- `displaystyle`
  - : A Boolean value specifying whether more vertical space is used for displayed equations or, if set to `false`, a more compact layout is used to display formulas. The main effect is that larger versions of operators are displayed, when `displaystyle` is set to `true`. See also `movablelimits` on {{ MathMLElement("mo") }}.
- href
  - : Used to set a hyperlink to a specified URI.
- mathbackground
  - : The background color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- mathcolor
  - : The text color. You can use `#rgb`, `#rrggbb` and [HTML color names](/en-US/docs/Web/CSS/color_value#color_keywords).
- notation

  - : A list of notations, separated by white space, to apply to the child elements. The symbols are each drawn as if the others are not present, and therefore may overlap. Possible values are:

    | Value                                  | Sample Rendering                                           | Rendering in your browser                                                                                                                      | Description                                                                                                         |
    | -------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)                    | ![longdiv](default.png)                                    | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | long division symbol                                                                                                |
    | `actuarial`                            | ![actuarial](actuarial.png)                                | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [actuarial symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `radical` {{deprecated_inline}} | ![radical](radical.png)                                    | <math><menclose notation="radical"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | square root symbol. Deprecated. Use {{MathMLElement("msqrt")}} instead.                                   |
    | `box`                                  | ![box](box.png)                                            | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | box                                                                                                                 |
    | `roundedbox`                           | ![roundedbox](roundedbox.png)                              | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | rounded box                                                                                                         |
    | `circle`                               | ![circle](circle.png)                                      | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | circle                                                                                                              |
    | `left`                                 | ![left](left.png)                                          | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | line to the left of the contents                                                                                    |
    | `right`                                | ![right](right.png)                                        | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | line to the right of the contents                                                                                   |
    | `top`                                  | ![top](top.png)                                            | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | line above of the contents                                                                                          |
    | `bottom`                               | ![bottom](bottom.png)                                      | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | line below of the contents                                                                                          |
    | `updiagonalstrike`                     | ![updiagonalstrike](updiagonalstrike.png)                  | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | strikeout line through contents from lower left to upper right                                                      |
    | `downdiagonalstrike`                   | ![downdiagonalstrike](downdiagonalstrike.png)              | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | strikeout line through contents from upper left to lower right                                                      |
    | `verticalstrike`                       | ![verticalstrike](verticalstrike.png)                      | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | vertical strikeout line through contents                                                                            |
    | `horizontalstrike`                     | ![horizontalstrike](horizontalstrike.png)                  | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | horizontal strikeout line through contents                                                                          |
    | `madruwb`                              | ![madruwb](madruwb.png)                                    | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabic factorial symbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`                      | ![](updiagonalarrow.png)                                   | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | diagonal arrow                                                                                                      |
    | `phasorangle`                          | ![Screenshot of the phasorangle notation](phasorangle.png) | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | phasor angle                                                                                                        |

## Examples

```html
<math>

  <menclose notation="circle box">
    <mi> x </mi>
    <mo> + </mo>
    <mi> y </mi>
  </menclose>

</math>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Gecko-specific notes

- Addtional values for the `notation` attribute have been added in the following releases:

  - `madruwb` in Gecko 2.0 {{GeckoRelease("2.0")}}.
  - `updiagonalarrow` in Gecko 24.0 {{GeckoRelease("24.0")}}
  - `phasorangle` in Gecko 32.0 {{GeckoRelease("32.0")}}
