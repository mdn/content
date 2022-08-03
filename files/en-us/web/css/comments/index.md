---
title: Comments
slug: Web/CSS/Comments
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

A CSS **comment** is used to add explanatory notes to the code or to prevent the browser from interpreting specific parts of the style sheet. By design, comments have no effect on the layout of a document.

## Syntax

Comments can be placed wherever white space is allowed within a style sheet. They can be used on a single line, or traverse multiple lines.

```css
/* Comment */
```

## Examples

```css
/* A one-line comment */

/*
A comment
which stretches
over several
lines
*/

/* The comment below is used to
   disable specific styling */
/*
span {
  color: blue;
  font-size: 1.5em;
}
*/
```

## Notes

The `/* */` comment syntax is used for both single and multiline comments. There is no other way to specify comments in external style sheets. However, when using the {{htmlelement("style")}} element, you may use `<!-- -->` to hide CSS from older browsers, although this is not recommended. As with most programming languages that use the `/* */` comment syntax, comments cannot be nested. In other words, the first instance of `*/` that follows an instance of `/*` closes the comment.

## Specifications

- [CSS 2.1 Syntax and basic data types #comments](https://www.w3.org/TR/CSS21/syndata.html#comments)

## See also

- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/At-rule)
  - [Specificity](/en-US/docs/Web/CSS/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Values
    - [Initial values](/en-US/docs/Web/CSS/initial_value)
    - [Computed values](/en-US/docs/Web/CSS/computed_value)
    - [Used values](/en-US/docs/Web/CSS/used_value)
    - [Actual values](/en-US/docs/Web/CSS/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
