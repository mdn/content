---
title: Shorthand properties
slug: Web/CSS/Guides/Cascade/Shorthand_properties
page-type: guide
sidebar: cssref
---

**_Shorthand properties_** are CSS properties that let you set the values of multiple other CSS properties in one declaration. Using a shorthand property, you can write more concise (and often more readable) style sheets, saving time and energy.

The CSS specification defines shorthand properties to group the definition of common properties acting on the same theme. For instance, the CSS {{cssxref("background")}} property is a shorthand property that's able to define the values of {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}}, and {{cssxref("background-position")}}.

## Ordering properties

Shorthand properties try not to force a specific order for the values of the properties they replace. This works well when these properties use values of different types, as the order has no importance, but this does not work as easily when several properties can have identical values.

Since CSS uses the box model, almost everything has a top, bottom, left, and right property. This is the most common use for the a shorthand. Two important cases here are:
- properties related to the sides of the box
- properties related to the corners of the box

### Side of the Box
Shorthand properties like {{cssxref("margin")}}, {{cssxref("scroll-margin")}}, {{cssxref("border-color")}}, {{cssxref("border-style")}}, {{cssxref("border-width")}}, {{cssxref("padding")}}, {{cssxref("scroll-padding")}}, and {{cssxref("inset")}} define values as follows:

- **1-value syntax:** `border-width: 1em` — A single value represents all four sides: ![Box edges with one-value syntax](border1.png)

- **2-value syntax:** `border-width: 1em 2em` — The first value represents the top and bottom and the second value represents the left and right: ![Box edges with two-value syntax](border2.png)

- **3-value syntax:** `border-width: 1em 2em 3em` — The first value represents the top, the second values represents the left and right, and the third value represents the bottom: ![Box edges with three-value syntax](border3.png)

- **4-value syntax:** `border-width: 1em 2em 3em 4em` — The four values represent the top, right, bottom and left: ![Box edges with four-value syntax](border4.png)

The initial letter of Top-Right-Bottom-Left matches the order of the consonant of the word _trouble_: TRBL. You can also remember it as the order that the hands would rotate on a clock: `1em` starts in the 12 o'clock position, then `2em` in the 3 o'clock position, then `3em` in the 6 o'clock position, and `4em` in the 9 o'clock position.

#### Border
In the box model, the `border` is special. It has more shorthands than any other property. Unlike `margin` and `padding`, a `border` can be stylized. It can have a color, a style, and a width. Which is why the {{cssxref("border")}} property is a shorthand for the shorthands `border-color`, `border-style`, and `border-width`. Since only one value for each means all four sides are the same, the constituent properties must be used to define different themes for different sides.

#### Outline
In the box model, the `outline` is also special. Just like `border` it can be stylized, but unlike `border` it cannot have different edges. Which is why the {{cssxref("outline")}} property is also a shorthand for the properties `outline-color`, `outline-style`, and `outline-width`, but since all four sides must be the same there are no constituent properties like `border`.

### Corners of the Box

Properties that work on the corners of the box like {{cssxref("border-radius")}}, use the same clockwise motion except starting at the top-left corner:

- **1-value syntax:** `border-radius: 1em` — A single value represents all four corners: ![Box corners with one-value syntax](corner1.png)

- **2-value syntax:** `border-radius: 1em 2em` — The first value represents the top-left and bottom-right corners and the second value represents the top-right and bottom-left corners: ![Box corners with two-value syntax](corner2.png)

- **3-value syntax:** `border-radius: 1em 2em 3em` — The first value represents the top-left corner, the second value represents the top-right and bottom-left corners, and the third value represents the bottom-right corner: ![Box corners with three-value syntax](corner3.png)

- **4-value syntax:** `border-radius: 1em 2em 3em 4em` — The four values represent the top-left, top-right, bottom-right and bottom-left corners: ![Box corners with four-value syntax](corner4.png)

## Omitting properties

A value which is not specified is set to a default value defined by the shorthand,
which may differ from the property's initial value.

That means that it **overrides** previously set values.
For example:

```css
p {
  background-color: red;
  background: url("images/bg.gif") no-repeat left top;
}
```

This will not set the color of the background to `red` but to the default value for {{cssxref("background-color")}}, which is `transparent`.

Only the individual properties values can inherit. As missing values are replaced by their initial value, it is impossible to allow inheritance of individual properties by omitting them. The keyword `inherit` can be applied to a property, but only as a whole, not as a keyword for one value or another. That means that the only way to make some specific value to be inherited is to use the longhand property with the keyword `inherit`.

## Background properties

Consider a background with the following properties

```css
background-color: black;
background-image: url("images/bg.gif");
background-repeat: no-repeat;
background-position: left top;
```

These four declarations can be shortened to just one:

```css
background: black url("images/bg.gif") no-repeat left top;
```

The shorthand form is actually the equivalent of the longhand properties above plus `background-attachment: scroll` and, in CSS3, some additional properties.

See {{cssxref("background")}} for more detailed information, including CSS3 properties.

## Font properties

Consider the following declarations:

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: "Arial", sans-serif;
```

These 5 statements can be shortened to the following:

```css
font:
  italic bold 0.8em/1.2 "Arial",
  sans-serif;
```

This shorthand declaration is actually equivalent to the longhand declarations above plus `font-variant: normal`, `font-size-adjust: none`, and `font-stretch: normal`.



## The universal shorthand property

CSS provides a universal shorthand property, {{cssxref("all")}}, which applies its value to every property in the document. Its purpose is to change the properties' inheritance model.

See [Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) or [Introducing the CSS Cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction) for more information about how inheritance works in CSS.

## Shorthand properties

- {{cssxref("all")}}
- {{cssxref("animation")}}
- {{cssxref("animation-range")}}
- {{cssxref("background")}}
- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-bottom")}}
- {{cssxref("border-color")}}
- {{cssxref("border-image")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-left")}}
- {{cssxref("border-radius")}}
- {{cssxref("border-right")}}
- {{cssxref("border-style")}}
- {{cssxref("border-top")}}
- {{cssxref("border-width")}}
- {{cssxref("column-rule")}}
- {{cssxref("columns")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("container")}}
- {{cssxref("flex")}}
- {{cssxref("flex-flow")}}
- {{cssxref("font")}}
- {{cssxref("font-synthesis")}}
- {{cssxref("font-variant")}}
- {{cssxref("gap")}}
- {{cssxref("grid")}}
- {{cssxref("grid-area")}}
- {{cssxref("grid-column")}}
- {{cssxref("grid-row")}}
- {{cssxref("grid-template")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-inline")}}
- {{cssxref("list-style")}}
- {{cssxref("margin")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-inline")}}
- {{cssxref("mask")}}
- {{cssxref("mask-border")}}
- {{cssxref("offset")}}
- {{cssxref("outline")}}
- {{cssxref("overflow")}}
- {{cssxref("overscroll-behavior")}}
- {{cssxref("padding")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-inline")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("position-try")}}
- {{cssxref("scroll-margin")}}
- {{cssxref("scroll-margin-block")}}
- {{cssxref("scroll-margin-inline")}}
- {{cssxref("scroll-padding")}}
- {{cssxref("scroll-padding-block")}}
- {{cssxref("scroll-padding-inline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("text-box")}}
- {{cssxref("text-decoration")}}
- {{cssxref("text-emphasis")}}
- {{cssxref("text-wrap")}}
- {{cssxref("transition")}}
- {{cssxref("view-timeline")}}
- {{cssxref("-webkit-text-stroke")}}
- {{cssxref("-webkit-border-before")}}
- {{cssxref("-webkit-mask-box-image")}}

## See also

- [CSS cascading and inheritance](/en-US/docs/Web/CSS/Guides/Cascade) module
- [Introduction to CSS syntax: declarations, rulesets, and statements](/en-US/docs/Web/CSS/Guides/Syntax/Introduction)
- [At-rules](/en-US/docs/Web/CSS/Guides/Syntax/At-rules)
- [Specificity](/en-US/docs/Web/CSS/Guides/Cascade/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Introduction to the CSS cascade](/en-US/docs/Web/CSS/Guides/Cascade/Introduction)
- [Learn: Handling conflicts](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Learn: Cascade layers](/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [Visual formatting models](/en-US/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- Values: [initial](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), and [actual](/en-US/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Value definition syntax](/en-US/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
