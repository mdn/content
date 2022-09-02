---
title: clip
slug: Web/CSS/clip
tags:
  - CSS
  - CSS Masking
  - CSS Property
  - Deprecated
  - Reference
  - recipe:css-property
browser-compat: css.properties.clip
---
{{CSSRef}}{{Deprecated_Header}}

The **`clip`** [CSS](/en-US/docs/Web/CSS) property defines a visible portion of an element. The `clip` property applies only to absolutely positioned elements — that is, elements with {{cssxref("position","position:absolute")}} or {{cssxref("position","position:fixed")}}.

```css
/* Keyword value */
clip: auto;

/* <shape> values */
clip: rect(1px, 10em, 3rem, 2ch);

/* Global values */
clip: inherit;
clip: initial;
clip: revert;
clip: revert-layer;
clip: unset;
```

## Syntax

> **Note:** Where possible, authors are encouraged to use the newer {{cssxref("clip-path")}} property instead.

### Values

- {{cssxref("shape")}}

  - : A rectangular {{cssxref("shape")}} of the form `rect(<top>, <right>, <bottom>, <left>)`. The `<top>` and `<bottom>` values are offsets from the _inside top border edge_ of the box, while `<right>` and `<left>` are offsets from the _inside left border edge_ of the box — that is, the extent of the padding box.

    The `<top>`, `<right>`, `<bottom>`, and `<left>` values may be either a {{cssxref("&lt;length&gt;")}} or `auto`. If any side's value is `auto`, the element is clipped to that side's _inside border edge_.

- `auto`
  - : The element does not clip (default). This is different from `rect(auto, auto, auto, auto)`, which clips to the element's inside border edges.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Clipping an image

#### CSS

```css
.dotted-border {
  border: dotted;
  position: relative;
  width: 536px;
  height: 350px;
}

#top-left,
#middle,
#bottom-right {
  position: absolute;
  top: 0;
}

#top-left {
  left: 360px;
  clip: rect(0, 175px, 113px, 0);
}

#middle {
  left: 280px;
  clip: rect(119px, 255px, 229px, 80px);
}

#bottom-right {
  left: 200px;
  clip: rect(235px, 335px, 345px, 160px);
}
```

#### HTML

```html
<p class="dotted-border">
  <img src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Original graphic">
  <img id="top-left" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to upper left">
  <img id="middle" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped towards middle">
  <img id="bottom-right" src="https://developer.mozilla.org/@api/deki/files/3613/=hut.jpg" title="Graphic clipped to bottom right">
</p>
```

#### Result

{{EmbedLiveSample('Clipping_an_image', '689px', '410px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- This property is deprecated. Use {{cssxref("clip-path")}} instead.
- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("overflow")}}, {{cssxref("display")}}, {{cssxref("position")}}
