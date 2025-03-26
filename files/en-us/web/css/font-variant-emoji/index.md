---
title: font-variant-emoji
slug: Web/CSS/font-variant-emoji
page-type: css-property
browser-compat: css.properties.font-variant-emoji
---

{{CSSRef}}

The **`font-variant-emoji`** [CSS](/en-US/docs/Web/CSS) property specifies the default presentation style for displaying emojis.

Traditionally, this was done by appending a _Variation Selector_, `U+FE0E` for text and `U+FE0F` for emoji, to the emoji code point. Only emojis listed as contributing to a [Unicode emoji presentation sequence](https://www.unicode.org/emoji/charts/emoji-variants.html) are affected by this property.

## Syntax

```css
/* Keyword values */
font-variant-emoji: normal;
font-variant-emoji: text;
font-variant-emoji: emoji;
font-variant-emoji: unicode;

/* Global values */
font-variant-emoji: inherit;
font-variant-emoji: initial;
font-variant-emoji: revert;
font-variant-emoji: revert-layer;
font-variant-emoji: unset;
```

The `font-variant-emoji` property is specified using a single keyword value from the list below.

### Values

- `normal`
  - : Allows a browser to choose how to display the emoji. This often follows the operating system setting.
- `text`
  - : Renders the emoji as if it were using the unicode text variation selector (`U+FE0E`).
- `emoji`
  - : Renders the emoji as if it were using the unicode emoji variation selector (`U+FE0F`).
- `unicode`
  - : Renders the emoji in accordance with the [Emoji presentation properties](https://www.unicode.org/reports/tr51/tr51-23.html#Emoji_Presentation). If the `U+FE0E` or `U+FE0F` variation selector is present, then it will override this value setting.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Accessibility

While the use of emojis may seem fun, you should consider their impact on accessibility, specifically for users with visual and cognitive impairments. Consider the following factors while using emojis:

- Display on screen-readers: Screen-readers will read out the alt text of an emoji. Keep this in mind to consider the position of an emoji in the content. Repeated and overuse of emojis will have a detrimental effect on screen-reader users. It is better to use emojis than emoticons; emoticons will be read out as punctuation characters.

- Contrast with background: When using emojis, consider their colors and how that will work with the background color, especially if you have background colors that can change, such as light/dark modes.

- Intent of use: Do not use emojis to replace words because your understanding of the emoji meaning may differ from that of the users'. Also consider that emojis might have different meanings in different cultures and geographies. Our recommendation is to preferably limit usage to commonly known emojis.

## Examples

### Changing the way an emoji is displayed

This example shows how you can render an emoji in its `text` or `emoji` presentation.

#### HTML

```html hidden
<p class="no-support">
  Your Browser does not support <code>font-variant-emoji</code>. This image
  shows how it is rendered with support.
</p>
<img
  class="no-support"
  src="./font-variant-emoji-example.jpg"
  alt="a telephone emoji show as text, black and white next to a telephone emoji shown as emoji full color and graphical representation" />
```

```html
<section class="emojis">
  <div class="emoji">
    <h2>text presentation</h2>
    <div class="text-presentation">☎</div>
  </div>
  <div class="emoji">
    <h2>emoji presentation</h2>
    <div class="emoji-presentation">☎</div>
  </div>
</section>
```

#### CSS

```css hidden
@supports (font-variant-emoji: emoji) {
  .no-support {
    display: none;
  }
  .emojis {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .emoji > div {
    font-size: 2rem;
  }
}

@supports not (font-variant-emoji: emoji) {
  .emojis {
    display: none;
  }
}
```

```css
.text-presentation {
  font-variant-emoji: text;
}

.emoji-presentation {
  font-variant-emoji: emoji;
}
```

#### Result

{{ EmbedLiveSample('Changing the way an emoji is displayed') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [font-variant](/en-US/docs/Web/CSS/font-variant)
- [font-variant-alternates](/en-US/docs/Web/CSS/font-variant-alternates)
- [font-variant-caps](/en-US/docs/Web/CSS/font-variant-caps)
- [font-variant-east-asian](/en-US/docs/Web/CSS/font-variant-east-asian)
- [font-variant-ligatures](/en-US/docs/Web/CSS/font-variant-ligatures)
- [font-variant-numeric](/en-US/docs/Web/CSS/font-variant-numeric)
- [Emojis and accessibility: How to use them properly](https://uxdesign.cc/emojis-in-accessibility-how-to-use-them-properly-66b73986b803)
