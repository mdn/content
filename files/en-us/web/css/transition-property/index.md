---
title: transition-property
slug: Web/CSS/transition-property
page-type: css-property
browser-compat: css.properties.transition-property
---

{{CSSRef}}

The **`transition-property`** [CSS](/en-US/docs/Web/CSS) property sets the CSS properties to which a [transition effect](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) should be applied.

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

### Basic example

When the button is hovered or focused, it undergoes a one-second color transition; the `transition-property` is [`background-color`](/en-US/docs/Web/CSS/background-color).

#### HTML

```html
<button class="target">Focus me!</button>
```

#### CSS

```css hidden
html {
  height: 100vh;
}

button {
  font-size: 1.4rem;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  outline: none;
}
```

```css
.target {
  transition-property: background-color;
  transition-duration: 1s;
  background-color: #ccc;
}

.target:hover,
.target:focus {
  background-color: #eee;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

See our [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) guide for more `transition-property` examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref('transition')}}
- {{cssxref('transition-duration')}}
- {{cssxref('transition-timing-function')}}
- {{cssxref('transition-delay')}}
- {{domxref("TransitionEvent")}}
