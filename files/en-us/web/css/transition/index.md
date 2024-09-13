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

- [`transition-behavior`](/en-US/docs/Web/CSS/transition-behavior)
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
transition: 200ms linear 50ms;

/* Global values */
transition: inherit;
transition: initial;
transition: revert;
transition: revert-layer;
transition: unset;
```

The `transition` property value is specified as one of the following:

- The special value `none`, which specifies that no transitions will occur on this element. This is the default value.
- One or more single-property transitions, separated by commas.

Each single-property transition describes the transition that should be applied to a single property or all properties. It includes:

- zero or one value representing the property or properties to which the transition should apply. This can be set as:
  - A {{cssxref("&lt;custom-ident&gt;")}} representing a single property.
  - The special value `all`, which specifies that the transition will be applied to all properties that change as the element changes state.
  - No value, in which case a value of `all` will be inferred and the specified transition will still apply to all changing properties.
- zero or one {{cssxref("&lt;easing-function&gt;")}} value representing the easing function to use
- zero, one, or two {{cssxref("&lt;time&gt;")}} values. The first value that can be parsed as a time is assigned to the {{cssxref("transition-duration")}}, and the second value that can be parsed as a time is assigned to {{cssxref("transition-delay")}}.
- zero or one value declaring whether to start transitions for properties whose animation behavior is [discrete](/en-US/docs/Web/CSS/CSS_animated_properties#discrete). The value, if present, is either the keyword `allow-discrete` or the keyword `normal`.

If you specify `all` as the transition property for one single-property transition, but then specify subsequent single-property transitions with {{cssxref("&lt;custom-ident&gt;")}} values, those subsequent transitions will override the first one. For example:

```css
transition:
  all 200ms,
  opacity 400ms;
```

In this case, all the properties that change as the element changes state will transition with a duration of 200ms except for {{cssxref("opacity")}}, which will take 400ms to transition.

See [how things are handled](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths) when lists of property values aren't the same length. In short, extra transition descriptions beyond the number of properties actually being animated are ignored.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic example

In this example, when the user hovers over the element, there is a half-second (`500ms`) delay before a two-second `background-color` transition occurs.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

We include two {{cssxref("time")}} values. In the `transition` shorthand, the first `<time>` value is the `transition-duration`. The second time value is the `transition-delay`. Both default to `0s` if omitted.

```css
.target {
  font-size: 2rem;
  background-color: palegoldenrod;
  transition: background-color 2s 500ms;
}

.target:hover {
  background-color: darkorange;
}
```

{{EmbedLiveSample('Basic_example', 600, 100)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS transitions](/en-US/docs/Web/CSS/CSS_transitions) module
- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
