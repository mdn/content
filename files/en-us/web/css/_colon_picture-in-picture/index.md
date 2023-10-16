---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
page-type: css-pseudo-class
browser-compat: css.selectors.picture-in-picture
---

{{CSSRef}}

The **`:picture-in-picture`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches the element which is currently in picture-in-picture mode.

## Syntax

```css
:picture-in-picture {
  /* ... */
}
```

## Usage notes

The `:picture-in-picture` pseudo-class lets you configure your stylesheets to automatically adjust the size, style, or layout of content when a video switches back and forth between picture-in-picture and traditional presentation modes.

## Examples

In this example, a video has a box shadow when it is displayed in the floating window.

### HTML

The page's HTML looks like this:

```html
<h1>MDN Web Docs Demo: :picture-in-picture pseudo-class</h1>

<p>
  This demo uses the <code>:picture-in-picture</code> pseudo-class to
  automatically change the style of a video entirely using CSS.
</p>

<video id="pip-video"></video>
```

The {{HTMLElement("video")}} with the ID `"pip-video"` will change between having a red box shadow or not, depending on whether or not it is displayed in the picture-in-picture floating window.

### CSS

The magic happens in the CSS.

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Picture-in-picture API](/en-US/docs/Web/API/Picture-in-Picture_API)
- {{DOMxRef("HTMLVideoElement.requestPictureInPicture()")}}
- {{DOMxRef("HTMLVideoElement.disablePictureInPicture")}}
- {{DOMxRef("Document.pictureInPictureEnabled")}}
- {{DOMxRef("Document.exitPictureInPicture()")}}
- {{DOMxRef("Document.pictureInPictureElement")}}
