---
title: counter-reset
slug: Web/CSS/counter-reset
tags:
  - CSS
  - CSS Counter
  - CSS Lists
  - CSS Property
  - recipe:css-property
browser-compat: css.properties.counter-reset
---
{{CSSRef}}

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property resets a [CSS counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) to a given value. This property will create a new counter of the given name. To change the value of an existing counter use {{cssxref("counter-set")}}, or {{cssxref("counter-increment")}}.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

> **Note:** The counter's value can be increased or decreased using the {{cssxref("counter-increment")}} CSS property.

## Syntax

```css
/* Set "my-counter" to 0 */
counter-reset: my-counter;

/* Set "my-counter" to -1 */
counter-reset: my-counter -1;

/* Set "counter1" to 1, and "counter2" to 4 */
counter-reset: counter1 1 counter2 4;

/* Cancel any reset that could have been set in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: unset;
```

The `counter-reset` property is specified as either one of the following:

- A `<custom-ident>` naming the counter, followed optionally by an `<integer>`. You may specify as many counters to reset as you want, with each name or name-number pair separated by a space.
- The keyword value `none`.

### Values

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : The name of the counter to reset.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to reset the counter to on each occurrence of the element. Defaults to `0` if not specified.
- `none`
  - : No counter reset is to be performed. This can be used to override a `counter-reset` defined in a less specific rule.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Resetting named counters

```css
h1 {
  counter-reset: chapter section 1 page;
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
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter()")}} and {{cssxref("counters()")}} functions
- {{cssxref("content")}} property
