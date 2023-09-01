---
title: "!important"
slug: Web/CSS/important
page-type: css-keyword
---

{{CSSRef}}

A `!` delimiter followed by the `important` keyword marks the declaration as important. The `!important` flag alters the rules selecting declarations inside the [cascade](/en-US/docs/Web/CSS/Cascade). A declaration that is not _important_ is called _normal_.

To mark a declaration important, add the _important flag_ (`!important`) after the value in the declaration. While white space is allowed between the delimiter and the keyword, the flag is generally written as `!important` without any white space.

```css-nolint
selector {
  property: value; /* normal declaration */
  property: value !important; /* important declaration (preferred) */
  property: value ! important; /* important declaration (not preferred) */
}
```

The `!important` comes after the value of the property value pair declaration, preceded by at least one space. The important flag must be the last token in the declaration. In other words, there can be white space and comments between the flag and the declaration's ending semicolon, but nothing else.

## Impact on the cascade

When it comes to important declarations, the [cascade origin and layer orders](/en-US/docs/Web/CSS/Cascade) are reversed. Without the important flag, declarations in the author's style sheets override declarations in a user's style sheet, which override declarations in the user-agent's default style sheet.

When a declaration is important, the order of precedence is reversed. Declarations marked as important in the user-agent style sheets override all important declarations in the user style sheets. Similarly, all important declarations in the user style sheets override all important declarations in the author's style sheets. Finally, all important declarations take precedence over all animations.

> **Note:** All important declarations take precedence over all animations. `!important` is not valid within [@keyframes animation](/en-US/docs/Web/CSS/@keyframes) declarations.

Reversing the precedence order for important declarations ensures users with special needs, such as personalized color schemes or large fonts, can override author styles when needed by marking some declarations in their user's style sheet as important. It also guarantees malicious extensions can't override important user-agent styles, which might break functionality or negatively impact security.

Does anything have precedence over important declarations? Yes, [transitions](/en-US/docs/Web/CSS/CSS_transitions). CSS transitions are a way to control the speed at which the property changes from one value to another. While transitioning from one value to another, a property will not match a specific important declaration.

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

In this example, the `color` and `background-color` properties will transition to the hovered state over two seconds. Even though default states are normal declarations and hover states are `!important` declarations, the transition does happen.

### Cascade layers

Within each of the three origins for style sheets – author, user, and user-agent – normal declarations in unlayered styles override layered style declarations, with the last declared having precedence over the layers declared before it. Important declarations reverse the order of precedence: important declarations in the first layer take precedence over important declarations in the next layer, and so on. Also, all the important declarations have precedence over important declarations made outside any layer.

### Inline styles

Inline styles are styles defined using the [`style`](/en-US/docs/Web/HTML/Global_attributes/style) attributes. They can also be normal or important. Inline _normal_ styles take precedence over all _normal_ declarations, no matter the origin. Inline _important_ styles take precedence over all other _important_ author styles, no matter the layer, but important styles from user's or user-agent's style sheets and transitions override them.

### !important and specificity

While `!important` is not part of determining specificity, it is related. Important declarations override all other declarations from the same [origin and cascade layer](/en-US/docs/Web/CSS/Cascade).

```css
#myElement#myElement#myElement .myClass.myClass p:hover {
  color: blue;
}

p {
  color: red !important;
}
```

This example displays a case of over-specifying a selector. No matter how high the selector [specificity](/en-US/docs/Web/CSS/Specificity) matches a normal declaration, an important declaration from the same source and cascade layer will always have precedence. In this case, the paragraph will always be red.

When two important declarations from the same origin and layer apply to the same element, browsers select and use the declaration with the highest specificity.

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

Declaring a shorthand property with `!important` sets all of sub-properties as important. The two following selector style blocks are equivalent:

```css
p {
  background: blue !important;
}

p {
  background-image: none !important;
  background-position: 0 0 !important;
  background-size: auto auto !important;
  background-repeat: repeat !important;
  background-origin: padding-box !important;
  background-clip: border-box !important;
  background-attachment: scroll !important;
  background-color: blue !important;
}
```

This example shows one of the several reasons avoiding the important flag is generally recommended.

## Impact on custom properties

When the `!important` flag is added to a custom property value declaration, it makes the value assignment important. The `!important` flag is then stripped from the custom property value. The `!important` flag is not passed as part of the custom property value to the [`var()`](/en-US/docs/Web/CSS/var) function.

```css
:root {
  --myColor: red !important;
  --myColor: blue;
}
p {
  color: var(--myColor);
}
blockquote {
  color: var(--myColor);
  color: purple;
}
```

```html hidden
<p>This is a paragraph</p>
<blockquote>This is a blockquote</blockquote>
```

In this example, the paragraph will be red, not blue, as the custom property value assignment is important. The blockquote will be purple, because the purple normal declaration comes after the normal red declaration.

{{ EmbedLiveSample('Impact_on_custom_properties', '500', '250') }}

## Best practices

Avoid using `!important` to override specificity. When intentionally creating important declarations for UI requirements, comment in your CSS code to explain to maintainers why they should not override that feature.

Even when working to override high-specificity styles not under your control, such as styles in a 3rd party plugin declared with an [id selector](/en-US/docs/Web/CSS/ID_selectors), you don't need to use `!important`. Consider instead importing the 3rd party stylesheet script into a [named or anonymous layer](/en-US/docs/Web/CSS/@layer) as your first cascade layer, instead of using `!important`. As long as the external styles do not include important declarations, your styles will take precedence over the widget styles, no matter the specificity.

If you need to override an external stylesheet containing important declarations, create a cascade layer containing the needed overrides, and declare that layer first.

### Accessibility

Important styles from a user stylesheet take precedence over the author style sheet's important declarations, meaning adding an `!important` flag to a site's styles will not prevent individual users with special requirements, such as large fonts, from being able to override your styles by adding important styles in their own user's style sheet.

## Browser compatibility

This feature is supported in all browsers.

## See also

- [CSS Specificity](/en-US/docs/Web/CSS/Specificity)
- [CSS Cascade](/en-US/docs/Web/CSS/Cascade)
