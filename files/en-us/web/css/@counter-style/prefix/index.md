---
title: prefix
slug: Web/CSS/@counter-style/prefix
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.prefix
---

{{CSSRef}}

The **`prefix`** descriptor of the {{cssxref('@counter-style')}} rule specifies content that will be prepended to the marker representation. If not specified, the default value will be `""` (an empty string).

## Syntax

```css
/* <symbol> values */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
```

### Values

- `<symbol>`
  - : Specifies a `<symbol>` that is prepended to the marker representation. It may be a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, or {{cssxref("&lt;custom-ident&gt;")}}.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding a prefix to a counter

#### HTML

```html
<ul class="index">
  <li>The Boy Who Lived</li>
  <li>The Vanishing Glass</li>
  <li>The Letters from No One</li>
  <li>The Keeper of the Keys</li>
  <li>Diagon Alley</li>
</ul>
```

#### CSS

```css
@counter-style chapters {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapter ";
}

.index {
  list-style: chapters;
  padding-left: 15ch;
}
```

#### Result

{{ EmbedLiveSample('Adding_a_prefix_to_a_counter') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles
