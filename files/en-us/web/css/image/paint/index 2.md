---
title: paint()
slug: Web/CSS/image/paint()
tags:
  - CSS
  - CSS Function
  - CSS4-images
  - Function
  - Houdini
  - Reference
  - Web
browser-compat: css.types.image.paint
---
{{CSSRef}}{{SeeCompatTable}}

The **`paint()`** [CSS](/en-US/docs/Web/CSS) [function](/en-US/docs/Web/CSS/CSS_Functions) defines an {{cssxref("&lt;image&gt;")}} value generated with a PaintWorklet.

## Syntax

```css
paint(workletName, parameters)
```

where:

- _workletName_
  - : The name of the registered worklet.
- _parameters_
  - : Optional additional parameters to pass to the paintWorklet

## Examples

### Basic usage example

You can pass additional arguments via the CSS paint() function. In this example, we passed two arguments: whether the background-image on a group of list items is filled or just has a stroke outline, and the width of that outline:

```html hidden
<ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
    <li>item 5</li>
    <li>item 6</li>
    <li>item 7</li>
    <li>item 8</li>
    <li>item 9</li>
    <li>item 10</li>
    <li>item 11</li>
    <li>item 12</li>
    <li>item 13</li>
    <li>item 14</li>
    <li>item 15</li>
    <li>item 16</li>
    <li>item 17</li>
    <li>item 18</li>
    <li>item 19</li>
    <li>item 20</li>
</ul>
```

```js hidden
  CSS.paintWorklet.addModule('https://mdn.github.io/houdini-examples/cssPaint/intro/worklets/hilite.js');
```

```css
li {
   --boxColor: hsla(55, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 2px);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, filled,  3px);
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   background-image: paint(hollowHighlights, stroke, 1px);
}
```

We've included a custom property in the selector block defining a boxColor. Custom properties are accessible to the PaintWorklet.

{{EmbedLiveSample("Examples", 300, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('PaintWorklet')}}
- {{domxref('CSS Painting API')}}
- [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide)
- {{cssxref("&lt;image&gt;")}}
- {{domxref("canvas")}}
