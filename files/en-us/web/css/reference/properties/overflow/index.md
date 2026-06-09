---
title: "`overflow` CSS property"
short-title: overflow
slug: Web/CSS/Reference/Properties/overflow
page-type: css-shorthand-property
browser-compat: css.properties.overflow
sidebar: cssref
---

The **`overflow`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Guides/Cascade/Shorthand_properties) sets the desired behavior when content does not fit in the element's padding box (overflows) in the horizontal and/or vertical direction.

{{InteractiveExample("CSS Demo: overflow")}}

```css interactive-example-choice
overflow: visible;
```

```css interactive-example-choice
overflow: hidden;
```

```css interactive-example-choice
overflow: clip;
```

```css interactive-example-choice
overflow: scroll;
```

```css interactive-example-choice
overflow: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}

## Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;

/* Two-value syntax: horizontal | vertical */
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

The `overflow` property is specified as one or two {{CSSXref("overflow_value", "&lt;overflow&gt;")}} keyword values.

### Values

- `visible`
  - : Overflow content is not clipped and may be visible outside the element's padding box. The element box is not a {{glossary("scroll container")}}. This is the default value.
- `hidden`
  - : Overflow content is clipped at the element's padding box, hiding the clipped content. When overflowing, the element box is a {{glossary("scroll container")}} with no scroll bars; scrolling is still possible via other methods including tabbing to hidden focusable elements, properties such as {{domxref("Element.scrollLeft", "scrollLeft")}} property, and methods like {{domxref("Element.scrollTo", "scrollTo()")}}.
- `clip`
  - : Overflow content is clipped at the element's _overflow clip edge_ defined by the {{cssxref("overflow-clip-margin")}} property. The element box is not a scroll container, clipped content is not visible, and programmatic scrolling is not supported.
- `scroll`
  - : Overflow content is clipped at the element's padding box. Whether overflowing or not, the element box is always a scroll container displaying scroll bars.
- `auto`
  - : Overflow content is clipped at the element's padding box. When overflowing, the element box is a scroll container displaying scroll bars.

#### Non-standard values

Some non-standard values are also supported in some browsers:

- `overlay`
  - : A legacy alias for `auto`, defined in the specification for web compatibility. Originally implemented as a non-standard value to render scrollbars on top of content rather than taking up space. Its use in new code is discouraged.

## Description

By default, block level elements grow to fit their content. If the size of a container is constrained, the content will overflow. The `overflow` property determines how a container handles content that overflows its edges.

The `overflow` property is shorthand for the horizontal {{cssxref("overflow-x")}} and vertical {{cssxref("overflow-y")}} properties. If only one keyword is specified, both `overflow-x` and `overflow-y` are set to the same value. If two keywords are specified, the first value applies to `overflow-x` in the horizontal direction and the second one applies to `overflow-y` in the vertical direction.

Overflow options include hiding overflow content, enabling scroll bars to view overflow content or displaying the content flowing out of an element box into the surrounding area, and combinations there of.

All values, except `visible` and `clip`, create a new [block formatting context](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context). The new block formatting context is necessary for scroll containers because if a float were to intersect with a scrolling element, it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.

### What creates overflow

Overflow occurs when a block-level element has content that overflows its constrained space. The alloted space may be constrained by a height ({{cssxref("height")}} or {{cssxref("max-height")}}) for vertical overflow, a width ({{cssxref("width")}} or {{cssxref("max-width")}}) for horizontal overflow, a block-size (({{cssxref("block-size")}} or {{cssxref("max-block-size")}}) for block direction overflow, or an inline-size (({{cssxref("inline-size")}}, {{cssxref("max-inline-size")}}) or {{cssxref("white-space")}} set to `nowrap`) for inline direction overflow.

The following CSS limits the size of the container, defining [box model](/en-US/docs/Web/CSS/Guides/Box_model) property values that limit the container's size.
A background color, clipped to the `content-box`, is also added to help demonstrate how overflowing content overflows the content box in the explanations that follow.

```css
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;

  background-color: #ededed;
  background-clip: content-box;
}
```

### Understanding overflow values

The different `overflow` values define whether an element has scrollbars, whether it is user and programmatically scrollable, and whether it is a scroll container (which creates a new [block formatting context](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context)) when that element's contents overflow and, in the case of `scroll`, even when they don't.

#### The `visible` value

The default value is `visible`. By default, if content overflows a container's constraints, the contents are not contained to the container. An element that defaults or is explicitly set to `visible` doesn't have scrollbars, is not user or programmatically scrollable, and is not a {{glossary("scroll container")}}. This value does not create a new block formatting context.

```css live-sample___visible
div {
  overflow: visible;
}
```

{{EmbedLiveSample("visible", "", "300px")}}

```html hidden live-sample___visible
<div>
  <h2>overflow: visible;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>visible</code>. No scroll container is created; the content just
    overflows the container.
  </p>
</div>
```

With `visible`, no clipping occurs, so the overflowing content is visible outside the element's padding box, potentially overlapping adjacent content.

#### The `scroll` value

With `scroll`, content is clipped at the element's padding box and can be scrolled into view. User agents display scroll bars in both directions whether or not any content is overflowing, which prevents scroll bars from appearing and disappearing as content changes. Printers may still print overflow content.*

The element is always a {{glossary("scroll container")}} — even when there is no overflowing content — and is both user-scrollable and programmatically scrollable.

```css live-sample___scroll
div {
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", "300px")}}

```html hidden live-sample___scroll
<div>
  <h2>overflow: scroll;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>scroll</code>. A scroll container is created; a scrollbar is always
    visible, even if not needed.
  </p>
</div>
```

In the first example, even though the content is not overflowing, a scroll container is still created. In the second example, the content is clipped to the padding box, with a scroll bar enabling scrolling to the overflowing content.

#### The `auto` value

With `auto`, whether the element has scrollbars and is a scroll container depends on whether the element has overflowing content. When the element contains overflowing content, it behaves like `scroll`: the overflowing content is clipped at the element's padding box, and overflow content can be scrolled into view using scroll bars. Unlike `scroll`, user agents display scroll bars _only if_ the content is overflowing. If content fits inside the element's padding box, it looks the same as with `visible`, but still establishes a new formatting context. The element box is a scroll container only when there is overflowing content.

```css live-sample___auto
div {
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", "300px")}}

```html hidden live-sample___auto
<div>
  <h2>overflow: auto;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>auto</code>. Because there is overflowing content, a scroll container
    is created. The content is clipped to the padding box and a scroll bar
    enables scrolling to the overflowing content.
  </p>
</div>
```

When using the two value syntax, if one value is set to `visible`, that `visible` overflow direction will behave as `auto` if the other value is not `visible` or `clip`.

#### The `hidden` value

With `hidden`, overflowing content is clipped at the element's padding box. There are no scroll bars and the clipped content is not visible (i.e., it's "hidden").

If there is overflowing content, the element is a scroll container! While there are no scroll bars and the user cannot view the content outside the clipped region by actions such as dragging on a touch screen or using the scroll wheel on a mouse, the hidden overflow content can be scrolled into view.

If the content contains focusable elements, tabbing brings the currently focused element into view. Content can also be scrolled to programmatically. Setting a value for the {{domxref("Element.scrollLeft", "scrollLeft")}} or {{domxref("Element.scrollTop", "scrollTop")}} property scrolls that distance from the left or top edge, respectively. You can also scroll using the {{domxref("Element.scrollTo", "scrollTo()")}} method.

```css live-sample___hidden
div {
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", "300px")}}

```html hidden live-sample___hidden
<div>
  <h2>overflow: hidden;</h2>
</div>
<div>
  <p>
    The <code>overflow</code> property in this example is set to
    <code>hidden</code>. While hidden,
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content"
      >interactive content</a
    >
    can be scrolled into view when focused. Because content overflows, the
    element is a scroll container, even though no scroll bars are present.
    Tabbing will give this
    <input aria-label="input" placeholder="input" /> focus and scroll it into
    view. This content is also programmatically scrollable.
  </p>
</div>
```

The first example does not have overflowing content and is not a scroll container. The second example has overflowing content that is clipped to the padding box. Even though there is no scroll bar enabling scrolling to the overflowing content, the content can be scrolled into view, such as by tabbing to the {{htmlelement("input")}} in the hidden content. The second example is a scroll container.

#### The `clip` value

With `clip`, content that overflows is by default hidden, there are no scroll bars, and programmatic scrolling is not possible. The element is not a scroll container and no new [formatting context](/en-US/docs/Web/CSS/Guides/Display/Block_formatting_context) is created. If the clipped content includes interactive content, hidden focusable content still receives keyboard focus, but that content will not scroll into view, making it inaccessible to keyboard users.

With `clip`, overflow content is clipped at the element's _overflow clip edge_ that is defined using the {{cssxref("overflow-clip-margin")}} property. The clipped content overflows the element's padding box by the {{cssxref("&lt;length&gt;")}} value of `overflow-clip-margin`, which defaults to `0px`.

```css live-sample___clip
div {
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", "350")}}

```html hidden live-sample___clip
<div>
  <h2>overflow: clip;</h2>
</div>
<div>
  <p>The <code>overflow</code> property in this example is set to <code>clip</code>. When hidden,
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#interactive_content"
      >interactive content</a
    >
    can NOT be scrolled into view when focused. Overflowing content is clipped the container. No scroll container is created. Tabbing will give this
    <input aria-label="input" placeholder="input" /> focus but will not scroll it into view. Keyboard users will not be able to reach this content. This content is also not programmatically scrollable.</p>
</div>
<fieldset><legend>Select a <code>overflow-clip-margin</code> value</legend>
<ul>
  <li><label><input type="radio" name="overflow" value="0"> overflow-clip-margin: 0;</label></li>
  <li><label><input type="radio" name="overflow" value="3em"> overflow-clip-margin: 3em;</label></li>
</ul>
</fieldset>
```

The second example's overflowing content is clipped. Tabbing to the {{htmlelement("input")}} in the hidden content gives the element focus, but does not scroll it into view, creating inaccessible, bad user experience.

When using the two value syntax, if one value is set to `clip`, that `clip` overflow direction will behave as `hidden` if the other value is not set to `visible` or `clip`.

```css hidden live-sample___clip
ul {
  list-style-type: none;
}
label {
  font-family: monospace;
}
:has([value="0"]:checked) div {
  overflow-clip-margin: 0;
}
:has([value="3em"]:checked) div {
  overflow-clip-margin: 3em;
}

@supports not (overflow-clip-margin: 0) {
  body::before {
    content: "Your browser doesn't support overflow-clip-margin yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;

    width: 100%;
  }
}
```

#### With scroll-driven animations

When creating [scroll driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) using the {{cssxref("animation-timeline/scroll", "scroll()")}} function, consider using `clip` instead of `hidden` if there is no interactive content within the clipped area, unless you explicitly want to create a scroll container.

With both `hidden` and `clip`, the overflow gets clipped, but `overflow: clip` doesn't create a scroll container, so clipped elements are skipped when the user agent goes up the DOM tree looking for the nearest ancestor scroll container.

Because `overflow: hidden` creates a scroll container when there is overflowing content, you might accidentally create a scrolling-ancestor that doesn't scroll. But only use `clip` if you are certain you won't clip any interactive content.

```css hidden live-sample___visible live-sample___scroll live-sample___auto live-sample___clip live-sample___hidden
div {
  height: 10em;
  width: 15em;
  border: 3px solid;
  padding: 10px;
  background-color: #ededed;
  background-clip: content-box;
}
p {
  font-size: 1.5rem;
  line-height: 1.6;
  font-family: sans-serif;
}
h2 {
  font-family: monospace;
}
body {
  height: 98vh;
  overflow: clip;
  display: flex;
  flex-flow: row wrap;
  gap: 3em;
}
```

### Overflowing replaced elements

Setting `overflow` on images and other {{glossary("replaced elements")}} works as expected in browsers that support CSS Overflow Module Level 4; in previous versions of the specification, replaced elements were always clipped to the bounding container.

See the [browser compatibility](#browser_compatibility) chart for current browser support information.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Accessibility

In some browsers, scrolling content areas are not keyboard-focusable, so they cannot be scrolled by a keyboard-only user. To ensure all keyboard-only users can scroll the container, enable the element to receive focus by setting [`tabindex="0"`](/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex) on the container. To ensure the screen reader user has context when encountering the container receives focus, set an appropriate [WAI-ARIA role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles) on the container, such as `role="region"`, and an accessible name using the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)) attributes.

## Examples

### Demonstrating results of various overflow keywords

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>

<div>
  <code>overlay</code>
  <p class="overlay">
    Maya Angelou: "I've learned that people will forget what you said, people
    will forget what you did, but people will never forget how you made them
    feel."
  </p>
</div>
```

#### CSS

```css hidden
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

div {
  margin: 2em;
  font-size: 1.2em;
}

p {
  width: 5em;
  height: 5em;
  border: dotted;
  margin-top: 0.5em;
}

div:nth-of-type(5),
div:nth-of-type(6) {
  margin-top: 200px;
}
```

```css
p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.clip {
  overflow: clip;
  overflow-clip-margin: 1em;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}

p.overlay {
  overflow: overlay;
}
```

#### Result

{{EmbedLiveSample("Demonstrating results of various overflow keywords", "500", "620")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- SVG {{SVGAttr("overflow")}} attribute
- [Scroll progress timelines](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#scroll_progress_timelines)
- [CSS overflow](/en-US/docs/Web/CSS/Guides/Overflow) module
- [CSS scroll driven animations](/en-US/docs/Web/CSS/Guides/Scroll-driven_animations) module
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (2022)
