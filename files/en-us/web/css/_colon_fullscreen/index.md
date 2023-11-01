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

In this example, the color of a button is changed depending on whether or not it's parent div is in fullscreen mode. This is done without needing to specifically apply style changes using JavaScript.

### HTML

The page's HTML looks like this:

```html
<div style="background-color: lightyellow">
  <h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

  <p>
    This demo uses the <code>:fullscreen</code> pseudo-class to automatically
    change the style of a button used to toggle fullscreen mode on and off,
    entirely using CSS.
  </p>

  <button id="fs-toggle">Toggle Fullscreen</button>
</div>
```

The {{HTMLElement("button")}} with the ID `"fs-toggle"` will change between light pink and light green depending on whether or not the parent div is in fullscreen mode.

### Javascript

For this example, we need the button click to toggle parent div to and from fullscreen mode:

```js
document.querySelector('#fs-toggle').addEventListener('click', function (event) {
    if (document.fullscreenElement) {
        // If there is a fullscreen element, exit full screen.
        document.exitFullscreen();
        return;
    }
    // Make the parent div fullscreen.
    event.target.parentElement.requestFullscreen();
});f
```

### CSS

The magic happens in the CSS. There are two rules here. The first establishes the background color of the "Toggle Fullscreen Mode" button when the element is not in a fullscreen state. The key is the use of the `:not(:fullscreen)`, which looks for the element to not have the `:fullscreen` pseudo-class applied to it.

```css
div:not(:fullscreen) #fs-toggle {
  background-color: lightgreen;
}
```

When the parent div _is_ in fullscreen mode, the following CSS applies instead, setting the background color to light pink.

```css
div:fullscreen #fs-toggle {
  background-color: lightpink;
}
```

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
