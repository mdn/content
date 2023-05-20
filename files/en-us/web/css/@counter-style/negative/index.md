---
title: negative
slug: Web/CSS/@counter-style/negative
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.negative
---

{{CSSRef}}

When defining custom counter styles, the **`negative`** descriptor lets you alter the representations of negative counter values, by providing a way to specify symbols to be appended or prepended to the counter representation when the value is negative.

## Syntax

```css
/* <symbol> values */
negative: "-"; /* Prepends '-' if value is negative */
negative: "(" ")"; /* Surrounds value by '(' and ')' if it is negative */
```

### Values

- first `<symbol>`
  - : This symbol will be prepended to the representation when the counter is negative.
- second `<symbol>`
  - : If present, this symbol will be appended to the representation when the counter is negative.

## Description

If the counter value is negative, the symbol provided as value for the descriptor is prepended to the counter representation; and a second symbol if specified, will be appended to the representation. The negative descriptor has effect only if the `system` value is `symbolic`, `alphabetic`, `numeric`, `additive`, or `extends`, if the extended counter style itself uses a negative sign. If the negative descriptor is specified for other systems that don't support negative counter values, then the descriptor is ignored.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Rendering negative counters

#### HTML

```html
<ol class="list" start="-3">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  negative: "(-" ")";
}

.list {
  list-style: neg;
}
```

#### Result

{{ EmbedLiveSample('Rendering negative counters') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
