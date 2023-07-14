---
title: mask-repeat
slug: Web/CSS/mask-repeat
page-type: css-property
browser-compat: css.properties.mask-repeat
---

{{CSSRef}}

The **`mask-repeat`** [CSS](/en-US/docs/Web/CSS) property sets how mask images are repeated. A mask image can be repeated along the horizontal axis, the vertical axis, both axes, or not repeated at all.

```css
/* One-value syntax */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Two-value syntax: horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Multiple values */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Global values */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

By default, the repeated images are clipped to the size of the element, but they can be scaled to fit (using `round`) or evenly distributed from end to end (using `space`).

## Syntax

One or more `<repeat-style>` values, separated by commas.

### Values

- `<repeat-style>`

  - : The one-value syntax is a shorthand for the full two-value syntax:

    <table class="standard-table">
      <thead>
        <tr>
          <th>Single value</th>
          <th>Two-value equivalent</th>
        </tr>
      </thead>
      <tbody>
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
            The image is repeated as much as needed to cover the whole mask painting
            area. The last image will be clipped if it doesn't fit.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            The image is repeated as much as possible without clipping. The first
            and last images are pinned to either side of the element, and whitespace
            is distributed evenly between the images. The
            {{cssxref("mask-position")}} property is ignored unless only one
            image can be displayed without clipping. The only case where clipping
            happens using <code>space</code> is when there isn't enough room to
            display one image.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            As the allowed space increases in size, the repeated images will stretch
            (leaving no gaps) until there is room for another one to be added. When
            the next image is added, all of the current ones compress to allow room.
            Example: An image with an original width of 260px, repeated three times,
            might stretch until each repetition is 300px wide, and then another
            image will be added. They will then compress to 225px.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            The image is not repeated (and hence the mask painting area will not
            necessarily be entirely covered). The position of the non-repeated mask
            image is defined by the {{cssxref("mask-position")}} CSS
            property.
          </td>
        </tr>
      </tbody>
    </table>

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting repeat for a single mask

{{EmbedGHLiveSample("css-examples/masking/mask-repeat.html", '100%', 700)}}

### Multiple mask image support

You can specify a different `<repeat-style>` for each mask image, separated by commas:

```css
.examplethree {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Each image is matched with the corresponding repeat style, from first specified to last.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Clipping and Masking in CSS](https://css-tricks.com/clipping-masking-css/)
