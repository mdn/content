---
title: CSS Scrollbars
slug: Web/CSS/CSS_Scrollbars
tags:
  - CSS
  - Guide
  - Overview
  - css scrollbars
browser-compat:
  - css.properties.scrollbar-width
  - css.properties.scrollbar-color
---
{{CSSRef}}{{SeeCompatTable}}

**CSS Scrollbars** standardizes the obsolete scrollbar color properties introduced in 2000 by Windows IE 5.5.

## Basic example

In this example, we have chosen to use a thin scrollbar with a green track and purple thumb.

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">
Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
Dandelion cucumber earthnut pea peanut soko zucchini.
</div>
```

### Result

{{EmbedLiveSample("Basic_Example")}}

## Reference

### Properties

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Accessibility concerns

When you customize scrollbars, consider they have enough contrast and that their hit area is large enough for people who use touch input.

- [Baseline Rules for Scrollbar Usability | Adrian Roselli](https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("-ms-overflow-style")}}
