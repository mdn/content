---
title: Block-level elements
slug: Web/HTML/Block-level_elements
tags:
  - Beginner
  - Development
  - Guide
  - HTML
  - Web
---

In this article, we'll examine HTML block-level elements and how they differ from [inline-level elements](/en-US/docs/Web/HTML/Inline_elements).

HTML (**Hypertext Markup Language**) elements historically were categorized as either "block-level" elements or "inline-level" elements. Since this is a presentational characteristic it is nowadays specified by CSS in the [Flow Layout](/en-US/docs/Web/CSS/CSS_Flow_Layout). A Block-level element occupies the entire horizontal space of its parent element (container), and vertical space equal to the height of its contents, thereby creating a "block".

Browsers typically display the block-level element with a newline both before and after the element. You can visualize them as a stack of boxes.

> **Note:** A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

The following example demonstrates the block-level element's influence:

## Block-level elements

### HTML

```html
<p>This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>
```

### CSS

```css
p { background-color: #8ABB55; }
```

{{ EmbedLiveSample('Block-level_elements') }}

## Usage

- Block-level elements may appear only within a {{ HTMLElement("body") }} element.

## Block-level vs. inline

There are a couple of key differences between block-level elements and inline elements:

- Content model
  - : Generally, block-level elements may contain inline elements and (sometimes) other block-level elements. Inherent in this structural distinction is the idea that block elements create "larger" structures than inline elements.
- Default formatting
  - : By default, block-level elements begin on new lines, but inline elements can start anywhere in a line.

The distinction of block-level vs. inline elements was used in HTML specifications up to 4.01. Later, this binary distinction is replaced with a more complex set of [content categories](/en-US/docs/Web/Guide/HTML/Content_categories). While the "inline" category roughly corresponds to the category of [phrasing content](/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content), the "block-level" category doesn't directly correspond to any HTML content category, but _"block-level" and "inline" elements combined together_ correspond to the [flow content](/en-US/docs/Web/Guide/HTML/Content_categories#flow_content) in HTML. There are also additional categories, e.g. [interactive content](/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content).

## Elements

The following is a complete list of all HTML "block-level" elements (although "block-level" is not technically defined for elements that are new in HTML5).

- {{ HTMLElement("address") }}
  - : Contact information.
- {{ HTMLElement("article") }}
  - : Article content.
- {{ HTMLElement("aside") }}
  - : Aside content.
- {{ HTMLElement("blockquote") }}
  - : Long ("block") quotation.
- {{ HTMLElement("details") }}
  - : Disclosure widget.
- {{ HTMLElement("dialog") }}
  - : Dialog box.
- {{ HTMLElement("dd") }}
  - : Describes a term in a description list.
- {{ HTMLElement("div") }}
  - : Document division.
- {{ HTMLElement("dl") }}
  - : Description list.
- {{ HTMLElement("dt") }}
  - : Description list term.
- {{ HTMLElement("fieldset") }}
  - : Field set label.
- {{ HTMLElement("figcaption") }}
  - : Figure caption.
- {{ HTMLElement("figure") }}
  - : Groups media content with a caption (see {{ HTMLElement("figcaption") }}).
- {{ HTMLElement("footer") }}
  - : Section or page footer.
- {{ HTMLElement("form") }}
  - : Input form.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : Heading levels 1-6.
- {{ HTMLElement("header") }}
  - : Section or page header.
- {{ HTMLElement("hgroup") }}
  - : Groups header information.
- {{ HTMLElement("hr") }}
  - : Horizontal rule (dividing line).
- {{ HTMLElement("li") }}
  - : List item.
- {{ HTMLElement("main") }}
  - : Contains the central content unique to this document.
- {{ HTMLElement("nav") }}
  - : Contains navigation links.
- {{ HTMLElement("ol") }}
  - : Ordered list.
- {{ HTMLElement("p") }}
  - : Paragraph.
- {{ HTMLElement("pre") }}
  - : Preformatted text.
- {{ HTMLElement("section") }}
  - : Section of a web page.
- {{ HTMLElement("table") }}
  - : Table.
- {{ HTMLElement("ul") }}
  - : Unordered list.

## See also

- [Inline elements](/en-US/docs/Web/HTML/Inline_elements)
- {{cssxref("display")}}
- [Block and Inline Layout in Normal Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}
