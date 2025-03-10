---
title: overflow-clip-margin
slug: Web/CSS/overflow-clip-margin
page-type: css-property
browser-compat: css.properties.overflow-clip-margin
---

{{CSSRef}}

The **`overflow-clip-margin`** [CSS](/en-US/docs/Web/CSS) property determines how far outside its bounds an element with [`overflow: clip`](/en-US/docs/Web/CSS/overflow) may be painted before being clipped. The bound defined by this property is called the _overflow clip edge_ of the box.

## Syntax

```css
/* <length> values */
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* <visual-box> | <length> */
overflow-clip-margin: content-box 5px;

/* Global values */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: revert-layer;
overflow-clip-margin: unset;
```

The `<visual-box>` value, which defaults to `padding-box`, specifies the box edge to use as the overflow clip edge origin. The {{cssxref("&lt;length&gt;")}} value specified in `overflow-clip-margin` must be nonnegative.

> [!NOTE]
> If the element does not have `overflow: clip` then this property will be ignored.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### HTML

```html
<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width: 250px;
  height: 100px;
  overflow: clip;
  overflow-clip-margin: 20px;
}
```

### Result

{{EmbedLiveSample("Examples", "100%", "280")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow")}}, {{Cssxref("overflow-inline")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
