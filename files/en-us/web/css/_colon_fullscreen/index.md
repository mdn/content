---
title: ':fullscreen'
slug: Web/CSS/:fullscreen
tags:
  - CSS
  - Fullscreen
  - Fullscreen API
  - Pseudo-class
  - Reference
  - Selector
  - fullscreen
  - screen
browser-compat: css.selectors.fullscreen
---
{{CSSRef}}

The **`:fullscreen`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches every element which is currently in fullscreen mode. If multiple elements have been put into fullscreen mode, this selects them all.

## Syntax

```
:fullscreen
```

## Usage notes

The `:fullscreen` pseudo-class lets you configure your stylesheets to automatically adjust the size, style, or layout of content when elements switch back and forth between fullscreen and traditional presentations.

## Examples

In this example, the color of a button is changed depending on whether or not the document is in fullscreen mode. This is done without needing to specifically apply style changes using JavaScript.

### HTML

The page's HTML looks like this:

```html
<h1>MDN Web Docs Demo: :fullscreen pseudo-class</h1>

<p>This demo uses the <code>:fullscreen</code> pseudo-class to automatically
  change the style of a button used to toggle fullscreen mode on and off,
  entirely using CSS.</p>

<button id="fs-toggle">Toggle Fullscreen</button>
```

The {{HTMLElement("button")}} with the ID `"fs-toggle"` will change between pale red and pale green depending on whether or not the document is in fullscreen mode.

### CSS

The magic happens in the CSS. There are two rules here. The first establishes the background color of the "Toggle Fullscreen Mode" button when the element is not in a fullscreen state. The key is the use of the `:not(:fullscreen)`, which looks for the element to not have the `:fullscreen` pseudo-class applied to it.

```css
#fs-toggle:not(:fullscreen) {
  background-color: #afa;
}
```

When the document _is_ in fullscreen mode, the following CSS applies instead, setting the background color to a pale shade of red.

```css
#fs-toggle:fullscreen {
  background-color: #faa;
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
- {{HTMLAttrXRef("allowfullscreen", "iframe")}} attribute
