---
title: prefix
slug: Web/CSS/@counter-style/prefix
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.prefix
---

{{CSSRef}}

The {{cssxref('@counter-style')}} rule's **`prefix`** descriptor specifies content that will be added to the beginning of the counter's marker representation.

When the counter value is negative, the `prefix` comes before the negative sign and any other `<symbol>`s added by the {{cssxref("@counter-style/negative", "negative")}} descriptor.

## Syntax

```css
/* <symbol> value: string, image, or identifier */
prefix: "»";
prefix: "Page ";
prefix: url(bullet.png);
```

### Values

The **`prefix`** descriptor takes as its value a single `<symbol>`:

- `<symbol>`
  - : Specifies a `<symbol>` — a {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}}, or {{cssxref("&lt;custom-ident&gt;")}} — that is prepended to the marker representation.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Adding a prefix to a counter

In this example, each counter number is prefixed by "Book " (with a space) and followed by a colon (`:`). The colon is added with the {{cssxref("@counter-style/suffix", "suffix")}} descriptor.

#### HTML

```html
<ol class="books">
  <li>Flamer, by Mike Curato</li>
  <li>Gender Queer: A Memoir, by Maia Kobabe</li>
  <li>Tricks, by Ellen Hopkins</li>
  <li>The Handmaid's Tale: The Graphic Novel, by Margaret Atwood</li>
  <li>Crank, by Ellen Hopkins</li>
</ol>
```

#### CSS

```css
@counter-style books {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Book ";
  suffix: ": ";
}

.books {
  list-style: books;
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

- Other {{cssxref("@counter-style")}} descriptors: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, and {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: the functional notation for creating anonymous counter styles
- [CSS counter styles](/en-US/docs/Web/CSS/CSS_counter_styles) module
- [CSS lists and counters](/en-US/docs/Web/CSS/CSS_lists) module
