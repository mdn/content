---
title: background-position-x
slug: Web/CSS/background-position-x
tags:
  - CSS
  - CSS Background
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.background-position-x
---
{{CSSRef}}

The **`background-position-x`** [CSS](/en-US/docs/Web/CSS) property sets the initial horizontal position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.

{{EmbedInteractiveExample("pages/css/background-position-x.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

The value of this property is overridden by any declaration of the {{cssxref("background")}} or {{cssxref("background-position")}} shorthand properties applied to the element after it.

## Syntax

```css
/* Keyword values */
background-position-x: left;
background-position-x: center;
background-position-x: right;

/* <percentage> values */
background-position-x: 25%;

/* <length> values */
background-position-x: 0px;
background-position-x: 1cm;
background-position-x: 8em;

/* Side-relative values */
background-position-x: right 3px;
background-position-x: left 25%;

/* Multiple values */
background-position-x: 0px, center;

/* Global values */
background-position-x: inherit;
background-position-x: initial;
background-position-x: revert;
background-position-x: revert-layer;
background-position-x: unset;
```

The `background-position-x` property is specified as one or more values, separated by commas.

### Values

- `left`
  - : Aligns the left edge of the background image with the left edge of the background position layer.
- `center`
  - : Aligns the center of the background image with the center of the background position layer.
- `right`
  - : Aligns the right edge of the background image with the right edge of the background position layer.
- {{cssxref("&lt;length&gt;")}}
  - : The offset of the given background image's left vertical edge from the background position layer's left vertical edge. (Some browsers allow assigning the right edge for offset).
- {{cssxref("&lt;percentage&gt;")}}
  - : The offset of the given background image's horizontal position relative to the container. A value of 0% means that the left edge of the background image is aligned with the left edge of the container, and a value of 100% means that the _right_ edge of the background image is aligned with the _right_ edge of the container, thus a value of 50% horizontally centers the background image.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

The following example shows a simple background image implementation, with background-position-x and background-position-y used to define the image's horizontal and vertical positions separately.

#### HTML

```html
<div></div>
```

#### CSS

```css
div {
  width: 300px;
  height: 300px;
  background-color: skyblue;
  background-image: url(https://media.prod.mdn.mozit.cloud/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom 10px;
}
```

#### Result

{{EmbedLiveSample('Basic_example', '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("background-position")}}
- {{cssxref("background-position-y")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
