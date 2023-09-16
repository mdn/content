---
title: Block-level content
slug: Glossary/Block-level_content
page-type: glossary-definition
---

{{GlossarySidebar}}

In CSS, content that participates in block layout is called **block-level content**.

In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block. Each box's left outer edge touches the left edge of the containing block.\
A block-level element always starts on a new line. In horizontal writing modes, like English or Arabic, it occupies the entire horizontal space of its parent element (container) and vertical space equal to the height of its contents, thereby creating a "block".

> **Note:** The above behavior of block layout changes if the containing block's [`writing-mode`](/en-US/docs/Web/CSS/writing-mode) is set to value other than [the default value](/en-US/docs/Web/CSS/writing-mode#formal_definition).

> **Note:** HTML (_HyperText Markup Language_) elements historically were categorized as either "block-level" elements or "inline" elements. As a presentational characteristic, this is now specified by CSS.

## Examples

In this example, two paragraph ({{HTMLElement("p")}}) elements are put in a {{HTMLElement("div")}}.

```html
<div>
  <p>
    This the first paragraph. The background color of these paragraphs have been
    colored to distinguish them from their parent element.
  </p>
  <p>This is the second paragraph.</p>
</div>
```

The paragraph({{HTMLElement("p")}}) elements are block-level by default. That is why they are displayed in block layout:

```css hidden
p {
  background-color: #8abb55;
}
```

{{EmbedLiveSample("Examples")}}

## See also

- [Inline-level content](/en-US/docs/Glossary/Inline-level_content)
- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- {{cssxref("display")}}
- [`writing-mode`](/en-US/docs/Web/CSS/writing-mode)
