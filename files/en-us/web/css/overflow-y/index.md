---
title: overflow-y
slug: Web/CSS/overflow-y
tags:
  - CSS
  - CSS Box Model
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.overflow-y
---
{{CSSRef}}

The **`overflow-y`** [CSS](/en-US/docs/Web/CSS) property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.

{{EmbedInteractiveExample("pages/css/overflow-y.html")}}

## Syntax

```css
/* Keyword values */
overflow-y: visible;
overflow-y: hidden;
overflow-y: clip;
overflow-y: scroll;
overflow-y: auto;

/* Global values */
overflow-y: inherit;
overflow-y: initial;
overflow-y: revert;
overflow-y: revert-layer;
overflow-y: unset;
```

The `overflow-y` property is specified as a single keyword chosen from the list of values below.

If {{cssxref("overflow-x")}} is `hidden`, `scroll` or `auto` and this property is `visible` (default) it will implicitly compute to `auto`.

### Values

- `visible`
  - : Content is not clipped and may be rendered outside the padding box's top and bottom edges.
- `hidden`
  - : Content is clipped if necessary to fit vertically in the padding box. No scrollbars are provided.
- `clip`
  - : Like for `hidden`, the content is clipped to the element's padding box. The difference between `clip` and `hidden` is that the `clip` keyword also forbids all scrolling, including programmatic scrolling. The box is not a scroll container, and does not start a new formatting context. If you wish to start a new formatting context, you can use {{cssxref("display", "display: flow-root", "#flow-root")}} to do so.
- `scroll`
  - : Content is clipped if necessary to fit vertically in the padding box. Browsers display scrollbars whether or not any content is actually clipped. (This prevents scrollbars from appearing or disappearing when the content changes.) Printers may still print overflowing content.
- `auto`
  - : Depends on the user agent. If content fits inside the padding box, it looks the same as `visible`, but still establishes a new block-formatting context. Desktop browsers provide scrollbars if content overflows.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting overflow-y behavior

#### HTML

```html
<ul>
  <li><code>overflow-y:hidden</code> — hides the text outside the box
  <div id="div1">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:scroll</code> — always adds a scrollbar
  <div id="div2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:visible</code> — displays the text outside the box if needed
  <div id="div3">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>

  <li><code>overflow-y:auto</code> — on most browser, equivalent to <code>scroll</code>
  <div id="div4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </div>
  </li>
</ul>
```

#### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width:  250px;
  height: 100px;
}

#div1 { overflow-y: hidden; margin-bottom: 12px;}
#div2 { overflow-y: scroll; margin-bottom: 12px;}
#div3 { overflow-y: visible; margin-bottom: 120px;}
#div4 { overflow-y: auto; margin-bottom: 120px;}
```

#### Result

{{EmbedLiveSample("Setting_overflow-y_behavior", "100%", "780")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-x")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
