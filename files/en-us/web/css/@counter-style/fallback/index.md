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
  - : Provides the name of the counter style to be used as the fallback, which is either the case-sensitive `<custom-ident>` (without quotes) of a custom CSS counter style or a case-insensitive {{cssxref("list-style-type")}} property value such as `decimal`, `disc`, and so on.

## Description

If the specified fallback style is also unable to construct a representation, then its fallback style will be used. If a valid fallback style is not specified, it defaults to `decimal`.

A couple of scenarios where a fallback style will be used are:

- When the {{cssxref('@counter-style/range', 'range')}} descriptor is specified for a counter style, the fallback style will be used to represent values that fall outside the range.
- When the `fixed` {{cssxref('@counter-style/system', 'system')}} is used and there are not enough symbols to cover all the list items, the fallback style will be used for the rest of the list items.

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

- Other {{cssxref("@counter-style")}} descriptors, including, {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, and {{cssxref("@counter-style/speak-as", "speak-as")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: the functional notation creating anonymous counter styles
