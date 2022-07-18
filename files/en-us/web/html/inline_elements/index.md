---
title: Inline elements
slug: Web/HTML/Inline_elements
tags:
  - Beginner
  - Elements
  - HTML
  - HTML Elements
  - HTML:Element Reference
  - Layout
  - Reference
---

In this article, we'll examine HTML inline-level elements and how they differ from [block-level elements](/en-US/docs/Web/HTML/Block-level_elements).

HTML (**Hypertext Markup Language**) elements historically were categorized as either "block-level" elements or "inline-level" elements. Since this is a presentational characteristic it is nowadays specified by CSS in the [Flow Layout](/en-US/docs/Web/CSS/CSS_Flow_Layout).

Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.

> **Note:** An inline element does not start on a new line and only takes up as much width as necessary.

## Inline vs. block-level elements: a demonstration

This is most easily demonstrated with a simple example. First, some simple CSS that we'll be using:

```css
.highlight {
  background-color:#ee3;
}
```

### Inline

Let's look at the following example which demonstrates an inline element:

```html
<div>The following span is an <span class="highlight">inline element</span>;
its background has been colored to display both the beginning and end of
the inline element's influence.</div>
```

In this example, the {{HTMLElement("div")}} block-level element contains some text. Within that text is a {{HTMLElement("span")}} element, which is an inline element. Because the `<span>` element is inline, the paragraph correctly renders as a single, unbroken text flow, like this:

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color:#ee3;
}
```

{{EmbedLiveSample("Inline", 600, 80)}}

### Block-level

Now let's change that `<span>` into a block-level element, such as {{HTMLElement("p")}}:

```html
<div>The following paragraph is a <p class="highlight">block-level element;</p>
its background has been colored to display both the beginning and end of
the block-level element's influence.</div>
```

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color:#ee3;
}
```

Rendered using the same CSS as before, we get:

{{EmbedLiveSample("Block-level", 600, 150)}}

See the difference? The `<p>` element totally changes the layout of the text, splitting it into three segments: the text before the `<p>`, then the `<p>`'s text, and finally the text following the `<p>`.

### Changing element levels

You can change the *visual presentation* of an element using the CSS {{cssxref("display")}} property. For example, by changing the value of `display` from `"inline"` to `"block"`, you can tell the browser to render the inline element in a block box rather than an inline box, and vice versa. However, doing this will not change the *category* and the _content model_ of the element. For example, even if the `display` of the `span` element is changed to `"block"`, it still would not allow to nest a `div` element inside it.

## Conceptual differences

In brief, here are the basic conceptual differences between inline and block-level elements:

- Content model
  - : Generally, inline elements may contain only data and other inline elements. An exception is the inline `a` element which may contain block level elements such as `div`.
    > **Note:** Links that wrap multiple lines of block-level content make for a poor-to-unusable experience for some assistive technologies and should be avoided.

- Formatting
  - : By default, inline elements do not force a new line to begin in the document flow. Block elements, on the other hand, typically cause a line break to occur (although, as usual, this can be changed using CSS).

## List of "inline" elements

The following elements are inline by default (although block and inline elements are no longer defined in HTML 5, use [content categories](/en-US/docs/Web/Guide/HTML/Content_categories) instead):

- {{ HTMLElement("a") }}
- {{ HTMLElement("abbr") }}
- {{ HTMLElement("acronym") }}
- {{ HTMLElement("audio") }} (if it has visible controls)
- {{ HTMLElement("b") }}
- {{ HTMLElement("bdi") }}
- {{ HTMLElement("bdo") }}
- {{ HTMLElement("big") }}
- {{ HTMLElement("br") }}
- {{ HTMLElement("button") }}
- {{ HTMLElement("canvas") }}
- {{ HTMLElement("cite") }}
- {{ HTMLElement("code") }}
- {{ HTMLElement("data") }}
- {{ HTMLElement("datalist") }}
- {{ HTMLElement("del") }}
- {{ HTMLElement("dfn") }}
- {{ HTMLElement("em") }}
- {{ HTMLElement("embed") }}
- {{ HTMLElement("i") }}
- {{ HTMLElement("iframe") }}
- {{ HTMLElement("img") }}
- {{ HTMLElement("input") }}
- {{ HTMLElement("ins") }}
- {{ HTMLElement("kbd") }}
- {{ HTMLElement("label") }}
- {{ HTMLElement("map") }}
- {{ HTMLElement("mark") }}
- {{ HTMLElement("meter") }}
- {{ HTMLElement("noscript") }}
- {{ HTMLElement("object") }}
- {{ HTMLElement("output") }}
- {{ HTMLElement("picture") }}
- {{ HTMLElement("progress") }}
- {{ HTMLElement("q") }}
- {{ HTMLElement("ruby") }}
- {{ HTMLElement("s") }}
- {{ HTMLElement("samp") }}
- {{ HTMLElement("script") }}
- {{ HTMLElement("select") }}
- {{ HTMLElement("slot") }}
- {{ HTMLElement("small") }}
- {{ HTMLElement("span") }}
- {{ HTMLElement("strong") }}
- {{ HTMLElement("sub") }}
- {{ HTMLElement("sup") }}
- {{ SVGElement("svg") }}
- {{ HTMLElement("template") }}
- {{ HTMLElement("textarea") }}
- {{ HTMLElement("time") }}
- {{ HTMLElement("u") }}
- {{ HTMLElement("tt") }}
- {{ HTMLElement("var") }}
- {{ HTMLElement("video") }}
- {{ HTMLElement("wbr") }}

## See also

- [Block-level elements](/en-US/docs/Web/HTML/Block-level_elements)
- [HTML element reference](/en-US/docs/Web/HTML/Element)
- {{cssxref("display")}}
- [Content categories](/en-US/docs/Web/Guide/HTML/Content_categories)
- [Block and Inline Layout in Normal Flow](/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/en-US/docs/Web/HTML/")}}
