---
title: block-level
slug: Glossary/block-level
page-type: glossary-definition
---

In CSS, content that participates in block layout is called block-level content.

In a block layout, boxes are laid out one after the other, vertically, beginning at the top of a containing block. Each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch).\
A block-level element always starts on a new line. And it occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents, thereby creating a "block".

> **Note:** HTML (**HyperText Markup Language**) elements historically were categorized as either "block-level" elements or "inline-level" elements. Since this is a presentational characteristic it is nowadays specified by CSS.

## Examples

In this example two paragraph({{HTMLElement("p")}}) elements are put in a {{HTMLElement("div")}}.

```html
<div>
  <p>
    This paragraph is a block-level element; its background has been colored to
    display the paragraph's parent element.
  </p>
  <p>This is a second paragraph.</p>
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

- [inline-level](/en-US/docs/Glossary/inline-level)
- [Block formatting context](/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- {{cssxref("display")}}
