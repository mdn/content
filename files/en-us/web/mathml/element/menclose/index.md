---
title: <menclose>
slug: Web/MathML/Element/menclose
page-type: mathml-element
status:
  - non-standard
browser-compat: mathml.elements.menclose
---

{{MathMLRef}}{{Non-standard_header}}

The **`<menclose>`** [MathML](/en-US/docs/Web/MathML) element renders its content inside an enclosing notation specified by the `notation` attribute.

## Attributes

This element's attributes include the [global MathML attributes](/en-US/docs/Web/MathML/Global_attributes).

- `notation` {{Non-standard_Inline}}

  - : A list of notations, separated by white space, to apply to the child elements. The symbols are each drawn as if the others are not present, and therefore may overlap. Possible values are:

    | Value                | Sample Rendering                                                | Rendering in your browser                                                                                                                    | Description                                                                                                         |
    | -------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)  | ![Longdiv sample rendering.](longdiv.svg)                       | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | long division symbol                                                                                                |
    | `actuarial`          | ![Actuarial sample rendering.](actuarial.svg)                   | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [actuarial symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `box`                | ![Box sample rendering.](box.svg)                               | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | box                                                                                                                 |
    | `roundedbox`         | ![Roundedbox sample rendering.](roundedbox.svg)                 | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | rounded box                                                                                                         |
    | `circle`             | ![Circle sample rendering.](circle.svg)                         | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | circle                                                                                                              |
    | `left`               | ![Left sample rendering.](left.svg)                             | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | line to the left of the contents                                                                                    |
    | `right`              | ![Right sample rendering.](right.svg)                           | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | line to the right of the contents                                                                                   |
    | `top`                | ![Top sample rendering.](top.svg)                               | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | line above of the contents                                                                                          |
    | `bottom`             | ![Bottom sample rendering.](bottom.svg)                         | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | line below of the contents                                                                                          |
    | `updiagonalstrike`   | ![Updiagonalstrike sample rendering.](updiagonalstrike.svg)     | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | strikeout line through contents from lower left to upper right                                                      |
    | `downdiagonalstrike` | ![Downdiagonalstrike sample rendering.](downdiagonalstrike.svg) | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math> | strikeout line through contents from upper left to lower right                                                      |
    | `verticalstrike`     | ![Verticalstrike sample rendering.](verticalstrike.svg)         | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | vertical strikeout line through contents                                                                            |
    | `horizontalstrike`   | ![Horizontalstrike sample rendering.](horizontalstrike.svg)     | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | horizontal strikeout line through contents                                                                          |
    | `madruwb`            | ![Madruwb sample rendering.](madruwb.svg)                       | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabic factorial symbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Madruwb sample rendering.](updiagonalarrow.svg)               | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | diagonal arrow                                                                                                      |
    | `phasorangle`        | ![Phasorangle sample rendering.](phasorangle.svg)               | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | phasor angle                                                                                                        |

## Examples

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

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

Sample rendering:

![Circle and box values applied at the same time.](circle-box.svg)

Rendering in your browser:

{{ EmbedLiveSample('menclose_example', 700, 200, "", "") }}

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

The `<menclose>` element is not defined in any browser-oriented specification but you can find a description in [MathML 4](https://w3c.github.io/mathml/#presm_menclose).

## Browser compatibility

{{Compat}}
