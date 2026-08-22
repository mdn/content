---
title: "& nesting selector"
slug: Web/CSS/Reference/Selectors/Nesting_selector
page-type: css-selector
browser-compat: css.selectors.nesting
sidebar: cssref
---

The CSS **`&` nesting selector** explicitly states the relationship between parent and child rules when using [CSS nesting](/en-US/docs/Web/CSS/Guides/Nesting). It makes the nested child rule selectors _relative to the parent element_. Without the `&` nesting selector, the child rule selector selects child elements. The child rule selectors have the same [specificity](/en-US/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity) weight as if they were within {{cssxref(":is()")}}.

> [!NOTE]
> _Child rule_ does not mean _child element selector_. A child rule can target parent element or child elements depending on use of the `&` nesting selector.

If not used in nested style rule, the `&` nesting selector represents the [scoping root](/en-US/docs/Web/CSS/Reference/Selectors/:scope).

## Syntax

```plain
/* Nested directly — adds whitespace (descendant) */
parentRule {
  & childRule { }
}

/* Attached to parent — no whitespace (e.g., pseudo-class, compound selector) */
parentRule {
  &:pseudo-class { }
}

/* Reversed context — & placed after another selector */
parentRule {
  otherRule & { }
}
```

## Description

### `&` and whitespace

When nesting _without_ `&`, the browser automatically inserts whitespace between selectors, producing a descendant selector:

```css
.parent-rule {
  .child-rule {
    /* child rule properties */
  }
}
/* Equivalent to: .parent-rule .child-rule { … } */
```

When `&` is used _without_ whitespace — such as with a {{cssxref('Pseudo-classes', 'pseudo-class')}} or a [compound selector](/en-US/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) — the nested rule attaches directly to the parent:

```css
.parent-rule {
  &:hover {
    /* child rule properties */
  }
}
/* Equivalent to: .parent-rule:hover { … } */
```

Without `&`, `:hover` would become `.parent-rule *:hover`, matching any _hovered descendant_ rather than the parent element itself.

### Appending `&` to reverse context

Placing `&` after another selector reverses the relationship, making the parent rule a descendant of that selector:

```css
.card {
  .featured & {
    /* .featured .card styles */
  }
}
/* Equivalent to: .featured .card { … } */
```

`&` can appear multiple times in a single selector:

```css
.card {
  .featured & & {
    /* .featured .card .card styles */
  }
}
/* Equivalent to: .featured .card .card { … } */
```

### `&` cannot represent pseudo-elements

Because `&` is equivalent to {{cssxref(":is()")}}, it cannot represent pseudo-elements. No generated content will be styled red below, because `.important :is(.foo::before)` cannot match anything:

```css
.foo::before {
  content: "Hello";

  .important & {
    color: red; /* has no effect */
  }
}
```

This limitation also applies to [nested at-rules](/en-US/docs/Web/CSS/Guides/Nesting/At-rules), whose properties are implicitly wrapped in an `&` selector:

```css
.foo::before {
  content: "Hello";

  @media (width < 600px) {
    color: red; /* has no effect — implicitly wrapped in &, i.e. :is(.foo::before) */
  }
}
```

## Examples

Both of the following examples produce the same output. The first one uses normal CSS styles and the second one uses the `&` nesting selector.

### Using normal CSS styles

This example uses normal CSS styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
}

.example > a {
  color: tomato;
}

.example > a:hover,
.example > a:focus {
  color: ivory;
  background-color: tomato;
}
```

#### Result

{{EmbedLiveSample('Original_CSS_styles','100%','65')}}

### Using `&` in nested CSS styles

This example uses nested CSS styling.

#### HTML

```html
<p class="example">
  This paragraph <a href="#">contains a link</a>, try hovering or focusing it.
</p>
```

#### CSS

```css
.example {
  font-family: system-ui;
  font-size: 1.2rem;
  & > a {
    color: tomato;
    &:hover,
    &:focus {
      color: ivory;
      background-color: tomato;
    }
  }
}
```

#### Result

{{EmbedLiveSample('Nested_CSS_styles','100%','65')}}

### Using `&` outside nested rule

If not used in a nested style rule, `&` represents the [scoping root](/en-US/docs/Web/CSS/Reference/Selectors/:scope). In this case, all styles apply to the [document](/en-US/docs/Web/API/Document).

```html
<p>Hover over the output box to change document's background color.</p>
```

```css
& {
  color: blue;
  font-weight: bold;
}

&:hover {
  background-color: wheat;
}
```

#### Result

{{EmbedLiveSample('Usage_outside_nested_rule','100%','65')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS nesting](/en-US/docs/Web/CSS/Guides/Nesting/Using)
- [CSS nesting](/en-US/docs/Web/CSS/Guides/Nesting) module
- [CSS selectors](/en-US/docs/Web/CSS/Guides/Selectors) module
