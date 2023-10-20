---
title: symbols
slug: Web/CSS/@counter-style/symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.symbols
---

{{CSSRef}}

The **`symbols`** [CSS](/en-US/docs/Web/CSS) descriptor is used within the {{cssxref("@counter-style")}} [at-rule](/en-US/docs/Web/CSS/At-rule) to specify the symbols that the specified counter system will use to construct counter representations. This discriptor is required when the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Values

The `symbols` descriptor is specified as one or more `<symbol>`s.

- `<symbol>`

  - : Represents a symbol used within the counter system. Each symbol in the list of symbols is a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}}.

If using an {{glossary("identifier")}} rather than a string for a symbol, be aware that {{glossary("ASCII")}} non-letters like `*`, `"` and `\` are not identifiers and must be quoted as a string or escaped.

## Description

A symbol can be a string, image, or identifier. It is used within the {{cssxref("@counter-style")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

When the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`, the `symbols` descriptor must be specified. When the `additive` system is used, use the {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} descriptor instead to specify the symbols.

While a space between quoted symbols is not required, it makes the CSS more legible. To use a quote as a symbol, either escape the quote character or enclose the character is using different quotes, such as `"'"`.

If using identifiers rather than strings to define the symbols, be aware of the syntax of identifiers. As noted above, ASCII non-letters like `*` are not identifiers and must either be quoted in a string or escaped. Hex escapes characters are followed by a space. This space may look like the space separating two identifiers, but it is actually there to enable a digit to follow a HEX-escaped character. That means two spaces must be put after a hex escaped identifier to separate it from the following identifier. As your code tools might remove double spaces, it is likely safer to quote identifiers that need to be escaped and use strings instead.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting counter symbols

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
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### Result

{{EmbedLiveSample('Setting_counter_symbols')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}} properties
- {{cssxref("symbols", "symbols()")}} function
- {{cssxref("url", "url()")}} function
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
