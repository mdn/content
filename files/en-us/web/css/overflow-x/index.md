---
title: overflow-x
slug: Web/CSS/overflow-x
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-x
---
{{CSSRef}}

The **`overflow-x`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## Syntax

```css
/* Keyword values */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* Global values */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

The `overflow-x` property is specified as a single keyword chosen from the list of values below.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's left and right edges. If {{cssxref("overflow-y")}} is `hidden`, `scroll` or `auto` and this property is `visible`, it will implicitly compute to `auto`.
- `hidden`
  - : Content is clipped if necessary to fit horizontally in the padding box. No scrollbars are provided.
- `clip`
  - : Like for `hidden`, the content is clipped to the element's padding box. The difference between `clip` and `hidden` is that the `clip` keyword also forbids all scrolling, including programmatic scrolling. The box is not a scroll container, and does not start a new formatting context. If you wish to start a new formatting context, you can use {{cssxref("display", "display: flow-root", "#flow-root")}} to do so.
- `scroll`
  - : Content is clipped if necessary to fit horizontally in the padding box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.
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
  <li><code>overflow-x:hidden</code> — hides the text outside the box
    <div id="div1">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:scroll</code> — always adds a scrollbar
    <div id="div2">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:visible</code> — displays the text outside the box if needed
    <div id="div3">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>

  <li><code>overflow-x:auto</code> — on most browsers, equivalent to <code>scroll</code>
    <div id="div4">
      ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ
    </div>
  </li>
</ul>
```

### CSS

```css
#div1, #div2, #div3, #div4 {
  border: 1px solid black;
  width:  250px;
  margin-bottom: 12px;
}

#div1 { overflow-x: hidden;}
#div2 { overflow-x: scroll;}
#div3 { overflow-x: visible;}
#div4 { overflow-x: auto;}
```

### Result

{{EmbedLiveSample("Examples", "100%", "270")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
