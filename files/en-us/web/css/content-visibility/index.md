---
title: content-visibility
slug: Web/CSS/content-visibility
tags:
  - CSS
  - CSS Containment
  - CSS Property
  - Layout
  - Paint
  - Reference
  - Style
  - Visibility
  - Web
browser-compat: css.properties.content-visibility
---
{{CSSRef}}

The **`content-visibility`** [CSS](/en-US/docs/Web/CSS) property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. Basically it enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

## Syntax

```css
/* Keyword values */
content-visibility: visible;
content-visibility: hidden;
content-visibility: auto;

/* Global values */
content-visibility: inherit;
content-visibility: initial;
content-visibility: revert;
content-visibility: revert-layer;
content-visibility: unset;
```

### Values

- `visible`
  - : No effect. The element's contents are laid out and rendered as normal.
- `hidden`
  - : The element skips its contents. The skipped contents must not be accessible to user-agent features, such as find-in-page, tab-order navigation, etc., nor be selectable or focusable. This is similar to giving the contents `display: none`.
- `auto`
  - : The element turns on layout containment, style containment, and paint containment. If the element is not relevant to the user, it also skips its contents. Unlike hidden, the skipped contents must still be available as normal to user-agent features such as find-in-page, tab order navigation, etc., and must be focusable and selectable as normal.

## Formal definition

{{cssinfo}}

## Accessibility

Prior to Chromium 90, offscreen headers and landmark roles within `content-visibility: auto` were not exposed to a11y tools. As of Chromium 90, this has been corrected, and off-screen content within a `content-visibility: auto` element remains in the document object model and the accessibility tree. This allows improving page performance with `content-visibility: auto` without negatively impacting accessibility.

However, one caveat to keep in mind is that, since styles for off-screen content are not rendered, elements intentionally hidden with `display: none` or `visibility: hidden` *will still appear in the accessibility tree*. If you don't want an element to appear in the accessibility tree, use `aria-hidden="true"`.

## Examples

### Using auto to reduce rendering cost of long pages

The following example shows the use of auto to skip painting and rendering of off-screen sections. This helps with both load and interactions on the page, since the content outside of the viewport is not rendered.

```html
<style>
section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}

<section>…
<section>…
<section>…
<section>…
…
```

### Using hidden to manually manage visibility

The following example shows that it is possible to manage visibility in script. The added benefit of using `content-visibility: hidden` instead of, for example, `display: none` is that rendered content when hidden with `content-visibility` will preserve rendering state. This means that if the content is shown again, it will render quicker than the alternative.

```html
<style>
.hidden {
  content-visibility: hidden;
  /* when hidden, we want the element to size as if it had one child of 0x500px size */
  contain-intrinsic-size: 0 500px;
}
.visible {
  content-visibility: visible;
  /* this is here to avoid layout shift when switching between .hidden and .visible */
  contain: style layout paint;
}

<div class=hidden>…
<div class=visible>…
<div class=hidden>…
<div class=hidden>…
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
