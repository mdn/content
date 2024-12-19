---
title: How to highlight a paragraph that comes after a heading
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can find out how to highlight a paragraph that comes directly after a heading.

## Styling the first paragraph after a heading

A common pattern is to style the first paragraph in an article differently to the ones that come after it. Usually this first paragraph will come right after a heading, and if this is the case in your design you can use that combination of elements to target the paragraph.

## The next-sibling combinator

CSS has a group of [CSS Selectors](/en-US/docs/Web/CSS/CSS_selectors) which are referred to as **combinators**, because they select things based on a combination of selectors. In our case, we will use the [next-sibling combinator](/en-US/docs/Web/CSS/Next-sibling_combinator). This combinator selects an element based on it being next to another element. In our HTML we have a {{htmlelement("Heading_Elements", "h1")}} followed by a {{htmlelement("p")}}. The `<p>` is the next sibling of the `<h1>` so we can select it with `h1 + p`.

```html live-sample___highlight_h1_plus_para
<div class="wrapper">
  <h1>A heading</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___highlight_h1_plus_para
.wrapper h1 + p {
  font-weight: bold;
  font-size: 130%;
  color: rebeccapurple;
}
```

{{EmbedLiveSample("highlight_h1_plus_para", "", "220px")}}

## See also

- [Learn CSS: Basic selectors](/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [Learn CSS: Combinators](/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators)
