---
title: CSS Flow Layout
slug: Web/CSS/CSS_Flow_Layout
tags:
  - CSS
  - CSS Flow Layout
  - Guide
  - Intermediate
  - Layout
  - Reference
  - flow
---
{{CSSRef}}

_Normal Flow_, or Flow Layout, is the way that Block and Inline elements are displayed on a page before any changes are made to their layout. The flow is essentially a set of things that are all working together and know about each other in your layout. Once something is taken *out of flow* it works independently.

In normal flow, **inline** elements display in the inline direction, that is in the direction words are displayed in a sentence according to the [Writing Mode](/en-US/docs/Web/CSS/CSS_Writing_Modes) of the document. **Block** elements display one after the other, as paragraphs do in the Writing Mode of that document. In English therefore, inline elements display one after the other, starting on the left, and block elements start at the top and move down the page.

## Basic Example

The following example demonstrates Block and Inline Level boxes. The two paragraph elements with a green border are Block Level, displaying one under the other.

The first sentence also includes a span element with a blue background. This is inline level and therefore displays in place in the sentence.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Guides

- [Block and Inline Layout in Normal Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [In Flow and Out of Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)
- [Formatting Contexts Explained](/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [Flow Layout and Writing Modes](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Flow Layout and Overflow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)

## Reference

### Glossary Entries

- {{Glossary("Block/CSS", "Block (CSS)")}}
