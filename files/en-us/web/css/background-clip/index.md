---
title: background-clip
slug: Web/CSS/background-clip
page-type: css-property
browser-compat: css.properties.background-clip
---

{{CSSRef}}

The **`background-clip`** [CSS](/en-US/docs/Web/CSS) property sets whether an element's background extends underneath its border box, padding box, or content box.

{{EmbedInteractiveExample("pages/css/background-clip.html")}}

If the element has no {{cssxref("background-image")}} or {{cssxref("background-color")}}, this property will only have a visual effect when the border has transparent regions or partially opaque regions (due to {{cssxref("border-style")}} or {{cssxref("border-image")}}); otherwise, the border masks the difference.

> **Note:** Because the [root element](/en-US/docs/Web/HTML/Element/html) has a different background painting area, the `background-clip` property has no effect when specified on it. See "[The backgrounds of special elements.](https://drafts.csswg.org/css-backgrounds-3/#special-backgrounds)"

> **Note:** For documents whose [root element](/en-US/docs/Web/HTML/Element/html) is an HTML element: if the computed value of {{cssxref("background-image")}} on the root element is `none` and its {{cssxref("background-color")}} is `transparent`, user agents must instead propagate the computed values of the `background` properties from that element's first HTML {{HTMLElement("body")}} child element. The used values of that `<body>` element's `background` properties are their initial values, and the propagated values are treated as if they were specified on the root element. It is recommended that authors of HTML documents specify the canvas background for the `<body>` element rather than the HTML element.

## Syntax

```css
/* Keyword values */
background-clip: border-box;
background-clip: padding-box;
background-clip: content-box;
background-clip: text;

/* Global values */
background-clip: inherit;
background-clip: initial;
background-clip: revert;
background-clip: revert-layer;
background-clip: unset;
```

### Values

- `border-box`
  - : The background extends to the outside edge of the border (but underneath the border in z-ordering).
- `padding-box`
  - : The background extends to the outside edge of the padding. No background is drawn beneath the border.
- `content-box`
  - : The background is painted within (clipped to) the content box.
- `text`
  - : The background is painted within (clipped to) the foreground text.

## Accessibility concerns

When using `background-clip: text`, check that the contrast ratio between the background color and the color of the text placed over it is high enough that people experiencing low vision conditions will be able to read the content of the page.

If the background image does not load, this could also lead to the text becoming unreadable. Add a fallback {{cssxref("background-color")}} to prevent this from happening, and test without the image.

Consider using feature queries with {{cssxref("@supports")}} to test for support of `background-clip: text` and provide an accessible alternative where it is not supported.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<p class="border-box">The background extends behind the border.</p>
<p class="padding-box">
  The background extends to the inside edge of the border.
</p>
<p class="content-box">
  The background extends only to the edge of the content box.
</p>
<p class="text">The background is clipped to the foreground text.</p>
```

### CSS

```css
p {
  border: 0.8em darkviolet;
  border-style: dotted double;
  margin: 1em 0;
  padding: 1.4em;
  background: linear-gradient(60deg, red, yellow, red, yellow, red);
  font: 900 1.2em sans-serif;
  text-decoration: underline;
}

.border-box {
  background-clip: border-box;
}
.padding-box {
  background-clip: padding-box;
}
.content-box {
  background-clip: content-box;
}

.text {
  background-clip: text;
  color: rgb(0 0 0 / 20%);
}
```

#### Result

{{EmbedLiveSample('Examples', 600, 580)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{cssxref("clip-path")}} property creates a clipping region that defines what part of an _entire element_ should be displayed.
- Background properties: {{cssxref("background")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}
- [Introduction to the CSS box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
