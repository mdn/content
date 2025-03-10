---
title: symbols
slug: Web/CSS/@counter-style/symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.symbols
---

{{CSSRef}}

The **`symbols`** [CSS](/en-US/docs/Web/CSS) descriptor of the {{cssxref("@counter-style")}} at-rule is used to specify the symbols for creating counter representations in the specified counter system. Specifying this descriptor is mandatory when the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`.

## Syntax

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Values

The `symbols` descriptor is specified as a list of one or more space-separated `<symbol>` values.

- `<symbol>`
  - : Specifies the symbol to use within the counter system. Each symbol in the list can be either a {{cssxref("&lt;string&gt;")}}, an {{cssxref("&lt;image&gt;")}}, or a {{cssxref("&lt;custom-ident&gt;")}}. The `<image>` value can, in turn, be specified as a {{cssxref("url_value", "&lt;url&gt;")}} or {{cssxref("&lt;gradient&gt;")}}.

> [!NOTE]
> When using an {{glossary("identifier")}} for a symbol, note that {{glossary("ASCII")}} non-letters such as `*`, `"`, and `\` are not considered identifiers. They must be either quoted as a string or escaped.

## Description

A symbol can be a string, image, or identifier. It is used within the {{cssxref("@counter-style")}} [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule).

When the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`, the `symbols` descriptor must be specified. For the `additive` system, use the {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} descriptor instead to specify the symbols.

While a space between quoted symbols is not required, it makes CSS more readable. To use a quote as a symbol, either escape the quote character or enclose the character within different quotes, such as `"'"`.

When defining symbols with identifiers instead of strings, be sure to use identifier syntax rules. For example, as noted above, ASCII non-letters such as `*` are not identifiers and must be either quoted or escaped. Hex escape characters are followed by a space. This space may look like the space separating two identifiers, but it enables digits to follow hex-escaped characters. This means that two spaces must be included after a hex-escaped identifier to separate it from the next identifier. For example, it is better to use the string `"\2A 1"` instead of `\2A  1` with two spaces, as your code tools might remove double spaces. It is generally safer to quote identifiers that need to be escaped or use strings.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting counter symbols

In this example, the list of values for the `symbols` descriptor include letters (`A`, `D`, `E`), a number within quotes (`"1"`), and a hex-escape identifier within quotes (`"\24B7"`) for the character `Ⓑ`.

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
- List style properties: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} function
- {{cssxref("url_value", "&lt;url&gt;")}} type
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
