---
title: "::backdrop"
slug: Web/CSS/::backdrop
page-type: css-pseudo-element
browser-compat: css.selectors.backdrop
---

{{CSSRef}}

The **`::backdrop`** [CSS](/en-US/docs/Web/CSS) [pseudo-element](/en-US/docs/Web/CSS/Pseudo-elements) is a box the size of the {{Glossary("viewport")}}, which is rendered immediately beneath any element being presented in the {{glossary("top layer")}}.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-backdrop.html", "tabbed-shorter")}}

## Syntax

```css
::backdrop {
  /* ... */
}
```

## Description

Backdrops appear in the following instances:

- Elements which have been placed in fullscreen mode using the [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API) {{domxref("Element.requestFullscreen()")}} method.
- {{HTMLElement("dialog")}} elements that have been shown in the top layer via a {{domxref("HTMLDialogElement.showModal()")}} call.
- {{domxref("Popover API", "Popover", "", "nocode")}} elements that have been shown in the top layer via a {{domxref("HTMLElement.showPopover()")}} call.

When multiple elements have been placed into the top layer, each one has its own `::backdrop` pseudo-element.

```css
/* Backdrop is only displayed when dialog is opened with dialog.showModal() */
dialog::backdrop {
  background: rgb(255 0 0 / 25%);
}
```

Elements are placed in a last-in/first out (LIFO) stack in the top layer. The `::backdrop` pseudo-element makes it possible to obscure, style, or completely hide everything located below a top layer element.

`::backdrop` neither inherits from nor is inherited by any other elements. No restrictions are made on what properties apply to this pseudo-element.

## Examples

### Styling the backdrop for fullscreen video

In this example, we style a video backdrop, so when the video is shifted to fullscreen mode, the background is a grey-blue color rather than the black it defaults to in most browsers.

#### HTML

We include a video, so we have an element that we can make full screen:

```html
<video
  controls
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Sorry, your browser doesn't support embedded videos. Time to upgrade!
</video>
```

#### CSS

We style the `::backdrop`, setting the {{cssxref("background-color")}} to a shade of blue:

```css
video::backdrop {
  background-color: #448;
}
```

#### JavaScript

```js
document.addEventListener("keypress", handleKeypress, false);

function handleKeypress(event) {
  if (event.keyCode === 13) {
    toggleFullscreen();
  }
}

function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem
      .requestFullscreen()
      .then(() => {})
      .catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`,
        );
      });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

#### Results

{{EmbedLiveSample(' Styling the backdrop for fullscreen video', 600, 400)}}

Try making the video go to fullscreen to see the change to the backdrop color.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref(":fullscreen")}} pseudo-class
- {{HTMLElement("dialog")}} HTML element
- [Fullscreen API](/en-US/docs/Web/API/Fullscreen_API)
- [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) HTML global attribute
- [Popover API](/en-US/docs/Web/API/Popover_API)
