---
title: overflow-inline
slug: Web/CSS/overflow-inline
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-inline
---
{{CSSRef}}

The **`overflow-inline`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows the inline start and end edges of a box. This may be nothing, a scroll bar, or the overflow content.

> **Note:** The `overflow-inline` property maps to {{Cssxref("overflow-y")}} or {{Cssxref("overflow-x")}} depending on the writing mode of the document.

## Syntax

```css
/* Keyword values */
overflow-inline: visible;
overflow-inline: hidden;
overflow-inline: scroll;
overflow-inline: auto;

/* Global values */
overflow-inline: inherit;
overflow-inline: initial;
overflow-inline: revert;
overflow-inline: revert-layer;
overflow-inline: unset;
```

The `overflow-inline` property is specified as a single keyword chosen from the list of values below.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's inline start and end edges.
- `hidden`
  - : Content is clipped if necessary to fit the inline dimension in the padding box. No scrollbars are provided.
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
  <li><code>overflow-inline:hidden</code> — hides the text outside the box
    <div id="div1">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:scroll</code> — always adds a scrollbar
    <div id="div2">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:visible</code> — displays the text outside the box if needed
    <div id="div3">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-inline:auto</code> — on most browsers, equivalent to <code>scroll</code>
    <div id="div4">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>
</ul>
```

#### CSS

```css
#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 { overflow-inline: hidden;}
#div2 { overflow-inline: scroll;}
#div3 { overflow-inline: visible;}
#div4 { overflow-inline: auto;}
```

#### Result

{{EmbedLiveSample("Setting_inline_overflow_behavior", "100%", "270")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-block")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS Logical Properties](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [Writing Modes](/en-US/docs/Web/CSS/CSS_Writing_Modes)
