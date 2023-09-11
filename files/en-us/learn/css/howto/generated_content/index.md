---
title: Using CSS generated content
slug: Learn/CSS/Howto/Generated_content
page-type: learn-faq
---

{{LearnSidebar}}

This article describes some ways in which you can use CSS to add content when a document is displayed. You modify your stylesheet to add text content or images.

One of the important advantages of CSS is that it helps you to separate a document's style from its content. However, there are situations where it makes sense to specify certain content as part of the stylesheet, not as part of the document. You can specify text or image content within a stylesheet when that content is closely linked to the document's structure.

> **Note:** Content specified in a stylesheet does not become part of the DOM.

Specifying content in a stylesheet can cause complications. For example, you might have different language versions of your document that share a stylesheet. If you specify content in your stylesheet that requires translation, you have to put those parts of your stylesheet in different files and arrange for them to be linked with the appropriate language versions of your document.

This issue does not arise if the content you specify consists of symbols or images that apply in all languages and cultures.

## Examples

### Text content

CSS can insert text content before or after an element, or change the content of a list item marker (such as a bullet symbol or number) before a {{HTMLElement('li')}} or other element with {{ cssxref("display", "display: list-item;") }}. To specify this, make a rule and add {{ cssxref("::before") }}, {{ cssxref("::after") }}, or {{cssxref("::marker")}} to the selector. In the declaration, specify the {{ cssxref("content") }} property with the text content as its value.

#### HTML

```html
A text where I need to <span class="ref">something</span>
```

#### CSS

```css
.ref::before {
  font-weight: bold;
  color: navy;
  content: "Reference ";
}
```

#### Output

{{ EmbedLiveSample('Text_content', 600, 30) }}

The character set of a stylesheet is UTF-8 by default, but it can also be specified in the link, in the stylesheet itself, or in other ways. For details, see [4.4 CSS style sheet representation](https://www.w3.org/TR/CSS21/syndata.html#q23) in the CSS Specification.

Individual characters can also be specified by an escape mechanism that uses backslash as the escape character. For example, "\265B" is the chess symbol for a black queen ♛. For details, see [Referring to characters not represented in a character encoding](https://www.w3.org/TR/CSS21/syndata.html#q24) and [Characters and case](https://www.w3.org/TR/CSS21/syndata.html#q6) in the CSS Specification.

### Image content

To add an image before or after an element, you can specify the URL of an image file in the value of the {{ cssxref("content") }} property.

This rule adds a space and an icon after every link that has the class `glossary`:

#### HTML

```html
<a href="developer.mozilla.org" class="glossary">developer.mozilla.org</a>
```

#### CSS

```css
a.glossary::after {
  content: " " url("glossary-icon.gif");
}
```

{{ EmbedLiveSample('Image_content', 600, 40) }}
