---
title: CSS nesting at-rules
slug: Web/CSS/CSS_nesting/Nesting_at-rules
page-type: guide
---

{{CSSRef}}

Any [at-rule](/en-US/docs/Web/CSS/At-rule) whose body contains style rules can be nested inside another style rule using CSS nesting. Style rules nested inside at-rules take their nesting selector definition from the nearest ancestor style rule. Properties can be directly included inside a nested at-rule, acting as if they were nested in a `& {...}` block.

## at-rules that can be nested

- {{cssxref('@media')}}
- {{cssxref('@supports')}}
- {{cssxref('@layer')}}
- {{cssxref('@scope')}}
- {{cssxref('@container')}}

## Examples

### Nesting `@media` at-rule

In this example we see three blocks of CSS. The first one shows how to write typical at-rule nesting, the second is an expanded way of writing the nesting as the browser parses it, and the third one shows the non-nested equivalent.

#### Nested CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
  }
}
```

#### Expanded nested CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    & {
      grid-auto-flow: column;
    }
  }
}
```

#### Non-nested CSS

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
```

### Multiple nested `@media` at-rules

At-rules can be nested within themselves, in this example we see the nested at-rules and how they are written without nesting.

#### Nested CSS

```css
.foo {
  display: grid;
  @media (orientation: landscape) {
    grid-auto-flow: column;
    @media (min-width > 1024px) {
      max-inline-size: 1024px;
    }
  }
}
```

#### Non-nested CSS

```css
.foo {
  display: grid;
}
@media (orientation: landscape) {
  .foo {
    grid-auto-flow: column;
  }
}
@media (orientation: landscape) and (min-width > 1024px) {
  .foo {
    max-inline-size: 1024px;
  }
}
```

### Nesting Cascade Layers (`@layer`)

{{cssxref('@layer', 'Cascade Layers')}} can be {{cssxref('@layer', 'nested to create child-layers', '#nesting_layers')}}, these are joined with a `.`.

#### Defining the parent & child layers

Named cascade layers are defined prior to the named layers being used.

```css
@layer parent {
  @layer child;
}
```

#### Assigning rules to layers with nesting

Here the selector `.foo` is assign the `@layer` **parent** with its rules. The `@layer` **child** is nested creating `parent.child` sub-layer, the the `&` nesting selector is used to create the rules for the selector `.foo .bar`.

```css
.foo {
  @layer parent {
    block-size: 100%;
    @layer child {
      & .bar {
        min-block-size: 100%;
      }
    }
  }
}
```

#### Equivalent without nesting

```css
@layer base {
  .foo {
    block-size: 100%;
  }
}
@layer base.support {
  .foo .bar {
    min-block-size: 100%;
  }
}
```

## See Also

- [CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting)
- [`&` nesting selector](/en-US/docs/Web/CSS/Nesting_selector)
- [Using CSS Nesting](/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
- [Nesting and specificity](/en-US/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
