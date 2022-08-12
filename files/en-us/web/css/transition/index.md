---
title: transition
slug: Web/CSS/transition
tags:
  - CSS
  - CSS Property
  - CSS Transitions
  - Reference
  - recipe:css-shorthand-property
browser-compat: css.properties.transition
---
{{CSSRef}}

The **`transition`** [CSS](/en-US/docs/Web/CSS) property is a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties) for {{ cssxref("transition-property") }}, {{ cssxref("transition-duration") }}, {{ cssxref("transition-timing-function") }}, and {{ cssxref("transition-delay") }}.

{{EmbedInteractiveExample("pages/css/transition.html")}}

Transitions enable you to define the transition between two states of an element. Different states may be defined using [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) like {{cssxref(":hover")}} or {{cssxref(":active")}} or dynamically set using JavaScript.

## Constituent properties

This property is a shorthand for the following CSS properties:

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

/* Apply to 2 properties */
transition: margin-right 4s, color 1s;

/* Apply to all changed properties */
transition: all 0.5s ease-out;

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

See [how things are handled](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#when_property_value_lists_are_of_different_lengths) when lists of property values aren't the same length. In short, extra transition descriptions beyond the number of properties actually being animated are ignored.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Simple example

This example performs a four-second font size transition with a one-second delay when the user hovers over the element.

#### HTML

```html
<a class="target">Hover over me</a>
```

#### CSS

```css
.target {
  font-size: 14px;
  transition: font-size 4s 1s;
}

.target:hover {
  font-size: 36px;
}
```

{{EmbedLiveSample('Simple_example', 600, 100)}}

There are several more examples of CSS transitions included in the [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) article.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS transitions](/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- {{ domxref("TransitionEvent") }}
