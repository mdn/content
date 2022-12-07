---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
page-type: css-property
tags:
  - CSS
  - CSS Fonts
  - CSS Property
  - Reference
  - recipe:css-property
browser-compat: css.properties.font-variant-emoji
---

{{CSSRef}}

The **`font-variant-emoji`** allows web authors to set a default presentation style for displaying emojis.

Traditionally this was done by appending a _Variation Selector_, either `U+FE0E` for text or `U+FE0F` for emoji, to the emoji codepoint.

Only emojis listed as contributing to a [Unicode emoji presentation sequence](http://www.unicode.org/emoji/charts/emoji-variants.html) are affected by this property.

{{EmbedInteractiveExample("pages/css/font-variant-emoji.html")}}

## Syntax

```css
/* Keyword Values */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;
```

The `font-variant-emoji` property is specified as one of the keyword values listed below.

### Values

- `normal`
  - : This keyword allows the User Agent (browser) to choose how to display the emoji, this often follows the operating system setting.
- `text`
  - : This keyword renders the emoji as if it were using the unicode text variation selector (`U+FE0E`).
- `emoji`
  - : This keyword renders the emoji as if it were using the unicode emoji variation selector (`U+FE0F`).
- `unicode`
  - : This keyword renders the emoji in accordance with the [Emoji_Presentation properties](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). If the `U+FE0E` or `U+FE0F` variation selector is present then this will override this setting.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See Also

- [font-variant](/en-US/docs/Web/CSS/font-variant)
- [font-variant-alternates](/en-US/docs/Web/CSS/font-variant-alternates)
- [font-variant-caps](/en-US/docs/Web/CSS/font-variant-caps)
- [font-variant-east-asian](/en-US/docs/Web/CSS/font-variant-east-asian)
- [font-variant-ligatures](/en-US/docs/Web/CSS/font-variant-ligatures)
- [font-variant-numeric](/en-US/docs/Web/CSS/font-variant-numeric)
