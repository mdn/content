---
title: overflow-inline
slug: Web/CSS/overflow-inline
page-type: css-property
browser-compat: css.properties.overflow-inline
---

{{CSSRef}}

The **`overflow-inline`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows the inline start and end edges of a box. This may be nothing, a scroll bar, or the overflow content.

> [!NOTE]
> The `overflow-inline` property maps to {{Cssxref("overflow-y")}} or {{Cssxref("overflow-x")}} depending on the writing mode of the document.

## Syntax

```css
/* Keyword values */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: clip;
overflow-inline: scroll;
overflow-inline: auto;

/* Global values */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

The `overflow-inline` property is specified as a single {{CSSXref("overflow_value", "&lt;overflow&gt;")}} keyword value.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's inline start and end edges.
- `hidden`
  - : Content is clipped if necessary to fit the inline dimension in the padding box. No scrollbars are provided.
- `clip`
  - : Overflow content is clipped at the element's overflow clip edge that is defined using the {{CSSXref("overflow-clip-margin")}} property.
- `scroll`
  - : Content is clipped if necessary to fit in the padding box in the inline dimension. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.
- `auto`
  - : Depends on the user agent. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block-formatting context. Desktop browsers provide scrollbars if content overflows.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting inline overflow behavior

#### HTML

```html
<ul>
  <li>
    <code>overflow-inline: hidden</code> (hides the text outside the box)
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: scroll</code> (always adds a scrollbar)
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: visible</code> (displays the text outside the box if
    needed)
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: auto</code> (equivalent to <code>scroll</code>
    in most browsers)
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-inline: clip</code> (hides the text outside the box beyond
    the overflow clip edge)
    <code>clip</code>
    <div id="div5">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

#### CSS

```css
div {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-inline: hidden;
}
#div2 {
  overflow-inline: scroll;
}
#div3 {
  overflow-inline: visible;
}
#div4 {
  overflow-inline: auto;
}
#div5 {
  overflow-inline: clip;
  overflow-clip-margin: 2em;
}
```

#### Result

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("clip")}}, {{cssxref("display")}}, {{cssxref("overflow")}}, {{cssxref("overflow-block")}}, {{cssxref("overflow-clip-margin")}}, {{cssxref("overflow-x")}}, {{cssxref("overflow-y")}}, {{cssxref("text-overflow")}}, {{cssxref("white-space")}}
- [CSS overflow](/en-US/docs/Web/CSS/CSS_overflow) module
- [CSS logical properties](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [CSS writing modes](/en-US/docs/Web/CSS/CSS_writing_modes)
- [Learn: Overflowing content](/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow)
