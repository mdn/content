---
title: CSS syntax errors
slug: Web/CSS/CSS_syntax/error_handling
page-type: guide
---

{{CSSRef}}

When an error exists in CSS, such as an invalid value or a missing semicolon, instead of [throwing an error like in JavaScript](/en-US/docs/Web/JavaScript/Reference/Errors), the browser (or other user-agent) will gracefully recover, skipping the invalid content. Browsers don't provide CSS-related alerts or otherwise indicate errors have occurred in styles. This is a feature of CSS, not a bug.

This guide discusses how CSS {{glossary("parser", "parsers")}} discard invalid CSS.

## CSS parser errors

When a CSS error is encountered, the browser's {{glossary("parser")}} ignores the lines containing the errors, discarding the minimum amount of content before returning to {{glossary("parse", "parsing")}} the CSS as normal. As new features are added to CSS, a browser may not recognize these new features. The "error recovery" is just the ignoring or skipping of invalid content. This recovery from errors allows a browser to discard the line containing the unrecognized content.

The fact that browsers ignore invalid code enables using new CSS features without worrying about anything being broken in older browsers. This feature also allows for both old and new syntaxes to coexist, in that order. Browsers render the old syntax until they recognize the new syntax as valid. Because browsers ignore invalid CSS, the valid fallbacks don't get overwritten by new CSS that is perceived as invalid.

The type and amount of CSS that a browser ignores due to an error depends on the type of error. Some of common error situations are listed below:

- For [errors in at-rules](#at-rule_errors), whether a single line or the entire at-rule is ignored (fails) depends on the at-rule and the type of error.
- If the [error is an invalid selector](#errors_in_selector_lists), the entire declaration block is ignored.
- An [error due to a missing semi-colon](#errors_within_css_declaration_blocks) between property declarations causes an invalid value, in which case, the property-value declaration is ignored.
- If the [error is a property name or value](#errors_within_css_declaration_blocks), such as an unrecognized property name or invalid data type, the property-value declaration is ignored.
- If the [error is due to a missing end-bracket](#auto-closed_endings), the extent of what is ignored depends on the browser's ability to parse the error as nested CSS.

After parsing each declaration, style rule, at-rule, and so on, the browser checks the parsed content against its expected [grammar](#grammar_check) for that construct. If the content does not match the expected grammar for that construct, the browser considers it invalid and ignores it.

### At-rule errors

The `@` symbol, known in the CSS specifications as an `<at-keyword-token>`, indicates the beginning of an {{cssxref("at-rule")}}. Once an at-rule begins with the `@` symbol, nothing is considered invalid from the parser's standpoint; everything up to the first semi-colon (`;`) or the opening curly brace (`{`) is part of the at-rule's prelude. The contents of each at-rule is interpreted according to the grammar rules for that particular at-rule.

Statement at-rules, such as {{cssxref("@import")}} and {{cssxref("@namespace")}} declarations, contain just a prelude. The semicolon ends the at-rule immediately for single-line at-rules. If the contents of the prelude are invalid according to the grammar for that at-rule, the at-rule is ignored, with the browser continuing to parse CSS after it encounters the next semi-colon. For example, if an `@import` at-rule occurs after any CSS declaration other than `@charset`, `@layer` or other `@import` statements, the `@import` declaration is ignored.

If the parser encounter a curly brace (`{`) before a semi-colon is encountered, the at-rule is parsed as a block at-rule. Block at-rules, like {{cssxref("@font-face")}} and {{cssxref("@keyframes")}}, contain a block of declarations surrounded by curly braces (`{}`). The opening curly brace informs the browser where the completed at-rule prelude ends and the at-rule's body starts. The parser looks forward, seeking matching blocks (content surrounded by `()`, `{}`, or `[]`) until it finds a closing curly brace (`}`) that isn't matched by anything else or inside of another block, to close the body of the at-rule.

Different at-rules have different grammar rules, different (or no) descriptors, and different rules for what, if anything, will invalidate the entire at-rule. The expected grammar for each at-rule and how errors are handled are documented on the respective at-rule page. The handling of invalid content depends on the error.

For the `@font-face` at-rule, including an unrelated descriptor, a valid font-face descriptor with an invalid value, or a property style declaration within an `@font-face` will not invalidate the font declaration. Only the invalid CSS is ignored.

The grammar of the `@font-face` at rule is very different from the `@keyframe`, with the type of error impacting what gets ignored. Important declarations (marked with the {{cssxref("important")}} flag) and properties that can't be animated in keyframe rules are ignored, but normal, supported properties will still be animated. Including a keyframe selector percentage value less than `0%`, greater than `100%`, or with the `%` sign omitted invalidates the keyframe selector list and therefore the style block is ignored, but an invalid keyframe selector doesn't not invalidate the entire `@keyframe`. Including styles between two keyframe selector block within a `@keyframe` invalidates the at-rule.

Some at-rules are almost always. The statement {{cssxref("@layer")}} contains just the prelude, ending with a semi-colon. Alternatively, this at-rule can also have layer styles nested between curly braces following the prelude. If the error is a missing closing curly brace, it is considered a logic error not a CSS error. In the case of a missing closing brace in `@layer`, the styles are assumed to be in the cascade layer that is defined in the at-rule's prelude. The CSS is considered valid; because there are no syntactic errors, the parser does not ignore any part. The `@layer` statement, whether it contains just a prelude statement ending with a semi-color or if it contains a body of declarations, as long as the layer name is not a [global CSS value](), the at-rule always creates at least one layer, though the layer may be an anonymous layer containing no styles.

### Errors in selector lists

There are many ways you might make a mistake writing a selector, but only invalid selectors cause [invalid selector list](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list) issues.

If you include a {{cssxref("class_selectors", "class")}}, {{cssxref("id_selectors", "id")}}, or {{cssxref("type_selectors", "type")}} selector for a class, id, element or custom-element, respectively, that doesn't exist, it may be a logic error, but it's not an error the parser needs to handle. If, however, you have a typo in a pseudo-class or a pseudo-element, it might create an invalid selector, which is an error the parser will notice.

If a selector list contains any selectors that are in the [invalid selector list](/en-US/docs/Web/CSS/Selector_list#invalid_selector_list), then the entire style block is ignored. There are exceptions: if the invalid selector is within the {{cssxref(":is")}} or {{cssxref(":where")}} pseudo-class, which accept [forgiving selector lists](/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list) or if the unknown selector is a [`-webkit-` prefixed pseudo-element](#webkit-exception), only the unknown selector is ignored as not matching anything. The selector list is not invalidated.

If a selector list contains any invalid selectors outside of these exceptions, a single invalid or unsupported selector in the selector list will invalidate the entire rule. The entire selector block will be ignored. The browser will look for the closing curly brace and will continue parsing again from that point on.

#### Webkit exception

Due to legacy issues from the overuse of browser-specific prefixes in selectors and in [property names and values](#vendor-prefixes), browsers avoid the invalidation of selector lists by treating all [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) that start with a case-insensitive `-webkit-` prefix and don't end with `()` as valid.

This means that a pseudo-element like `::-webkit-works-only-in-samsung` will not invalidate a selector list, regardless of the browser. In such cases, the pseudo-element may not be recognized or supported by the browser, but it will not cause the entire selector list and it's associated style block to be ignored. On the other hand, the unknown prefixed selector with a function notation `::-webkit-imaginary-function()` will invalidate the entire selector list and the browser will ignore the entire selector block.

### Errors within CSS declaration blocks

When it comes to CSS properties and values within a declaration block, if either the property or the value is invalid, that property-value pair is ignored and discarded. When a user agent parses or interprets a list of declarations, unknown syntax at any point causes the browser's parser to discard only that specific rule. It then continues parsing CSS after the next semicolon or closing curly bracket is encountered, whichever comes first.

The parser seeks forward until it finds a semicolon (or the end of the block). It then starts fresh, trying to parse a declaration again.

This example contains an error. The parser ignores the error (and the comments), seeking forward until it encounters a semi-colon, then restarts parsing:

```css-nolint bad
p {
/* Invalid syntax due to  missing semi-colon */
  border-color: red
  background-color: green;

/* Valid syntax but likely a logic error */
  border-width: 100vh;
}
```

The reason the first declaration in this selector block is invalid is because the semi-colon is missing and the declaration is not the last declaration in the block. The property missing the semi-colon is ignored, as is the property-value pair following it because the browser only continues parsing after a semi-colon or closing bracket is encountered. In the above CSS, the `border-color` value is parsed as `red background-color: green;` which is not a valid {{cssxref("&lt;color&gt;")}} value.

The parser ignores the property with an invalid value, and starts parsing again after it encounters the next semi-colon. The {{cssxref("border-width")}} value of `100vh` is likely a mistake, but it's not an error. As it is syntactically valid, it will be parsed and applied to the elements matching the selector.

#### Vendor prefixes

Vendor-prefixed property names and property values, when not understood by a browser, are ignored. Only the single rule containing the invalid property or value is ignored. The parser looks for the next semi-colon or closing curly brace and then continues parsing from there.

You may come across legacy CSS that looks like the following:

```css example-bad
/* Prefixed values */
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
/* Prefixed properties */
.rounded {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  border-radius: 50%;
}
```

In both the declaration blocks above, the last declaration is valid. The parser ignores the declarations it doesn't understand as invalid. If the user agent does understand one of the prefixed declarations, for example, all browsers understand `display: flex;` and `border-radius: 50%;`, the values in the last, valid declaration are used, not because they are the valid ones, but rather due to the [cascade](/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order) [order of appearance](/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) rule.

> **Note:** Avoid including prefixed properties or property values. If you must, declare the prefixed values before the valid, non-prefixed standard property-value pairs.

### Errors with auto-closed endings

If a stylesheet — be it an external style sheet, selector blocks within an HTML {{HTMLElement("style")}} element, or inline rules within a [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attribute — ends while a rule, declaration, function, string, etc. is still open, the parser will automatically close everything that was left unclosed.

If the content between the last semi-colon and the end of the stylesheet is valid, even if incomplete, the CSS will be parsed normally. Failing to properly close CSS statements doesn't necessarily make the statements invalid.

> **Note:** Do not take advantage of CSS's forgiving nature. Always close all of your statements and style blocks. It makes your CSS easier to read and maintain and ensures that the browser parses the CSS you intended.

> **Note:** If a comment starts with `/*` but is not closed, all CSS code until the closing comment `*/` is encountered will be treated as part of the comment. While an unclosed comment does not invalidate your CSS, but it causes the CSS inside the comment to be ignored.

## Grammar check

After each declaration, style rule, at-rule, etc. is parsed, the user agent checks to make sure the grammar is the expected grammar for that declaration. For example, if a property value is of the wrong data type or if a descriptor is not valid for the at-rule being described, the content that does not match the expected grammar is deemed invalid, and gets ignored.

### Invalid custom properties

Each CSS property accepts specific data types. For example, the {{cssxref("background-color")}} property accepts either a valid {{cssxref("&lt;color&gt;")}} or a CSS global keyword. When the value assigned to a property is of the wrong type, such as `background-color: 45deg`, the declaration is invalid and ignored.

Custom properties are generally considered valid when declared, but may create invalid CSS when accessed. The browser parses each custom property when encountered without regard to where the property is consumed. A custom property may be valid when declared while creating an invalid value when passed as a parameter for the {{cssxref("var()")}} function for the grammar of where the `var()` function is found.

While invalid CSS is discarded with the property value falling back to the last valid value, an invalid computed custom property value is slightly different. If the custom property declaration was valid and the grammar of the property using that value is valid, the declaration is valid at computed time. The `var()` value substitution can still be invalid.

When a `var()` substitution is invalid, then the [initial](/en-US/docs/Web/CSS/initial_value) or [inherited](/en-US/docs/Web/CSS/Inheritance) value of the property is used; the declaration is not ignored. As the declaration was valid at compute time, the declaration is valid. This means the declaration is not ignored and the property does not remain the value of the previous valid value. Rather, the property is set to a new value, but possibly not the expected one.

```css example-bad
:root {
  --theme-color: 45deg;
}
body {
  background-color: var(--theme-color);
}
```

In the above code, the custom property declaration is valid. The `background-color` declaration is also valid at compute time. However, when the browser substitutes the custom property in `var(--theme-color)` with `45deg`, the grammar is invalid. An {{cssxref("angle")}} is not a valid value `background-color`. In this case, the declaration is not ignored as invalid. Rather, when a custom property is of the wrong data-type, if the property is inheritable, the value is inherited from it's parent. If the property is not inheritable, the default initial value is used. In this case, the default background color is `transparent`.

To better control the way custom properties fall back, use the {{cssxref("@property")}} at-rule to define the initial value of the property:

```css example-good
@property --theme-color {
  syntax: "<color>";
  inherits: false;
  initial-value: rebeccapurple;
}
```

## See also

- [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax) module
- [Syntax](/en-US/docs/Web/CSS/Syntax) guide
- [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
