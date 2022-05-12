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

To create an important declaration, add the "important flag", comprised of the delimiter token `!` followed by the `important` keyword, follow the declaration. While white space is allowed between the delimeter and the keyword, the important flag is generally written as `!important`, without any white space.

The important flag must come after the value in a property value pair declaration. `!important` is not valid on within [@keyframes animation](/en-US/docs/Web/CSS//keyframes) declarations. 

When it comes to important declarations, the [cascade origin and layer orders](/en-US/docs/Web/CSS/cascade) are reversed.  By default, declarations in an author (web developer) style sheets override declarations in a user’s style sheet, which override declarations in the user-agent’s default style sheet. Within either of these three origins, declarations in unlayered styles override layered style declarations, with the last declared having precedence over the layers declared before it. When a declaration is important, the order of precedence is reversed. Important user agent declarations override important user declarations, which override author declarations. Within those origins, layers important declarations hae

A declaration is important if it has a !important annotation as defined by [css-syntax-3], i.e. if the last two (non-whitespace, non-comment) tokens in its value are the delimiter token ! followed by the identifier token important. All other declarations are normal (non-important).

[hidden] { display: none !important; }

An important declaration takes precedence over a normal declaration. Author and user style sheets may contain important declarations, with user-origin important declarations overriding author-origin important declarations. This CSS feature improves accessibility of documents by giving users with special requirements (large fonts, color combinations, etc.) control over presentation.

Important declarations from all origins take precedence over animations. This allows authors to override animated values in important cases. (Animated values normally override all other rules.) [css-animations-1]

User-agent style sheets may also contain important declarations. These override all author and user declarations.


While `!important` is not part of determining specificity, it is related.  Important declarations override all other declarations from the same [origin and cascade layer](/en-US/docs/Web/CSS/cascade/). When two important declarations are applied to the same element, with the same origin and layer, the declaration with a greater specificity will be applied.

### Impact on shorthand properties

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

### Best practices

Avoiding `!important` is recommended. . 

If working to override styles with high scecificity that are not under your control, such as styles in a 3rd party plugin declared with an [id selector](/en-US/docs/Web/CSS/ID_selectors), consider importing the 3rd party stylesheet script into a [named or anonymous layer](/en-US/docs/Web/CSS/@layer) as your first cascade layer. As long as the external styles do not include important declarations, your styles will take precedence over the widget styles no matter the specificity. 

## Syntax

```css
property: value !important;
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
