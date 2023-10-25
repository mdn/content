---
title: negative
slug: Web/CSS/@counter-style/negative
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.negative
---

{{CSSRef}}

The **`negative`** descriptor of the {{cssxref("@counter-style")}} at-rule lets you define how negative counter values are represented when defining custom counter styles. The value of the `negative` descriptor defines the symbols to be added before and after the counter representation when the counter's value is negative.

## Syntax

```css
/* <symbol> values */
negative: "-"; /* Prepends '-' if value is negative */
negative: "(" ")"; /* Surrounds value by '(' and ')' if it is negative */
```

### Values

The `negative` descriptor accepts up to two [`<symbol>`](/en-US/docs/Web/CSS/@counter-style/symbols#values™) values.

- `<symbol>`
  - : If only one value is specified, it is added before the counter representation when the counter is negative. If two values are specified, the first one is added before and the second one is added after the counter representation when the counter is negative.
- second `<symbol>`

## Description

If the counter value is negative, the specified symbol for the `negative` descriptor is added before the counter representation; a second symbol, if specified, is added after the counter representation. The `negative` descriptor is relevant in two cases: if counter styles have the `system` value of `symbolic`, `alphabetic`, `numeric`, and `additive` and the count is negative; and if `system` value is `extends` and the extended counter style itself uses a negative sign. For systems that don't support negative counter values, specifying the `negative` descriptor has no effect and is ignored.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rendering negative counters

This example [extends](/en-US/docs/Web/CSS/@counter-style/system#extends) the [`decimal`](/en-US/docs/Web/CSS/list-style-type#decimal) list style. The `negative` descriptor is used to add `(-` and `)` before and after negative counter values.

#### HTML

```html
<ol start="-3">
  <li>Negative three</li>
  <li>Negative two</li>
  <li>Negative one</li>
  <li>Zero</li>
  <li>One</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: extends decimal;
  negative: "(-" ")";
  suffix: ": ";
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

- {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- List style properties: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} function to create anonymous counter styles
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
