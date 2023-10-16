---
title: counter-reset
slug: Web/CSS/counter-reset
page-type: css-property
browser-compat: css.properties.counter-reset
---

{{CSSRef}}

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property resets a [CSS counter](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) to a given value.
This property will create a new counter or reversed counter with the given name on the specified element.

Normal counters have a default initial value of 0.
Reversed counters are intended to count down, and have a default initial value set to the number of elements at the current level.
The default initial values make it easy to implement the two most common numbering patterns: counting up from one to the number of elements, and counting down from the number of elements to one.

A counter's value is increased or decreased using the {{cssxref("counter-increment")}} CSS property, and the value of an existing counter may be set using {{cssxref("counter-set")}}.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

In addition to author-created counters, the property can also reset the `list-item` counters used by ordered lists (as created using {{HTMLElement("ol")}} elements).
These have the same behavior as author-created counters, except they are _automatically_ incremented/decremented by one with each list element.
This behavior can be overridden using {{cssxref("counter-increment")}}.

## Syntax

```css
/* Set "my-counter" to 0 */
counter-reset: my-counter;

/* Set "my-counter" to -3 */
counter-reset: my-counter -3;

/* Set reversed "my-counter" to "the number of peer elements" */
counter-reset: reversed(my-counter);

/* Set reversed "my-counter" to -1 */
counter-reset: reversed(my-counter) -1;

/* Set counter2 to 9 and reversed "counter1" and "counter3" to 1 and 4, respectively*/
counter-reset: reversed(counter1) 1 counter2 9 reversed(counter3) 4;

/* Cancel any reset that could have been set in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

The `counter-reset` property is specified as either one of the following:

- A `<custom-ident>` or a `reversed(<custom-ident>)` naming the counter, followed optionally by an `<integer>`.
  Note that the `reversed()` method is used to create a "reversed" counter.
  You may specify as many counters and reversed counters to reset as you want, with each counter or counter-number pair separated by a space.
- The keyword value `none`.

The "implicit" counter named `list-item` can be used to control the numbering for ordered lists, as created using {{HTMLElement("ol")}}

### Values

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : The name of the counter to reset.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to reset the counter to on each occurrence of the element.
    Defaults to `0` if not specified.
- `none`
  - : No counter reset is to be performed.
    This can be used to override a `counter-reset` defined in a less specific rule.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

The following examples show how to reset the counters, but not how they are incremented, decremented, and displayed.

For more-complete examples see [Using CSS Counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters).

### Resetting named counters

```css
h1 {
  counter-reset: chapter section 1 page;
  /* Sets the chapter and page counters to 0,
     and the section counter to 1 */
}
```

### Reversing a counter

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 1 page;
  /* Sets the reversed flag on the chapter and section counters.
     Sets the chapter to the number of elements, the section counter to 1,
     and the page counters to 0*/
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-set")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
- {{cssxref("content")}} property
