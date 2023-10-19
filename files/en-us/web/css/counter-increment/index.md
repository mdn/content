---
title: counter-increment
slug: Web/CSS/counter-increment
page-type: css-property
browser-compat: css.properties.counter-increment
---

{{CSSRef}}

The **`counter-increment`** [CSS](/en-US/docs/Web/CSS) property increases or decreases the value of the named [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) by a given value or by `1` if not increment value is provided.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

> **Note:** The counter's value can be reset to an any integer using the {{cssxref("counter-reset")}} CSS property.

## Syntax

```css
/* Increases "my-counter" by 1 */
counter-increment: my-counter;

/* Decreases "my-counter" by 1 */
counter-increment: my-counter -1;

/* Increases "counter1" by 1, and decrement "counter2" by 4 */
counter-increment: counter1 counter2 -4;

/* Increases the value of the chapter and page counters by 1,
     and the section counter by 2 */
counter-increment: chapter section 2 page;

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

The `counter-increment` property takes as its value a list of space separated list of counter names `<custom-ident>` with an optional `<integer>` incrementor or signed decrementor, or the keyword `none`.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : The name of the counter to increment or decrement.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to add or, if the integer is preceded by a `-`, to subtract from the counter. Defaults to `1` if not specified.
- `none`
  - : No counter must be incremented. This is used as the default value, or to cancel all counters from being incremented or decremented in more specific rules.

> **Note:** The `none` value prevents all counters from being incremented or decremented on the selected elements on which the rule is set. To only prevent some counters from not being incremented, apply an increment value of `0` to the relevant counter(s).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Decrementing

In this example, we count backward by 7 starting with 100.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

We set the `sevens` counter to `100` using {{cssxref("counter-reset")}} then decrement the counter by `7` every for every {{HTMLElement("i")}}.

As we want the first count to be `100`, using the {{cssxref(":first-of-type")}} pseudoclass we prevent the counter from decrementing the first `<i>` by setting `counter-increment: none;`.

```css
div {
  counter-reset: sevens 100;
}
i {
  counter-increment: sevens -7;
}
i:first-of-type {
  counter-increment: none;
}
i::before {
  content: counter(sevens);
}
```

```css hidden
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 200px;
}
i {
  flex: 0 0 2em;
}
```

#### Result

{{EmbedLiveSample("Decrementing", 140, 300)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- [Using CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("@counter-style")}}
- The {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
