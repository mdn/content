---
title: orientation
slug: Web/CSS/@media/orientation
page-type: css-media-feature
browser-compat: css.at-rules.media.orientation
---

{{CSSRef}}

The **`orientation`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test the orientation of the {{glossary("viewport")}} (or the page box, for [paged media](/en-US/docs/Web/CSS/CSS_paged_media)).

> [!NOTE]
> This feature does not correspond to _device_ orientation. Opening the soft keyboard on many devices in portrait orientation will cause the viewport to become wider than it is tall, thereby causing the browser to use landscape styles instead of portrait.

## Syntax

The `orientation` feature is specified as a keyword value chosen from the list below.

### Keyword values

- `portrait`
  - : The viewport is in a portrait orientation, i.e., the height is greater than or equal to the width.
- `landscape`
  - : The viewport is in a landscape orientation, i.e., the width is greater than the height.

## Examples

### Portrait orientation

In this example we have three boxes in the HTML, and use the `orientation` media feature to switch between a row layout (in landscape) and a column layout (in portrait).

The example output is embedded in an {{HTMLElement("iframe")}} whose height is greater than its width, so the boxes get a column layout.

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

#### Result

{{EmbedLiveSample("Portrait orientation", "", "800")}}

### Landscape orientation

This example has exactly the same code as the previous example: it has three boxes in the HTML, and uses the `orientation` media feature to switch between a row layout (in landscape) and a column layout (in portrait).

However, in this example, the example output is embedded in an {{HTMLElement("iframe")}} whose height is less than its width, so the boxes get a row layout.

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

{{EmbedLiveSample("Landscape orientation", "", "300")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
