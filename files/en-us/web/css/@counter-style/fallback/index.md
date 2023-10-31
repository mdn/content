---
title: fallback
slug: Web/CSS/@counter-style/fallback
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.fallback
---

{{CSSRef}}

The **`fallback`** descriptor of the {{cssxref("@counter-style")}} at-rule can be used to specify a counter style to fall back to if the counter style being defined cannot create a marker representation for a particular counter value.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Value

The descriptor takes a single `<counter-style-name>` as its value:

- [`<counter-style-name>`](/en-US/docs/Web/CSS/@counter-style#counter-style-name)
  - : Provides the name of the counter style to be used as the fallback, which is either the case-sensitive `<custom-ident>` of a custom CSS counter style (without quotes) or a case-insensitive {{cssxref("list-style-type")}} property value such as `decimal`, `disc`, and so on.

If omitted, the counter fallback defaults to `decimal`.

## Description

The counter style provided as the value of the `fallback` descriptor is used when a {{cssxref('@counter-style/range', 'range')}} descriptor is specified for a counter style; the `fallback` style is used to represent all the values that fall outside the range. The `fallback` style is also used when the `fixed` {{cssxref('@counter-style/system', 'system')}} is used and there are not enough symbols to cover all the list items; the `fallback` style is used to represent all the values beyond the scope of the fixed system. In both these cases, and any other time the defined counter cannot create a specific counter value, the `fallback` style is used.

If the specified fallback style is also unable to construct a representation, then the `fallback` value of that fallback counter is used. If that fallback style's fallback is also unable to construct a representation, then that fallback's fallback is used. This falling back continues until a fallback is found that can construct the counter-representation. If no fallback `fallback` value is able to construct a representation―if a fallback style doesn't have a `fallback` value set, or if a `fallback` value is not specified or invalid―the `fallback` defaults to `decimal`.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Specifying a fallback counter style

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style fallback-example {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: fallback-example;
}
```

#### Result

{{ EmbedLiveSample('Specifying_a_fallback_counter_style') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, and {{cssxref("@counter-style/speak-as", "speak-as")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: the functional notation for creating anonymous counter styles
