---
title: important
slug: Web/CSS/important
tags:
  - CSS
  - Reference
  - CSS rule
  - important
  - \!important
browser-compat: css.flag.important
---

The important flag, comprised of a `!` delimeter and `important` keyword, when added to a declaration in a selector block, make the declaration an important declaration. 

## Description

To create an important declaration, add the "important flag", comprised of the delimiter token `!` followed by the `important` keyword, after the value in the declaration. While white space is allowed between the delimeter and the keyword, the important flag is generally written as `!important`, without any white space.

```css
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration */
}
```

The important flag must come after the value in a property value pair declaration, preceded by at least one space. The `!important` or `! important` must be the last tokens in the declaration. In other words, there can be white space and comments between the flag and the declarations ending semi-colon, but nothing else.  

When it comes to important declarations, the [cascade origin and layer orders](/en-US/docs/Web/CSS/cascade) are reversed.  By default, declarations in an author (web developer) style sheets override declarations in a user’s style sheet, which override declarations in the user-agent’s default style sheet. 

When a declaration is important, the order of precedence is reversed. A user's important declarations will override all normal declarations and all important author declarations. This ensures that users with special needs, such as personalized color schemes or large fonts, can override author styles when needed by making declarations important. 

Important user agent declarations override important user declarations, which override author declarations. 

Within each of the three origins - author, user, and user-agent - normal declarations in unlayered styles override layered style declarations, with the last declared having precedence over the layers declared before it. The order of precedence is reversed for important declarations, with important declarations in the first declared layer taking precedence over important declarations in the last declared layer, with all the important declarations having precedence over important declarations made outside of any layer. 

Inline normal styles take precedence over all normal declarations, no matter the origin. Inline important styles do take precedence over all other important author styles, but can be overridden by important user styles, important user-agent styles and transitions.

Within either of these three origins, declarations in unlayered styles override layered style declarations, with the last declared having precedence over the layers declared before it. 

User-agent style sheets may contain important declarations. These override all author and user declarations.

While `!important` is not part of determining specificity, it is related.  Important declarations override all other declarations from the same [origin and cascade layer](/en-US/docs/Web/CSS/cascade/). When two important declarations are applied to the same element, with the same origin and layer, the declaration with a greater specificity will be applied.

All important declarations take precedence over all animations. `!important` is not valid on within [@keyframes animation](/en-US/docs/Web/CSS//keyframes) declarations.


Declaring a shorthand property to be `!important` sets all of sub-properties `!important`. To two following declarations are equivalent:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0% 0% !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
 ```

This is one of the several reasons avoiding `!important` is recommended. . 

If working to override styles with high scecificity that are not under your control, such as styles in a 3rd party plugin declared with an [id selector](/en-US/docs/Web/CSS/ID_selectors), consider importing the 3rd party stylesheet script into a [named or anonymous layer](/en-US/docs/Web/CSS/@layer) as your first cascade layer. As long as the external styles do not include important declarations, your styles will take precedence over the widget styles no matter the specificity. 

### Accessibility

Important styles from a user stylesheet take precedence over author important declarations, meaning adding an important flag to a site's styles will not prevent individual users with special requirements, such as large fonts, from being able to override your styles with their own important styles.

## Syntax

```css
property: value !important;  /* standard */
property: value ! important; /* also valid */

```

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Specificity](/en-US/docs/Web/CSS//specificity)
- [CSS Cascade](/en-US/docs/Web/CSS//cascade)
