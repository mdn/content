---
title: overflow
slug: Web/CSS/overflow
page-type: css-shorthand-property
browser-compat: css.properties.overflow
---

{{CSSRef}}

The **`overflow`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior when content does not fit in the parent element box (overflows) in the horizontal and/or vertical direction.

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`overflow-x`](/en-US/docs/Web/CSS/overflow-x)
- [`overflow-y`](/en-US/docs/Web/CSS/overflow-y)

## Syntax

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

The `overflow` property is specified as one or two {{CSSXref("overflow_value", "&lt;overflow&gt;")}} keyword values. If only one keyword is specified, both `overflow-x` and `overflow-y` are set to the same value. If two keywords are specified, the first value applies to `overflow-x` in the horizontal direction and the second one applies to `overflow-y` in the vertical direction.

### Values

- `visible`
  - : Overflow content is not clipped and may be visible outside the element's padding box. The element box is not a {{glossary("scroll container")}}. This is the default value of the `overflow` property.
- `hidden`
  - : Overflow content is clipped at the element's padding box. There are no scroll bars, and the clipped content is not visible (i.e., clipped content is hidden), but the content still exists. User agents do not add scroll bars and also do not allow users to view the content outside the clipped region by actions such as dragging on a touch screen or using the scroll wheel on a mouse. The content _can_ be scrolled programmatically (for example, by setting the value of the {{domxref("Element.scrollLeft", "scrollLeft")}} property or the {{domxref("Element.scrollTo", "scrollTo()")}} method), in which case. The element box is a scroll container.
- `clip`
  - : Overflow content is clipped at the element's _overflow clip edge_ that is defined using the [`overflow-clip-margin`](/en-US/docs/Web/CSS/overflow-clip-margin) property. As a result, content overflows the element's padding box by the {{cssxref("&lt;length&gt;")}} value of `overflow-clip-margin` or by `0px` if not set. Overflow content outside the clipped region is not visible, user agents do not add a scroll bar, and programmatic scrolling is also not supported. No new [formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context) is created. To establish a formatting context, use `overflow: clip` along with {{cssxref("display", "display: flow-root", "#flow-root")}}. The element box is not a scroll container.
- `scroll`
  - : Overflow content is clipped at the element's padding box, and overflow content can be scrolled into view using scroll bars. User agents display scroll bars in both horizontal and vertical directions if only one value is set, whether or not any content is overflowing or clipped. The use of this keyword, therefore, can prevent scroll bars from appearing and disappearing as content changes. Printers may still print overflowing content. The element box is a scroll container.
- `auto`
  - : Overflow content is clipped at the element's padding box, and overflow content can be scrolled into view. Unlike `scroll`, user agents display scroll bars _only if_ the content is overflowing and hide scroll bars by default. If content fits inside the element's padding box, it looks the same as with `visible` but still establishes a new formatting context. The element box is a scroll container.

> **Note:** The keyword value `overlay` is a legacy value alias for `auto`. With `overlay`, the scroll bars are drawn on top of the content instead of taking up space.

## Description

Overflow options include hiding overflowing content, enabling scroll bars to view overflow content or displaying the content flowing out of an element box into the surrounding area, and combinations there of.

The following nuances should be kept in mind while using the various keywords for `overflow`:

- Specifying a value other than `visible` (the default) or `clip` for `overflow` creates a new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). This is necessary for technical reasons; if a float intersects with a scrolling element, it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.
- For an `overflow` setting to create the desired effect, the block-level element must have either a set height (`height` or `max-height`) or `white-space` set to `nowrap`.
- Setting one axis to `visible` (the default) while setting the other to a _different_ value results in `visible` behaving as `auto`.
- The JavaScript {{domxref("Element.scrollTop")}} property may be used to scroll through content in a scroll container, including when `overflow` is set to `hidden`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

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

{{EmbedLiveSample("Demonstrating results of various overflow keywords", "500", "600")}}

## Accessibility concerns

A scrolling content area cannot be scrolled by a keyboard-only user, with the exception of users on Firefox (which makes the container keyboard focusable by default).

As a developer, to allow non-Firefox keyboard-only users to scroll the container, you will need to give it a [`tabindex`](/en-US/docs/Web/HTML/Global_attributes/tabindex) using `tabindex="0"`. Unfortunately, when a screen reader encounters this tab-stop, they will have no context for what it is and their screen reader will likely announce the entirety of its contents. Giving it an appropriate [WAI-ARIA role](/en-US/docs/Web/Accessibility/ARIA/Roles) (`role="region"`, for example) and an accessible name (via [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)) can mitigate this.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}
- {{Cssxref("overflow-block")}}, {{Cssxref("overflow-clip-margin")}}, {{Cssxref("overflow-inline")}}
- {{Cssxref("clip")}}, {{Cssxref("display")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow)
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (2022)
