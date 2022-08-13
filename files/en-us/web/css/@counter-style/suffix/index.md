---
title: suffix
slug: Web/CSS/@counter-style/suffix
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Counter Styles
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.suffix
---
{{CSSRef}}

The **`suffix`** descriptor of the {{cssxref("@counter-style")}} rule specifies content that will be appended to the marker representation.

## Syntax

```css
/* <symbol> values */
suffix: "";
suffix: ") ";
suffix: url(bullet.png);
```

### Values

- `<symbol>`
  - : Specifies a `<symbol>` that is appended to the marker representation. It may be a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, or {{cssxref("&lt;custom-ident&gt;")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

```
<symbol>

<symbol> =
  <string>       |
  <image>        |
  <custom-ident>
```

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

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles
