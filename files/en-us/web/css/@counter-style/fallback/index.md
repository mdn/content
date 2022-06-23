---
title: fallback
slug: Web/CSS/@counter-style/fallback
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Counter Styles
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.fallback
---
{{CSSRef}}

The **`fallback`** descriptor can be used to specify a counter style to fall back to if the current counter style cannot create a marker representation for a particular counter value.

## Syntax

```css
/* Keyword values */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Description

If the specified fallback style is also unable to construct a representation, then its fallback style will be used. If a valid fallback style is not specified, it defaults to `decimal`.

A couple of scenarios where a fallback style will be used are:

- When the {{cssxref('@counter-style/range', 'range')}} descriptor is specified for a counter style, the fallback style will be used to represent values that fall outside the range.
- When the `fixed` {{cssxref('@counter-style/system', 'system')}} is used and there are not enough symbols to cover all the list items, the fallback style will be used for the rest of the list items.

## Formal definition

{{cssinfo}}

## Formal syntax

```
<counter-style-name>

<counter-style-name> = <custom-ident>
```

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

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: the functional notation creating anonymous counter styles
