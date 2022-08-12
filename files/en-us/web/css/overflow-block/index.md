---
title: overflow-block
slug: Web/CSS/overflow-block
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-block
---
{{CSSRef}}

The **`overflow-block`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows the block start and block end edges of a box. This may be nothing, a scroll bar, or the overflow content.

> **Note:** The `overflow-block` property maps to {{Cssxref("overflow-y")}} or {{Cssxref("overflow-x")}} depending on the writing mode of the document.

## Syntax

```css
/* Keyword values */
overflow-block: visible;
overflow-block: hidden;
overflow-block: scroll;
overflow-block: auto;

/* Global values */
overflow-block: inherit;
overflow-block: initial;
overflow-block: revert;
overflow-block: revert-layer;
overflow-block: unset;
```

The `overflow-block` property is specified as a single keyword chosen from the list of values below.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's block start and block end edges.
- `hidden`
  - : Content is clipped if necessary to fit the block dimension in the padding box. No scrollbars are provided.
- `scroll`
  - : Content is clipped if necessary to fit in the block dimension in the padding box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.
- `auto`
  - : Depends on the user agent. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block-formatting context. Desktop browsers provide scrollbars if content overflows.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<ul>
  <li><code>overflow-block:hidden</code> — hides the text outside the box
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:scroll</code> — always adds a scrollbar
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:visible</code> — displays the text outside the box if needed
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-block:auto</code> — on most browser, equivalent to <code>scroll</code>
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-block: hidden; margin-bottom: 120px;}
#div2 { overflow-block: scroll; margin-bottom: 120px;}
#div3 { overflow-block: visible; margin-bottom: 120px;}
#div4 { overflow-block: auto; margin-bottom: 120px;}
```

### Result

{{EmbedLiveSample("Examples", "100%", "780")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
- [CSS Logical Properties](/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [Writing Modes](/en-US/docs/Web/CSS/CSS_Writing_Modes)
