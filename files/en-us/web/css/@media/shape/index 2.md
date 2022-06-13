---
title: shape
slug: Web/CSS/@media/shape
tags:
  - '@media'
  - CSS
  - Reference
  - media feature
browser-compat: css.at-rules.media.shape
---
{{CSSRef}}

The `shape` [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) can be used to test the shape of the device to distinguish rectangular and round displays.

## Syntax

The `shape` discrete feature is specified as one of two acceptable strings, either `rect` representing a rectangular screen or `round` representing a circular, oval or elliptical screen.

- `rect`
  - : The shape is an axis aligned rectangle or square, or a similar shape such as rounded rectangle for which the traditional designs are appropriate.
- `round`
  - : The shape is rounded or a similar shape to the circle such as an oval, an ellipse for which distinctively rounded designs are appropriate.

## Examples

### Basic example

#### HTML

```html
<h1>Hello World!</h1>
```

#### CSS

```css
h1 {
  text-align: left;
}

@media (shape: rect) {
  h1 {
    text-align: left;
  }
}

@media (shape: round) {
  h1 {
    text-align: center;
  }
}
```

### Custom stylesheet

This HTML will apply a special stylesheet for devices that have round screens.

```html
<head>
    <link rel="stylesheet" href="default.css" />
    <link media="screen and (shape: rect)" rel="stylesheet" href="rectangle.css" />
    <link media="screen and (shape: round)" rel="stylesheet" href="round.css" />
</head>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/en-US/docs/Web/CSS/@media)
