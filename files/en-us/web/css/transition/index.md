---
title: transition
slug: Web/CSS/transition
page-type: css-shorthand-property
browser-compat: css.properties.transition
---

{{CSSRef}}

The **`transition`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, {{ cssxref("transition-delay") }}, and {{ cssxref("transition-behavior") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Transitions enable you to define the transition between two states of an element. Different states may be defined using [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) like {{cssxref(":hover")}} or {{cssxref(":active")}} or dynamically set using JavaScript.

## Constituent properties

This property is a shorthand for the following CSS properties:

- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior) {{experimental_inline}}
- [`transition-delay`](/en-US/docs/Web/CSS/transition-delay)
- [`transition-duration`](/en-US/docs/Web/CSS/transition-duration)
- [`transition-property`](/en-US/docs/Web/CSS/transition-property)
- [`transition-timing-function`](/en-US/docs/Web/CSS/transition-timing-function)

## Syntax

```css
/* Apply to 1 property */
/* property name | duration */
transition: margin-right 4s;

/* property name | duration | delay */
transition: margin-right 4s 1s;

/* property name | duration | easing function */
transition: margin-right 4s ease-in-out;

/* property name | duration | easing function | delay */
transition: margin-right 4s ease-in-out 1s;

/* property name | duration | behavior */
transition: display 4s allow-discrete;

/* Apply to 2 properties */
transition:
  margin-right 4s,
  color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out allow-discrete;

/* Global values */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

The `transition` property is specified as one or more single-property transitions, separated by commas.

Each single-property transition describes the transition that should be applied to a single property (or the special values `all` and `none`). It includes:

- zero or one value representing the property to which the transition should apply. This may be any one of:

  - the keyword `none`
  - the keyword `all`
  - a {{cssxref("&lt;custom-ident&gt;")}} naming a CSS property.

- zero or one {{cssxref("&lt;easing-function&gt;")}} value representing the easing function to use
- zero, one, or two {{cssxref("&lt;time&gt;")}} values. The first value that can be parsed as a time is assigned to the {{cssxref("transition-duration")}}, and the second value that can be parsed as a time is assigned to {{cssxref("transition-delay")}}.
- zero or one value declaring whether to start transitions for properties whose animation behavior is [discrete](/en-US/docs/Web/CSS/CSS_animated_properties#discrete):

  - the keyword `allow-discrete`
  - the keyword `normal`

See [how things are handled](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths) when lists of property values aren't the same length. In short, extra transition descriptions beyond the number of properties actually being animated are ignored.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

> **Note:** See our [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions) guide for more `transition` examples.

### Basic example

In this example, when the user hovers over the element, there is a one-second delay before the four-second `font-size` transition occurs.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

We include two {{cssxref("time")}} values. In the `transition` shorthand, the first `<time>` value is the `transition-duration`. The second time value is the `transition-delay`. Both default to `0s` if omitted.

```css
.target {
  font-size: 14px;
  transition: font-size 4s 1s;
}

.target:hover {
  font-size: 36px;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

### Transitioning top layer elements

The [`overlay`](/en-US/docs/Web/CSS/overlay) property can be added to the list of transition properties set on an element displayed in the [top layer](/en-US/docs/Glossary/Top_layer) — for example a [popover](/en-US/docs/Web/API/Popover_API) or modal {{htmlelement("dialog")}} element. This causes its removal from the top layer to be deferred so it can be animated instead of disappearing immediately.

Sample CSS:

```css
[popover] {
  font-size: 1.2rem;
  padding: 10px;
  opacity: 0;
  transform: scaleX(0);
  transition:
    opacity 0.7s,
    transform 0.7s,
    overlay 0.7s allow-discrete,
    display 0.7s allow-discrete;
  /* Equivalent to
    all 0.7s allow-discrete */
}
```

See the [`overlay`](/en-US/docs/Web/CSS/overlay) page for a full working example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions)
- {{ domxref("TransitionEvent") }}
