---
title: CSS Painting API
slug: Web/API/CSS_Painting_API
page-type: web-api-overview
tags:
  - API
  - CSS
  - CSS Paint API
  - Houdini
  - Painting
  - Reference
browser-compat: api.PaintWorkletGlobalScope
---
{{DefaultAPISidebar("CSS Painting API")}}

The CSS Painting API — part of the [CSS Houdini](/en-US/docs/Web/Guide/Houdini) umbrella of APIs — allows developers to write JavaScript functions that can draw directly into an element's background, border, or content.

## Concepts and usage

Essentially, the CSS Painting API contains functionality allowing developers to create custom values for {{cssxref('paint()', 'paint()')}}, a CSS [`<image>`](/en-US/docs/Web/CSS/image) function. You can then apply these values to properties like {{cssxref("background-image")}} to set complex custom backgrounds on an element.

For example:

```css
aside {
  background-image: paint(myPaintedImage);
}
```

The API defines {{domxref('PaintWorklet')}}, a {{domxref('worklet')}} that can be used to programmatically generate an image that responds to computed style changes. To find out more about how this is used, consult [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide).

## Interfaces

- {{domxref('PaintWorklet')}}
  - : Programmatically generates an image where a CSS property expects a file. Access this interface through [`CSS.paintWorklet`](/en-US/docs/Web/API/CSS/paintWorklet).
- {{domxref('PaintWorkletGlobalScope')}}
  - : The global execution context of the `paintWorklet`.
- {{domxref('PaintRenderingContext2D')}}
  - : Implements a subset of the [CanvasRenderingContext2D API](/en-US/docs/Web/API/CanvasRenderingContext2D). It has an output bitmap that is the size of the object it is rendering to.
- {{domxref('PaintSize')}}
  - : Returns the read-only values of the output bitmap's width and height.

## Dictionaries

- {{domxref('PaintRenderingContext2DSettings')}}
  - : A dictionary providing a subset of [CanvasRenderingContext2D](/en-US/docs/Web/API/CanvasRenderingContext2D) settings.

## Examples

The following example creates a list of items with a background image that rotates between three different colors and three widths. In a supporting browser you will see something like the image below.

![The width and color of the background image changes based on the custom properties](Guide/boxbg.png)

To achieve this we'll define two custom CSS properties, `--boxColor` and `--widthSubtractor`.

### The paint worklet

In our worklet, we can reference these custom properties.

```js
registerPaint('boxbg', class {
  static get contextOptions() { return {alpha: true}; }

  /*
     use this function to retrieve any custom properties (or regular properties, such as 'height')
     defined for the element, return them in the specified array
  */
  static get inputProperties() { return ['--boxColor', '--widthSubtractor']; }

  paint(ctx, size, props) {
    /*
       ctx -> drawing context
       size -> paintSize: width and height
       props -> properties: get() method
    */

    ctx.fillStyle = props.get('--boxColor');
    ctx.fillRect(0, size.height/3, size.width*0.4 - props.get('--widthSubtractor'), size.height*0.6);
  }
});
```

We used the `inputProperties()` method in the `registerPaint()` class to get the values of two custom properties set on an element that has `boxbg` applied to it and then used those within our `paint()` function. The `inputProperties()` method can return all properties affecting the element, not just custom properties.

### Using the paint worklet

#### HTML

```html
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
    <li>item</li>
</ul>
```

#### CSS

In our CSS, we define the `--boxColor` and `--widthSubtractor` custom properties.

```css
li {
   background-image: paint(boxbg);
   --boxColor: hsla(55, 90%, 60%, 1.0);
}

li:nth-of-type(3n) {
   --boxColor: hsla(155, 90%, 60%, 1.0);
   --widthSubtractor: 20;
}

li:nth-of-type(3n+1) {
   --boxColor: hsla(255, 90%, 60%, 1.0);
   --widthSubtractor: 40;
}
```

#### JavaScript

In our `<script>` we register the worklet:

```js
CSS.paintWorklet.addModule('boxbg.js');
```

#### Result

While you can't play with the worklet's script, you can alter the custom property values in DevTools to change the colors and width of the background image.

{{EmbedGHLiveSample("css-examples/houdini/css_painting_api/example-boxbg.html", '100%', 400)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
