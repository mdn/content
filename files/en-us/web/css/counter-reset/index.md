---
title: counter-reset
slug: Web/CSS/counter-reset
page-type: css-property
browser-compat: css.properties.counter-reset
---

{{CSSRef}}

The **`counter-reset`** [CSS](/en-US/docs/Web/CSS) property creates named [CSS counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) and sets each counter to the given value, enabling counters that count up from one to the number of elements and [reversed counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#reversed_counters) that count down from the number of elements to one.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

## Syntax

```css
/* Create "my-counter" and set it to 0 */
counter-reset: my-counter;

/* Create "my-counter" and set it to -3 */
counter-reset: my-counter -3;

/* Create a reversed counter "my-counter" set to "the number of peer elements" */
counter-reset: reversed(my-counter);

/* Creast a reversed "my-counter" set to -1 */
counter-reset: reversed(my-counter) -1;

/* Create counter2 set to 9 and reversed "counter1" and "counter3" 
set to 1 and 4, respectively*/
counter-reset: reversed(counter1) 1 counter2 9 reversed(counter3) 4;

/* Cancel any counter reset declaration set in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Values

The `counter-reset` property value is a list of one or more space-separated counter names, declared as a `<custom-ident>` for normal counters or `reversed(<custom-ident>)` for reversed counters, or the keyword value `none`. Each counter name is optionally followed by an `<integer>`.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : The name of the counter to reset.
- {{cssxref("&lt;integer&gt;")}}
  - : The value to reset the counter to on each occurrence of the element.
    Defaults to `0` if not specified.
- `none`
  - : No counter reset is to be performed.
    This can be used to override a `counter-reset` defined in a less specific rule.

### Description

The `counter-reset` property can be used to create both regular and, in supporting browsers, reversed counters. You can specify as many counters and reversed counters you want to create as you like, with each counter or space-separated counter-number pair separated by a space.

The default initial values of both normal and reversed counters make it easy to implement the two most common numbering patterns: a normal counter that counts up from one to the number of elements or a reverse counter that counts down from the number of elements to one. By including a counter value for a named counter, your counter can count up or down starting with any integer value.

If a regular counter is included, but no reset value is provided, the counter will be set to the default initial value of `0`. By default, regular counters increment by one. This can be changed with the {{cssxref("counter-increment")}} property.

```css
h1 {
  counter-reset: chapter section 4 page;
  /* Sets the chapter and page counters to 0,
     and the section counter to 4 */
}
```

When creating reversed counters without a value, the counter will start with the value equal to the number of elements in the set, counting down so the last element in the set is `1`. By default, reverse counters decrement by one; this can also be changed with the `counter-increment` property.

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 10 pages;
  /* Sets the reversed flag on the chapter and section counters, setting
     the chapter counter to the number of elements, the section counter to 10. Also
    sets a normal pages counter to the default 0 */
}
```

Once a counter is created, counter-intuitively, the value of the existing counter can be re-set using {{cssxref("counter-set")}} property.

Setting `counter-increment: none` on a selector with greater specificity overrides the creation of the named counter set on selectors with lower specificity.

The `counter-reset` property can also reset the `list-item` counters, the "implicit" counter name of the counter used to control the numbering for ordered lists, as created using {{HTMLElement("ol")}}. These implicit counters have the same behavior as author-created counters, except they are _automatically_ incremented/decremented by one with each list element. Like the other counters, this increment value on list counters can be overridden with the {{cssxref("counter-increment")}} property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Overriding implicit list item counters

In this example, the `counter-reset` property is used to set a starting value for an implicit `list-item` counter.

#### HTML

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ol>
```

#### CSS

Using `counter-reset`, we set the implicit `list-item` counter to start at a value other than the default `1`:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Result

{{EmbedLiveSample("Overriding implicit list item counters", 140, 300)}}

Using `counter-reset`, we were able to set the implicit `list-item` counter to start counting at `3`, similar to the effect of writing [`<ol start="3">`](/en-US/docs/Web/HTML/Element/ol#start) in HTML.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using CSS Counters](/en-US/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) guide
- {{cssxref("counter-increment")}} property
- {{cssxref("counter-set")}} property
- {{cssxref("@counter-style")}} at-rule
- {{cssxref("counter", "counter()")}} and {{cssxref("counters", "counters()")}} functions
- {{cssxref("content")}} property
- {{cssxref("::marker")}} pseudo-class
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
