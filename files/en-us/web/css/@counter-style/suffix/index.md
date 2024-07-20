---
title: suffix
slug: Web/CSS/@counter-style/suffix
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.suffix
---

{{CSSRef}}

The **`suffix`** descriptor of the {{cssxref("@counter-style")}} rule specifies content that will be added to the end of the marker representation.

## Syntax

```css
/* <symbol> value: string, image, or identifier  */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### Values

The **`suffix`** descriptor takes as its value a single `<symbol>`:

- `<symbol>`
  - : Specifies a `<symbol>` that is appended to the marker representation. It may be a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, or {{cssxref("&lt;custom-ident&gt;")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting a suffix for a counter

#### HTML

```html
<ul class="choices">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>None of the above</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### Result

{{ EmbedLiveSample('Setting_a_suffix_for_a_counter')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, and {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: the functional notation for creating anonymous counter styles
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
