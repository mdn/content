---
title: How to highlight the first paragraph
slug: Learn/CSS/Howto/Highlight_first_para
page-type: learn-faq
---

{{LearnSidebar}}

In this guide you can find out how to highlight the first paragraph inside a container.

## Styling the first paragraph

You would like to make the first paragraph larger and bold. You could add a class to the first paragraph and select it that way, however using a pseudo-class selector is more flexible — it means that you can target the paragraph based on its location in the document, and you won't have to manually move the class if the source order changes.

## Using a pseudo-class

A {{cssxref("pseudo-classes","pseudo-class")}} acts as if you have applied a class; however, rather than using a class selector CSS selects based on the document structure. There are a number of different pseudo-classes that can select different things. In our case we are going to use {{cssxref(":first-child")}}. This will select the element that is the first-child of a parent.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_para.html", '100%', 770)}}

You can try changing {{cssxref(":first-child")}} to {{cssxref(":last-child")}} in the live example above, and you will select the last paragraph.

Whenever you need to target something in your document, you can check to see if one of the available {{cssxref("pseudo-classes")}} can do it for you.

## See also

- The {{cssxref("pseudo-classes")}} reference page.
- [Learn CSS: Pseudo-classes and pseudo-elements.](/en-US/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
