---
title: Value definition syntax
slug: Web/CSS/Value_definition_syntax
page-type: guide
spec-urls: https://drafts.csswg.org/css-values/#value-defs
---

{{CSSRef}}

**CSS value definition syntax**, a formal grammar, is used to define the set of valid values for a CSS property or function. In addition to this syntax, the set of valid values can be further restricted by semantic constraints (for example, for a number to be strictly positive).

The definition syntax describes which values are allowed and the interactions between them. A component can be a _keyword_, some characters considered as a _literal_, or a value of a given CSS data type or another CSS property.

## Component value types

### Keywords

#### Generic keywords

A keyword with a predefined meaning appears literally, without quotation marks. For example: `auto`, `smaller`, or `ease-in`.

#### CSS-wide keywords

All CSS properties accept the keywords `inherit`, `initial`, `revert`, `revert-layer`, and `unset`. They are not shown in the value definition and are implicitly defined.

### Literals

In CSS, a few characters can appear on their own, like the slash (`/`) or the comma (`,`), and are used in a property definition to separate its parts. The comma is often used to separate values in enumerations, or parameters in mathematical-like functions; the slash often separates parts of the value that are semantically different, but have a common syntax. Typically, the slash is used in shorthand properties; to separate components of the same type, but belong to different properties.

Both symbols appear literally in a value definition.

### Data types

#### Basic data types

Some data types are used throughout CSS and are defined once for all values in the specification. Called _basic data types_, they are represented with their name surrounded by the symbols `<` and `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Non-terminal data types

Less common data types, called _non-terminal data types_, are also surrounded by `<` and `>`.

Non-terminal data types are of two kinds:

- data types _sharing the same name of a property_, put between quotes. In this case, the data type shares the same set of values as the property. They are often used in the definition of shorthand properties.
- data types _not sharing the same name of a property_. These data types are very close to the basic data types. They only differ from the basic data types in the physical location of their definition. In this case, the definition is usually physically very close to the definition of the property using them.

## Component value combinators

### Brackets

_Brackets_ enclose several entities, combinators, and multipliers, then transform them as a single component. They are used to **group components to bypass the precedence rules**.

```css
bold [ thin && <length> ]
```

This example matches the following values:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

But not:

- `thin bold 3em`, as `bold` is juxtaposed with the component defined by the brackets, it must appear before it.

### Juxtaposition

Placing several keywords, literals, or data types, next to one another, only separated by one or several spaces, is called _juxtaposition_. All juxtaposed components are **mandatory and should appear in the exact order**.

```css
bold <length>, thin
```

This example matches the following values:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

But not:

- `thin 1em, bold`, as the entities must be in the expressed order
- `bold 1em thin`, as the entities are mandatory; the comma, a literal, must be present
- `bold 0.5ms, thin`, as the `ms` values are not {{CSSxRef("&lt;length&gt;")}}

### Double ampersand

Separating two or more components, by a _double ampersand_, `&&`, means that all these entities are **mandatory but may appear in any order**.

```css
bold && <length>
```

This example matches the following values:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

But not:

- `bold`, as both components must appear in the value.
- `bold 1em bold`, as both components must appear only once.

> [!NOTE]
> Juxtaposition has precedence over the double ampersand, meaning that `bold thin && <length>` is equivalent to `[ bold thin ] && <length>`. It describes `bold thin <length>` or `<length> bold thin` but not `bold <length> thin`.

### Double bar

Separating two or more components by a _double bar_, `||`, means that all entities are options: **at least one must be present, and they may appear in any order**. Typically this is used to define the different values of a [shorthand property](/en-US/docs/Web/CSS/Shorthand_properties).

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

This example matches the following values:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

But not:

- `blue yellow`, as a component must appear once at most.
- `bold`, as it isn't a keyword allowed as a value of any of the entities.

> [!NOTE]
> The double ampersand has precedence over the double bar, meaning that `bold || thin && <length>` is equivalent to `bold || [ thin && <length> ]`. It describes `bold`, `thin <length>`, `bold thin <length>`, or `thin <length> bold` but not `<length> bold thin` as bold, if not omitted, must be placed before or after the whole `thin && <length>` component.

### Single bar

Separating two or more entities by a _single bar_, `|`, means that all entities are exclusive options: **exactly one of these options must be present**. This is typically used to separate a list of possible keywords.

```css
<percentage> | <length> | left | center | right | top | bottom
```

This example matches the following values:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

But not:

- `center 3%`, as only one of the components must be present.
- `3em 4.5em`, as a component must be present at most one time.

> [!NOTE]
> The double bar has precedence over the single bar, meaning that `bold | thin || <length>` is equivalent to `bold | [ thin || <length> ]`. It describes `bold`, `thin`, `<length>`, `<length> thin`, or `thin <length>` but not `bold <length>` as only one entity from each side of the `|` combinator can be present.

## Component value multipliers

A multiplier is a sign that indicates how many times a preceding entity can be repeated. Without a multiplier, an entity must appear exactly one time.

Multipliers cannot be added and have precedence over all combinators.

### Asterisk (`*`)

The _asterisk multiplier_ indicates that the entity may appear **zero, one or several times**.

```css
bold smaller*
```

This example matches the following values:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, and so on.

But not:

- `smaller`, as `bold` is juxtaposed, and must appear before any `smaller` keyword.

### Plus (`+`)

The _plus multiplier_ indicates that the entity may appear **one or several times**.

```css
bold smaller+
```

This example matches the following values:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, and so on.

But not:

- `bold`, as `smaller` must appear at least once.
- `smaller`, as `bold` is juxtaposed and must appear before any `smaller` keyword.

### Question mark (`?`)

The _question mark multiplier_ indicates that the entity is optional, and **must appear zero or one time**.

```css
bold smaller?
```

This example matches the following values:

- `bold`
- `bold smaller`

But not:

- `bold smaller smaller`, as `smaller` must appear at most once.
- `smaller`, as `bold` is juxtaposed and must appear before any `smaller` keyword.

### Curly braces (`{ }`)

The _curly braces multiplier_, enclosing two integers separated by a comma, A and B, indicates that the entity **must appear at least A times and at most B times**.

```css
bold smaller{1,3}
```

This example matches the following values:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

But not:

- `bold`, as `smaller` must appear at least once.
- `bold smaller smaller smaller smaller`, as `smaller` must appear at most three times.
- `smaller`, as `bold` is juxtaposed and must appear before any `smaller` keyword

### Hash mark (`#`)

The _hash mark multiplier_ indicates that the entity may be repeated one or more times (for example, the plus multiplier), but each occurrence is separated by a comma (',').

```css
bold smaller#
```

This example matches the following values:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, and so on.

But not:

- `bold`, as `smaller` must appear at least once.
- `bold smaller smaller smaller`, as the different occurrences of `smaller` must be separated by commas.
- `smaller`, as `bold` is juxtaposed and must appear before any `smaller` keyword.

The hash mark may optionally be followed by curly braces to indicate how many times the entity repeats.

```css
bold smaller#{1,3}
```

This example matches the following values:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

But not:

- `bold smaller, smaller, smaller, smaller`, as `smaller` must appear at most three times.

```css
bold smaller#{2}
```

This example matches the following value:

- `bold smaller, smaller`

But not:

- `bold smaller`, as `smaller` must appear exactly two times.

### Exclamation point (`!`)

The _exclamation point multiplier_ after a group indicates that the group is required, and must produce at least one value; even if the grammar of the items within the group would otherwise allow the entire contents to be omitted, at least one component value must not be omitted.

```css
[ bold? smaller? ]!
```

This example matches the following values:

- `bold`
- `smaller`
- `bold smaller`

But not:

- neither `bold` nor `smaller`, as one of them must appear.
- `smaller bold`, as `bold` is juxtaposed and must appear before the `smaller` keyword.
- `bold smaller bold`, as `bold` and `smaller` may only appear once.

## Bracketed range notation (`[min,max]`)

Some types can accept numeric values within a certain range. For example, the [`column-count`](/en-US/docs/Web/CSS/column-count) property can accept an integer value between positive 1 and infinity, inclusive. The corresponding syntax looks like this:

```plain
<integer [1,∞]>
```

Any value outside this specified range causes the whole declaration to be invalid, therefore the browser will ignore it.

The _bracketed range notation_ `[min, max]` indicates an inclusive range between a `min` and `max` value. This notation is used in numeric type notations and can include units, e.g. `<angle [0,180deg]>`. Positive and negative Infinity (-∞ and ∞) must not have units specified. Types specified in units can have zero values specified with or without units, for example `<time [0s,10s]>` or `<time [0,10s]>`.

Here are some more examples:

- `<integer [-∞,∞]>`: Any integer from negative infinity to positive infinity.
- `<integer [0,∞]>`: Any integer from 0 to positive infinity is valid. Negative integers are invalid.
- `<time [0s,10s]>` or `<time [0,10s]>`: Any duration from 0 to 10 seconds is valid.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Any integer except zero is valid.

## Summary

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Sign</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Combinators</th>
    </tr>
    <tr>
      <td></td>
      <td>Juxtaposition</td>
      <td>Components are mandatory and should appear in that order</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Double ampersand</td>
      <td>Components are mandatory but may appear in any order</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Double bar</td>
      <td>
        At least one of the components must be present, and they may appear in
        any order.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Single bar</td>
      <td>Exactly one of the components must be present</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Brackets</td>
      <td>Group components to bypass precedence rules</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multipliers</th>
    </tr>
    <tr>
      <td></td>
      <td>No multiplier</td>
      <td>Exactly 1 time</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Asterisk</td>
      <td>0 or more times</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Plus sign</td>
      <td>1 or more times</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Question mark</td>
      <td>0 or 1 time (that is <em>optional)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Curly braces</td>
      <td>At least <code>min</code> times, at most <code>max</code> times</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Hash mark</td>
      <td>
        1 or more times, with each occurrence separated by a comma
        (<code>,</code>)
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Exclamation point</td>
      <td>Group must produce at least 1 value</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Ranges</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numeric bracketed range</td>
      <td>Specifies a numeric range</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
  - [Comments](/en-US/docs/Web/CSS/CSS_syntax/Comments)
  - [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/CSS_cascade/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value)
    - [Used values](/en-US/docs/Web/CSS/CSS_cascade/used_value)
    - [Actual values](/en-US/docs/Web/CSS/CSS_cascade/actual_value)
  - **Value definition syntax**
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
