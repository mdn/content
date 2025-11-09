---
title: shape
slug: Web/CSS/Reference/At-rules/@media/shape
page-type: css-media-feature
status:
  - experimental
spec-urls: https://drafts.csswg.org/css-round-display/#shape-media-feature
sidebar: cssref
---

{{SeeCompatTable}}

The `shape` [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Reference/At-rules/@media#media_features) can be used to test the shape of the device to distinguish rectangular and round displays.

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
  <link
    media="screen and (shape: rect)"
    rel="stylesheet"
    href="rectangle.css" />
  <link media="screen and (shape: round)" rel="stylesheet" href="round.css" />
</head>
```

## Specifications

{{Specifications}}

## Browser compatibility

Currently, no browsers support this feature.

## See also

- [Using Media Queries](/en-US/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/en-US/docs/Web/CSS/Reference/At-rules/@media)
- [CSS round display](/en-US/docs/Web/CSS/Guides/Round_display) module
- [Using environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables/Using)
- [CSS environment variables](/en-US/docs/Web/CSS/Guides/Environment_variables) module
