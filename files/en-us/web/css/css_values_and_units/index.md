---
title: CSS values and units
slug: Web/CSS/CSS_Values_and_Units
page-type: css-module
spec-urls:
  - https://drafts.csswg.org/css-values-3/
  - https://drafts.csswg.org/css-values-4/
  - https://drafts.csswg.org/css-values-5/
---

{{CSSRef}}

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
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url()")}}

Additional functions, including `calc-mix()`, `crossorigin()`, `first-valid()`, `if()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `sibling-count()`, `sibling-index()`, `src()`, `type()`, and `toggle()`, are defined in the specifications, but not yet implemented in browsers.

### Data types

- [`<angle-percentage>`](/en-US/docs/Web/CSS/angle-percentage)
- [`<angle>`](/en-US/docs/Web/CSS/angle)
- [`<animation-timeline>`](/en-US/docs/Web/CSS/animation-timeline)
- [`<attr-name>`](/en-US/docs/Web/CSS/attr#attr-name)
- [`<attr-type>`](/en-US/docs/Web/CSS/attr#attr-type)
- [`<attr-unit>`](/en-US/docs/Web/CSS/attr#attr-unit)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/en-US/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/en-US/docs/Web/CSS/calc-sum)
- [`<custom-ident>`](/en-US/docs/Web/CSS/custom-ident)
- [`<dashed-ident>`](/en-US/docs/Web/CSS/dashed-ident)
- [`<dimension>`](/en-US/docs/Web/CSS/dimension)
- [`<easing-function>`](/en-US/docs/Web/CSS/easing-function)
- [`<first-valid()>`](/en-US/docs/Web/CSS/)
- [`<frequency>`](/en-US/docs/Web/CSS/frequency)
- [`<frequency-percentage>`](/en-US/docs/Web/CSS/frequency-percentage)
- [`<ident>`](/en-US/docs/Web/CSS/ident)
- [`<integer>`](/en-US/docs/Web/CSS/integer)
- [`<length-percentage>`](/en-US/docs/Web/CSS/length-percentage)
- [`<length>`](/en-US/docs/Web/CSS/length)
- [`<number>`](/en-US/docs/Web/CSS/number)
- [`<percentage>`](/en-US/docs/Web/CSS/percentage)
- [`<position>`](/en-US/docs/Web/CSS/position)
- [`<ratio>`](/en-US/docs/Web/CSS/ratio)
- [`<resolution>`](/en-US/docs/Web/CSS/resolution)
- [`<rounding-strategy>`](/en-US/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/en-US/docs/Web/CSS/string)
- [`<syntax>`](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
- [`<time-percentage>`](/en-US/docs/Web/CSS/time-percentage)
- [`<time>`](/en-US/docs/Web/CSS/time)
- [`<url>`](/en-US/docs/Web/CSS/url)
- [`<url-modifier>`](/en-US/docs/Web/CSS/url_function#url-modifier)
- [`<view-timeline-name>`](/en-US/docs/Web/CSS/view-timeline-name)

#### Units

- [`%` (percentage)](/en-US/docs/Web/CSS/length#cap)
- [`cap`](/en-US/docs/Web/CSS/length#cap)
- [`ch`](/en-US/docs/Web/CSS/length#ch)
- [`cm`](/en-US/docs/Web/CSS/length#cm)
- [`deg`](/en-US/docs/Web/CSS/length#deg)
- [`dpcm`](/en-US/docs/Web/CSS/length#dpcm)
- [`dpi`](/en-US/docs/Web/CSS/length#dpi)
- [`dppx`](/en-US/docs/Web/CSS/length#dppx)
- [`dvb`](/en-US/docs/Web/CSS/length#dvb)
- [`dvh`](/en-US/docs/Web/CSS/length#dvh)
- [`dvi`](/en-US/docs/Web/CSS/length#dvi)
- [`dvmax`](/en-US/docs/Web/CSS/length#dvmax)
- [`dvmin`](/en-US/docs/Web/CSS/length#dvmin)
- [`dvw`](/en-US/docs/Web/CSS/length#dvw)
- [`em`](/en-US/docs/Web/CSS/length#em)
- [`ex`](/en-US/docs/Web/CSS/length#ex)
- [`grad`](/en-US/docs/Web/CSS/length#grad)
- [`Hz`](/en-US/docs/Web/CSS/length#Hz)
- [`ic`](/en-US/docs/Web/CSS/length#ic)
- [`in`](/en-US/docs/Web/CSS/length#in)
- [`kHz`](/en-US/docs/Web/CSS/length#kHz)
- [`left`](/en-US/docs/Web/CSS/length#left)
- [`lh`](/en-US/docs/Web/CSS/length#lh)
- [`lvb`](/en-US/docs/Web/CSS/length#lvb)
- [`lvh`](/en-US/docs/Web/CSS/length#lvh)
- [`lvi`](/en-US/docs/Web/CSS/length#lvi)
- [`lvmax`](/en-US/docs/Web/CSS/length#lvmax)
- [`lvmin`](/en-US/docs/Web/CSS/length#lvmin)
- [`lvw`](/en-US/docs/Web/CSS/length#lvw)
- [`mm`](/en-US/docs/Web/CSS/length#mm)
- [`ms`](/en-US/docs/Web/CSS/length#ms)
- [`pc`](/en-US/docs/Web/CSS/length#pc)
- [`pi`](/en-US/docs/Web/CSS/length#pi)
- [`pt`](/en-US/docs/Web/CSS/length#pt)
- [`px`](/en-US/docs/Web/CSS/length#px)
- [`Q`](/en-US/docs/Web/CSS/length#Q)
- [`rad`](/en-US/docs/Web/CSS/length#rad)
- [`rcap`](/en-US/docs/Web/CSS/length#rcap)
- [`rch`](/en-US/docs/Web/CSS/length#rch)
- [`rem`](/en-US/docs/Web/CSS/length#rem)
- [`rex`](/en-US/docs/Web/CSS/length#rex)
- [`ric`](/en-US/docs/Web/CSS/length#ric)
- [`rlh`](/en-US/docs/Web/CSS/length#rlh)
- [`s`](/en-US/docs/Web/CSS/length#s)
- [`size`](/en-US/docs/Web/CSS/length#size)
- [`svb`](/en-US/docs/Web/CSS/length#svb)
- [`svh`](/en-US/docs/Web/CSS/length#svh)
- [`svi`](/en-US/docs/Web/CSS/length#svi)
- [`svmax`](/en-US/docs/Web/CSS/length#svmax)
- [`svmin`](/en-US/docs/Web/CSS/length#svmin)
- [`svw`](/en-US/docs/Web/CSS/length#svw)
- [`turn`](/en-US/docs/Web/CSS/length#turn)
- [`up`](/en-US/docs/Web/CSS/length#up)
- [`vb`](/en-US/docs/Web/CSS/length#vb)
- [`vh`](/en-US/docs/Web/CSS/length#vh)
- [`vi`](/en-US/docs/Web/CSS/length#vi)
- [`vmax`](/en-US/docs/Web/CSS/length#vmax)
- [`vmin`](/en-US/docs/Web/CSS/length#vmin)
- [`vw`](/en-US/docs/Web/CSS/length#vw)
- [`x`](/en-US/docs/Web/CSS/length#x)

[Flex units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`) and [container units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`) are defined in the [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) and [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) modules, respectively.

#### Unit categorizations

- [Absolute length units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Angle units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#angle_units) (`deg`, `grad`, `rad`, `turn`)
- [Default viewport units](/en-US/docs/Web/CSS/length#default_viewport_units) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Dynamic viewport units](/en-US/docs/Web/CSS/length#dynamic_viewport_units) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Frequency units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#frequency_units) (`Hz`, `kHz`)
- [Large viewport-percentage units](/en-US/docs/Web/CSS/length#large_viewport_units) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Local font-relative length units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#local_font-relative_lengths) (`cap`, `ch` ,`em`, `ex`, `ic`, `lh`)
- [Physical units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Relative length units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Resolution units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#resolution_units) (`dpcm`, `dpi` , `dppx`, `x`)
- [Root font-relative length units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#root_font-relative_lengths) (`rcap` ,`rch`, `rem`, `rex`, `ric`, `rlh`)
- [Small viewport-percentage unit](/en-US/docs/Web/CSS/length#small_viewport_units) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Time units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#time_units) (`ms`, `s`)
- [Viewport units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#viewport_units) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Visual angle unit](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#absolute_length_units) (`px`)

### Key concepts

- {{glossary("advance measure")}}
- [bracketed range notation](/en-US/docs/Web/CSS/Value_definition_syntax#bracketed_range_notation_minmax)
- [Component value combinators](/en-US/docs/Web/CSS/Value_definition_syntax#component_value_combinators)
- [CSS-wide keywords](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords)
- {{glossary("device pixel")}}
- [functional notation](/en-US/docs/Web/CSS/CSS_Functions)
- {{glossary("identifier")}}
- {{glossary("interpolation")}}
- {{glossary("keyword")}}
- [math function](/en-US/docs/Web/CSS/CSS_Functions/Using_CSS_math_functions)
- [numeric data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)
- {{glossary("origin")}}
- {{glossary("pixel")}}
- [textual data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)
- {{glossary("URL")}}
- [value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)

## Guides

- [CSS data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)

  - : Introduction to CSS data types that define typical values accepted by CSS properties and functions.

- [Numeric data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types)

  - : Overview of the numeric data types, including integers, numbers, percentages, and dimensions, along with relative and absolute dimensions, angles, and time units.

- [Textual data types](/en-US/docs/Web/CSS/CSS_Values_and_Units/Textual_data_types)

  - : Overview of the textual data types, including pre-defined keyword values, global CSS keyword values, and URLs.

- [CSS value functions](/en-US/docs/Web/CSS/CSS_Functions)

  - : Overview of the CSS statements that invoke special data processing or calculations to return a CSS value for a CSS property.

- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)

  - : The formal grammar used to define the set of valid values for CSS properties and functions.

- [Learn: Values and units](/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)

  - : A look at some of the most frequently used value types, what they are, and how they work.

## Related

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module

  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- [CSS flexible box layout](/en-US/docs/Web/CSS/CSS_flexible_box_layout) module

  - {{cssxref("&lt;flex&gt;")}}
  - [Flex units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#flex_units) (`fr`)

- [CSS conditional rules](/en-US/docs/Web/CSS/CSS_conditional_rules) module

  - [Container units](/en-US/docs/Web/CSS/CSS_Values_and_Units/Numeric_data_types#container_units) (`cqb`,`cqh`,`cqi`,`cqmax`,`cqmin`,`cqw`)

- [CSS colors](/en-US/docs/Web/CSS/CSS_colors) module

  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/en-US/docs/Web/CSS/color_value/color-mix)

- [CSS images](/en-US/docs/Web/CSS/CSS_images) module

  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Specifications

{{Specifications}}

## See also

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
- [CSS selectors](/en-US/docs/Web/CSS/CSS_selectors) module
