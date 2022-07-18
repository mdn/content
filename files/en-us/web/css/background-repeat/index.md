---
title: background-repeat
slug: Web/CSS/background-repeat
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.background-repeat
---
{{CSSRef}}

The **`background-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

By default, the repeated images are clipped to the size of the element, but they can be scaled to fit (using `round`) or evenly distributed from end to end (using `space`).

## Syntax

```css
/* Keyword values */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Global values */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: revert-layer;
background-repeat: unset;
```

### Values

- `<repeat-style>`

  - : The one-value syntax is a shorthand for the full two-value syntax:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>Single value</strong></td>
          <td><strong>Two-value equivalent</strong></td>
        </tr>
        <tr>
          <td><code>repeat-x</code></td>
          <td><code>repeat no-repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat-y</code></td>
          <td><code>no-repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat</code></td>
          <td><code>repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td><code>round round</code></td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td><code>no-repeat no-repeat</code></td>
        </tr>
      </tbody>
    </table>

    In the two-value syntax, the first value represents the horizontal repetition behavior and the second value represents the vertical behavior. Here is an explanation of how each option works for either direction:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            The image is repeated as much as needed to cover the whole background
            image painting area. The last image will be clipped if it doesn't fit.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            The image is repeated as much as possible without clipping. The first
            and last images are pinned to either side of the element, and whitespace
            is distributed evenly between the images. The
            {{cssxref("background-position")}} property is ignored unless
            only one image can be displayed without clipping. The only case where
            clipping happens using <code>space</code> is when there isn't enough
            room to display one image.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            As the allowed space increases in size, the repeated images will stretch
            (leaving no gaps) until there is room (space left >= half of the image
            width) for another one to be added. When the next image is added, all of
            the current ones compress to allow room. Example: An image with an
            original width of 260px, repeated three times, might stretch until each
            repetition is 300px wide, and then another image will be added. They
            will then compress to 225px.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            The image is not repeated (and hence the background image painting area
            will not necessarily be entirely covered). The position of the
            non-repeated background image is defined by the
            {{cssxref("background-position")}} CSS property.
          </td>
        </tr>
      </tbody>
    </table>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting background-repeat

#### HTML

```html
<ol>
  <li>no-repeat
    <div class="one"></div>
  </li>
  <li>repeat
    <div class="two"></div>
  </li>
  <li>repeat-x
    <div class="three"></div>
  </li>
  <li>repeat-y
    <div class="four"></div>
  </li>
  <li>space
    <div class="five"></div>
  </li>
  <li>round
    <div class="six"></div>
  </li>
  <li>repeat-x, repeat-y (multiple images)
    <div class="seven"></div>
  </li>
</ol>
```

#### CSS

```css
/* Shared for all DIVS in example */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
    background-image: url(starsolid.gif);
    width: 160px;
    height: 70px;
}

/* Background repeats */
.one {
  background-repeat: no-repeat;
}
.two {
  background-repeat: repeat;
}
.three {
  background-repeat: repeat-x;
}
.four {
  background-repeat: repeat-y;
}
.five {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Multiple images */
.seven {
  background-image:  url(starsolid.gif),
                     url(https://developer.mozilla.org/static/img/favicon32.png);
  background-repeat: repeat-x,
                     repeat-y;
  height: 144px;
}
```

#### Result

In this example, each list item is matched with a different value of `background-repeat`.

{{EmbedLiveSample('Setting_background-repeat', 240, 560)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
