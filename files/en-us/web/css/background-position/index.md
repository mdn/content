---
title: background-position
slug: Web/CSS/background-position
page-type: css-property
browser-compat: css.properties.background-position
---

{{CSSRef}}

The **`background-position`** [CSS](/en-US/docs/Web/CSS) property sets the initial position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.

{{EmbedInteractiveExample("pages/css/background-position.html")}}

## Syntax

```css
/* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position:
  0 0,
  center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: revert-layer;
background-position: unset;
```

The `background-position` property is specified as one or more `<position>` values, separated by commas.

### Values

- `<position>`

  - : A {{cssxref("&lt;position&gt;")}}. A position defines an x/y coordinate, to place an item relative to the edges of an element's box. It can be defined using one to four values. If two non-keyword values are used, the first value represents the horizontal position and the second represents the vertical position. If only one value is specified, the second value is assumed to be `center`. If three or four values are used, the length-percentage values are offsets for the preceding keyword value(s).

    **1-value syntax:** the value may be:

    - The keyword value `center`, which centers the image.
    - One of the keyword values `top`, `left`, `bottom`, `right`. This specifies an edge against which to place the item. The other dimension is then set to 50%, so the item is placed in the middle of the edge specified.
    - A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. This specifies the X coordinate relative to the left edge, with the Y coordinate set to 50%.

    **2-value syntax:** one value defines X and the other defines Y. Each value may be:

    - One of the keyword values `top`, `left`, `bottom`, `right`. If `left` or `right` are given here, then this defines X and the other given value defines Y. If `top` or `bottom` are given, then this defines Y and the other value defines X.
    - A {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}}. If the other value is `left` or `right`, then this value defines Y, relative to the top edge. If the other value is `top` or `bottom`, then this value defines X, relative to the left edge. If both values are `<length>` or `<percentage>` values, then the first defines X and the second Y.
    - Note that: If one value is `top` or `bottom`, then the other value may not be `top` or `bottom`. If one value is `left` or `right`, then the other value may not be `left` or `right`. This means, e.g., that `top top` and `left right` are not valid.
    - Order: when pairing keywords, placement is not important as the browser can reorder it, the value `top left` or `left top` will yield the same result. With pairing {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} with a keyword the placement is important, the value defining X should come first followed by Y, the value `right 20px` is not the same as `20px right` the former is valid but the latter is invalid. The value `left 20%` or `20% bottom` is valid as X and Y values are clearly defined and the placement is right.
    - The default value is `left top` or `0% 0%`.

    **3-value syntax:** Two values are keyword values, and the third is the offset for the preceding value:

    - The first value is one of the keyword values `top`, `left`, `bottom`, `right`, or `center`. If `left` or `right` are given here, then this defines X. If `top` or `bottom` are given, then this defines Y and the other keyword value defines X.
    - The {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} value, if it is the second value, is the offset for the first value. If it is the third value, it is the offset for the second value.
    - The single length or percentage value is an offset for the keyword value that precedes it. The combination of one keyword with two {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values is not valid.

    **4-value syntax:** The first and third values are keyword value defining X and Y. The second and fourth values are offsets for the preceding X and Y keyword values:

    - The first value and third values one of the keyword values `top`, `left`, `bottom`, `right`. If `left` or `right` are given here, then this defines X. If `top` or `bottom` are given, then this defines Y and the other keyword value defines X.
    - The second and fourth values are {{cssxref("&lt;length&gt;")}} or {{cssxref("&lt;percentage&gt;")}} values. The second value is the offset for the first keyword. The fourth value is the offset for the second keyword.

### Regarding Percentages

The percentage offset of the given background image's position is relative to the container. A value of 0% means that the left (or top) edge of the background image is aligned with the corresponding left (or top) edge of the container, or the 0% mark of the image will be on the 0% mark of the container. A value of 100% means that the _right_ (or _bottom_) edge of the background image is aligned with the _right_ (or _bottom_) edge of the container, or the 100% mark of the image will be on the 100% mark of the container. Thus a value of 50% horizontally or vertically centers the background image as the 50% of the image will be at the 50% mark of the container. Similarly, `background-position: 25% 75%` means the spot on the image that is 25% from the left and 75% from the top will be placed at the spot of the container that is 25% from the container's left and 75% from the container's top.

Essentially what happens is the background image dimension is _subtracted_ from the corresponding container dimension, and then a percentage of the resulting value is used as the direct offset from the left (or top) edge.

```
(container width - image width) * (position x%) = (x offset value)
(container height - image height) * (position y%) = (y offset value)
```

Using the X axis for an example, let's say we have an image that is 300px wide and we are using it in a container that is 100px wide, with background-size set to auto:

```
100px - 300px = -200px (container & image difference)
```

So that with position percentages of -25%, 0%, 50%, 100%, 125%, we get these image-to-container edge offset values:

```
-200px * -25% = 50px
-200px * 0% = 0px
-200px * 50% = -100px
-200px * 100% = -200px
-200px * 125% = -250px
```

So with these resultant values for our example, the **left edge** of the **image** is offset from the **left edge** of the **container** by:

- \+ 50px (putting the left image edge in the center of the 100-pixel-wide container)
- 0px (left image edge coincident with the left container edge)
- \-100px (left image edge 100px to the left of the container, in this example that means the middle 100px image area is centered in the container)
- \-200px (left image edge 200px to the left of the container, in this example that means the right image edge is coincident with the right container edge)
- \-250px (left image edge 250px to the left of the container, in this example that puts the right edge of the 300px-wide image in the center of the container)

It's worth mentioning that if your background-size is equal to the container size for a given axis, then a _percentage_ position for that axis will have no effect because the "container-image difference" will be zero. You will need to offset using absolute values.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Positioning background images

Each of these three examples uses the {{cssxref("background")}} property to create a yellow, rectangular element containing a star image. In each example, the star is in a different position. The third example illustrates how to specify positions for two different background images within one element.

#### HTML

```html
<div class="exampleone">Example One</div>
<div class="exampletwo">Example Two</div>
<div class="examplethree">Example Three</div>
```

#### CSS

```css
/* Shared among all <div>s */
div {
  background-color: #ffee99;
  background-repeat: no-repeat;
  width: 300px;
  height: 80px;
  margin-bottom: 12px;
}

/* These examples use the `background` shorthand property */
.exampleone {
  background: url("startransparent.gif") #ffee99 2.5cm bottom no-repeat;
}
.exampletwo {
  background: url("startransparent.gif") #ffee99 left 4em bottom 1em no-repeat;
}

/* Multiple background images: Each image is matched with the
   corresponding position, from first specified to last. */
.examplethree {
  background-image: url("startransparent.gif"), url("catfront.png");
  background-position:
    0px 0px,
    right 3em bottom 2em;
}
```

#### Result

{{EmbedLiveSample('Positioning_background_images', 420, 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-position-x")}}
- {{cssxref("background-position-y")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds)
- {{cssxref("transform-origin")}}
