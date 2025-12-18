---
title: Inline-level content
slug: Glossary/Inline-level_content
page-type: glossary-definition
sidebar: glossarysidebar
---

In CSS, content that participates in inline layout is called **inline-level content**. Most text sequences, replaced elements, and generated content are inline-level by default.

In inline layout, a mixed stream of text, {{ glossary("replaced elements")}}, and other inline boxes are laid out by fragmenting them into a stack of line boxes. Within each line box, inline-level boxes are aligned to each other vertically or horizontally, depending on the writing mode. Typically, they are aligned by the baselines of their text. This can be changed with CSS.

![inline layout](inline_layout.png)

### Interpreting the inline layout diagram

The diagram illustrates how inline-level content is laid out inside a block container.

- The outer blue rectangle represents the block formatting context (for example, a `<p>` element).
- Each horizontal dashed row represents a **line box**, which is created by the layout engine to group inline content that fits on the same line.

Inline-level elements generate **inline boxes**:

- When an inline element fits entirely on one line, it occupies a single line box.
- When inline content wraps, the same inline box is **fragmented across multiple line boxes**.

The large "Big Text" element demonstrates that inline boxes can have varying heights.
Line boxes expand vertically to accommodate the tallest inline box they contain, while alignment is typically performed using text baselines.

The floated element on the left does **not** participate in line box construction.  
Instead, it reduces the available horizontal space, causing inline content to wrap around it rather than include it.

> [!NOTE]
> HTML (_HyperText Markup Language_) elements historically were categorized as either "block-level" elements or "inline" elements. As a presentational characteristic, this is now specified by CSS.

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
