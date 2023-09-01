---
title: content-visibility
slug: Web/CSS/content-visibility
page-type: css-property
status:
  - experimental
browser-compat: css.properties.content-visibility
---

{{CSSRef}}{{SeeCompatTable}}

The **`content-visibility`** [CSS](/en-US/docs/Web/CSS) property controls whether or not an element renders its contents at all, along with forcing a strong set of containments, allowing user agents to potentially omit large swathes of layout and rendering work until it becomes needed. It enables the user agent to skip an element's rendering work (including layout and painting) until it is needed — which makes the initial page load much faster.

> **Note:** The {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}} event fires on any element with `content-visibility: auto` set on it when its rendering work starts or stops being skipped. This provides a convenient way for an app's code to start or stop rendering processes (e.g. drawing on a {{htmlelement("canvas")}}) when they are not needed, thereby conserving processing power.

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
  - : The element [skips its contents](/en-US/docs/Web/CSS/CSS_containment#skips_its_contents). The skipped contents must not be accessible to user-agent features, such as find-in-page, tab-order navigation, etc., nor be selectable or focusable. This is similar to giving the contents `display: none`.
- `auto`
  - : The element turns on layout containment, style containment, and paint containment. If the element is not [relevant to the user](/en-US/docs/Web/CSS/CSS_containment#relevant_to_the_user), it also skips its contents. Unlike hidden, the skipped contents must still be available as normal to user-agent features such as find-in-page, tab order navigation, etc., and must be focusable and selectable as normal.

## Formal definition

{{cssinfo}}

## Formal syntax

{{CSSSyntax}}

## Accessibility concerns

Off-screen content within a `content-visibility: auto` property remains in the document object model and the accessibility tree. This allows improving page performance with `content-visibility: auto` without negatively impacting accessibility.

Since styles for off-screen content are not rendered, elements intentionally hidden with `display: none` or `visibility: hidden` _will still appear in the accessibility tree_.
If you don't want an element to appear in the accessibility tree, use `aria-hidden="true"`.

## Examples

### Using auto to reduce rendering cost of long pages

The following example shows the use of `content-visibility: auto` to skip painting and rendering of off-screen sections.
When a `section` is out of the viewport then the painting of the content is skipped until the section comes close to the viewport, this helps with both load and interactions on the page.

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
<!-- … -->
```

#### CSS

The `contain-intrinsic-size` property adds a default size of 500px to the height and width of each `section` element. After a section is rendered, it will retain its rendered intrinsic size, even when it is scrolled out of the viewport.

```css
section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}
```

### Using hidden to manage visibility

The following example shows how to manage content visibility with JavaScript.
Using `content-visibility: hidden;` instead of `display: none;` preserves the rendering state of content when hidden and rendering is faster.

#### HTML

```html
<div class="hidden">
  <button class="toggle">Show</button>
  <p>
    This content is initially hidden and can be shown by clicking the button.
  </p>
</div>
<div class="visible">
  <button class="toggle">Hide</button>
  <p>
    This content is initially visible and can be hidden by clicking the button.
  </p>
</div>
```

#### CSS

The `content-visibility` property is set on paragraphs that are direct children of elements with the `visible` and `hidden` classes. In our example, we can show and hide content in paragraphs depending on the CSS class of parent div elements.

The `contain-intrinsic-size` property is included to represent the content size. This helps to reduce layout shift when content is hidden.

```css
p {
  contain-intrinsic-size: 0 1.1em;
  border: dotted 2px;
}

.hidden > p {
  content-visibility: hidden;
}

.visible > p {
  content-visibility: visible;
}
```

#### JavaScript

```js
const handleClick = (event) => {
  const button = event.target;
  const div = button.parentElement;
  button.textContent = div.classList.contains("visible") ? "Show" : "Hide";
  div.classList.toggle("hidden");
  div.classList.toggle("visible");
};

document.querySelectorAll("button.toggle").forEach((button) => {
  button.addEventListener("click", handleClick);
});
```

#### Result

{{ EmbedLiveSample('Using hidden to manually manage visibility') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Containment](/en-US/docs/Web/CSS/CSS_containment)
- [`contain-intrinsic-size`](/en-US/docs/Web/CSS/contain-intrinsic-size)
- {{domxref("element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/) (web.dev)
