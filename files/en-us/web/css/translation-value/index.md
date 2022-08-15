---
title: <translation-value>
slug: Web/CSS/translation-value
tags:
  - CSS
  - CSS Data Type
  - CSS Transforms
  - Data Type
  - Reference
browser-compat: css.types.transform-function
---
{{CSSRef}}

The **`<translation-value>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) is used in the arguments for certain {{cssxref("transform")}} functions, including [`translate()`](/en-US/docs/Web/CSS/transform-function/translate), [`translateX()`](/en-US/docs/Web/CSS/transform-function/translateX), [`translateY()`](/en-US/docs/Web/CSS/transform-function/translateY), and [`translate3d()`](/en-US/docs/Web/CSS/transform-function/translate3d).

## Syntax

The `<translation-value>` data type can be either a {{Cssxref("&lt;length&gt;")}} value or a {{Cssxref("&lt;percentage&gt;")}} value.

## Examples

### Translation function comparison

The following example provides a 3D cube created from DOM elements and transforms, and a select menu allowing you to choose different translation-related transform functions to transform the cube with, so you can compare the effects of the different types.

Choose one, and the transform is applied to the cube; after 2 seconds, the cube reverts back to its starting state. The cube's starting state is slightly rotated using `transform3d()`, to allow you to see the effect of all the transforms.

#### HTML

```html
<main>
  <section id="example-element">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
  </section>

  <div class="select-form">
    <label for="transfunction">Select a transform function</label>
    <select id="transfunction">
      <option selected>Choose a function</option>
      <option>translate(100px, 100px)</option>
      <option>translateX(100px)</option>
      <option>translateY(100px)</option>
      <option>translateZ(100px)</option>
      <option>translate3d(50px, 50px, 50px)</option>
    </select>
  </div>
</main>
```

#### CSS

```css
main {
  width: 400px;
  height: 200px;
  padding: 50px;
  background-image: linear-gradient(135deg, white, cyan, white);
}

#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
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

.select-form {
  margin-top: 50px;
}
```

#### JavaScript

```js
const selectElem = document.querySelector('select');
const example = document.querySelector('#example-element');

selectElem.addEventListener('change', () => {
  if (selectElem.value === 'Choose a function') {
    return;
  } else {
    example.style.transform = `rotate3d(1, 1, 1, 30deg) ${selectElem.value}`;
    setTimeout(() => {
      example.style.transform = 'rotate3d(1, 1, 1, 30deg)';
    }, 2000)
  }
})
```

#### Result

{{EmbedLiveSample('Translation_function_comparison', '100%', 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("transform")}}
