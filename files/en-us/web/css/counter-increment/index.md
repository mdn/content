---
title: counter-increment
slug: Web/CSS/counter-increment
tags:
  - CSS
  - CSS Counter
  - CSS Lists
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.counter-increment
---
{{CSSRef}}

The **`counter-increment`** [CSS](/en-US/docs/Web/CSS) property increases or decreases the value of a [CSS counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) by a given value.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

> **Note:** The counter's value can be reset to an arbitrary number using the {{cssxref("counter-reset")}} CSS property.

## Syntax

```css
/* Increment "my-counter" by 1 */
counter-increment: my-counter;

/* Decrement "my-counter" by 1 */
counter-increment: my-counter -1;

/* Increment "counter1" by 1, and decrement "counter2" by 4 */
counter-increment: counter1 counter2 -4;

/* Do not increment/decrement anything: used to override less specific rules */
counter-increment: none;

/* Global values */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

The `counter-increment` property is specified as either one of the following:

- A `<custom-ident>` naming the counter, followed optionally by an `<integer>`. You may specify as many counters to increment as you want, with each name or name-number pair separated by a space.
- The keyword value `none`.

### Values

- {{cssxref("&lt;custom-ident&gt;")}}
  - : The name of the counter to increment.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to add to the counter. Defaults to `1` if not specified.
- `none`
  - : No counter must be incremented. This is used as the default value, or to cancel an increment in more specific rules.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Incrementing named counters

```css
h1 {
  counter-increment: chapter section 2 page;
  /* Increases the value of the chapter and page counters by 1,
     and the section counter by 2 */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- The {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
