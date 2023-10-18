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

  - : Represents a symbol used within the counter system. Each symbol in the list of symbols is a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;custom-ident&gt;")}}

## Description

A symbol can be a string, image, or identifier. It is used within the {{cssxref("@counter-style")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

When the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`, the `symbols` descriptor must be specified. When the `additive` system is used, use the {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} descriptor instead to specify the symbols.

While a space between quoted symbols is not required, it makes the CSS more legible. To use a quote as a symbol, either escape the quote character or enclose the character is using different quotes, such as `"'"`.

If using identifiers rather than strings to define the symbols, be aware of the syntax of identifiers. In particular, ascii non-letters like "\*" are not identifiers, and so must be quoted in a string. Hex escapes, used in several of the counter styles defined in this specification, "eat" the following space (to allow a digit to follow a hex escape without ambiguity), so two spaces must be put after a hex escape to separate it from the following one, or else they'll be considered adjacent, and part of the same identifier. For example, symbols: \660 \661; only defines a single symbol, consisting of the U+0660 and U+0661 characters, rather than the two that were intended; either quote the escapes in strings, like symbols: "\660" "\661", or put two spaces between the escapes.

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

- The `symbols` descriptor is used within the {{cssxref("@counter-style")}} at-rule.
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles
- {{cssxref("url", "url()")}} function
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
