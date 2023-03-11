---
title: <string>
slug: Web/CSS/string
page-type: css-type
browser-compat: css.types.string
---

{{CSSRef}}

The **`<string>`** [CSS](/en-US/docs/Web/CSS) [data type](/en-US/docs/Web/CSS/CSS_Types) represents a sequence of characters. Strings are used in numerous CSS properties, such as {{CSSxRef("content")}}, {{CSSxRef("font-family")}}, and {{CSSxRef("quotes")}}.

## Syntax

The `<string>` data type is composed of any number of [Unicode](https://en.wikipedia.org/wiki/Unicode) characters surrounded by either double (`"`) or single (`'`) quotes.

Most characters can be represented literally. All characters can also be represented with their respective [Unicode code points](https://en.wikipedia.org/wiki/Unicode#Code_point_planes_and_blocks) in hexadecimal, in which case they are preceded by a backslash (`\`). For example, `\22` represents a double quote, `\27` a single quote (`'`), and `\A9` the copyright symbol (`©`).

Importantly, certain characters which would otherwise be invalid can be escaped with a backslash. These include double quotes when used inside a double-quoted string, single quotes when used inside a single-quoted string, and the backslash itself. For example, `\\` will create a single backslash.

To output new lines, you must escape them with a line feed character such as `\A` or `\00000A`. In your code, however, strings can span multiple lines, in which case each new line must be escaped with a `\` as the last character of the line.

However, to get new lines, you must also set the {{cssxref("white-space")}} property to appropriate value.

> **Note:** [HTML entities](/en-US/docs/Glossary/Entity) (such as `&nbsp;` or `&#8212;`) cannot be used in a CSS `<string>`.

## Examples

### Examples of valid strings

```css
/* Simple strings */
"This string is demarcated by double quotes."
'This string is demarcated by single quotes.'

/* Character escaping */
"This is a string with \" an escaped double quote."
"This string also has \22 an escaped double quote."
'This is a string with \' an escaped single quote.'
'This string also has \27 an escaped single quote.'
"This is a string with \\ an escaped backslash."

/* New line in a string */
"This string has a \Aline break in it."

/* String spanning two lines of code (these two strings will have identical output) */
"A really long \
awesome string"
"A really long awesome string"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Units and Values](/en-US/docs/Web/CSS/CSS_Values_and_Units)
- [CSS Basic Data Types](/en-US/docs/Web/CSS/CSS_Types)
- [Introduction to CSS: Values and Units](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
