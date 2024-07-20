---
title: Comments
slug: Web/CSS/Comments
page-type: guide
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

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
- [Syntax](/en-US/docs/Web/CSS/Syntax) guide
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
- [CSS error handling](/en-US/docs/Web/CSS/CSS_syntax/Error_handling)
- [Specificity](/en-US/docs/Web/CSS/Specificity)
- [Inheritance](/en-US/docs/Web/CSS/Inheritance)
- [Building blocks: the CSS cascade](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Building blocks: cascade layers](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS cascade and inheritance](/en-US/docs/Web/CSS/CSS_cascade) module
- [Initial](/en-US/docs/Web/CSS/initial_value), [computed](/en-US/docs/Web/CSS/computed_value), [used](/en-US/docs/Web/CSS/used_value), and [actual](/en-US/docs/Web/CSS/actual_value) values
