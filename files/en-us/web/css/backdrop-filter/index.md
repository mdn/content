---
title: backdrop-filter
slug: Web/CSS/backdrop-filter
tags:
  - CSS
  - CSS Property
  - Graphics
  - Layout
  - NeedsContent
  - Reference
  - SVG
  - SVG Filter
  - Web
  - recipe:css-property
browser-compat: css.properties.backdrop-filter
---
{{CSSRef}}

The **`backdrop-filter`** [CSS](/en-US/docs/Web/CSS) property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything _behind_ the element, to see the effect you must make the element or its background at least partially transparent.

{{EmbedInteractiveExample("pages/css/backdrop-filter.html")}}

## Syntax

```css
/* Keyword value */
backdrop-filter: none;

/* URL to SVG filter */
backdrop-filter: url(commonfilters.svg#filter);

/* <filter-function> values */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* Multiple filters */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* Global values */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: revert-layer;
backdrop-filter: unset;
```

### Values

- `none`
  - : No filter is applied to the backdrop.
- `<filter-function-list>`
  - : A space-separated list of {{cssxref("&lt;filter-function&gt;")}}s or an [SVG filter](/en-US/docs/Web/SVG/Element/filter) that will be applied to the backdrop.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### CSS

```css
.box {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  font-family: sans-serif;
  text-align: center;
  line-height: 1;
 -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  max-width: 50%;
  max-height: 50%;
  padding: 20px 40px;
}

html,
body {
  height: 100%;
  width: 100%;
}

body {
  background-image: url(https://picsum.photos/id/1080/6858/4574), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.container {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
}
```

### HTML

```html
<div class="container">
  <div class="box">
    <p>backdrop-filter: blur(10px)</p>
  </div>
</div>
```

### Result

{{EmbedLiveSample("Examples", 600, 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("filter")}}
