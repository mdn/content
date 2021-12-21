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

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property resets a [CSS counter](/en-US/docs/Web/CSS/CSS_Counter_Styles/Using_CSS_counters) to a given value.
This property will create a new counter or reversed counter with the given name on the specified element.

In addition to author-created counters, the property can also be used to reset the `list-item` counter that is implicitly used for numbering ordered lists (as created using {{HTMLElement("ol")}} elements).

The counter's value is increased or decreased using the {{cssxref("counter-increment")}} CSS property, and the value of an existing counter may be set using {{cssxref("counter-set")}}.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

A reversed counter is a counter that is intended to decrement rather than increment.
Reversing a counter is useful when working with ordered lists as a reversed `list-item` counter sets the counter to the number of elements in the list by default (instead of zero) and will automatically decrement.

Reversed user-defined counters are not currently particularly useful: they default to zero if no initial value is specified (rather than the number of elements as for `list-item`), and you manually have to specify how the counter increments or decrements using {{cssxref("counter-increment")}}.


## Syntax

```css
/* Set "my-counter" to 0 */
counter-reset: my-counter;

/* Set the ordered-list counter 'list-item' to 0 (count up) */
counter-reset: list-item;

/* Set author-created reversed counter "my-counter" to 0 */
counter-reset: reversed(my-counter);

/* Set the ordered-list counter 'list-item' to the number of list elements (count down) */
counter-reset: reversed(list-item);

/* Set "my-counter" to -3 */
counter-reset: my-counter -3;

/* Set reversed "my-counter" to -3 */
counter-reset: reversed(my-counter) -3;

/* Set counter2 to 9 and reversed "counter1" and "counter3" to 1 and 4, respectively*/
counter-reset: reversed(counter1) 1 counter2 9 reversed(counter3) 4;

/* Cancel any reset that could have been set in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: unset;
```

The `counter-reset` property is specified as either one of the following:

- A `<custom-ident>` or a `reversed(<custom-ident>)` naming the counter, followed optionally by an `<integer>.
  Note the `reversed()` method is used to create a "reversed" counter.
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
