---
title: transition-property
slug: Web/CSS/transition-property
page-type: css-property
browser-compat: css.properties.transition-property
---

{{CSSRef}}

The **`transition-property`** [CSS](/en-US/docs/Web/CSS) property sets the CSS properties to which a [transition effect](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) should be applied.

{{EmbedInteractiveExample("pages/css/transition-property.html")}}

If you specify a shorthand property (e.g., {{cssxref("background")}}), all of its longhand sub-properties that can be animated will be.

## Syntax

```css
/* Keyword values */
transition-property: none;
transition-property: all;

/* <custom-ident> values */
transition-property: test_05;
transition-property: -specific;
transition-property: sliding-vertically;

/* Multiple values */
transition-property: test1, animation4;
transition-property: all, height, color;
transition-property:
  all,
  -moz-specific,
  sliding;

/* Global values */
transition-property: inherit;
transition-property: initial;
transition-property: revert;
transition-property: revert-layer;
transition-property: unset;
```

### Values

- `none`
  - : No properties will transition.
- `all`
  - : All properties that can transition will.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : A string identifying the property to which a transition effect should be applied when its value changes.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple example

This example performs a four-second font size transition when the user hovers over the element, the `transition-property` is the `font-size`.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

```css
.target {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
}

.target:hover {
  font-size: 36px;
}
```

{{EmbedLiveSample('Simple_example', 600, 100)}}

You will find more examples of `transition-property` included in the main [CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) article.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
