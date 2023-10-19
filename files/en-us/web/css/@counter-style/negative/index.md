---
title: negative
slug: Web/CSS/@counter-style/negative
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.negative
---

{{CSSRef}}

The **`negative`** descriptor of the {{cssxref("@counter-style")}} at-rule lets you define how negative counter values are represented when defining custom counter styles. The value of the `negative` descriptor defines the symbols to be prepended and appended to the counter representation when the counter's value is negative.

## Syntax

```css
/* <symbol> values */
negative: "-"; /* Prepends '-' if value is negative */
negative: "(" ")"; /* Surrounds value by '(' and ')' if it is negative */
```

### Values

The `negative` descriptor takes as it's value one to two [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#values™) values.

- first `<symbol>`
  - : This symbol will be prepended (comes before) to the representation when the counter is negative.
- second `<symbol>`
  - : If present, this symbol will be appended (placed after) to the representation when the counter is negative.

## Description

If the counter value is negative, the symbol provided as value for the descriptor is added before the counter representation; and a second symbol if specified, will be added after the representation. The `negative` descriptor is only relevant for counter styles that have a `system` value of `symbolic`, `alphabetic`, `numeric`, `additive`, when the count is negative, and for `system: extends`, if the extended counter style itself uses a negative sign. If the `negative`` descriptor is specified for other systems, the ones that don't support negative counter values, then this descriptor is ignored.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rendering negative counters

This example extends the brower `decimal` list style, the default list-style-type, adding a `-` and parenthesis around the negative counter values

#### HTML

```html
<ol start="-3">
  <li>negative three</li>
  <li>negative two</li>
  <li>negative one</li>
  <li>zero</li>
  <li>one</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: extends decimal;
  negative: "(-" ")";
}

ol {
  list-style: neg;
}
```

#### Result

{{ EmbedLiveSample('Rendering negative counters') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
