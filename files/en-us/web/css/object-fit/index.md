---
title: object-fit
slug: Web/CSS/object-fit
page-type: css-property
browser-compat: css.properties.object-fit
---

{{CSSRef}}

The **`object-fit`** [CSS](/en-US/docs/Web/CSS) property sets how the content of a [replaced element](/en-US/docs/Web/CSS/Replaced_element), such as an {{HTMLElement("img")}} or {{HTMLElement("video")}}, should be resized to fit its container.

> [!NOTE]
> The `object-fit` property has no effect on {{HTMLElement("iframe")}}, {{HTMLElement("embed")}}, and {{HTMLElement("fencedframe")}} elements.

You can alter the alignment of the replaced element's content object within the element's box using the {{cssxref("object-position")}} property.

{{EmbedInteractiveExample("pages/css/object-fit.html")}}

## Syntax

```css
object-fit: contain;
object-fit: cover;
object-fit: fill;
object-fit: none;
object-fit: scale-down;

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: revert;
object-fit: revert-layer;
object-fit: unset;
```

The `object-fit` property is specified as a single keyword chosen from the list of values below.

### Values

- `contain`
  - : The replaced content is scaled to maintain its {{glossary("aspect ratio")}} while fitting within the element's content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be ["letterboxed"](<https://en.wikipedia.org/wiki/Letterboxing_(filming)>) if its aspect ratio does not match the aspect ratio of the box.
- `cover`
  - : The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.
- `fill`
  - : The replaced content is sized to fill the element's content box. The entire object will completely fill the box. If the object's {{glossary("aspect ratio")}} does not match the aspect ratio of its box, then the object will be stretched to fit.
- `none`
  - : The replaced content is not resized.
- `scale-down`
  - : The content is sized as if `none` or `contain` were specified, whichever would result in a smaller concrete object size.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting object-fit for an image

#### HTML

```html
<section>
  <h2>object-fit: fill</h2>
  <img class="fill" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="fill narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: contain</h2>
  <img class="contain" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="contain narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: cover</h2>
  <img class="cover" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="cover narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: none</h2>
  <img class="none" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="none narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <h2>object-fit: scale-down</h2>
  <img class="scale-down" src="mdn_logo_only_color.png" alt="MDN Logo" />

  <img class="scale-down narrow" src="mdn_logo_only_color.png" alt="MDN Logo" />
</section>
```

#### CSS

```css
h2 {
  font-family:
    Courier New,
    monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
  margin: 10px 0;
}

.narrow {
  width: 100px;
  height: 150px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

#### Result

{{ EmbedLiveSample('Setting_object-fit_for_an_image', 500, 1100) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
- {{cssxref("background-size")}}
- [Understanding aspect ratios](/en-US/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
