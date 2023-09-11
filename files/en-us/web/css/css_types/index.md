---
title: CSS data types
slug: Web/CSS/CSS_Types
page-type: guide
spec-urls: https://drafts.csswg.org/css-values/
---

{{CSSRef}}

**CSS data types** define typical values (including keywords and units) accepted by CSS properties and functions. They are a special kind of [component value type](https://www.w3.org/TR/css3-values/#component-types).

The most commonly-used types are defined in the [CSS Values and Units](/en-US/docs/Web/CSS/CSS_Values_and_Units) specification. This specification also defines [functional notations](/en-US/docs/Web/CSS/CSS_Functions), which allow for more complex types or processing. Other types are defined in the specifications to which they apply.

Below you will find a reference to the types that you are most likely to come across, however it is not a comprehensive reference for all types defined in every CSS specification.

## Syntax

```css
selector {
  property: <unit-data-type>;
}
```

In formal CSS syntax, data types are denoted by a keyword placed between the inequality signs "`<`" and "`>`".

## Textual data types

These types include keywords and identifiers as well as strings, and URLs.

- Pre-defined keywords
  - : Keywords with a pre-defined meaning, for example, the value of `collapse` for the {{cssxref("border-collapse")}} property.
- CSS-wide keywords
  - : All properties, including custom properties, accept the CSS-wide keywords:
    - {{CSSXref("initial")}}
      - : The value specified as the property's initial value.
    - {{CSSXref("inherit")}}
      - : The computed value of the property on the element's parent.
    - {{CSSXref("revert")}}
      - : Rolls back the cascade to the value of the earlier origin.
    - {{CSSXref("unset")}}
      - : Acts as `inherit` or `initial` depending on whether the property is inherited or not.
- {{cssxref("&lt;custom-ident&gt;")}}
  - : A user-defined identifier, for example the name assigned using the {{cssxref("grid-area")}} property.
- {{cssxref("&lt;dashed-ident&gt;")}}
  - : A `<custom-ident>` with the additional restriction that it must start with two dashes, for example, with [CSS Custom Properties](/en-US/docs/Web/CSS/Using_CSS_custom_properties).
- {{cssxref("&lt;string&gt;")}}
  - : A quoted string, such as used for a value of the {{cssxref("content")}} property.
- {{cssxref("&lt;url&gt;", "url()")}}
  - : A pointer to a resource, for example as the value of {{cssxref("background-image")}}.

## Numeric data types

These data types are used to indicate quantities, indexes, and positions. The majority of these are defined in the Values and Units specification, however additional types are described in other specifications where they are specific to that specification alone — for example the `fr` unit in [CSS Grid Layout](https://www.w3.org/TR/css-grid-1/#fr-unit).

- {{cssxref("&lt;integer&gt;")}}
  - : One or more decimal units 0 through 9.
- {{cssxref("&lt;number&gt;")}}
  - : Real numbers which may also have a fractional component, for example 1 or 1.34.
- {{cssxref("&lt;dimension&gt;")}}
  - : A number with a unit attached to it, for example 23px or 15em.
- {{cssxref("&lt;percentage&gt;")}}
  - : A number with a percentage sign attached to it, for example 10%.
- {{cssxref("&lt;ratio&gt;")}}
  - : A ratio, written with the syntax `<number> / <number>`.
- {{cssxref("&lt;flex&gt;")}}
  - : A flexible length introduced for [CSS Grid Layout](/en-US/docs/Web/CSS/CSS_grid_layout), written as a `<number>` with the `fr` unit attached and used for grid track sizing.

## Quantities

These types are used to specify distance and other quantities.

- {{cssxref("&lt;length&gt;")}}
  - : Lengths are a `<dimension>` and refer to distances.
- {{cssxref("&lt;angle&gt;")}}
  - : Angles are used in properties such as {{cssxref("gradient/linear-gradient", "linear-gradient()")}} and are a `<dimension>` with one of `deg`, `grad`, `rad`, or `turn` units attached.
- {{cssxref("&lt;time&gt;")}}
  - : Duration units are a `<dimension>` with an `s` or `ms` unit.
- {{cssxref("&lt;frequency&gt;")}}
  - : Frequencies are a `<dimension>` with a `Hz` or `kHz` unit attached.
- {{cssxref("&lt;resolution&gt;")}}
  - : Is a `<dimension>` with a unit identifier of `dpi`, `dpcm`, `dppx`, or `x`.

## Combinations of types

Some CSS properties can take a dimension or a percentage value. In this case the percentage value will be resolved to a quantity that matches the allowable dimension. Properties which can accept a percentage in addition to a dimension will use one of the types listed below.

- {{cssxref("&lt;length-percentage&gt;")}}
  - : A type that can accept a length or a percentage as a value.
- {{cssxref("&lt;frequency-percentage&gt;")}}
  - : A type that can accept a frequency or a percentage as a value.
- {{cssxref("&lt;angle-percentage&gt;")}}
  - : A type that can accept an angle or a percentage as a value.
- {{cssxref("&lt;time-percentage&gt;")}}
  - : A type that can accept a time or a percentage as a value.

## Color

[The CSS Color Specification](https://www.w3.org/TR/css-color-4/) defines the {{cssxref("&lt;color&gt;")}} data type, and other types which relate to color in CSS.

- {{cssxref("&lt;color&gt;")}}
  - : Specified as a keyword or a numerical color value.
- {{cssxref("&lt;alpha-value&gt;")}}
  - : Specifies the transparency of a color. May be a `<number>`, in which case 0 is fully transparent and 1 is fully opaque, or a `<percentage>`, in which case 0% is fully transparent and 100% fully opaque.
- {{cssxref("&lt;hue&gt;")}}
  - : Specifies the `<angle>`, with a unit identifier of `deg`, `grad`, `rad`, or `turn`, or unitless `<number>` interpreted as `deg`, of the {{glossary("color wheel")}} specific to the `<absolute-color-functions>` of which it is a component.

## Images

[The CSS Images Specification](https://www.w3.org/TR/css-images-3/) defines the data types which deal with images, including gradients.

- {{cssxref("&lt;image&gt;")}}
  - : A URL reference to an image or a color gradient.
- {{cssxref("&lt;color-stop-list&gt;")}}
  - : A list of two or more color stops with optional transition information using a color hint.
- {{cssxref("&lt;linear-color-stop&gt;")}}
  - : A `<color>` and a `<length-percentage>` to indicate the color stop for this part of the gradient.
- {{cssxref("&lt;linear-color-hint&gt;")}}
  - : A `<length-percentage>` to indicate how the color interpolates.
- {{cssxref("&lt;ending-shape&gt;")}}
  - : Used for radial gradients; can have a keyword value of `circle` or `ellipse`.
- {{cssxref("&lt;size&gt;")}}
  - : Determines the size of the radial gradient's ending shape. This accepts a value of a keyword or a `<length>` but not a percentage.

## 2D positioning

The {{cssxref("&lt;position&gt;")}} data type is interpreted as defined for the {{cssxref("&lt;background-position&gt;")}} property.

- {{cssxref("&lt;position&gt;")}}
  - : Defines the position of an object area. Accepts a keyword value such as `top` or `left`, or a `<length-percentage>`.

## Calculation data types

These data types are used in [CSS math function](/en-US/docs/Web/CSS/CSS_Functions#math_functions) calculations.

- {{cssxref("&lt;calc-sum&gt;")}}
  - : A calculation which is a sequence of calculation values interspersed with addition (`+`) and subtraction (`-`) operators. This data type requires both values to have units.
- {{cssxref("&lt;calc-product&gt;")}}
  - : A calculation which is a sequence of calculation values interspersed with multiplication (`*`) and division (`/`) operators. When multiplying, one value must be unitless. When dividing, the second value must be unitless.
- {{cssxref("&lt;calc-value&gt;")}}
  - : Defines accepted values for calculations, values such as {{cssxref("&lt;number&gt;")}}, {{cssxref("&lt;dimension&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;calc-constant&gt;")}} or nested {{cssxref("&lt;calc-sum&gt;")}} calculations.
- {{cssxref("&lt;calc-constant&gt;")}}
  - : Defines a number of CSS keywords representing numeric constants such as `e` and `π`, that can be used in CSS math functions.

## Specifications

{{Specifications}}

## See also

- [CSS Units and Values](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Functional Notation](/en-US/docs/Web/CSS/CSS_Functions)
