---
title: Shorthand properties
slug: Web/CSS/Shorthand_properties
tags:
  - CSS
  - Guide
  - Layout
  - Reference
  - Shorthand Properties
  - properties
  - shorthand
---
{{CSSRef}}

**_Shorthand properties_** are CSS properties that let you set the values of multiple other CSS properties simultaneously. Using a shorthand property, you can write more concise (and often more readable) style sheets, saving time and energy.

The CSS specification defines shorthand properties to group the definition of common properties acting on the same theme. For instance, the CSS {{cssxref("background")}} property is a shorthand property that's able to define the values of {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-repeat")}}, and {{cssxref("background-position")}}. Similarly, the most common font-related properties can be defined using the shorthand {{cssxref("font")}}, and the different margins around a box can be defined using the {{cssxref("margin")}} shorthand.

## Tricky edge cases

Even if they are very convenient to use, there are a few edge cases to keep in mind when using them:

1.  A value which is not specified is set to its initial value. That sounds anecdotal, but it really means that it **overrides** previously set values. Therefore:

    ```css
    background-color: red;
    background: url(images/bg.gif) no-repeat left top;
    ```

    will not set the color of the background to `red` but to {{cssxref("background-color")}}'s default, `transparent`, as the second rule has precedence.

2.  Only the individual properties values can inherit. As missing values are replaced by their initial value, it is impossible to allow inheritance of individual properties by omitting them. The keyword `inherit` can be applied to a property, but only as a whole, not as a keyword for one value or another. That means that the only way to make some specific value to be inherited is to use the longhand property with the keyword `inherit`.
3.  Shorthand properties try not to force a specific order for the values of the properties they replace. This works well when these properties use values of different types, as the order has no importance, but this does not work as easily when several properties can have identical values. Handling of these cases are grouped in several categories:

    1.  Shorthands handling properties related to edges of a box, like {{cssxref("border-style")}}, {{cssxref("margin")}} or {{cssxref("padding")}}, always use a consistent 1-to-4-value syntax representing those edges:

        <table class="standard-table">
          <tbody>
            <tr>
              <td><img src="border1.png" /></td>
              <td>
                <em>The 1-value syntax</em>: <code>border-width: 1em</code> — The unique
                value represents all edges
              </td>
            </tr>
            <tr>
              <td><img src="border2.png" /></td>
              <td>
                <em>The 2-value syntax</em>: <code>border-width: 1em 2em</code> — The
                first value represents the vertical, that is top and bottom, edges, the
                second the horizontal ones, that is the left and right ones.
              </td>
            </tr>
            <tr>
              <td><img src="border3.png" /></td>
              <td>
                <em>The 3-value syntax</em>: <code>border-width: 1em 2em 3em</code> —
                The first value represents the top edge, the second, the horizontal,
                that is left and right, ones, and the third value the bottom edge
              </td>
            </tr>
            <tr>
              <td><img src="border4.png" /></td>
              <td>
                <p>
                  <em>The 4-value syntax</em>:
                  <code>border-width: 1em 2em 3em 4em</code> — The four values represent
                  the top, right, bottom and left edges respectively, always in that
                  order, that is clock-wise starting at the top (The initial letter of
                  Top-Right-Bottom-Left matches the order of the consonant of the word
                  <em>trouble</em>: TRBL) (You can also remember it as the order that
                  the hands would rotate on a clock: <code>1em</code> starts in the 12
                  o'clock position, then <code>2em</code> in the 3 o'clock position,
                  then <code>3em</code> in the 6 o'clock position, and
                  <code>4em</code> in the 9 o'clock position).
                </p>
              </td>
            </tr>
          </tbody>
        </table>

    2.  Similarly, shorthands handling properties related to corners of a box, like {{cssxref("border-radius")}}, always use a consistent 1-to-4-value syntax representing those corners:

        <table class="standard-table">
          <tbody>
            <tr>
              <td><img src="corner1.png" /></td>
              <td>
                <em>The 1-value syntax</em>: <code>border-radius: 1em</code> — The
                unique value represents all corners
              </td>
            </tr>
            <tr>
              <td><img src="corner2.png" /></td>
              <td>
                <em>The 2-value syntax</em>: <code>border-radius: 1em 2em</code> — The
                first value represents the top left and bottom right corner, the second
                the top right and bottom left ones.
              </td>
            </tr>
            <tr>
              <td><img src="corner3.png" /></td>
              <td>
                <em>The 3-value syntax</em>: <code>border-radius: 1em 2em 3em</code> —
                The first value represents the top left corner, the second the top right
                and bottom left ones, and the third value the bottom right corner
              </td>
            </tr>
            <tr>
              <td><img src="corner4.png" /></td>
              <td>
                <p>
                  <em>The 4-value syntax</em>:
                  <code>border-radius: 1em 2em 3em 4em</code> — The four values
                  represent the top left, top right, bottom right and bottom left
                  corners respectively, always in that order, that is clock-wise
                  starting at the top left.
                </p>
              </td>
            </tr>
          </tbody>
        </table>

## Background properties

A background with the following properties ...

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: left top;
```

... can be shortened to just one declaration:

```css
background: #000 url(images/bg.gif) no-repeat left top;
```

(The shorthand form is actually the equivalent of the longhand properties above plus `background-attachment: scroll` and, in CSS3, some additional properties.)

See {{cssxref("background")}} for more detailed information, including CSS3 properties.

## Font properties

The following declarations ...

```css
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

... can be shortened to the following:

```css
font: italic bold .8em/1.2 Arial, sans-serif;
```

This shorthand declaration is actually equivalent to the longhand declarations above plus `font-variant: normal` and `font-size-adjust: none` (CSS2.0 / CSS3), `font-stretch: normal` (CSS3).

## Border properties

With borders, the width, color, and style can be simplified into one declaration. For example, the following CSS ...

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

... can be simplified as:

```css
border: 1px solid #000;
```

## Margin and padding properties

Shorthand versions of margin and padding values work similarly; the margin property allows for shorthand values to be specified using one, two, three, or four values. The following CSS declarations ...

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

... are the same as the following declaration using the four value shorthand. Note that the values are in clockwise order, beginning at the top: top, right, bottom, then left (TRBL, the consonants in "trouble").

```css
margin: 10px 5px 10px 5px;
```

Margin shorthand rules for one, two, three and four value declarations are:

- When **one** value is specified, it applies the same margin to **all four sides**.
- When **two** values are specified, the first margin applies to the **top and bottom**, the second to the **left and right**.
- When **three** values are specified, the first margin applies to the **top**, the second to the **left and right**, the third to the **bottom**.
- When **four** values are specified, the margins apply to the **top**, **right**, **bottom**, and **left** in that order (clockwise).

## The universal shorthand property

CSS provides a universal shorthand property, {{cssxref("all")}}, which applies its value to every property in the document. Its purpose is to change the properties' inheritance model.

See [Cascade and inheritance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) or [Introducing the CSS Cascade](/en-US/docs/Web/CSS/Cascade) for more information about how inheritance works in CSS.

## See also

- {{css_key_concepts}}
- Shorthand properties: {{cssxref("all")}}, {{cssxref("animation")}}, {{cssxref("background")}}, {{cssxref("border")}}, {{cssxref("border-block-end")}}, {{cssxref("border-block-start")}}, {{cssxref("border-bottom")}}, {{cssxref("border-color")}}, {{cssxref("border-image")}}, {{cssxref("border-inline-end")}}, {{cssxref("border-inline-start")}}, {{cssxref("border-left")}}, {{cssxref("border-radius")}}, {{cssxref("border-right")}}, {{cssxref("border-style")}}, {{cssxref("border-top")}}, {{cssxref("border-width")}}, {{cssxref("column-rule")}}, {{cssxref("columns")}}, {{cssxref("flex")}}, {{cssxref("flex-flow")}}, {{cssxref("font")}}, {{cssxref("gap")}}, {{cssxref("grid")}}, {{cssxref("grid-area")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, {{cssxref("grid-template")}}, {{cssxref("list-style")}}, {{cssxref("margin")}}, {{cssxref("mask")}}, {{cssxref("offset")}}, {{cssxref("outline")}}, {{cssxref("overflow")}}, {{cssxref("padding")}}, {{cssxref("place-content")}}, {{cssxref("place-items")}}, {{cssxref("place-self")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}, {{cssxref("text-decoration")}}, {{cssxref("text-emphasis")}}, {{cssxref("transition")}}
