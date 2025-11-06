---
title: CSS values and units
slug: Web/CSS/CSS_values_and_units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
sidebar: cssref
---

Every CSS declaration consists of a property/value pair. The value can take various forms depending on the property, such as a single integer, keyword, function, or a combination of different items; some values have units, while others do not. Every property also accepts the CSS-wide values. The CSS values and units module defines the data types — values and units — that CSS properties accept. This module also defines the CSS value definition syntax, or formal grammar, used to define the set of valid values for every CSS property and function.

## Reference

### Properties

- {{cssxref("interpolate-size")}}

### Functions

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("progress()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

The CSS values and units module also introduces the `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()`, and `toggle()` functions. Currently, no browsers support these features.

### Data types

- [`<angle-percentage>`](/en-US/docs/Web/CSS/Reference/Values/angle-percentage)
- [`<angle>`](/en-US/docs/Web/CSS/Reference/Values/angle)
- [`<animation-timeline>`](/en-US/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`<attr-name>`](/en-US/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/en-US/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/en-US/docs/Web/CSS/Reference/Values/calc-size#calc-size-basis)
- [`<calc-sum>`](/en-US/docs/Web/CSS/Reference/Values/calc-sum)
- [`<custom-ident>`](/en-US/docs/Web/CSS/Reference/Values/custom-ident)
- [`<dashed-ident>`](/en-US/docs/Web/CSS/Reference/Values/dashed-ident)
- [`<dimension>`](/en-US/docs/Web/CSS/Reference/Values/dimension)
- [`<easing-function>`](/en-US/docs/Web/CSS/Reference/Values/easing-function)
- [`<first-valid()>`](/en-US/docs/Web/CSS)
- [`<ident>`](/en-US/docs/Web/CSS/Reference/Values/ident)
- [`<integer>`](/en-US/docs/Web/CSS/Reference/Values/integer)
- [`<length-percentage>`](/en-US/docs/Web/CSS/Reference/Values/length-percentage)
- [`<length>`](/en-US/docs/Web/CSS/Reference/Values/length)
- [`<number>`](/en-US/docs/Web/CSS/Reference/Values/number)
- [`<percentage>`](/en-US/docs/Web/CSS/Reference/Values/percentage)
- [`<position>`](/en-US/docs/Web/CSS/Reference/Properties/position)
- [`<ratio>`](/en-US/docs/Web/CSS/Reference/Values/ratio)
- [`<resolution>`](/en-US/docs/Web/CSS/Reference/Values/resolution)
- [`<rounding-strategy>`](/en-US/docs/Web/CSS/Reference/Values/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/en-US/docs/Web/CSS/Reference/Values/string)
- [`<syntax>`](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/en-US/docs/Web/CSS/Reference/Values/time-percentage)
- [`<time>`](/en-US/docs/Web/CSS/Reference/Values/time)
- [`<url>`](/en-US/docs/Web/CSS/Reference/Values/url_value)
- [`<url-modifier>`](/en-US/docs/Web/CSS/Reference/Values/url_function#url-modifier)
- [`<view-timeline-name>`](/en-US/docs/Web/CSS/Reference/Properties/view-timeline-name)

The CSS values and units module also introduces the [`<frequency>`](/en-US/docs/Web/CSS/Reference/Values/frequency) and [`<frequency-percentage>`](/en-US/docs/Web/CSS/Reference/Values/frequency-percentage) data types. Currently, no browsers support these features.

#### Units

- [`%` (percentage)](/en-US/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/en-US/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/en-US/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/en-US/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/en-US/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/en-US/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/en-US/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/en-US/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/en-US/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/en-US/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/en-US/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/en-US/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/en-US/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/en-US/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/en-US/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/en-US/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/en-US/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/en-US/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/en-US/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/en-US/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/en-US/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/en-US/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/en-US/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/en-US/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/en-US/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/en-US/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/en-US/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/en-US/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/en-US/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/en-US/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/en-US/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/en-US/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/en-US/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/en-US/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/en-US/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/en-US/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/en-US/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/en-US/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/en-US/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/en-US/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/en-US/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/en-US/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/en-US/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/en-US/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/en-US/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/en-US/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/en-US/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/en-US/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/en-US/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/en-US/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/en-US/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/en-US/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/en-US/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/en-US/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/en-US/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/en-US/docs/Web/CSS/Reference/Values/resolution#x)

[Flex units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#flex_units) (`fr`) and [container units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) are defined in the [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) and [CSS conditional rules](/en-US/docs/Web/CSS/Guides/Conditional_rules) modules, respectively.

#### Unit categorizations

- [Absolute length units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Angle units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Default viewport units](/en-US/docs/Web/CSS/Reference/Values/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamic viewport units](/en-US/docs/Web/CSS/Reference/Values/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequency units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Large viewport-percentage units](/en-US/docs/Web/CSS/Reference/Values/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Local font-relative length units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Physical units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative length units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Resolution units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Root font-relative length units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#root_font-relative_lengths) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Small viewport-percentage unit](/en-US/docs/Web/CSS/Reference/Values/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Time units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Visual angle unit](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#absolute_length_units) (`px`)

### Key concepts

- {{glossary("Advance measure")}}
- [Bracketed range notation](/en-US/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#bracketed_range_notation_minmax)
- [Component value combinators](/en-US/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax#component_value_combinators)
- [CSS-wide keywords](/en-US/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords)
- {{glossary("Device pixel")}}
- [Functional notation](/en-US/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword")}}
- [Math function](/en-US/docs/Web/CSS/CSS_values_and_units/Using_CSS_math_functions)
- [Numeric data types](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
- {{glossary("Origin")}}
- {{glossary("Pixel")}}
- [Textual data types](/en-US/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Value definition syntax](/en-US/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)

## Guides

- [CSS data types](/en-US/docs/Web/CSS/Reference/Values/Data_types)
  - : Introduction to CSS data types that define typical values accepted by CSS properties and functions.

- [Numeric data types](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types)
  - : Overview of the numeric data types, including integers, numbers, percentages, and dimensions, along with relative and absolute dimensions, angles, and time units.

- [Textual data types](/en-US/docs/Web/CSS/CSS_values_and_units/Textual_data_types)
  - : Overview of the textual data types, including pre-defined keyword values, global CSS keyword values, and URLs.

- [CSS value functions](/en-US/docs/Web/CSS/Reference/Values/Functions)
  - : Overview of the CSS statements that invoke special data processing or calculations to return a CSS value for a CSS property.

- [Using CSS math functions](/en-US/docs/Web/CSS/CSS_values_and_units/Using_CSS_math_functions)
  - : The CSS math functions that allow a property value to be written as a mathematical expression.

- [Value definition syntax](/en-US/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - : The formal grammar used to define the set of valid values for CSS properties and functions.

- [Using CSS typed arithmetic](/en-US/docs/Web/CSS/CSS_values_and_units/Using_CSS_typed_arithmetic)
  - : An explanation of CSS typed arithmetic behavior and use cases enabled by it.

- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : A look at some of the most frequently used value types, what they are, and how they work.

## Related

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/Guides/Cascade) module
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS grid layout](/en-US/docs/Web/CSS/Guides/Grid_layout) module
  - {{cssxref("&lt;flex&gt;")}}
  - [Flex units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#flex_units) (`fr`)

- [CSS conditional rules](/en-US/docs/Web/CSS/Guides/Conditional_rules) module
  - [Container units](/en-US/docs/Web/CSS/CSS_values_and_units/Numeric_data_types#container_units) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- [CSS colors](/en-US/docs/Web/CSS/Guides/Colors) module
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix)

- [CSS images](/en-US/docs/Web/CSS/CSS_images) module
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Specifications

{{Specifications}}

## See also

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
