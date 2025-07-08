---
title: :active-view-transition
slug: Web/CSS/:active-view-transition
page-type: css-pseudo-class
browser-compat: css.selectors.active-view-transition
---

{{CSSRef}}

The **`:active-view-transition`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches when a view transition is actually taking place and ceases to match once the transition has completed.

This pseudo-class is useful for styling elements while a transition is happening.

## Syntax

```css
:root:active-view-transition ... {
  /* ... */
}
```

## Examples

### Showing View Transition is running

This example extends on the [Color Change SPA View Transition](/en-US/docs/Web/API/Document/startViewTransition#color_change_spa_view_transition) on the `startViewTransition` page.

#### HTML

```html
<main>
  <section class="color">
    <h2>Color is changing!</h2>
  </section>
  <button id="change-color">Change Color</button>
</main>
```

#### CSS

The heading is set not to display and this is over-written when the view transition starts using the `:active-view-transition` pseudo-class

```css hidden
html {
  --bg: indigo;
}
main {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
section {
  background-color: var(--bg);
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::view-transition-group(root) {
  animation-duration: 2s;
}
```

```css
h2 {
  display: none;
  color: white;
}
:root:active-view-transition h2 {
  display: block;
}
```

```js hidden
const colors = [
  "darkred",
  "darkslateblue",
  "darkgreen"
]
const colBlock = document.querySelector(".color")
let count = 0;
const updateColour = () => {
  colBlock.style = `--bg: ${colors[count]}`
  count = count !== colors.length-1 ? ++count : 0
}
const changeColor = () => {
  if (!document.startViewTransition) {
    updateColour();
    return;
  }
  const transition = document.startViewTransition(() => {
    updateColour();
  });
}
const changeColorButton = document.querySelector("#change-color");
changeColorButton.addEventListener("click", changeColor)
changeColorButton.addEventListener("keypress", changeColor)
```

#### Result

{{EmbedLiveSample('showing_view_transition_is_running', '100%', '120')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSXRef(":active-view-transition-type", ":active-view-transition-type()")}} pseudo-class
