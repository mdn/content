---
title: interactivity
slug: Web/CSS/interactivity
page-type: css-property
status:
  - experimental
browser-compat: css.properties.interactivity
---

{{CSSRef}}{{seecompattable}}

The **`interactivity`** [CSS](/en-US/docs/Web/CSS) property specifies whether an element and its descendant nodes are {{glossary("inert")}} or not.

A typical use case for `interactivity: inert` is in paginated or carousel content, when you only want the currently-visible page's content and controls to be interacted with. In such cases, unexpectedly focusing on an off-screen link or button could spoil the experience.

## Syntax

```css
/* Single values */
interactivity: auto;
interactivity: inert;

/* Global values */
interactivity: inherit;
interactivity: initial;
interactivity: revert;
interactivity: revert-layer;
interactivity: unset;
```

### Values

- `auto`

  - : Selected elements are not inert, and can be interacted with normally.

- `inert`

  - : Selected elements are inert.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting off-screen elements to inert using a view timeline

This example shows a basic section of horizontally-scrolling paginated content, with each page snapped to using [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_scroll_snap), and the inertness controlled via a [scroll-driven animation](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) that uses a view progress timeline. When a page is visible in the scroll container, it is not inert; it becomes inert when it moves out into the overflowing content.

#### HTML

The HTML consists of a [top-level heading](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) and an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul). Each [list item](/en-US/docs/Web/HTML/Reference/Elements/li) inside the list contains the content for a separate page.

```html
<h1>Pagination interactivity demo</h1>
<ul>
  <li>
    <h2>Page 1</h2>
    <p>This is the first page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 2</h2>
    <p>This is the second page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 3</h2>
    <p>This is the third page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
  <li>
    <h2>Page 4</h2>
    <p>This is the fourth page of content.</p>
    <p><a href="#">A demo link</a>.</p>
    <p><button>Press me</button></p>
  </li>
</ul>
```

#### CSS

A {{cssxref("width")}} of `100vw` is set on the unordered list to make it as wide as the viewport, plus a fixed {{cssxref("height")}}, some {{cssxref("padding")}}, and an {{cssxref("overflow-x")}} value of `scroll` so overflowing content will scroll. Its child list items are laid out horizontally with {{cssxref("display", "display: flex")}}, and given a {{cssxref("scroll-snap-type")}} value of `x mandatory` to make it into a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container). The `x` keyword causes the container's [snap targets](/en-US/docs/Glossary/Scroll_snap#snap_target) to be snapped to horizontally, whereas the `mandatory` keyword means that the container will always snap to a snap target at the end of a scrolling action.

```css hidden
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  text-align: center;
  margin: 0;
}

button {
  background-color: white;
}
```

```css
ul {
  width: 100vw;
  height: 250px;
  padding: 1vw;
  overflow-x: scroll;
  display: flex;
  gap: 1vw;
  scroll-snap-type: x mandatory;
}
```

Each list item is given some rudimentary styling, plus the following:

- A {{cssxref("flex")}} value of `0 0 98vw`, to force each item to be as big as the scroll container minus the {{cssxref("gap")}} set on the list (see the previous rule). In effect, this centers each page inside the scroll container.
- A {{cssxref("scroll-snap-align")}} value of `center`, to cause the scroll container to snap to the center of each snap target.
- A {{cssxref("view-timeline")}} value of `--inertChange inline`, to declare the element as the subject of a named view progress timeline, progressed through in the inline direction. This is the element that will progress the view timeline as it moves through its ancestor scroll container.
- An {{cssxref("animation-timeline")}} value equal to the same name defined in the `view-timeline` value, which means that the named view progress timeline will be used to control the progress of animations applied to this element.
- An {{cssxref("animation-name")}} and {{cssxref("animation-fill-mode")}} defining the animation applied to this element and its fill mode. The `animation-fill-mode: both` value is required because you want the starting animation state to apply to the element before the animation starts, and the end animation state to apply to the element after the animation finishes. Otherwise, the `interactivity: inert` value (see below) won't apply to list items when they are outside the scroll container.

```css
li {
  list-style-type: none;
  background-color: #eee;
  border: 1px solid #ddd;
  padding: 20px;

  flex: 0 0 98vw;

  scroll-snap-align: center;

  view-timeline: --inertChange inline;
  animation-timeline: --inertChange;
  animation-name: inert-change;
  animation-fill-mode: both;
}
```

Finally, the animation {{cssxref("@keyframes")}} are defined. `interactivity: inert` is set at positions `entry 0%` and `exit 100%` of the view timeline. Combined with the `animation-fill-mode: both` value, this means that the list items will be inert before the start and after the end of the view timeline, that is, when they are outside the scroll container. Between positions `entry 1%` and `exit 99%`, `interactivity: auto` is set on the list items, meaning they can be interacted with normally when they are inside the scroll container.

```css
@keyframes inert-change {
  entry 0%,
  exit 100% {
    interactivity: inert;
  }

  entry 1%,
  exit 99% {
    interactivity: auto;
  }
}
```

See the {{cssxref("animation-range")}} reference page for an explanation of the position values.

#### Result

Scroll the unordered list horizontally to see the pagination effect — each page snaps into view. Try tabbing between the links and the buttons; you'll find that only the ones on-screen can be tabbed to.

{{ EmbedLiveSample("Setting off-screen elements to inert using a view timeline", "100%", "320") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) attribute
- {{domxref("HTMLElement.inert")}}
