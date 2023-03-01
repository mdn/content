---
title: ":nth-last-of-type()"
slug: Web/CSS/:nth-last-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.nth-last-of-type
---

{{CSSRef}}

The **`:nth-last-of-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name), counting from the end.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-last-of-type.html", "tabbed-shorter")}}

## Syntax

The `nth-last-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

See {{Cssxref(":nth-last-child")}} for a more detailed explanation of its syntax.

```css-nolint
:nth-last-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
```

## Examples

### HTML

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <del>This is struck through.</del>
  <span>Here is one last span.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Result

{{EmbedLiveSample('Examples')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-last-child")}}, {{Cssxref(":nth-of-type")}}
