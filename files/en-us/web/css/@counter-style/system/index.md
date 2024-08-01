---
title: system
slug: Web/CSS/@counter-style/system
page-type: css-at-rule-descriptor
browser-compat: css.at-rules.counter-style.system
---

{{CSSRef}}

The **`system`** descriptor specifies the algorithm to be used for converting the integer value of a counter to a string representation. It is used in a {{cssxref("@counter-style")}} to define the behavior of the defined style.

If the algorithm specified in the `system` descriptor is unable to construct the representation for a particular counter value, then that value's representation will be constructed using the fallback system provided.

## Syntax

```css
/* Keyword values */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* Other values */
system: fixed 3;
system: extends decimal;
system: extends circled-letters;
```

## Values

This may take one of three forms:

- One of the keyword values `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive`, or `fixed`.
- The keyword value `fixed` along with an integer.
- The keyword value `extends` along with a [`<counter-style-name>`](/en-US/docs/Web/CSS/@counter-style#counter-style-name) value.

The values include:

- `cyclic`

  - : Cycles through the list of symbols provided in the [`symbols`](/en-US/docs/Web/CSS/@counter-style/symbols) descriptor. Once the end of the list is reached, the cycle will loop back to the beginning and start over. This value is useful both for basic bullet styles with just one symbol and for styles with multiple symbols. At least one symbol must be specified in the `symbols` descriptor, otherwise the counter style is not valid.

- `numeric`

  - : Interprets the counter symbols as digits in a [place-value numbering system](https://en.wikipedia.org/wiki/Positional_notation). The numeric system is similar to the `alphabetic` system, described above. The main difference is that in the `alphabetic` system, the first counter symbol given in the `symbols` descriptor is interpreted as `1`, the next as `2`, and so on. However, in the numeric system, the first counter symbol is interpreted as 0, the next as `1`, then `2`, and so on.

    At least two counter symbols must be specified in the `symbols` descriptor or the counter style is not valid.

- `alphabetic`

  - : Interprets the specified symbols as digits, to an alphabetic numbering system. If the characters `"a"` to `"z"` are specified as symbols in a counter style, with the `alphabetic` system, then the first 26 counter representations will be `"a"`, `"b"` up to `"z"`. Until this point, the behavior is the same as that of the `symbolic` system, described above. However, after `"z"`, it will continue as `"aa"`, `"ab"`, `"ac"`…

    The `symbols` descriptor must contain at least two symbols or the counter style is not valid. The first counter symbol provided in the `symbols` descriptor is interpreted as `1`, the next as `2`, and so on. This system is also defined strictly over positive counter values.

- `symbolic`

  - : Cycles through the symbols provided in the `symbols` descriptor list repeatedly, doubling, tripling, and so on, the symbols on each successive pass through the list. For example, if two symbols "◽" and "◾" are specified in the `symbols` descriptor, on each successive pass, they will become "◽◽" and "◾◾", then "◽◽◽" and "◾◾◾", and so on in subsequent passes. At least one symbol must be specified in the `symbols` descriptor, otherwise the counter style is not valid. This counter system works for positive counter values only.

- `additive`

  - : Used to represent "sign-value" numbering systems, such as Roman numerals, which rather than reuse digits in different positions to obtain different values, define additional digits for larger values. The value of a number in such a system can be found out by adding the digits in the number.

    An additional descriptor called `additive-symbols` must be specified with at least one _additive tuple_, or else the counter style rule will not be valid. An additive tuple is similar to a composite counter symbol, which is made up of two parts: a normal counter symbol and a non-negative integer weight. The additive tuples must be specified in the descending order of their weights or the system is invalid.

- `fixed` or `fixed <integer>`

  - : Defines a finite set of symbols, iterating once through the list of symbols provided in the `symbols` descriptor. Once the specified symbols have been iterated through, the fallback counter style is used. This keyword value is useful in cases where the counter style values are finite. At least one symbol must be specified in the `symbols` descriptor, otherwise the counter style is not valid. The `fixed` keyword can be followed by an optional {{cssxref("&lt;integer&gt;")}} value. If specified, the `<integer>` value indicates the item in the list that will get the first symbol from the list of symbols. If omitted, the default value of `integer` is `1`, which gives the first item in the list the first symbol.

- `extends`

  - : Extends the algorithm of another browser- or author-defined counter style by allowing the alteration of some aspects of the extended counter style. Any unspecified descriptors and their values are inherited from the extended counter style specified. If the counter style name specified with `extends` is not yet defined, the `decimal` counter style will be extended by default.

    It must not contain a `symbols` or `additive-symbols` descriptor, otherwise the counter style rule will be invalid. If one or more counter styles definitions form a cycle with their `extends` values, the browser will treat all the participating counter styles as extending from the `decimal` style.

> [!NOTE]
> The [`symbols`](/en-US/docs/Web/CSS/@counter-style/symbols) descriptor is required when the value is `cyclic`, `numeric`, `alphabetic`, `symbolic`, or `fixed`. The [`additive-symbols`](/en-US/docs/Web/CSS/@counter-style/additive-symbols) descriptor is required if the `additive` value is set.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Cyclic counter

The `cyclic` value iterates through the list of symbols, repeating the list as necessary:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style fisheye {
  system: cyclic;
  symbols: ◉ ➀;
  suffix: ": ";
}

ul {
  list-style: fisheye;
}
```

#### Result

{{ EmbedLiveSample('Cyclic_counter') }}

### Fixed counter

The `fixed` value iterates through the list of symbols only once, starting the single cycle at the list item number indicated by the `integer` value:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style circled-digits {
  system: fixed 3;
  symbols: ➀ ➁ ➂;
  suffix: ": ";
}

ul {
  list-style: circled-digits;
}
```

#### Result

{{ EmbedLiveSample('Fixed_counter') }}

### Symbolic counter

The `symbolic` value loops through the list defined in the `symbols` descriptor, doubling and tripling the number of symbols for the second and third cycles through the list, respectively:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: symbolic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Result

{{ EmbedLiveSample('Symbolic_counter') }}

### Alphabetic counter

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: alphabetic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Result

{{ EmbedLiveSample('Alphabetic_counter') }}

### Numeric counter

The first symbol provided in the `symbols` descriptor is interpreted as `0` here.

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: numeric;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Result

{{ EmbedLiveSample('Numeric_counter') }}

### Numeric counter with numeric symbols

As shown in the following example, if digits from `0` to `9` are specified as symbols, this counter style will render symbols same as the decimal counter style.

#### CSS

```html hidden
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
@counter-style numbers {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  suffix: ".";
}

ul {
  list-style: numbers;
}
```

#### Result

{{ EmbedLiveSample('Numeric_counter_with_numeric_symbols') }}

### Additive counter

This example renders a list using Roman numerals. Notice that a `range` is specified. This is because the representation will produce correct Roman numerals only until the counter value of `3999`. Once outside of the range, the rest of the counter representations will be based on the `decimal` style, which is the fall back. If you need to represent counter values as Roman numerals, you could use either one of the predefined counter styles, `upper-roman` or `lower-roman`, rather than recreating the rule yourself.

#### HTML

We use the [`start`](/en-US/docs/Web/HTML/Element/ol#start) attribute on the {{HTMLElement("ol")}} element to demonstrate that counting doesn't need to start at `1`. Additionally, we use the [`value`](/en-US/docs/Web/HTML/Element/li#value) attribute on the fifth {{HTMLElement("li")}} element to demonstrate that the counters you define using `@counter-style` behave just like native counters.

```html
<ol start="48">
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li value="109">109</li>
  <li>110</li>
  <ol></ol>
</ol>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  range: 1 3999;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ol {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Result

{{ EmbedLiveSample('Additive_counter', '') }}

### Extending a counter

This example uses the algorithm, symbols, and other properties of [`lower-alpha`](/en-US/docs/Web/CSS/list-style-type#lower-alpha), one of the several native {{CSSXref("list-style-type")}} counter values, but extends it by removing the period (`'.'`) after the counter representation and enclosing the characters in parentheses, as in `(a)` and `(b)`.

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
@counter-style alpha-modified {
  system: extends lower-alpha;
  prefix: "(";
  suffix: ") ";
}

ul {
  list-style: alpha-modified;
}
```

#### Result

{{ EmbedLiveSample('Extending_a_counter') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other {{cssxref("@counter-style")}} descriptors, including {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, and {{cssxref("@counter-style/fallback", "fallback")}}
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, the functional notation creating anonymous counter styles.
