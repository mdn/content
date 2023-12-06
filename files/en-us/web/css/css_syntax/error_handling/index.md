---
title: CSS syntax error handling
slug: Web/CSS/CSS_syntax/error_handling
page-type: guide
---

{{CSSRef}}

When an error is made in CSS, instead of [throwing an error like in JavaScript](/en-US/docs/Web/JavaScript/Reference/Errors), the browser will gracefully recover, skipping over the invalid content. While the user agent won't alert you to CSS errors, the user agent won't fail either. This is a feature of CSS, not a bug.

In CSS, when an error is made, the user-agent's parser ignores the lines containing the errors, discarding the minimum amount of content before returning to parsing as normal. This error recovery is done because, as new features are added to CSS, a browser may not recognize new features and will simply discard the line with the content with what it may currently view as an error. This enables adding new features to CSS without worrying that anything, other than the new feature, is broken in older browsers. It also enables including both old and new syntax, in that order, so the old syntax is rendered until the new syntax becomes parsed as valid. Because user agents ignore CSS errors, the valid fallback CSS doesn't get overwritten by perceived as invalid new CSS.

The type and amount of CSS that gets ignored depends on the type of error. For example,

- For [errors in at-rules](#at-rule-errors), whether a single line or the entire at-rule fails depends on the at-rule and the type of error.
- If the error is an [invalid selector](#errors-in-selector-lists), the entire declaration block is ignored.
- If a semi-colon is omitted between property declarations, the [missing semi-colon](#errors-within-css-declaration-blocks) causes an invalid value, so the declaration is ignored.
- If the [error is a property name or value](#errors-within-css-declaration-blocks), such as an unrecognized property name or invalid data type, just that property/value declaration is ignored.
- If the issue is a [missing end-bracket](#auto-closed-endings), what gets ignored, if anything, depends on whether the user-agent can parse the error as nested CSS.

After each declaration, style rule, at-rule, etc. is parsed, the user agent checks the parsed content against its expected [grammar](#grammar-check) for that construct. If it does not match the expected grammar for that construct, it is invalid and is ignored.

## CSS parser errors

### At-rule errors

The `@`, known in the CSS specifications as an `<at-keyword-token>`, indicates the beginning of an {{cssxref("at-rule")}}. CSS includes at-rules that contain just a prelude, like {{cssxref("@import")}} or some {{cssxref("@layer")}} declarations, and at-rule blocks that contain a body of declarations, like {{cssxref("@keyframes")}}, {{cssxref("@font-face")}}, and `@layer` declarations that include styles blocks. These at-rule blocks are generally multi-statement and referred to as multi-line, even though they can be declared with no line breaks.

Once an at-rule is started with the `@`, nothing is invalid from the parser's standpoint; everything up to the first semi-colon (`;`) or opening curly brace (`{`) is part of the at-rule's prelude. The semicolon ends the at-rule immediately for single-line at-rules. If there is an open curly brace, this informs the browser where the completed at-rule prelude ends and the at-rule's body starts. For these multi-line at-rules, the parser looks forward, seeking matching blocks (content surrounded by `()`, `{}`, or `[]`) until it finds a closing curly brace (`}`) that isn't matched by anything else or inside of another block, to close the body of the at-rule. The contents of the at-rule are then interpreted according to the grammar rules for that particular at-rule.

> **Note:** Different at-rules have different grammar rules, different (or no) descriptors, and different rules for what will invalidate the entire at-rule, if anything. The expected grammar for each at-rule, and how errors are handled, are documented on each individual at-rule page.

For example, if an `@import` occurs after any other CSS declarations, other than `@charset`, `@layer` or other `@import` statements, the `@import` declaration is ignored. A `@layer` statement, which can be declared either as a prelude or contain a body of declarations, will always create at least an anonymous layer. If there is a declaration body, the handling of any error depends on the error. The user-agent won't fail; rather, invalid CSS is ignored. If the error is a missing closing curly brace, you have a logic error not a CSS error. In the case of a missing closing brace in an `@layer`, the styles will be assumed to be in the cascade layer defined in the at-rule's prelude. This is a developer mistake, a logic error. The CSS is considered valid; nothing is invalid, so nothing is ignored by the parser.

### Errors in selector lists

There are many ways you might make a mistake writing a selector, but only invalid selectors cause [invalid selector list](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list) issues.

If you include a {{cssxref("class_selectors", "class")}}, {{cssxref("id_selectors", "id")}}, or {{cssxref("type_selectors", "type")}} selector for a class, id, element or custom-element that doesn't exist, it may be a logic error, but not an error the parser needs to handle. If, however, you have a typo in a pseudo-class or pseudo-element, that may create an invalid selector, which is an error the parser will notice.

If a selector list contains any invalid selectors, it creates an [invalid selector list](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list), and the entire style block is ignored. There are exceptions: if the invalid selector is within the {{cssxref(":is")}} and {{cssxref(":where")}} pseudo-classes, which accept [forgiving selector lists](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list), the selector list will not be invalidated. There is also an [exception for -webkit-]](#webkit-exception) prefixed pseudo-elements.

If a selector list contains any invalid selectors outside of an `:is()` or `:where()`, that single unsupported selector in the selector list will invalidate the entire rule. The entire selector block will be ignored. The user-agent will look for the closing curly brace and will continue parsing again from that point on.

#### Webkit exception

Due to legacy issues with the overuse of browser prefixes in selectors (and property names), to prevent the invalidation of selector lists, browsers treat all [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) that start with a `-webkit-` prefix, case-insensitive, and that don't end with `()`, as valid.

This means that `::-webkit-works-only-in-samsung` will not invalidate a selector list no matter the browser. In such cases, the pseudo-element may not be recognized or supported by the browser, but if a `-webkit-` prefixed pseudo-element will not cause the entire selector list and it's associated style block to be ignored. On the other hand, the unknown prefixed selector with a function notation `::-webkit-imaginary-function()` will invalidate the entire selector list and the browser will ignore the entire selector block.

### Errors within CSS declaration blocks

When it comes to CSS properties and values within a declaration block, if either the property or the value is invalid, that property-value pair is ignored and discarded. When a user agent parses, or interprets, a list of declarations, unknown syntax at any point causes the user-agent's parser to discard just that rule and continue parsing CSS after the next semicolon or closing curly bracket is encountered, whichever comes first.

The parser seeks forward until it finds a semicolon (or the end of the block). It then starts fresh, trying to parse a declaration again.

This example contains an error. The parser ignores the error (and the comments), seeking forward until it encounters a semi-colon, then restarts parsing:

```css-nolint bad
p {
/* invalid due to  missing semi-colon */
  border-color: red
  background-color: green;

/* valid, though it is likely a mistake */
  border-width: 100vh;
}
```

The reason the first declaration in this selector block is invalid is because the semi-colon is missing and the declaration is not the last declaration in the block. The property missing the semi-colon is ignored, as is the pair following it, as the browser only continues parsing after a semi-colon or closing bracket is encountered. In the above CSS, the `border-color` value is parsed as `red background-color: green;` which is not a valid {{cssxref("&lt;color&gt;")}} value.

The parser ignores the property with a invalid value, and starts parsing again after it encounters the next semi-colon. The {{cssxref("border-width")}} value of `100vh` is likely a mistake, but it's not an error. As it is valid, it will be parsed and applied to the elements matching the selector.

### Auto-closed endings

If a stylesheet — be it an external style sheet, CSS within a HTML {{HTMLElement("style")}} element, or an inline [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute — ends while a rule, declaration, function, string, etc. is still open, the parser will automatically close everything that was left unclosed.

If the content between the last semi-colon and the end of the stylesheet is valid, even if incomplete, the CSS will be parsed normally. Failing to properly close CSS statements doesn't necessarily make the statements invalid.

Do not take advantage of CSS's forgiving nature. Always close all of your statements and style blocks. It makes your CSS easier to read and maintain, and ensures that the browser parses the CSS you intended.

> **Note:** If a comment is with `/*` but not closed, any and all CSS encountered until the closing comment `*/` is found will be treated as a comment. Forgetting to close a comment may not make your CSS invalid, but it will make cause the CSS inside the comment to be ignored.

### Grammar check

After each declaration, style rule, at-rule, etc. is parsed, the user agent checks to make sure the grammar is the expected grammar for that declaration. For example, if a property value is of the wrong data type or if a descriptor is not valid for the at-rule being described, the content that does not match the expected grammar is deemed invalid, and gets ignored.

## See also

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
- [Syntax](/en-US/docs/Web/CSS/Syntax) guide
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
