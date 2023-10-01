---
title: ":nth-of-type()"
slug: Web/CSS/:nth-of-type
page-type: css-pseudo-class
browser-compat: css.selectors.nth-of-type
---

{{CSSRef}}

The **`:nth-of-type()`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) matches elements based on their position among siblings of the same type (tag name).

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-nth-of-type.html", "tabbed-shorter")}}

## Syntax

The `nth-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements.

See {{Cssxref(":nth-child")}} for a more detailed explanation of its syntax.

```css-nolint
:nth-of-type(<an-plus-b> | even | odd) {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <div>This element isn't counted.</div>
  <p>1st paragraph.</p>
  <p class="fancy">2nd paragraph.</p>
  <div>This element isn't counted.</div>
  <p class="fancy">3rd paragraph.</p>
  <p>4th paragraph.</p>
</div>
```

#### CSS

```css
/* Odd paragraphs */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Even paragraphs */
p:nth-of-type(2n) {
  color: blue;
}

/* First paragraph */
p:nth-of-type(1) {
  font-weight: bold;
}

/* This will match the 3rd paragraph as it will match elements which are 2n+1 AND have a class of fancy.
The second paragraph has a class of fancy but is not matched as it is not :nth-of-type(2n+1) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

#### Result

{{EmbedLiveSample('Basic_example', 250, 250)}}

> **Note:** There is no way to select the nth-of-class using this selector. The selector looks at the type only when creating the list of matches. You can however apply CSS to an element based on `:nth-of-type` location **and** a class, as shown in the example above.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
