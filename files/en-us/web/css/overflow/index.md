---
title: overflow
slug: Web/CSS/overflow
page-type: css-shorthand-property
browser-compat: css.properties.overflow
---

{{CSSRef}}

The **`overflow`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior when content does not fit (overflows) in the parent element box in the horizontal and/or vertical direction.

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

The `overflow` property is specified as one or two keywords chosen from the list of options below. If only one keyword is specified, both `overflow-x` and `overflow-y` are set to the same value. If two keywords are specified, the first value applies to `overflow-x` and the second one applies to `overflow-y`.

### Values

- `visible`
  - : Overflow content is not clipped and may be visible outside content's padding box. This is the default value. In this case, the element is not a {{glossary("scroll container")}}.
- `hidden`
  - : Overflow content is clipped at the content's padding box. Overflow content outside the clipped region is not visible. User agents do not add a scroll bar and also do not allow users to view the content outside the clipped region by actions such as dragging on a touch screen or using the scroll wheel on a mouse. The content _can_ still be scrolled programmatically (for example, by setting the value of the {{domxref("Element.scrollLeft", "scrollLeft")}} property or the {{domxref("Element.scrollTo", "scrollTo()")}} method), in which case, the element box is a {{glossary("scroll container")}}.
- `clip`
  - : Overflow content is clipped, as with `hidden`, but at the element's _overflow clip edge_ (defined using the [`overflow-clip-margin`](/en-US/docs/Web/CSS/overflow-clip-margin) property). Similar to `hidden`, overflow content outside the clipped region is not visible with the `clip` keyword, and user agents do not add a scroll bar. However, unlike `hidden`, the `clip` keyword does not allow adding support for scrolling programmatically. Therefore, with `overflow: clip`, an element box is never a {{glossary("scroll container")}}.

> **Note:** `overflow: clip` prevents a new [formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). If you want the element box to also establish a formatting context, use `overflow: clip` along with {{cssxref("display", "display: flow-root", "#flow-root")}}.

- `scroll`
  - : Overflow content is clipped at the content's padding box, as with `hidden`. Unlike `hidden`, overflow content can be scrolled into view in the {{glossary("Scrollport", "scrollport")}} (the element box is a {{glossary("scroll container")}}). User agents always display scroll bars in both horizontal and vertical directions, whether or not any content is overflowing or clipped. The use of this keyword, therefore, can prevent scroll bars from appearing and disappearing as content changes. Printers may still print overflowing content.
- `auto`
  - : Overflow content is clipped at the content's padding box, as with `hidden`, and overflow content can be scrolled into view, as with `scroll`. User agents display scroll bars _only if_ the content is overflowing and hide scroll bars by default. If content fits inside the padding box, it looks the same as `visible` but still establishes a new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context).

> **Note:** The keyword `overlay` is a legacy value alias for `auto` and behaves the same as `auto`.

## Description

Overflow options include hiding overflowing content, showing scroll bars to view overflow content, or displaying the content flowing out of an element box into the surrounding area.

The following nuances should be kept in mind while using the various keywords for `overflow`:

- Specifying a value other than `visible` (the default) or `clip` for `overflow` creates a new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). This is necessary for technical reasons; if a float intersects with a scrolling element, it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.
- For an `overflow` setting to create the desired effect, the block-level element must have either a set height (`height` or `max-height`) or `white-space` set to `nowrap`.
- Setting one axis to `visible` (the default) while setting the other to a _different_ value results in `visible` behaving as `auto`.
- The JavaScript {{domxref("Element.scrollTop")}} property may be used to scroll an HTML element even when `overflow` is set to `hidden`.

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
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>clip</code>
  <p class="clip">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>
```

#### CSS

```css
body {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
  margin-top: 0.3em;
}

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
```

#### Result

{{EmbedLiveSample("Demonstrating results of various overflow keywords", "600", "400")}}

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
- [CSS overflow](/en-US/docs/Web/CSS/CSS_Overflow)
- [Keyboard-only scrolling areas](https://adrianroselli.com/2022/06/keyboard-only-scrolling-areas.html) on adrianroselli.com (November 28, 2022)
