---
title: transform-origin
slug: Web/SVG/Attribute/transform-origin
tags:
  - SVG
  - SVG Attribute
browser-compat: svg.attributes.presentation.transform-origin
---
{{SVGRef()}}

The **`transform-origin`** SVG attribute sets the origin for an item's transformations.

You can use this attribute with any SVG element.

> **Note:** As a presentation attribute in SVG, `transform-origin` corresponds in syntax and behavior to the `transform-origin` property in CSS, and can be used as CSS property to style SVG. See the [CSS transform-origin](/en-US/docs/Web/CSS/transform-origin) property for more information.

## Usage notes

<table class="properties">
  <tbody>
    <tr>
      <td><strong>Values</strong></td>
      <td>{{csssyntax("transform-origin")}}</td>
    </tr>
    <tr>
      <td><strong>Default value</strong></td>
      <td><code>0, 0</code></td>
    </tr>
    <tr>
      <td><strong>Animatable</strong></td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

> **Note:** The default value of `transform-origin` is `0 0` for all SVG elements except for root `<svg>` elements and `<svg>` elements that are a direct child of a [foreignObject](/en-US/docs/Web/SVG/Element/foreignObject), and whose transform-origin is `50% 50%`, like other CSS elements.

The `transform-origin` property may be specified using one, two, or three values, where each value represents an offset. Offsets that are not explicitly defined are reset to their corresponding [initial values](/en-US/docs/Web/CSS/initial_value).

If a single {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value is defined, it represents the horizontal offset.

If two or more values are defined and either no value is a keyword, or the only used keyword is `center`, then the first value represents the horizontal offset and the second represents the vertical offset.

- One-value syntax:

  - The value must be a [`<length>`](/en-US/docs/Web/CSS/length), or one of the keywords `left`, `center`, `right`, `top`, and `bottom`.
- Two-value syntax:

  - One value must be a [`<length>`](/en-US/docs/Web/CSS/length), a [`<percentage>`](/en-US/docs/Web/CSS/percentage), or one of the keywords `left`, `center`, and `right`.
  - The other value must be a [`<length>`](/en-US/docs/Web/CSS/length), a [`<percentage>`](/en-US/docs/Web/CSS/percentage), or one of the keywords `top`, `center`, and `bottom`.
- Three-value syntax:

  - The first two values are the same as for the two-value syntax.
  - The third value must be a [`<length>`](/en-US/docs/Web/CSS/length). It always represents the Z offset.

## Example

This example shows the code for one PNG image and three SVG images:

1. A PNG reference image.
2. An SVG reference image that uses no transformation.
3. An SVG image that uses `transform-origin` to do a transformation, with the expected result being an image identical to the reference image.
4. An SVG image that does not use `transform-origin` but does the same transformation using just [`transform`](/en-US/docs/Web/SVG/Attribute/transform), with the expected result being an image identical to the reference image.

The fourth image shows how to do the transformation in browsers that don't support `transform-origin` — because the code for the fourth image does the same transformation as the third image's `transform-origin`-based code, but by only using `transform`, without `transform-origin`.

> **Note:** These examples use a modified version of a code snippet in a Stack Overflow [question](https://stackoverflow.com/questions/67057190/safari-doesnt-respect-transform-origin-svg-attribute) from [Maxim Kulikov](https://stackoverflow.com/users/1033939/maxim-kulikov), as well as a modified version of a code snippet in an [answer](https://stackoverflow.com/questions/67057190/safari-doesnt-respect-transform-origin-svg-attribute/67057754) from [Michael Mullany](https://stackoverflow.com/users/271353/michael-mullany) that accompanies the question. Both code snippets are used under the terms of the [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) license.)

### HTML

```html
<h4>Reference image</h4>

<div>
  <figure>
    <img src="reference.png" alt="PNG reference image"/>
    <figcaption>Figure 1. PNG reference image. The images following this should look exactly the same as this.</figcaption>
  </figure>
</div>

<div>
  <figure>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="100" stroke="none" fill="black"/>
      <line x1="100" y1="0" x2="100" y2="200" stroke="rebeccapurple" stroke-width="2"/>
      <line x1="0" y1="100" x2="200" y2="100" stroke="rebeccapurple" stroke-width="2"/>

      <circle cx="100" cy="100" r="75" stroke="none" fill="blue"/>
      <line x1="100" y1="25" x2="100" y2="175" stroke="rebeccapurple" stroke-width="1.5"/>
      <line x1="25" y1="100" x2="175" y2="100" stroke="rebeccapurple" stroke-width="1.5"/>

      <circle cx="100" cy="100" r="50" stroke="none" fill="red"/>
      <line x1="100" y1="50" x2="100" y2="150" stroke="rebeccapurple" stroke-width="1"/>
      <line x1="50" y1="100" x2="150" y2="100" stroke="rebeccapurple" stroke-width="1"/>

      <circle cx="100" cy="100" r="25" stroke="none" fill="yellow"/>
      <line x1="100" y1="75" x2="100" y2="125" stroke="rebeccapurple" stroke-width="0.5"/>
      <line x1="75" y1="100" x2="125" y2="100" stroke="rebeccapurple" stroke-width="0.5"/>
    </svg>
    <figcaption>Figure 2. SVG reference image. The images following this should look exactly the same as this.</figcaption>
  </figure>
</div>

<h4>Transformation with transform-origin</h4>

<div>
  <figure>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <g id="target-g-1">
          <circle cx="100" cy="100" r="100" stroke="none"/>
          <line x1="100" y1="0" x2="100" y2="200" stroke="rebeccapurple" stroke-width="2"/>
          <line x1="0" y1="100" x2="200" y2="100" stroke="rebeccapurple" stroke-width="2"/>
        </g>
      </defs>

      <use href="#target-g-1" fill="black"/>
      <use href="#target-g-1" fill="blue"
          transform="scale(0.75 0.75)"
          transform-origin="100 100"/>

      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="200" height="200" viewBox="0 0 200 200">
        <use href="#target-g-1" fill="red"
          transform="scale(0.5 0.5)"
          transform-origin="100 100"/>
        <use href="#target-g-1" fill="yellow"
          transform="scale(0.25 0.25)"
          transform-origin="100 100"/>
      </svg>
    </svg>

    <figcaption>Figure 3. transform-origin used.
      This image should look exactly the same as the reference image in Figure 2.</figcaption>
  </figure>
</div>

<h4>Transformation without transform-origin</h4>

<div>
  <figure>
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
      <defs>
        <g id="target-g-1">
          <circle cx="100" cy="100" r="100" stroke="none"/>
          <line x1="100" y1="0" x2="100" y2="200" stroke="rebeccapurple" stroke-width="2"/>
          <line x1="0" y1="100" x2="200" y2="100" stroke="rebeccapurple" stroke-width="2"/>
        </g>
      </defs>

      <use href="#target-g-1" fill="black"/>
      <use href="#target-g-1" fill="blue"
          transform="translate(100 100) scale(0.75 0.75) translate(-100 -100)"/>

      <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="200" height="200" viewBox="0 0 200 200">
        <use href="#target-g-1" fill="red"
            transform="translate(100 100) scale(0.5 0.5) translate(-100 -100)"/>
        <use href="#target-g-1" fill="yellow"
            transform="translate(100 100) scale(0.25 0.25) translate(-100 -100)"/>
      </svg>
    </svg>

    <figcaption>Figure 4. transform-origin not used.
      This image should look exactly the same as the reference image in Figure 2.</figcaption>
  </figure>
</div>
```

### CSS

```css
    h4 {
      font-family: sans-serif;
    }

    figure {
      border: thin #c0c0c0 solid;
      display: inline-flex;
      flex-flow: column;
      padding: 5px;
      max-width: 200px;
      margin: auto;
    }

    figcaption {
      margin-top: 5px;
      background-color: #222;
      color: #fff;
      font: smaller sans-serif;
      padding: 3px;
      text-align: center;
    }
```

### Result

{{ EmbedLiveSample('Example', 700, 1350) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
