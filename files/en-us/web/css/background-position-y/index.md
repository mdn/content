---
title: background-position-y
slug: Web/CSS/background-position-y
page-type: css-property
browser-compat: css.properties.background-position-y
---

{{CSSRef}}

The **`background-position-y`** [CSS](/en-US/docs/Web/CSS) property sets the initial vertical position for each background image. The position is relative to the position layer set by {{cssxref("background-origin")}}.

{{EmbedInteractiveExample("pages/css/background-position-y.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

The value of this property is overridden by any declaration of the {{cssxref("background")}} or {{cssxref("background-position")}} shorthand properties applied to the element after it.

## Syntax

```css
/* Keyword values */
background-position-y: top;
background-position-y: center;
background-position-y: bottom;

/* <percentage> values */
background-position-y: 25%;

/* <length> values */
background-position-y: 0px;
background-position-y: 1cm;
background-position-y: 8em;

/* Side-relative values */
background-position-y: bottom 3px;
background-position-y: bottom 10%;

/* Multiple values */
background-position-y: 0px, center;

/* Global values */
background-position-y: inherit;
background-position-y: initial;
background-position-y: revert;
background-position-y: revert-layer;
background-position-y: unset;
```

The `background-position-y` property is specified as one or more values, separated by commas.

### Values

- `top`
  - : Aligns the top edge of the background image with the top edge of the background position layer.
- `center`
  - : Aligns the vertical center of the background image with the vertical center of the background position layer.
- `bottom`
  - : Aligns the bottom edge of the background image with the bottom edge of the background position layer.
- {{cssxref("&lt;length&gt;")}}
  - : The offset of the given background image's horizontal edge from the corresponding background position layer's top horizontal edge. (Some browsers allow assigning the bottom edge for offset).
- {{cssxref("&lt;percentage&gt;")}}
  - : The offset of the given background image's vertical position relative to the container. A value of 0% means that the top edge of the background image is aligned with the top edge of the container, and a value of 100% means that the _bottom_ edge of the background image is aligned with the _bottom_ edge of the container, thus a value of 50% vertically centers the background image.

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
  background-image: url(https://mdn.dev/archives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/firefox.png);
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
- {{cssxref("background-position-x")}}
- {{cssxref("background-position-inline")}}
- {{cssxref("background-position-block")}}
- [Using multiple backgrounds](/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
