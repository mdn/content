---
title: counter-set
slug: Web/CSS/counter-set
page-type: css-property
browser-compat: css.properties.counter-set
---

{{CSSRef}}

The **`counter-set`** [CSS](/en-US/docs/Web/CSS) property sets a [CSS counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) to a given value. It manipulates the value of existing counters, and will only create new counters if there isn't already a counter of the given name on the element.

{{EmbedInteractiveExample("pages/css/counter-set.html")}}

> **Note:** The counter's value can be incremented or decremented using the {{cssxref("counter-increment")}} CSS property.

## Syntax

```css
/* Set "my-counter" to 0 */
counter-set: my-counter;

/* Set "my-counter" to -1 */
counter-set: my-counter -1;

/* Set "counter1" to 1, and "counter2" to 4 */
counter-set: counter1 1 counter2 4;

/* Cancel any counter that could have been set in less specific rules */
counter-set: none;

/* Global values */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

The `counter-set` property is specified as either one of the following:

- A `<custom-ident>` naming the counter, followed optionally by an `<integer>`. You may specify as many counters to reset as you want, with each name or name-number pair separated by a space.
- The keyword value `none`.

### Values

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : The name of the counter to set.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to set the counter to on each occurrence of the element. Defaults to `0` if not specified. If there isn't currently a counter of the given name on the element, the element will create a new counter of the given name with a starting value of 0 (though it may then immediately set or increment that value to something different).
- `none`
  - : No counter set is to be performed. This can be used to override a `counter-set` defined in a less specific rule.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting named counters

```css
h1 {
  counter-set: chapter section 1 page;
  /* Sets the chapter and page counters to 0,
     and the section counter to 1 */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
- {{cssxref("content")}} property
