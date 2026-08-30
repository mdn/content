---
title: Inline-level content
slug: Glossary/Inline-level_content
page-type: glossary-definition
sidebar: glossarysidebar
---

In CSS, content that participates in inline layout is called **inline-level content**. Most text sequences, replaced elements, and generated content are inline-level by default.

In inline layout, a mixed stream of text, {{ glossary("replaced elements")}}, and other inline boxes are laid out by fragmenting them into a stack of line boxes. Within each line box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode. Typically, they are aligned by the baselines of their text. This can be changed with CSS.

> [!NOTE]
> HTML (_HyperText Markup Language_) elements historically were categorized as either "block-level" elements or "inline" elements. As a presentational characteristic, this is now specified by CSS.

![inline layout](inline_layout.png)

The diagram illustrates how inline-level content is laid out inside a block container. The whole container is first split into _line boxes_. Each box of inline-level content is added in order to these line boxes. When inline content wraps, the same inline box is _fragmented_ across multiple line boxes. Inline boxes can have varying heights, such as the one made taller to accommodate the "big text" box. There's also a floated element in the bottom left, which reduces the available horizontal space, causing inline content to wrap around it. For more information about how inline formatting works, read the CSS [Inline formatting context](/en-US/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context) guide.

## Examples

```html
<p>
  This span is an <span class="highlight">inline-level element</span>; its
  background has been colored to display both the beginning and end of the
  element's influence. Input elements, like <input type="radio" /> and
  <input type="checkbox" />, are also inline-level content.
</p>
```

In this example, the {{HTMLElement("p")}} element contains some text. Within that text is a {{HTMLElement("span")}} element and two {{HTMLElement("input")}} elements, which are inline-level elements. If the `<span>` is spread across two lines, two line boxes are generated. Because these elements are inline, the paragraph correctly renders as a single paragraph of unbroken text flow:

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333333;
}

.highlight {
  background-color: #eeee33;
}
```

{{EmbedLiveSample("Examples")}}

## See also

- Related glossary terms:
  - {{Glossary("Block-level content")}}
- [Inline formatting context](/en-US/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
- {{cssxref("display")}}
