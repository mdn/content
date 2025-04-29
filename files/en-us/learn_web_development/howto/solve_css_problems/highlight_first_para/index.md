---
title: How to highlight the first paragraph
short-title: Highlight the first paragraph
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_para
page-type: learn-faq
sidebar: learn-how-to
---

In this guide you can find out how to highlight the first paragraph inside a container.

## Styling the first paragraph

You would like to make the first paragraph larger and bold. You could add a class to the first paragraph and select it that way, however using a pseudo-class selector is more flexible — it means that you can target the paragraph based on its location in the document, and you won't have to manually move the class if the source order changes.

## Using a pseudo-class

A {{cssxref("pseudo-classes","pseudo-class")}} acts as if you have applied a class; however, rather than using a class selector CSS selects based on the document structure. There are a number of different pseudo-classes that can select different things. In our case we are going to use {{cssxref(":first-child")}}. This will select the element that is the first-child of a parent.

```html live-sample___highlight_first_para
<div class="wrapper">
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

```css live-sample___highlight_first_para
.wrapper p:first-child {
  font-weight: bold;
  font-size: 130%;
}
```

{{EmbedLiveSample("highlight_first_para")}}

You can try changing {{cssxref(":first-child")}} to {{cssxref(":last-child")}} in the live example above, and you will select the last paragraph.

Whenever you need to target something in your document, you can check to see if one of the available {{cssxref("pseudo-classes")}} can do it for you.

## See also

- The {{cssxref("pseudo-classes")}} reference page.
- [Learn CSS: Pseudo-classes and pseudo-elements.](/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements)
