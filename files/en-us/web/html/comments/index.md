---
title: Comments
slug: Web/HTML/Comments
page-type: guide
spec-urls: https://html.spec.whatwg.org/multipage/syntax.html#comments
---

{{CSSRef}}

An HTML **comment** is used to add explanatory notes to the markup or to prevent the browser from interpreting specific parts of the document.

Comments start with the string `<!--` and end with the string `-->`, generally with text in between. This text cannot start with the string `>` or `->`, cannot contain the strings `-->` or `--!>`, nor end with the string `<!-`, though `<!` is allowed.

The browser ignores comments as it renders the code. In other words, they are not visible on the page - just in the code. HTML comments are a way for you to write helpful notes about your code or logic.

The above is true for [XML](/en-US/docs/Web/XML) comments as well. In addition, in XML, such as in [SVG](/en-US/docs/Web/SVG) or [MathML](/en-US/docs/Web/MathML) markup, a comment cannot contain the character sequence `--`.

Comments can be used on a single line, or span multiple lines. They can be used in the following places:

- Before and after the {{Glossary("Doctype")}}
- Before and after the {{HTMLElement("html")}} element
- As the content of most elements except: {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}, {{HTMLElement("textarea")}}, because these elements interpret their content as raw text

> **Note:** While `<script>` elements should not have HTML comments and should use [JavaScript comments](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments) instead, there was a legacy practice to enclose the whole script content in an HTML comment so ancient browsers that don't support JavaScript don't render it as text. This is now a [legacy feature of JavaScript itself](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#html_comments) and you should not rely on it.

## Syntax

```html
<!-- Comment -->
```

## Examples

```html
<!-- A one-line comment -->

<!--
A comment
that stretches
over several
lines
-->

<!-- The comment below disables
   the HTML contained within -->
<!--
<p>
   This content will not be rendered.
</p>
-->
```

## Notes

HTML comments are only permitted as content. You cannot use it within a tag, such as before an HTML [attribute](/en-US/docs/Glossary/Attribute).

As with most programming languages that use the `<!-- -->` comment syntax, comments cannot be nested. In other words, the first instance of `-->` that follows an instance of `<!--` closes the comment.

While comments do start with a `<` and end in a `>`, a comment is not an HTML element.

## Specifications

{{Specifications}}

## See also

- [Comments in JavaScript](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments)
- [Comments in CSS](/en-US/docs/Web/CSS/Comments)
- {{domxref("Comment")}} API (`Comment` inherits from {{domxref("Node")}})
