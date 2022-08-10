---
title: '::-webkit-scrollbar'
slug: Web/CSS/::-webkit-scrollbar
tags:
  - '::-webkit-scrollbar'
  - CSS
  - CSS Selectors
  - CSS:WebKit Extensions
  - Non-standard
  - Pseudo-element
  - Reference
  - Selector
browser-compat:
  - css.selectors.-webkit-scrollbar
  - css.selectors.-webkit-scrollbar-button
  - css.selectors.-webkit-scrollbar-thumb
  - css.selectors.-webkit-scrollbar-track
  - css.selectors.-webkit-scrollbar-track-piece
  - css.selectors.-webkit-scrollbar-corner
  - css.selectors.-webkit-resizer
---
{{CSSRef}}{{Non-standard_Header}}

The `::-webkit-scrollbar` CSS pseudo-element affects the style of an element's scrollbar when it has `overflow:scroll;` set.

> **Note:** If `overflow:scroll;` is not set, no scrollbar is displayed.

> **Note:** `::-webkit-scrollbar` is only available in [Blink](https://www.chromium.org/blink/)- and [WebKit](https://webkit.org)-based browsers (e.g., Chrome, Edge, Opera, Safari, all browsers on iOS, and [others](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)). A standardized method of styling scrollbars is available with {{cssxref("scrollbar-color")}} and {{cssxref("scrollbar-width")}}.

## CSS Scrollbar Selectors

You can use the following pseudo-elements to customize various parts of the scrollbar for WebKit browsers:

- `::-webkit-scrollbar` — the entire scrollbar.
- `::-webkit-scrollbar-button` — the buttons on the scrollbar (arrows pointing upwards and downwards that scroll one line at a time).
- `::-webkit-scrollbar-thumb` — the draggable scrolling handle.
- `::-webkit-scrollbar-track` — the track (progress bar) of the scrollbar, where there is a gray bar on top of a white bar.
- `::-webkit-scrollbar-track-piece` — the part of the track (progress bar) not covered by the handle.
- `::-webkit-scrollbar-corner` — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. This is often the bottom-right corner of the browser window.
- `::-webkit-resizer` — the draggable resizing handle that appears at the bottom corner of some elements.

## Examples

### CSS

```css
.visible-scrollbar, .invisible-scrollbar, .mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
}

.invisible-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Demonstrate a "mostly customized" scrollbar
 * (won't be visible otherwise if width/height is specified) */
.mostly-customized-scrollbar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  background-color: #aaa; /* or add it to the track */
}

/* Add a thumb */
.mostly-customized-scrollbar::-webkit-scrollbar-thumb {
  background: #000;
}
```

### HTML

```html
<div class="visible-scrollbar">
  Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor.
  Proin at nulla elementum, consectetur ex eget, commodo ante.
  Sed eros mi, bibendum ut dignissim et, maximus eget nibh. Phasellus
  blandit quam turpis, at mollis velit pretium ut. Nunc consequat
  efficitur ultrices. Nullam hendrerit posuere est. Nulla libero
  sapien, egestas ac felis porta, cursus ultricies quam. Vestibulum
  tincidunt accumsan sapien, a fringilla dui semper in. Vivamus
  consectetur ipsum a ornare blandit. Aenean tempus at lorem sit
  amet faucibus. Curabitur nibh justo, faucibus sed velit cursus,
  mattis cursus dolor. Pellentesque id pretium est. Quisque
  convallis nisi a diam malesuada mollis. Aliquam at enim ligula.
</div>

<div class="invisible-scrollbar">
Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
</div>

<div class="mostly-customized-scrollbar">
Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br>
And pretty tall<br>
thing with weird scrollbars.<br>
Who thought scrollbars could be made weeeeird?
</div>
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- WebKit blog on [Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/)
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
