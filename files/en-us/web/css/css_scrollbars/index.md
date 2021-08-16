---
title: CSS Scrollbars
slug: Web/CSS/CSS_Scrollbars
tags:
  - CSS
  - Guide
  - Overview
  - css scrollbars
---
{{CSSRef}}{{SeeCompatTable}}

**CSS Scrollbars** standardizes the obsolete scrollbar color properties introduced in 2000 by Windows IE 5.5.

## Basic Example

In this example we have chosen to use a thin scrollbar, with a green track and purple thumb.

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

### CSS Properties

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## Specifications

| Specification                            | Status                               | Comment             |
| ---------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName("CSS Scrollbars")}} | {{Spec2("CSS Scrollbars")}} | Initial definition. |

## Accessibility concerns

When you customize scrollbars, consider they have enough contrast and that their hit area is large enough for people who use touch input.

- [Baseline Rules for Scrollbar Usability | Adrian Roselli](http://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## Browser compatibility

### scrollbar-width

{{Compat("css.properties.scrollbar-width")}}

### scrollbar-color

{{Compat("css.properties.scrollbar-color")}}

## See also

- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("-ms-overflow-style")}}
