---
title: :nth-last-of-type()
slug: Web/CSS/:nth-last-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.nth-last-of-type
---

{{CSSRef}}

The **`:nth-last-of-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name), counting from the end.

{{InteractiveExample("CSS Demo: :nth-last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-last-of-type(3n) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Vegetables:</dt>
  <dd>1. Tomatoes</dd>
  <dd>2. Cucumbers</dd>
  <dd>3. Mushrooms</dd>
  <dt>Fruits:</dt>
  <dd>4. Apples</dd>
  <dd>5. Mangos</dd>
  <dd>6. Pears</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntax

The `nth-last-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

See {{Cssxref(":nth-last-child")}} for a more detailed explanation of its syntax.

```css-nolint
:nth-last-of-type(<An+B> | even | odd) {
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
