---
title: content-visibility
slug: Web/CSS/content-visibility
page-type: css-property
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

The **`content-visibility`** [CSS](/en-US/docs/Web/CSS) property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

> **Note:** The {{domxref("element/contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event fires on any element with `content-visibility: auto` set on it when its rendering work starts or stops being skipped. This provides a convenient way for an app's code to start or stop rendering processes (e.g. drawing on a {{htmlelement("canvas")}}) when they are not needed, thereby conserving processing power.

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
  - : The element [skips its contents](/en-US/docs/Web/CSS/CSS_Containment#skips_its_contents). The skipped contents must not be accessible to user-agent features, such as find-in-page, tab-order navigation, etc., nor be selectable or focusable. This is similar to giving the contents `display: none`.
- `auto`
  - : The element turns on layout containment, style containment, and paint containment. If the element is not [relevant to the user](/en-US/docs/Web/CSS/CSS_Containment#relevant_to_the_user), it also skips its contents. Unlike hidden, the skipped contents must still be available as normal to user-agent features such as find-in-page, tab order navigation, etc., and must be focusable and selectable as normal.

## Formal definition

{{cssinfo}}

## Accessibility concerns

Off-screen content within a `content-visibility: auto` element remains in the document object model and the accessibility tree. This allows improving page performance with `content-visibility: auto` without negatively impacting accessibility.

However, one caveat to keep in mind is that, since styles for off-screen content are not rendered, elements intentionally hidden with `display: none` or `visibility: hidden` _will still appear in the accessibility tree_. If you don't want an element to appear in the accessibility tree, use `aria-hidden="true"`.

## Examples

### Using auto to reduce rendering cost of long pages

The following example shows the use of `content-visibility:auto` to skip painting and rendering of off-screen sections. When a `section` is out of the viewport then the painting of the content is skipped until the section comes close to the viewport, this helps with both load and interactions on the page.

#### HTML

```html
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>
<section>
  <!-- Content for each section… -->
</section>

```

#### CSS

The `contain-intrinsic-size: auto 500px;` property adds a default size to the `section`s of 500px to the height and width, once the section has been rendered it will retain its rendered intrinsic size, even when it is scrolled out of the viewport.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
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

- [CSS Containment](/en-US/docs/Web/CSS/CSS_Containment)
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
- The {{domxref("element/contentvisibilityautostatechanged_event", "contentvisibilityautostatechanged")}} event
