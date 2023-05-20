---
title: ":only-child"
slug: Web/CSS/:only-child
page-type: css-pseudo-class
browser-compat: css.selectors.only-child
---

{{CSSRef}}

The **`:only-child`** CSS [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) represents an element without any siblings. This is the same as `:first-child:last-child` or `:nth-child(1):nth-last-child(1)`, but with a lower specificity.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-only-child.html", "tabbed-shorter")}}

> **Note:** As originally defined, the selected element had to have a parent. Beginning with Selectors Level 4, this is no longer required.

## Syntax

```css
:only-child {
  /* ... */
}
```

## Examples

### Basic example

#### HTML

```html
<div>
  <div>I am an only child.</div>
</div>

<div>
  <div>I am the 1st sibling.</div>
  <div>I am the 2nd sibling.</div>
  <div>
    I am the 3rd sibling,
    <div>but this is an only child.</div>
  </div>
</div>
```

#### CSS

```css
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

#### Result

{{EmbedLiveSample('Basic_example','100%',180)}}

### A list example

#### HTML

```html
<ol>
  <li>
    First
    <ul>
      <li>This list has just one element.</li>
    </ul>
  </li>
  <li>
    Second
    <ul>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
      <li>This list has three elements.</li>
    </ul>
  </li>
</ol>
```

#### CSS

```css
li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}
```

#### Result

{{EmbedLiveSample('A_list_example', '100%', 210)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref(":only-of-type")}}
- {{Cssxref(":first-child")}}
- {{Cssxref(":last-child")}}
- {{Cssxref(":nth-child")}}
