---
title: interactivity
slug: Web/CSS/interactivity
page-type: css-property
status:
  - experimental
browser-compat: css.properties.interactivity
---

{{CSSRef}}{{seecompattable}}

The **`interactivity`** [CSS](/en-US/docs/Web/CSS) property specifies whether an element and its descendant nodes are set to be [inert](/en-US/docs/Web/HTML/Reference/Global_attributes/inert).

## Syntax

```css
/* Keyword values */
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
  - : Selected elements are in their default state in terms of inertness. This usually means that they are interactive, but this is [not always the case](#default_inertness). This is the default value.

- `inert`
  - : Selected elements and their descendants are inert.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Description

The `interactivity` property can be used to set whether an element and its descendants are inert. See the HTML [`inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) attribute reference page for a detailed description of the inert state.

A typical use case for `interactivity: inert` is in paginated content, like carousels, when you only want the currently-visible page's content and controls to be interacted with. In such cases, unexpectedly focusing on an off-screen link or button could spoil the experience.

If an element's inert state is specified both by HTML (the `inert` attribute, or an automatic browser setting) and CSS (the `interactive` property) at the same time, the CSS will have no effect — it cannot overide the HTML's inertness.

For example, the following HTML element will be inert:

```html
<button inert>You can't press me</button>
```

Setting `interactive: auto` on it will have no effect.

### Default inertness

Most elements are interactive by default, but this is not always the case:

- An element's ancestor may be set to an inert state, via the `interactive` property or the `inert` attribute.
- While a modal {{htmlelement("dialog")}} is displayed, the rest of the page is set to an inert state automatically.

## Examples

### Basic `interactivity` usage

In this example we have two {{htmlelement("input")}} elements. The second one has `interactivity: inert` set on it via a class, and therefore is not focusable or editable in supporting browsers.

```html live-sample___basic-interactivity
<p>
  <label>
    This input is interactive:
    <input type="text" name="one" value="editable" />
  </label>
</p>
<p>
  <label>
    This input is not interactive:
    <input type="text" name="two" value="Not editable" class="inert" />
  </label>
</p>
```

```css live-sample___basic-interactivity
.inert {
  interactivity: inert;
  background-color: lightpink;
}
```

#### Result

The output looks like this:

{{ EmbedLiveSample("basic-interactivity", "100%", "100") }}

### Exploring the effects of inertness

In this example we explore the effects of the `interactivity` property.

#### HTML

The markup features two {{htmlelement("p")}} elements, each of which contain a link. The second paragraph also has a class of `inert` set on it, and a child {{htmlelement("span")}} element with [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) set on it to make it editable.

```html-nolint live-sample___inertness-effects
<p>
  This paragraph is not
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert"
    >inert</a
  >. You should be able to select the text content, search for it using
  in-browser search features, and focus and click the link. There is a
  <code>click</code> event handler set on the paragraph that changes the border
  color for a second when it is clicked anywhere.
  <span contenteditable="">This sentence has <code>contenteditable</code> set on
  it, so it is editable</span>.
</p>

<p class="inert">
  This paragraph is
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert"
    >inert</a
  >. You won't be able to select the text content, search for it using
  in-browser search features, focus and click the link, or issue
  <code>click</code> events on it (the border color won't change when it is
  clicked).
  <span contenteditable=""
    >This sentence has <code>contenteditable</code> set on it, but it is not
    editable because it is inert</span
  >.
</p>
```

#### CSS

We set the `interactivity` property on the second paragraph to a value of `inert`, making it inert. This means that you should be able to edit the `contenteditable` text in the first paragraph, but not in the second, and you shouldn't be able to search for text, select text, or interact with the link within the second paragraph.

```css live-sample___inertness-effects
.inert {
  interactivity: inert;
}

[contenteditable] {
  outline: 1px dashed lightblue;
}

.borderChanged {
  border-color: orange;
}
```

```css hidden live-sample___inertness-effects
body {
  font: 1.2em / 1.5 system-ui;
}

p {
  border: 5px solid black;
  padding: 10px;
  width: 90%;
  margin: 20px auto;
}
```

#### JavaScript

We set an event handler on each paragraph that toggles a class name when clicked, adding the classname then removing the class after two seconds.

```js live-sample___inertness-effects
const paras = document.querySelectorAll("p");

function tempBorderChange(e) {
  const targetPara = e.currentTarget;
  targetPara.classList.add("borderChanged");
  setTimeout(() => {
    targetPara.classList.remove("borderChanged");
  }, 2000);
}

for (para of paras) {
  para.addEventListener("click", tempBorderChange);
}
```

#### Result

{{ EmbedLiveSample("inertness-effects", "100%", "380") }}

Note how the second paragraph is inert; it therefore does not behave like the first paragraph. For example, the link cannot be clicked or focused, the text cannot be selected or searched, the `contenteditable` `<span>` is not editable, and `click` events do not register on it.

### Setting off-screen elements to inert using a view timeline

This example shows horizontally-scrolling paginated content, with each page snapped to using [CSS Scroll Snap](/en-US/docs/Web/CSS/CSS_scroll_snap), and the inertness controlled via a [scroll-driven animation](/en-US/docs/Web/CSS/CSS_scroll-driven_animations) that uses a [view progress timeline](/en-US/docs/Web/CSS/view-timeline-name). Content displayed in the {{glossary("scroll container")}} is interactive; it becomes inert when it moves out into the overflowing content.

#### HTML

The HTML consists of a top-level [heading](/en-US/docs/Web/HTML/Reference/Elements/Heading_Elements) and an [unordered list](/en-US/docs/Web/HTML/Reference/Elements/ul) with four [list items](/en-US/docs/Web/HTML/Reference/Elements/li), each containing the content for a separate page.

```html live-sample___offscreen-inert
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

A {{cssxref("width")}} of `100vw` is set on the unordered list to make it as wide as the viewport. We add a fixed {{cssxref("height")}}, some {{cssxref("padding")}}, and an {{cssxref("overflow-x")}} value of `scroll` so overflowing content will scroll. Its child list items are laid out horizontally with {{cssxref("display", "display: flex")}}. This flex container is given a {{cssxref("scroll-snap-type")}} value of `x mandatory` to make it into a [scroll snap container](/en-US/docs/Glossary/Scroll_snap#scroll_snap_container). The `x` keyword causes the container's [snap targets](/en-US/docs/Glossary/Scroll_snap#snap_target) to be snapped horizontally. The `mandatory` keyword means that the container will always snap to a snap target at the end of a scrolling action.

```css hidden live-sample___offscreen-inert
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

```css live-sample___offscreen-inert
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

Each list item has the following styles applied:

- A {{cssxref("flex")}} value of `0 0 98vw`, forcing each item to be as big as the scroll container minus the {{cssxref("gap")}} set on the list (see the `gap` declaration in the `ul` rule shown earlier). This also has the effect of centering each page inside the scroll container.
- A {{cssxref("scroll-snap-align")}} value of `center`, to cause the scroll container to snap to the center of each snap target.
- A {{cssxref("view-timeline")}} value of `--inertChange inline`, to declare the element as the subject of the `--inertChange` view progress timeline, and set that timeline to progress in the inline direction as it moves through its ancestor scroll container.
- An {{cssxref("animation-timeline")}} value with the same name as the {{cssxref("view-timeline-name")}}, as defined in the `view-timeline` shorthand, which means that the named view progress timeline will be used to control the progress of animations applied to the element.
- An {{cssxref("animation-name")}} and {{cssxref("animation-fill-mode")}} defining the animation applied to this element and its fill mode. The `both` value is required because you want the starting animation state to apply to the element before the animation starts, and the end animation state to apply to the element after the animation finishes. If the animation isn't persisted, the `interactivity: inert` declaration applied via the animation won't apply to list items when they are outside the scroll container.

```css live-sample___offscreen-inert
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

```css live-sample___offscreen-inert
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

Scroll the unordered list horizontally to see the pagination effect — each page snaps into view. Try tabbing between the links and the buttons; you'll find that only the ones on-screen are interactive and can be tabbed to.

{{ EmbedLiveSample("offscreen-inert", "100%", "320") }}

## Accessibility concerns

Consider accessibility carefully when making elements inert. By default, there is no visual way to tell whether or not an element or its subtree is inert. As a web developer, it is your responsibility to clearly indicate the content parts that are active and those that are inert.

While providing visual and non-visual cues about content inertness, also remember that the visual viewport may contain only sections of content. Users may be zoomed in to a small section of content, or users may not be able to view the content at all. Inert sections not being obviously inert can lead to frustration and bad user experience.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`inert`](/en-US/docs/Web/HTML/Reference/Global_attributes/inert) attribute
- {{domxref("HTMLElement.inert")}}
