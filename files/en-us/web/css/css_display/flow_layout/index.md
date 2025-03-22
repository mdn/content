---
title: CSS flow layout
slug: Web/CSS/CSS_display/Flow_layout
page-type: guide
---

{{CSSRef}}

_Normal Flow_, or Flow Layout, is the way that block and inline elements are displayed on a page before any changes are made to their layout. The flow is essentially a set of things that are all working together and know about each other in your layout. Once something is taken _out of flow_ it works independently.

In normal flow, **{{Glossary("Inline-level_content", "inline")}}** elements display in the inline direction, that is in the direction words are displayed in a sentence according to the [Writing Mode](/en-US/docs/Web/CSS/CSS_writing_modes) of the document. **{{Glossary("Block/CSS", "block")}}** elements display one after the other, as paragraphs do in the Writing Mode of that document. In English therefore, inline elements display one after the other, starting on the left, and block elements start at the top and move down the page.

## Basic Example

The following example demonstrates Block and Inline Level boxes. The two paragraph elements with a green border are Block Level, displaying one under the other.

The first sentence also includes a span element with a blue background. This is inline level and therefore displays in place in the sentence.

```html hidden live-sample___normal-flow
<div class="box">
  <p>
    One <span>November</span> night in the year 1782, so the story runs, two
    brothers sat over their winter fire in the little French town of Annonay,
    watching the grey smoke-wreaths from the hearth curl up the wide chimney.
    Their names were Stephen and Joseph Montgolfier, they were papermakers by
    trade, and were noted as possessing thoughtful minds and a deep interest in
    all scientific knowledge and new discovery.
  </p>
  <p>
    Before that night—a memorable night, as it was to prove—hundreds of millions
    of people had watched the rising smoke-wreaths of their fires without
    drawing any special inspiration from the fact.
  </p>
</div>
```

```css hidden live-sample___normal-flow
body {
  font: 1.2em sans-serif;
}

p {
  border: 2px solid green;
}
span {
  background-color: lightblue;
}
```

{{EmbedLiveSample("normal-flow", "", "250px")}}

## See also

- [Block and inline layout in normal flow](/en-US/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [In flow and out of flow](/en-US/docs/Web/CSS/CSS_display/In_flow_and_out_of_flow)
- [Formatting contexts explained](/en-US/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
- [Flow layout and writing modes](/en-US/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [Flow layout and overflow](/en-US/docs/Web/CSS/CSS_display/Flow_layout_and_overflow)
