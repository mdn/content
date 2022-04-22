---
title: overflow
slug: Web/CSS/overflow
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Clipping
  - Layout
  - Reference
  - overflow
  - recipe:css-shorthand-property
  - scrolling
browser-compat: css.properties.overflow
---
{{CSSRef}}

The **`overflow`** [CSS](/en-US/docs/Web/CSS) [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) sets the desired behavior for an element's overflow — i.e. when an element's content is too big to fit in its [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context) — in both directions.

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

The `overflow` property is specified as one or two keywords chosen from the list of values below. If two keywords are specified, the first applies to `overflow-x` and the second to `overflow-y`. Otherwise, both `overflow-x` and `overflow-y` are set to the same value.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box.
- `hidden`
  - : Content is clipped if necessary to fit the padding box. No scrollbars are provided, and no support for allowing the user to scroll (such as by dragging or using a scroll wheel) is allowed. The content _can_ be scrolled programmatically (for example, by setting the value of a property such as {{domxref("Element.scrollLeft", "scrollLeft")}} or the {{domxref("Element.scrollTo", "scrollTo()")}} method), so the element is still a scroll container.
- `clip`
  - : Similar to `hidden`, the content is clipped to the element's padding box. The difference between `clip` and `hidden` is that the `clip` keyword also forbids all scrolling, including programmatic scrolling. The box is not a scroll container, and does not start a new formatting context. If you wish to start a new formatting context, you can use {{cssxref("display", "display: flow-root", "#flow-root")}} to do so.
- `scroll`
  - : Content is clipped if necessary to fit the padding box. Browsers always display scrollbars whether or not any content is actually clipped, preventing scrollbars from appearing or disappearing as content changes. Printers may still print overflowing content.
- `auto`
  - : Depends on the {{Glossary("user agent")}}. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block formatting context. Desktop browsers provide scrollbars if content overflows.
- `overlay` {{deprecated_inline}}
  - : Behaves the same as `auto`, but with the scrollbars drawn on top of content instead of taking up space.

#### Mozilla extensions

- `-moz-scrollbars-none` {{deprecated_inline}}
  - : Use `overflow: hidden` instead.
- `-moz-scrollbars-horizontal` {{deprecated_inline}}
  - : Use `{{Cssxref("overflow-x")}}: scroll` and `{{Cssxref("overflow-y")}}: hidden`, or `overflow: scroll hidden` instead.
- `-moz-scrollbars-vertical` {{deprecated_inline}}
  - : Use `{{Cssxref("overflow-x")}}: hidden` and `{{Cssxref("overflow-y")}}: scroll`, or `overflow: hidden scroll` instead.
- `-moz-hidden-unscrollable` {{deprecated_inline}}
  - : Use `overflow: clip` instead.

As of Firefox 63, `-moz-scrollbars-none`, `-moz-scrollbars-horizontal`, and `-moz-scrollbars-vertical` are behind a feature preference setting. In about:config, set `layout.css.overflow.moz-scrollbars.enabled` to `true`.

## Description

Overflow options include clipping, showing scrollbars, or displaying the content flowing out of its container into the surrounding area.

Specifying a value other than `visible` (the default) or `clip` creates a new [block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context). This is necessary for technical reasons — if a float intersected with the scrolling element it would forcibly rewrap the content after each scroll step, leading to a slow scrolling experience.

In order for `overflow` to have an effect, the block-level container must have either a set height (`height` or `max-height`) or `white-space` set to `nowrap`.

Setting one axis to `visible` (the default) while setting the other to a _different_ value results in `visible` behaving as `auto`.

The JavaScript {{domxref("Element.scrollTop")}} property may be used to scroll an HTML element even when `overflow` is set to `hidden`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting different overflow values for text

#### HTML

```html
  <div>
    <code>visible</code>
    <p class="visible">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>hidden</code>
    <p class="hidden">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>scroll</code>
    <p class="scroll">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>

  <div>
    <code>auto</code>
    <p class="auto">
     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
    </p>
  </div>
```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
}

p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### Result

{{EmbedLiveSample("Setting_different_overflow_values_for_text", "600", "250")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-block")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS Overflow](/en-US/docs/Web/CSS/CSS_Overflow) and [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
