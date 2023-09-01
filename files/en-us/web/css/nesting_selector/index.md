---
title: "& nesting selector"
slug: Web/CSS/Nesting_selector
page-type: css-selector
browser-compat: css.selectors.nesting
---

{{CSSRef}}

The CSS **`&` nesting selector** explicitly states the relationship between parent and child rules when using [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting). Nested child rule selectors are relative to the parent rule selectors, with the child rule component having the same [specificity](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) weight as if they were within {{cssxref(":is", ":is()")}}.

## Syntax

```css
parentRule {
  /* parent rule style properties */
  & childRule {
    /* child rule style properties */
  }
}
```

### `&` nesting selector and whitespace

In this example, nesting is done without the **`&` nesting selector**. When the browser parses the nested selectors, it automatically adds whitespace between the selectors to create a new CSS selector rule.

```css
.parent-rule {
  /* parent rule properties */
  .child-rule {
    /* child rule properties */
  }
}

/* the browser parses this as */
.parent-rule {
  /* parent rule style properties */
}

.parent-rule .child-rule {
  /* style properties for .child-rule descendants for .parent-rule ancestors */
}
```

When the nested rule needs to be attached (with no whitespace) to the parent rule, such as when using a {{cssxref('Pseudo-classes', 'pseudo class')}} or creating [compound selectors](/en-US/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector), the **`&` nesting selector** must be immediately prepended to achieve the desired effect.

Consider an example where we want to style an element, providing styles to be applied at all times, and also nesting some styles to be applied only on hover. If the **`&` nesting selector** is not included, whitespace is added and we end up with a ruleset that applies the nested styles to any _hovered descendant of the parent rule selector_. This is not what we wanted.

```css
.parent-rule {
  /* parent rule properties */
  :hover {
    /* child rule properties */
  }
}

/* the browser parses this as */
.parent-rule {
  /* parent rule properties */
}

.parent-rule *:hover {
  /* child rule properties */
}
```

With the **`&` nesting selector** added with no whitespace, the elements matched by the parent rule will be styled when hovered.

```css
.parent-rule {
  /* parent rule properties */
  &:hover {
    /* child rule properties */
  }
}

/* the browser parses this as */
.parent-rule {
  /* parent rule properties */
}

.parent-rule:hover {
  /* child rule properties */
}
```

## Appending the `&` nesting selector

The `&` nesting selector can also be appended to reverse the context of the rules.

```css
.card {
  /* .card styles */
  .featured & {
    /* .featured .card styles */
  }
}

/* the browser parses this as */
.card {
  /* .card styles */
}

.featured .card {
  /* .featured .card styles */
}
```

The `&` nesting selector can be placed multiple times:

```css
.card {
  /* .card styles */
  .featured & & & {
    /* .featured .card .card .card styles */
  }
}

/* the browser parses this as */
.card {
  /* .card styles */
}

.featured .card .card .card {
  /* .featured .card .card .card styles */
}
```

## Examples

Both of the following examples produce the same output. The first one uses normal CSS styles and the second one uses the `&` nesting selector.

### Normal CSS styles

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

### Nested CSS styles

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
  & a {
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [CSS nesting](/en-US/docs/Web/CSS/CSS_nesting) module
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
