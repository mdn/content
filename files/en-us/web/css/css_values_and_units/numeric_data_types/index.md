---
title: Numeric data types
slug: Web/CSS/CSS_Values_and_Units/Numeric_data_types
page-type: guide
spec-urls: https://drafts.csswg.org/css-values/
---

{{CSSRef}}

Every CSS declaration consists of a property/value pair. The value can include various data types depending on the property, such as a single number, keyword, function, or a combination of different types; some values have units, while others do not. Numeric data types include {{cssxref("&lt;integer&gt;")}}, {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, and {{cssxref("&lt;percentage&gt;")}} values. This guide is an overview of numeric data types. Refer to the page for each value type for more detailed information.

## Integers

An integer is one or more decimal digits, `0` through `9`, such as `1024` or `-55`. An integer may be preceded by a `+` or `-` symbol, with no space between the symbol and the integer.

## Numbers

A {{cssxref("&lt;number&gt;")}} represents a real number, which may or may not have a decimal point with a fractional component, for example `0.255`, `128` or `-1.2`. Numbers may also be preceded by a `+` or `-` symbol.

## Dimensions

A {{cssxref("&lt;dimension&gt;")}} is a `<number>` with a unit attached to it, for example `45deg`, `100ms`, or `10px`. The attached unit identifier is case insensitive. There is never a space or any other characters between the number and the unit identifier: i.e. `1 cm` is not valid.

CSS uses dimensions to specify:

- {{cssxref("&lt;length&gt;")}} (Distance units)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;flex&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

These are all covered in subsections below.

### Distance units

Where a distance unit, also known as a length, is allowed as a value for a property, this is described as the {{cssxref("&lt;length&gt;")}} type. There are two types of lengths in CSS: relative and absolute. Relative length units specify a length in relation to something else.

There are two types of relative lengths: font-relative lengths and viewport-percentage lengths. These both come in two types. Font-relative length units are either local font-relative or root font-relative. Viewport percentage lengths are either relative to the viewport height or width size or, as defined in the [CSS Containment module](/en-US/docs/Web/CSS/CSS_containment), relative to a [container](/en-US/docs/Web/CSS/CSS_containment/Container_queries#container_query_length_units).

#### Local font-relative lengths

Local font-relative lengths are relative to the "local" font size or line height, specifying a length in relation to a computed size of a feature of the [element](/en-US/docs/Web/HTML/Element) itself, or relative to the element's inherited value in the case of a circular reference, such as the `em` value for a {{cssxref("font-size")}} property or a `lh` value for a {{cssxref("line-height")}} property.
For example, `em` is relative to the font size on the element and `ex` is relative to the x-height of the element's font.

| Unit  | Relative to                                                                                                                            |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `cap` | Cap height (the nominal height of capital letters) of the element's font.                                                              |
| `ch`  | Average character advance of a narrow glyph in the element's font, as represented by the "0" (ZERO, U+0030) glyph.                     |
| `em`  | Font size of the element's font.                                                                                                       |
| `ex`  | x-height of the element's font.                                                                                                        |
| `ic`  | Average character advance of a full-width glyph in the element's font, as represented by the "水" (CJK water ideograph, U+6C34) glyph. |
| `lh`  | Line height of the element.                                                                                                            |

#### Root font-relative lengths

Root font-relative lengths specify a length in relation to the element's [root element](/en-US/docs/Web/CSS/:root) ancestor, such as {{HTMLElement("HTML")}} or {{SVGElement("SVG")}}.
For example, `rem` is relative to the font size on the root element and `rex` is the x-height of the root element's font.

| Unit   | Relative to                                                                                                                                 |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `rcap` | Cap height (the nominal height of capital letters) of the root element's font.                                                              |
| `rch`  | Average character advance of a narrow glyph in the root element's font, as represented by the "0" (ZERO, U+0030) glyph.                     |
| `rem`  | Font size of the root element's font.                                                                                                       |
| `rex`  | x-height of the root element's font.                                                                                                        |
| `ric`  | Average character advance of a full-width glyph in the root element's font, as represented by the "水" (CJK water ideograph, U+6C34) glyph. |
| `rlh`  | Line height of the root element.                                                                                                            |

#### Viewport units

Viewport unit lengths specify a length relative to the dimensions of the [viewport](/en-US/docs/Glossary/Viewport).
For example, `vw` is relative to the width of the viewport and `vh` is relative to the height of the viewport.

| Unit   | Relative to                                                                                           |
| ------ | ----------------------------------------------------------------------------------------------------- |
| `dvh`  | 1% of the [dynamic](/en-US/docs/Web/CSS/length#dynamic) viewport's height.                            |
| `dvw`  | 1% of the [dynamic](/en-US/docs/Web/CSS/length#dynamic) viewport's width.                             |
| `lvh`  | 1% of the [large](/en-US/docs/Web/CSS/length#large) viewport's height.                                |
| `lvw`  | 1% of the [large](/en-US/docs/Web/CSS/length#large) viewport's width.                                 |
| `svh`  | 1% of the [small](/en-US/docs/Web/CSS/length#small) viewport's height.                                |
| `svw`  | 1% of the [small](/en-US/docs/Web/CSS/length#small) viewport's width.                                 |
| `vb`   | 1% of viewport's size in the root element's [block axis](/en-US/docs/Glossary/Flow_relative_values).  |
| `vh`   | 1% of viewport's height.                                                                              |
| `vi`   | 1% of viewport's size in the root element's [inline axis](/en-US/docs/Glossary/Flow_relative_values). |
| `vmax` | 1% of viewport's larger dimension.                                                                    |
| `vmin` | 1% of viewport's smaller dimension.                                                                   |
| `vw`   | 1% of viewport's width.                                                                               |

#### Container units

Container query length units specify a length relative to the dimensions of a [query container](/en-US/docs/Web/CSS/CSS_containment/Container_queries).
For example, `cqw` is relative to the width of the query container and `cqh` is relative to the height of the query container.

| Unit    | Relative to                           |
| ------- | ------------------------------------- |
| `cqb`   | 1% of a query container's block size  |
| `cqh`   | 1% of a query container's height      |
| `cqi`   | 1% of a query container's inline size |
| `cqmax` | The larger value of `cqi` or `cqb`    |
| `cqmin` | The smaller value of `cqi` or `cqb`   |
| `cqw`   | 1% of a query container's width       |

### Absolute length units

Absolute length units are fixed to a physical length: either an inch or a centimeter. Many of these units are therefore more useful when the output is a fixed size media, such as print. For example, `mm` is a physical millimeter, 1/10th of a centimeter.

| Unit | Name                | Equivalent to       |
| ---- | ------------------- | ------------------- |
| `cm` | Centimeters         | 1cm = 96px/2.54     |
| `in` | Inches              | 1in = 2.54cm = 96px |
| `mm` | Millimeters         | 1mm = 1/10th of 1cm |
| `pc` | Picas               | 1pc = 1/6th of 1in  |
| `pt` | Points              | 1pt = 1/72th of 1in |
| `px` | Pixels              | 1px = 1/96th of 1in |
| `Q`  | Quarter-millimeters | 1Q = 1/40th of 1cm  |

When including a length value, if the length is `0`, the unit identifier is not required. Otherwise, the unit identifier is required, is case insensitive, and must come immediately after the numeric part of the value, with no space in-between.

#### Angle units

Angle values are represented by the type {{cssxref("&lt;angle&gt;")}} and accept the following values:

| Unit   | Name     | Description                              |
| ------ | -------- | ---------------------------------------- |
| `deg`  | Degrees  | There are 360 degrees in a full circle.  |
| `grad` | Gradians | There are 400 gradians in a full circle. |
| `rad`  | Radians  | There are 2π radians in a full circle.   |
| `turn` | Turns    | There is 1 turn in a full circle.        |

#### Time units

Time values are represented by the type {{cssxref("&lt;time&gt;")}}. When including a time value, the unit identifier — the `s` or `ms` — is required. It accepts the following values.

| Unit | Name         | Description                               |
| ---- | ------------ | ----------------------------------------- |
| `ms` | Milliseconds | There are 1,000 milliseconds in a second. |
| `s`  | Seconds      |                                           |

#### Frequency units

Frequency values are represented by the type {{cssxref("&lt;frequency&gt;")}}. It accepts the following values.

| Unit  | Name      | Description                                      |
| ----- | --------- | ------------------------------------------------ |
| `Hz`  | Hertz     | Represents the number of occurrences per second. |
| `kHz` | KiloHertz | A kiloHertz is 1000 Hertz.                       |

`1Hz`, which can also be written as `1hz` or `1HZ`, is one cycle per second.

#### Flex units

Flex units are represented by the type {{cssxref("&lt;flex&gt;")}}. It accepts the following value.

| Unit | Name | Description                                          |
| ---- | ---- | ---------------------------------------------------- |
| `fr` | Flex | Represents a flexible length within a grid container |

#### Resolution units

Resolution units are represented by the type {{cssxref("&lt;resolution&gt;")}}. They represent the size of a single dot in a graphical representation, such as a screen, by indicating how many of these dots fit in a CSS inch, centimeter, or pixel. It accepts the following values:

| Unit        | Description          |
| ----------- | -------------------- |
| `dpcm`      | Dots per centimeter. |
| `dpi`       | Dots per inch.       |
| `dppx`, `x` | Dots per px unit.    |

### Percentages

A {{cssxref("&lt;percentage&gt;")}} is a type that represents a fraction of some other value.

Percentage values are always relative to another quantity, for example a length. Each property that allows percentages also defines the quantity to which the percentage refers. This quantity can be a value of another property of the same element, the value of a property of an ancestor element, a measurement of a containing block, or something else.

As an example, if you specify the {{cssxref("width")}} of a box as a percentage, it refers to the percentage of the box's parent's computed width:

```css
.box {
  width: 50%;
}
```

## Mixing percentages and dimensions

Some properties accept a dimension that could be either one of two types, for example a `<length>` **or** a `<percentage>`. In this case the allowed value is detailed in the specification as a combination unit, e.g. {{cssxref("&lt;length-percentage&gt;")}}. Other possible combinations are as follows:

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

## Special data types (defined in other specs)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

### Color

The {{cssxref("&lt;color&gt;")}} value specifies the color of an element feature (e.g. it's background color), and is defined in the [CSS Color Module](https://drafts.csswg.org/css-color-3/).

### Image

The {{cssxref("&lt;image&gt;")}} value specifies all the different types of image that can be used in CSS, and is defined in the [CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/).

### Position

The {{cssxref("&lt;position&gt;")}} type defines 2D positioning of an object inside a positioning area, for example a background image inside a container. This type is interpreted as a {{cssxref("background-position")}} and therefore specified in the [CSS Backgrounds and Borders specification](https://www.w3.org/TR/css-backgrounds-3/).

## Functional notation

- {{cssxref("calc", "calc()")}}
- {{cssxref("min", "min()")}}
- {{cssxref("max", "max()")}}
- {{cssxref("minmax", "minmax()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr", "attr()")}}

[Functional notation](/en-US/docs/Web/CSS/CSS_Functions) is a type of value that can represent more complex types or invoke special processing by CSS. The syntax starts with the name of the function immediately followed by a left parenthesis `(` followed by the argument(s) to the notation followed by a right parenthesis `)`. Functions can take multiple arguments, which are formatted similarly to a CSS property value.

White space is allowed, but optional inside the parentheses. (But see notes regarding whitespace within pages for `min()`, `max()`, `minmax()`, and `clamp()` functions.)

Some legacy functional notations, such as legacy syntax for `rgb()`, `rgba()`, `hsl()`, and `hsla()`, used commas, but commas are generally only used to separate items in a list. If a comma is used to separate arguments, white space is optional before and after the comma.

## Specifications

{{Specifications}}

## See also

- [Textual data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- [CSS data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS values and units](/en-US/docs/Web/CSS/CSS_Values_and_Units) module
- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
