---
title: '@layer'
slug: Web/CSS/@layer
tags:
  - At-rule
  - CSS
  - Reference
  - Web
  - layer
  - cascade
browser-compat: css.at-rules.layer
---
{{CSSRef}}{{SeeCompatTable}}

The **`@layer`** [CSS](/en-US/docs/Web/CSS) [at-rule](/en-US/docs/Web/CSS/At-rule) declares a _cascade layer_, rules within a cascade layer cascade together, giving more control over the cascade to web developers.

```css
@layer utilities {
  /* creates a named layer called utilities. */
}
```

## Syntax

The `@layer` at-rule is used to create a cascade layer in one of three ways. The first is as in the example above, creating a block at-rule with the CSS rules for that layer inside.

```css
@layer utilities {
  .padding-sm {
    padding: .5rem;
  }

  .padding-lg {
    padding: .8rem;
  }
}
```

A cascade layer can be created with {{cssxref("@import")}}, in this case the rules would be in the imported stylesheet:

```css
@import(utilities.css) layer(utilities);
```

You can also create a named cascade layer without assigning any styles. This can be a single name:

```css
@layer utilities
```

Or, multiple layers can be defined at once. For example:

```css
@layer theme, layout, utilities
```

This is useful because the initial order in which layers are declared indicates which layer has precedence. As with declarations, the last layer to be listed will win if declarations are found in multiple layers. Therefore, with the preceding example, if a competing rule was found in `theme` and `utilities` the one in `utilities` would win and be applied.

The rule in `utilities` would be applied _even if it has lower specificity_ than the rule in `theme`. This is because once layer order has been established, specificity and order of appearance are ignored. This enables the creation of simpler CSS selectors, as you do not have to ensure that a selector will have high enough specificity to override competing rules, all you need to ensure is that it appears in a later layer.

> **Note**: Having declared your layer names, thus setting their order, you can add CSS rules to the layer by redeclaring the name. The styles are then appended to the layer and the layer order will not be changed.

Any styles not in a layer are gathered together and placed into an anonymous layer that comes first in the order of layers, this means that anything in a layer will override things not in a layer.

### Nesting layers

Layers may be nested. For example:

```css
@layer framework {
  @layer layout {

  }
}
```

To append rules to the `layout` layer inside `framework` join the two names with a `.`.

```css
@layer framework.layout {
  p {
    margin-block: 1rem;
  }
}
```

### Anonymous layers

If a layer is created with no name, for example:

```css
@layer {
  p {
    margin-block: 1rem;
  }
}
```

Then an anonymous, unnamed, layer is created. This functions in the same way as named layers, however rules cannot be assigned to it later.

## Formal syntax

{{CSSSyntax}}

## Examples

### Simple example

In the following example, two CSS rules are created. One for the {{htmlelement("p")}} element, which is inside a layer named `type`. In addition a rule is created outside of any layer for `.box p`.

Without layers, the selector `box p` would have the highest specificity and therefore the text `Hello, world!` will display in green. With layers, specificity and order outside of layers is ignored. As the `type` layer comes after the anonymous layer created to hold non-layer content, the text will be purple.

#### HTML

```html
<div class="box">
  <p>Hello, world!</p>
</div>
```

#### CSS

```css
@layer type {
  p {
    color: rebeccapurple;
  }
}

.box p {
  font-weight: bold;
  color: green;
}
```

#### Result

{{EmbedLiveSample("Simple_example")}}

### Assigning rules to existing layers

In the following example, two layers are created with no rules applied, then CSS rules are applied to the two layers. The `base` layer defines a color, border, font-size, and padding. The `special` layer defines a different color. As `special` comes last when the layers were defined, the color it provides is used and the text is displayed using `rebeccapurple`. All of the other rules from `base` still apply.

#### HTML

```html
<div class="item">I am displayed in <code>color: rebeccapurple</code>
because the <code>type</code> layer comes after the <code>base</code> layer.
My green border, font-size, and padding come from the <code>base</code> layer.</div>
```

#### CSS

```css
@layer base, special;

@layer special {
  .item {
    color: rebeccapurple;
  }
}

@layer base {
  .item {
    color: green;
    border: 5px solid green;
    font-size: 1.5em;
    padding: .5em;
  }
}
```

#### Result

{{EmbedLiveSample("Assigning_rules_to_existing_layers")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Future of CSS: Cascade Layers](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/)
