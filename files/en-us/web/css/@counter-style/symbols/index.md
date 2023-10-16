---
title: symbols
slug: Web/CSS/@counter-style/symbols
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.symbols
---

{{CSSRef}}

The **`symbols`** [CSS](/en-US/docs/Web/CSS) descriptor is used to specify the symbols that the specified counter system will use to construct counter representations.

## Syntax

The `symbols` descriptor is specified as one or more `<symbol>`s.

### Values

- `<symbol>`

  - : Represents a symbol used within the counter system. This must be one of the following data types:

    - {{cssxref("&lt;string&gt;")}}
    - {{cssxref("&lt;image&gt;")}} (Note: This value is "at risk" and may be removed from the specification. It is not yet implemented.)
    - {{cssxref("&lt;custom-ident&gt;")}}

## Description

A symbol can be a string, image, or identifier. It is used within the {{cssxref("@counter-style")}} [at-rule](/en-US/docs/Web/CSS/At-rule).

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

The `symbols` descriptor must be specified when the value of the {{cssxref('@counter-style/system', 'system')}} descriptor is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`. When the `additive` system is used, use the {{cssxref('@counter-style/additive-symbols', 'additive-symbols')}} descriptor instead to specify the symbols.

While a space between quoted symbols is not required, it makes the CSS more legible. To use a quote as a symbol, either escape the quote character or enclose the character is using different quotes, such as `"'"`.

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
