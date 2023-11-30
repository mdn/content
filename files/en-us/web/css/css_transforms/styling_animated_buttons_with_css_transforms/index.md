---
title: Styling animated buttons with CSS transforms
slug: Web/CSS/CSS_transforms/styling_animated_buttons_with_css_transforms
page-type: guide
---

{{CSSRef}}

[`<input>`](/en-US/docs/Web/HTML/Element/input) controls, such as buttons, checkboxes, and color pickers, are staples of frontends that require user input. By applying animated CSS transforms to those elements, you can create beautiful, stylish controls for your website.

Below is a small library of [`<button>` elements](/en-US/docs/Web/HTML/Element/button) styled with CSS transforms, including source code for those controls. You can copy the source directly, or use these controls as inspiration for your own styles. Enjoy!

## "Scale and Skew"

Try hovering over and clicking each of these buttons. Their source code is below.

{{EmbedLiveSample('"Scale and Skew"') }}

- Note the `overflow: clip;` property applied to the `<button>`. This ensures the underlying animated shape does not exceed the visual boundaries of the button.
- The inner `<div>` is positioned absolutely and set with `inset: 0;` to ensure it fills its entire container (the button itself).
- `z-index` is used to ensure the right order of the elements inside the button: text above background shape.

```css
button {
  background: white;
  border: 1px solid rgba(0, 0, 0, 1);
  position: relative;
  padding: 16px 8px;
  cursor: pointer;
  font-weight: bold;
  overflow: clip;
}

button:hover {
  border: 1px solid rgba(0, 0, 0, 0.4);
}

button > span {
  position: relative;
  z-index: 1;
}

button > div {
  z-index: 0;
  position: absolute;
  inset: 0;
  transform: scaleX(0) skewX(0deg);
  transition: transform 0.25s ease-out;
  pointer-events: none;
}

button:active > div {
  transform: scaleX(1.5);
}

button.cyan > div {
  background-color: cyan;
}

button.orange > div {
  background-color: orange;
}

button.plum > div {
  background-color: plum;
}

button.skew45:hover:not(:active) > div {
  transform: scaleX(1) skewX(45deg);
}

button.skew60:hover:not(:active) > div {
  transform: scaleX(1) skewX(60deg);
}

button.skew15:hover:not(:active) > div {
  transform: scaleX(1) skewX(-15deg);
}
```

```html
<button class="cyan skew45">
  <span>"Scale and Skew" | Cyan | 45°</span>
  <div />
</button>
<button class="orange skew60">
  <span>"Scale and Skew" | Orange | 60°</span>
  <div />
</button>
<button class="plum skew15">
  <span>"Scale and Skew" | Plum | -15°</span>
  <div />
</button>
```

## "PointerFollow"

Try hovering over and clicking this button. Its source code is below.

{{EmbedLiveSample('"PointerFollow"') }}

- This example button uses JavaScript and [Mouse Events](/en-US/docs/Web/API/MouseEvent) to modify the transform CSS property of the button's absolutely-positioned background element.

```js
let x = 0;
let y = 0;

const SCALE_OFF = 0.0;
const SCALE_NORMAL = 1.0;
const SCALE_ACTIVE = 10.0;
let scale = SCALE_OFF;

const updateTransform = () => {
  follow1bg.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale})`;
};
updateTransform();

follow1.addEventListener("mousemove", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  updateTransform();
});

follow1.addEventListener("mousedown", (e) => {
  scale = SCALE_ACTIVE;
  updateTransform();
});

follow1.addEventListener("mouseup", (e) => {
  scale = SCALE_NORMAL;
  updateTransform();
});

follow1.addEventListener("mouseenter", (e) => {
  scale = SCALE_NORMAL;
  updateTransform();
});

follow1.addEventListener("mouseleave", (e) => {
  scale = SCALE_OFF;
  updateTransform();
});
```

```css
button {
  background: white;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  position: relative;
  padding: 32px 48px;
  cursor: pointer;
  font-weight: bold;
  overflow: clip;
}

button:hover {
  border: 1px solid rgba(0, 0, 0, 0.4);
}

button > span {
  position: relative;
  z-index: 1;
  pointer-events: none;
}

button > div {
  z-index: 0;
  position: absolute;
  top: -16px;
  left: -16px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  filter: blur(8px);
  background-color: cyan;
  transition: transform 0.1s ease-out;
  pointer-events: none;
}
```

```html
<button id="follow1">
  <span>"PointerFollow" Button</span>
  <div id="follow1bg" />
</button>
```

## "Shadowed"

Try hovering over and clicking these buttons. Their source code is below.

{{EmbedLiveSample('"Shadowed"') }}

- When dynamically translating interactive elements, make sure the element's changing state does not negatively affect user experience. For example, the transform effects applied to the second button above make clicking it very challenging!

```css
button {
  background: white;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 4px;
  padding: 32px 48px;
  cursor: pointer;
  font-weight: bold;
  transform: translate(1px, 1px);
  transition:
    transform 0.05s linear,
    box-shadow 0.05s linear;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.8);
  margin: 8px;
}

button:hover {
  border: 1px solid rgba(0, 0, 0, 0.4);
  transform: translate(0px, 0px);
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.7);
}

button:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.9);
}

button.avoid {
  background: rgba(255, 0, 0, 0.3);
  padding: 8px 12px;
  transform: translate(1px, 1px);
  box-shadow: 32px 32px 32px 1px rgba(0, 0, 0, 0.5);
}
button.avoid:hover {
  transform: translate(32px, 32px);
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.8);
}
button.avoid:active {
  transform: translate(33px, 33px);
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.9);
}
```

```html
<button>"Shadowed" Button</button>
<button class="avoid">❌ "Shadowed" Button</button>
```

## See also
