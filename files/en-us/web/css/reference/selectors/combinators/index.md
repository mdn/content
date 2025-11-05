---
title: CSS combinators
short-title: Combinators
slug: Web/CSS/Reference/Selectors/Combinators
page-type: listing-page
sidebar: cssref
---

CSS **combinators** define relationships between [selectors](/en-US/docs/Web/CSS/Reference/Selectors). They allow you to select elements based on their relationship to other elements in the document tree.

For example, to style only paragraph elements that are direct children of a {{HTMLElement("div")}}, you can use the child combinator (`>`):

```css
/* Set top margin on <p> elements that are direct children of <div> */
div > p {
  margin-top: 0;
}
```

## Syntax

```css
/* Combine selectors to express relationships */
selector1 combinator selector2 {
  property: value;
}
```

## Index of combinators

- [Child combinator (`>`)](/en-US/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [Column combinator (`||`)](/en-US/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [Descendant combinator (" ")](/en-US/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [Namespace separator (`|`)](/en-US/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Next-sibling combinator (`+`)](/en-US/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [Selector list (`,`)](/en-US/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Subsequent-sibling combinator (`~`)](/en-US/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## See also

- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
- [Selectors and combinators](/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
