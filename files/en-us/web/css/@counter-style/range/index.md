---
title: range
slug: Web/CSS/@counter-style/range
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.range
---

{{CSSRef}}

When defining custom counter styles, the **`range`** descriptor lets the author specify one or more ranges of counter values for which the style is applied. When included in the {{cssxref("@counter-style")}} at-rule, the defined counter will only be used for values in the set ranges. Otherwise, the defined counter will be applied to all values as if `range: auto;` were set. If the `range` limits the values to which the counter is applied and the counter value is outside the specified range, the fallback style will be used to construct the representation of that marker.

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
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Values

The value is a comma-separated list of ranges or the the keyword `auto`.

- `auto`

  - : The entire set of numbers representable by the counter {{cssxref("@counter-style/system","system")}}. Those range values depends on the counter system:

    - For `cyclic`, `numeric`, and `fixed` systems, the range is negative `infinity` to positive `infinity`.
    - For `alphabetic` and `symbolic` systems, the range is `1` to positive `infinity`.
    - For `additive` systems, the range is `0` to `positive` infinity.
    - When using `extend` to extend a system, the range is whatever `auto` would produce for the system being extended, including extensions of complex predefined styles, such as some Japanese, Korean, Chinese, and Ethiopian counter styles.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Each range within the comma separated list of ranges includes two values, each being either an {{cssxref("integer")}} or the keyword `infinite`. If `infinite` is used as the first value in a range, it represents negative infinity; if it is used as the second value, it represents positive infinity. The first value of each range is the lower bound for the range and the second value is the upper bound, inclusive. If the lower bound of any range in the list is higher than the upper bound, the entire `range` descriptor is invalid and will be ignored.

## Description

The value of the `range` descriptor can be either `auto` or a comma separated list of lower and upper bound ranges specified using negative or positive integers or the keyword `infinite`.

### Understanding `auto`

When the value is set to `auto`, the range is the default range for the counter system. If the `system` is `cyclic`, `numeric`, or `fixed`, the range will be from negative infinity to positive infinity. If the `system` is `alphabetic` or `symbolic`, the range will be from `1` to positive `infinity`. For `system: additive`, `auto` results in the range `0` to positive `infinity`.

When extending a counter, if `range` is set to `auto`, the range value will be the range of the system of the counter that is being extended, not the `range` value of the extended counter. For example, if counter style "B" extends custom `alphabetic` counter "A" with `system: extends A`, setting `range: auto` in B's descriptor list will set the range from `1` to `infinity`. This is the range for `alphabetic`. B's `range` is set to the default range of the `alphabetic` system, not the `range` value set in counter A's descriptor list.

### `infinite` explained

When range is specified as integers, the value `infinite` can be used to denote infinity. If _infinite_ is specified as the first value in a range, then it is interpreted as negative infinity. If used as upper bound, it is taken as positive infinity.

### List of ranges

The value of `range` is either `auto`, discussed above, or a comma separated list of one or more ranges.

Each value is either an {{cssxref("integer")}} or the keyword `infinite`. If `infinite` is used as the first value in a range, it represents negative infinity; if it is used as the second value, it represents positive infinity.

Each range within the list of ranges takes two values. The first value of each range is the lower bound for the range and the second value is the upper bound, inclusive. The range of values is the union of the values of each pair, combined. For example, given the following:

```css
@counter-style;
```

If the lower bound of any range in the list is higher than the upper bound, the entire `range` descriptor is invalid and will be ignored. The range of the counter style is the union of all the ranges defined in the list.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

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
  range:
    2 4,
    7 9;
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

- Other {{cssxref("@counter-style")}} descriptors, including, {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, and {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
