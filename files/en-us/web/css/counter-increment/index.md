---
title: counter-increment
slug: Web/CSS/counter-increment
page-type: css-property
browser-compat: css.properties.counter-increment
---

{{CSSRef}}

The **`counter-increment`** [CSS](/en-US/docs/Web/CSS) property can be used to increase or decrease the value of the named [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) by the specified values, or to prevent all counters or an individual counter's value from being changed.

If a named counter in the list of space-separated counters and values doesn't exist, it will be created. If no value is provided for a counter in the list of counters, the counter will be increased by `1`.

The counter's value can be reset to any integer value with the {{cssxref("counter-reset")}} CSS property.

{{EmbedInteractiveExample("pages/css/counter-increment.html")}}

## Syntax

```css
/* Increases "my-counter" by 1 */
counter-increment: my-counter;

/* Decreases "my-counter" by 1 */
counter-increment: my-counter -1;

/* Increases "counter1" by 1 and decreases "counter2" by 4 */
counter-increment: counter1 counter2 -4;

/* Increases "page" by 1, "section" by 2, while "chapter" doesn't change */
counter-increment: chapter 0 section 2 page;

/* Do not increment/decrement anything: used to override less specific rules */
counter-increment: none;

/* Global values */
counter-increment: inherit;
counter-increment: initial;
counter-increment: revert;
counter-increment: revert-layer;
counter-increment: unset;
```

### Values

The `counter-increment` property takes as its value either a list of space-separated counter names specified as `<custom-ident>` with an optional `<integer>` value or the keyword `none`. You may specify as many counters to increment as you want, with each name or name-number pair separated by a space.

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Specifies the name of the counter to increase or decrease.
- {{cssxref("&lt;integer&gt;")}}
  - : Specifies the value to add to the counter. If the integer is preceded by a `-` sign, the value will be subtracted from the counter. Defaults to `1` if no value is specified.
- `none`
  - : Indicates that no counter must be increased or decreased. This value can also be used to cancel all counters from being increased or decreased in more specific rules. This is the default value of the property.

> [!NOTE]
> Using the `none` value prevents all counters from being increased or decreased for the selected elements where this rule applies. To prevent only specific counters from being increased or decreased, set the `integer` value as `0` on the relevant counter(s).

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Decreasing the counter value

In this example, we display a sequence of numbers counting backward. To do this, we use a counter to display numbers starting from 100 and decreasing by 7 each time.

#### HTML

```html
<div>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i> <i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i> <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>
```

#### CSS

We set the initial value of the counter named `sevens` to `100` by using {{cssxref("counter-reset")}}. Then, for each {{HTMLElement("i")}}, we decrease the counter by `7`.

To set the first count at `100`, we target the first `<i>` element by using the {{cssxref(":first-of-type")}} pseudo-class and setting `counter-increment: none;`. Additionally, the {{cssxref("content")}} property is used in the {{cssxref("::before")}} pseudo-element to display the value of the counter using the [`counter()`](/en-US/docs/Web/CSS/counter) function.

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

{{EmbedLiveSample("Decreasing the counter value", 140, 300)}}

Had we not used `counter-reset` (or {{cssxref("counter-set")}}) to create the counter and set the value to `100`, the `sevens` counter would still have been created, but with an initial value `0`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Counter properties: {{cssxref("counter-set")}}, {{cssxref("counter-reset")}}
- Counter at-rule: {{cssxref("@counter-style")}}
- Counter functions: {{cssxref("counter", "counter()")}}, {{cssxref("counters", "counters()")}}
- [Using CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) guide
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
