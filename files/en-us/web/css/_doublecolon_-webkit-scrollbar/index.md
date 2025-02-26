---
title: ::-webkit-scrollbar
slug: Web/CSS/::-webkit-scrollbar
page-type: css-pseudo-element
status:
  - non-standard
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

The `::-webkit-scrollbar` CSS pseudo-element affects the style of an element's scrollbar when it has scrollable overflow.

The {{cssxref("scrollbar-color")}} and {{cssxref("scrollbar-width")}} standard properties may be used as alternatives for browsers that do not support this pseudo-element and the related `::-webkit-scrollbar-*` pseudo-elements (see [Browser compatibility](#browser_compatibility)).

> [!NOTE]
> If {{cssxref("scrollbar-color")}} and {{cssxref("scrollbar-width")}} are supported and have any value other than `auto` set, they will override `::-webkit-scrollbar-*` styling.
> See [Adding a fallback for scrollbar styles](#adding_a_fallback_for_scrollbar_styles) for more details.

## CSS Scrollbar Selectors

You can use the following pseudo-elements to customize various parts of the scrollbar for WebKit browsers:

- `::-webkit-scrollbar` — the entire scrollbar.
- `::-webkit-scrollbar-button` — the buttons on the scrollbar (arrows pointing upwards and downwards that scroll one line at a time).
- `::-webkit-scrollbar:horizontal` — the horizontal scrollbar.
- `::-webkit-scrollbar-thumb` — the draggable scrolling handle.
- `::-webkit-scrollbar-track` — the track (progress bar) of the scrollbar, where there is a gray bar on top of a white bar.
- `::-webkit-scrollbar-track-piece` — the part of the track (progress bar) not covered by the handle.
- `::-webkit-scrollbar:vertical` — the vertical scrollbar.
- `::-webkit-scrollbar-corner` — the bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet. This is often the bottom-right corner of the browser window.
- `::-webkit-resizer` — the draggable resizing handle that appears at the bottom corner of some elements.

## Accessibility

Authors should avoid styling scrollbars, as changing the appearance of scrollbars away from the default [breaks external consistency](https://inclusivedesignprinciples.info/#be-consistent) which negatively impacts usability. If styling scrollbars, ensure there is enough color contrast and touch targets are at least 44px wide and tall. See [Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html) and [Understanding WCAG 2.1 : Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html).

## Examples

### Styling scrollbars using `-webkit-scrollbar`

#### CSS

```css
.visible-scrollbar,
.invisible-scrollbar,
.mostly-customized-scrollbar {
  display: block;
  width: 10em;
  overflow: auto;
  height: 2em;
  padding: 1em;
  margin: 1em auto;
  outline: 2px dashed cornflowerblue;
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

#### HTML

```html
<div class="visible-scrollbar">
  <h3>Visible scrollbar</h3>
  <p>
    Etiam sagittis sem sed lacus laoreet, eu fermentum eros auctor. Proin at
    nulla elementum, consectetur ex eget, commodo ante. Sed eros mi, bibendum ut
    dignissim et, maximus eget nibh. Phasellus blandit quam turpis, at mollis
    velit pretium ut. Nunc consequat efficitur ultrices. Nullam hendrerit
    posuere est. Nulla libero sapien, egestas ac felis porta, cursus ultricies
    quam. Vestibulum tincidunt accumsan sapien, a fringilla dui semper in.
    Vivamus consectetur ipsum a ornare blandit. Aenean tempus at lorem sit amet
    faucibus. Curabitur nibh justo, faucibus sed velit cursus, mattis cursus
    dolor. Pellentesque id pretium est. Quisque convallis nisi a diam malesuada
    mollis. Aliquam at enim ligula.
  </p>
</div>

<div class="invisible-scrollbar">
  <h3>Invisible scrollbar</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword
  </p>
</div>

<div class="mostly-customized-scrollbar">
  <h3>Custom scrollbar</h3>
  <p>
    Thisisaveeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerylongword<br />
    And pretty tall<br />
    thing with weird scrollbars.<br />
    Who thought scrollbars could be made weird?
  </p>
</div>
```

#### Result

{{EmbedLiveSample("styling_scrollbars_using_-webkit-scrollbar", 600, 300)}}

### Adding a fallback for scrollbar styles

You can use a {{cssxref("@supports")}} at-rule to detect if a browser supports the standard {{cssxref("scrollbar-color")}} and {{cssxref("scrollbar-width")}} properties, and otherwise use a fallback with `::-webkit-scrollbar-*` pseudo-elements.
The following example shows how to apply colors to scrollbars using {{cssxref("scrollbar-color")}} if supported and `::-webkit-scrollbar-*` pseudo-elements if not.

#### HTML

```html
<div class="scroll-box">
  <h1>Yoshi</h1>
  <p>
    Yoshi is a fictional dinosaur who appears in video games published by
    Nintendo. Yoshi debuted in Super Mario World (1990) on the SNES as Mario and
    Luigi's sidekick.
  </p>
  <p>
    Throughout the mainline Super Mario series, Yoshi typically serves as
    Mario's trusted steed.
  </p>
  <p>
    With a gluttonous appetite, Yoshi can gobble enemies with his long tongue,
    and lay eggs that doubly function as projectiles.
  </p>
</div>
```

#### CSS

```css hidden
.scroll-box {
  overflow: auto;
  width: 20rem;
  height: 5rem;
  border: 2px solid cornflowerblue;
  margin: 2rem auto;
  font-family: monospace;
}
```

```css
/* For browsers that support `scrollbar-*` properties */
@supports (scrollbar-color: auto) {
  .scroll-box {
    scrollbar-color: aquamarine cornflowerblue;
  }
}

/* Otherwise, use `::-webkit-scrollbar-*` pseudo-elements */
@supports selector(::-webkit-scrollbar) {
  .scroll-box::-webkit-scrollbar {
    background: aquamarine;
  }
  .scroll-box::-webkit-scrollbar-thumb {
    background: cornflowerblue;
  }
}
```

#### Result

In the example below, you can scroll the bordered box vertically to see the effect of styling the scrollbar.

{{EmbedLiveSample("adding_a_fallback_to_standard_scrollbar_style_properties")}}

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}
- [Don't use custom scrollbars](https://ericwbailey.website/published/dont-use-custom-css-scrollbars/) (2023)
- [Scrollbar styling](https://developer.chrome.com/docs/css-ui/scrollbar-styling) on developer.chrome.com (2024)
- [Styling Scrollbars](https://webkit.org/blog/363/styling-scrollbars/) on WebKit.org (2009)
