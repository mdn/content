---
title: ":fullscreen"
slug: Web/CSS/:fullscreen
page-type: css-pseudo-class
browser-compat: css.selectors.fullscreen
---

{{CSSRef}}

The **`:fullscreen`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches every element which is currently in fullscreen mode. If multiple elements have been put into fullscreen mode, this selects them all.

## Syntax

```css
:fullscreen {
  /* ... */
}
```

## Usage notes

The `:fullscreen` pseudo-class lets you configure your stylesheets to automatically adjust the size, style, or layout of content when elements switch back and forth between fullscreen and traditional presentations.

## Examples

### Styling a Fullscreen Element

This example styles an element in different background color depending on whether or not it is in fullscreen state.

```html
<div class="element">
  <h1>MDN :fullscreen pseudo-class demo</h1>

  <p>
    This demo uses the <code>:fullscreen</code> pseudo-class to automatically
    change the background color of the <code>.element</code> div.
  </p>

  <p>
    Normally, the background is light yellow. In fullscreen mode, the background
    is light pink.
  </p>

  <button class="toggle">Toggle Fullscreen</button>
</div>
```

The `:fullscreen` pseudo-class is used to override the background color of the `<div>` when it is in fullscreen mode.

```css
.element {
  background-color: lightyellow;
}

.element:fullscreen {
  background-color: lightpink;
}
```

The following JavaScript provides an event handler function that toggles fullscreen when the button is clicked.

```js
document.querySelector(".toggle").addEventListener("click", function (event) {
  if (document.fullscreenElement) {
    // If there is a fullscreen element, exit full screen.
    document.exitFullscreen();
    return;
  }
  // Make the .element div fullscreen.
  document.querySelector(".element").requestFullscreen();
});
```

#### Result

{{EmbedLiveSample("Styling a Fullscreen Element", "100%", 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [Guide to the Fullscreen API](/en-US/docs/Web/API/Fullscreen_API/Guide)
- {{cssxref(":not")}}
- {{cssxref("::backdrop")}}
- DOM API: {{ domxref("Element.requestFullscreen()") }}, {{ domxref("Document.exitFullscreen()") }}, {{ domxref("Document.fullscreenElement") }}
- [`allowfullscreen`](/en-US/docs/Web/HTML/Element/iframe#allowfullscreen) attribute
