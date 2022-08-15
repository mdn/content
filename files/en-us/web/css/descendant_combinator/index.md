---
title: Descendant combinator
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
browser-compat: css.selectors.descendant
---
{{CSSRef("Selectors")}}

The **descendant combinator** — typically represented by a single space (" ") character — combines two selectors such that elements matched by the second selector are selected if they have an ancestor (parent, parent's parent, parent's parent's parent, etc.) element matching the first selector. Selectors that utilize a descendant combinator are called _descendant selectors_.

```css
/* List items that are descendants of the "my-things" list */
ul.my-things li {
  margin: 2em;
}
```

The descendant combinator is technically one or more {{Glossary("CSS")}} white space characters — the space character and/or one of four control characters: carriage return, form feed, new line, and tab characters — between two selectors in the absence of another combinator. Additionally, the white space characters of which the combinator is comprised may contain any number of CSS comments.

## Syntax

```css
selector1 selector2 {
  /* property declarations */
}
```

## Examples

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>Item 1</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
  <li>
    <div>Item 2</div>
    <ul>
      <li>Subitem A</li>
      <li>Subitem B</li>
    </ul>
  </li>
</ul>
```

### Result

{{EmbedLiveSample("Examples", "100%", 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Child combinator](/en-US/docs/Web/CSS/Child_combinator)
