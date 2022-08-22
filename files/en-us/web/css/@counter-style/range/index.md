---
title: range
slug: Web/CSS/@counter-style/range
tags:
  - '@counter-style'
  - At-rule descriptor
  - CSS
  - CSS Counter Styles
  - CSS Descriptor
  - Reference
browser-compat: css.at-rules.counter-style.range
---
{{CSSRef}}

When defining custom counter styles, the **`range`** descriptor lets the author specify a range of counter values over which the style is applied. If a counter value is outside the specified range, then the fallback style will be used to construct the representation of that marker.

## Syntax

```css
/* Keyword value */
range: auto;

/* Range values */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Multiple range values */
range: 2 5, 8 10;
range: infinite 6, 10 infinite;
```

### Values

- `auto`

  - : The range depends on the counter system:

    - For cyclic, numeric, and fixed systems, the range is negative infinity to positive infinity.
    - For alphabetic and symbolic systems, the range is 1 to positive infinity.
    - For additive systems, the range is 0 to positive infinity.
    - For extends systems, the range is whatever auto would produce for the extended system; if extending a complex predefined style (§7 Complex Predefined Counter Styles), the range is the style's defined range.

- `[ [ | infinite ]{2} ]#`
  - : Defines a comma-separated list of ranges. For each individual range, the first value is the lower bound and the second value is the upper bound. A range is inclusive, that means it always contains both, the lower and upper bound numbers. If infinite is used as the first value in a range, it represents negative infinity; if it is used as the second value, it represents positive infinity. The range of the counter style is the union of all the ranges defined in the list.
    If the lower bound of any range is higher than the upper bound, the entire descriptor is invalid and will be ignored.

## Description

The value of the range descriptor can be either auto or a comma separated list of lower and upper bounds specified as integers.

If value is auto, then for cyclic, numeric, and fixed system, the range will be from negative infinity to positive infinity. For alphabetic and symbolic systems, range will be from 1 to positive infinity. For additive systems, auto will result in the range 0 to positive infinity. For extends systems, the range is whatever auto will produce for the extended system.

When range is specified as integers, the value `infinite` can be used to denote infinity. If _infinite_ is specified as the first value in a range, then it is interpreted as negative infinity. If used as upper bound, it is taken as positive infinity.

## Formal definition

{{cssinfo}}

## Formal syntax

```
[ [ <integer> | infinite ]{2} ]# |
auto
```

## Examples

### Setting counter style over a range

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
  <li>Nine</li>
  <li>Ten</li>
</ul>
```

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range: 2 4, 7 9;
}

.list {
  list-style: range-multi-example;
}
```

The above list will display as follows:

{{EmbedLiveSample('Setting counter style over a range')}}:

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
