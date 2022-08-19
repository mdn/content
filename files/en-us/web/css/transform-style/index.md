---
title: transform-style
slug: Web/CSS/transform-style
tags:
  - CSS
  - CSS Property
  - CSS Transforms
  - Reference
  - recipe:css-property
browser-compat: css.properties.transform-style
---
{{CSSRef}}

The **`transform-style`** [CSS](/en-US/docs/Web/CSS) property sets whether children of an element are positioned in the 3D space or are flattened in the plane of the element.

{{EmbedInteractiveExample("pages/css/transform-style.html")}}

If flattened, the element's children will not exist on their own in the 3D-space.

As this property is not inherited, it must be set for all non-leaf descendants of the element.

## Syntax

```css
/* Keyword values */
transform-style: flat;
transform-style: preserve-3d;

/* Global values */
transform-style: inherit;
transform-style: initial;
transform-style: revert;
transform-style: revert-layer;
transform-style: unset;
```

### Values

- `flat`
  - : Indicates that the children of the element are lying in the plane of the element itself.
- `preserve-3d`
  - : Indicates that the children of the element should be positioned in the 3D-space.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Transform style demonstration

In this example we have a 3D cube created using transforms. The parent container of the cube faces has `transform-style: preserve-3d` set on it by default, so it is transformed in the 3D space and you can see it as intended.

We also provide a checkbox allowing you to toggle between this, and `transform-style: flat`. In this alternative state, the cube faces are all flattened onto the plane of their parent, and you might not be able to see them at all, depending on the browser you are using.

#### HTML

```html
<section id="example-element">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>

<div class="checkbox">
  <label for="preserve"><code>preserve-3d</code></label>
  <input type="checkbox" id="preserve" checked>
</div>
```

#### CSS

```css
#example-element {
  margin: 50px;
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transform: rotate3d(1, 1, 1, 30deg);
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: #fff;
}

.front {
    background: rgba(90,90,90,.7);
    transform: translateZ(50px);
}

.back {
    background: rgba(0,210,0,.7);
    transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(210,0,0,.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0,0,210,.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(210,210,0,.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(210,0,210,.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### JavaScript

```js
const cube = document.getElementById('example-element');
const checkbox = document.getElementById('preserve');

checkbox.addEventListener('change', () => {
  cube.style.transformStyle = checkbox.checked ? 'preserve-3d' : 'flat';
})
```

#### Result

{{EmbedLiveSample('Transform_style_demonstration', '100%', 260)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transforms](/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
