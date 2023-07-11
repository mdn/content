---
title: Using multiple backgrounds
slug: Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds
page-type: guide
---

{{CSSRef}}

You can apply **multiple backgrounds** to elements. These are layered atop one another with the first background you provide on top and the last background listed in the back. Only the last background can include a background color.

Specifying multiple backgrounds is easy:

```css
.myclass {
  background:
    background1,
    background2,
    /* … ,*/ backgroundN;
}
```

You can do this with both the shorthand {{ cssxref("background") }} property and the individual properties thereof except for {{ cssxref("background-color") }}. That is, the following background properties can be specified as a list, one per background: {{ cssxref("background") }}, {{ cssxref("background-attachment") }}, {{ cssxref("background-clip") }}, {{ cssxref("background-image") }}, {{ cssxref("background-origin") }}, {{ cssxref("background-position") }}, {{ cssxref("background-repeat") }}, {{ cssxref("background-size") }}.

## Example

In this example, three backgrounds are stacked: the Firefox logo, an image of bubbles, and a [linear gradient](/en-US/docs/Web/CSS/gradient/linear-gradient):

### HTML

```html
<div class="multi-bg-example"></div>
```

### CSS

```css
.multi-bg-example {
  width: 100%;
  height: 400px;
  background-image: url(firefox.png), url(bubbles.png), linear-gradient(to right, rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position:
    bottom right,
    left,
    right;
}
```

### Result

(If image does not appear in CodePen, click the 'Tidy' button in the CSS section)

{{EmbedLiveSample('Example','600','400')}}

As you can see here, the Firefox logo (listed first within {{ cssxref("background-image") }}) is on top, directly above the bubbles graphic, followed by the gradient (listed last) sitting underneath all previous 'images'. Each subsequent sub-property ({{ cssxref("background-repeat") }} and {{ cssxref("background-position") }}) applies to the corresponding backgrounds. So the first listed value for {{ cssxref("background-repeat") }} applies to the first (frontmost) background, and so forth.

## See also

- [Using CSS gradients](/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
