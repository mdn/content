---
title: '!important'
slug: Web/CSS/important
tags:
  - CSS
  - Reference
  - CSS rule
  - important
  - \!important
# browser-compat: css.flag.important
---

The important flag, comprised of a `!` delimiter and `important` keyword, when added to a declaration in a selector block, makes the declaration an important declaration. 

To mark a declaration important, add the _important flag_ (`!important`) after the value in the declaration. While white space is allowed between the delimiter and the keyword, the flag is generally written as `!important` without any white space.

```css
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (standard) */
  property: value ! important; /* important declaration (non-standard) */
}
```

The `!important` flag comes after the value of the property value pair declaration, preceded by at least one space. The `!important` flag must be the last token in the declaration. In other words, there can be white space and comments between the flag and the declaration's ending semi-colon, but nothing else.

## Impact on the cascade

When it comes to `!important` declarations, the [cascade origin and layer orders](/en-US/docs/Web/CSS/Cascade) are reversed. Without the important flag, declarations in the author's style sheets override declarations in a user's style sheet, which override declarations in the user-agent's default style sheet.

When a declaration is important, the order of precedence is reversed. The user-agent important declarations override all user important declarations. All user important declarations override all important author declarations. And all important declarations take precedence over all animations.  

> **Note:** All important declarations take precedence over all animations. `!important` is not valid on within [@keyframes animation](/en-US/docs/Web/CSS/@keyframes) declarations.

Reversing the precedence order for important declarations ensures users with special needs, such as personalized color schemes or large fonts, can override author styles when needed with important declarations. It also ensures malicious extensions can't override important user-agent styles, which might break functionality or negatively impact security. 

Does anything have precedence over important declarations? Yes. [Transitions](/en-US/docs/Web/CSS/CSS_Transitions). CSS transitions are a way to control the speed at which the property changes from one value to another.  A transitioning property, while transitioning from one value to another, will not match a specific important declaration. 

```css
a {
  color: red !important;
  background-color: yellow;
  transition: all 2s linear;
}
a:hover {
  color: blue !important;
  background-color: orange !important;
}
```

In this example, the color and background color will transition to the hovered state over two seconds. Even though the default states are normal and hover states are important declarations, the transition does happen.

### Cascade layers

Within each of the three origins - author, user, and user-agent - normal declarations in unlayered styles override layered style declarations, with the last declared having precedence over the layers declared before it. The order of precedence is reversed for important declarations, with important declarations in the first declared layer taking precedence over important declarations in the last declared layer. All the important declarations have precedence over important declarations made outside of any layer.

### Inline styles

When it comes to the [`style` attribute](/en-US/docs/Web/HTML/Global_attributes/style), inline normal styles take precedence over all normal declarations, no matter the origin and inline important styles take precedence over all other important author styles, no matter the layer, but are overridden by important user styles, important user-agent styles and transitions.

### !important and specificity

While `!important` is not part of determining specificity, it is related.  Important declarations override all other declarations from the same [origin and cascade layer](/en-US/docs/Web/CSS/Cascade). 

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

This is a case of over-specifying a selector. No matter how high the selector  [specificity](/en-US/docs/Web/CSS/Specificity) match of a normal declaration, an important declaration from the same origin and cascade layer will always have precending.  In this case, the paragraph will always be red.

When two important declarations are applied to the same element, with the same origin and layer, the declaration with a greater specificity will be applied.

```css
#myElement p {
    color: green !important;
}

p {
    color: purple !important;
}
```

In this case, the selector specificity matters. Only if the selectors had the same specificity would source order matter.

## Impact on shorthand properties

Declaring a shorthand property to be `!important` sets all of sub-properties `!important`. To two following selector style blocks are equivalent:

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

This example shows one of the several reasons avoiding `!important` is generally recommended.

## Best practices

Avoid using `!important` to override specificity. When intentionally creating `!important` declarations for UI requirements, comment in your CSS code to explain to maintainers why they should not override that feature.

If working to override styles with high scecificity that are not under your control, such as styles in a 3rd party plugin declared with an [id selector](/en-US/docs/Web/CSS/ID_selectors), consider importing the 3rd party stylesheet script into a [named or anonymous layer](/en-US/docs/Web/CSS/@layer) as your first cascade layer, instead of using `!important`. As long as the external styles do not include important declarations, your styles will take precedence over the widget styles no matter the specificity. 

If needing to override external stylesheet containing important declarations, create a cascade layer of importnant overrides and declare that layer first. 

### Accessibility

Important styles from a user stylesheet take precedence over author important declarations, meaning adding an important flag to a site's styles will not prevent individual users with special requirements, such as large fonts, from being able to override your styles with their own important styles.

## Browser compatibility

This feature is supported in all browsers.

## See also

- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
- [CSS Cascade](/en-US/docs/Web/CSS/Cascade)
