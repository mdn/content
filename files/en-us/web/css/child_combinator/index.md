---
title: Child combinator
slug: Web/CSS/Child_combinator
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.child
---
{{CSSRef("Selectors")}}

The **child combinator** (`>`) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first.

```css
/* List items that are children of the "my-things" list */
ul.my-things > li {
  margin: 2em;
}
```

Elements matched by the second selector must be the immediate children of the elements matched by the first selector. This is stricter than the [descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator), which matches all elements matched by the second selector for which there exists an ancestor element matched by the first selector, regardless of the number of "hops" up the DOM.

## Syntax

```css
selector1 > selector2 { style properties }
```

## Examples

### CSS

```css
span {
  background-color: aqua;
}

div > span {
  background-color: yellow;
}
```

### HTML

```html
<div>
  <span>Span #1, in the div.
    <span>Span #2, in the span that's in the div.</span>
  </span>
</div>
<span>Span #3, not in the div at all.</span>
```

### Result

{{EmbedLiveSample("Examples", "100%", 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Descendant combinator](/en-US/docs/Web/CSS/Descendant_combinator)
