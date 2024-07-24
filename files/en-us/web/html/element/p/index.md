---
title: "<p>: The Paragraph element"
slug: Web/HTML/Element/p
page-type: html-element
browser-compat: html.elements.p
---

{{HTMLSidebar}}

The **`<p>`** [HTML](/en-US/docs/Web/HTML) element represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.

Paragraphs are [block-level elements](/en-US/docs/Glossary/Block-level_content), and notably will automatically close if another block-level element is parsed before the closing `</p>` tag. See "Tag omission" below.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

> **Note:** The `align` attribute on `<p>` tags is obsolete and shouldn't be used.

## Accessibility

Breaking up content into paragraphs helps make a page more accessible. Screen-readers and other assistive technology provide shortcuts to let their users skip to the next or previous paragraph, letting them skim content like how white space lets visual users skip around.

Using empty `<p>` elements to add space between paragraphs is problematic for people who navigate with screen-reading technology. Screen readers may announce the paragraph's presence, but not any content contained within it — because there is none. This can confuse and frustrate the person using the screen reader.

If extra space is desired, use {{glossary("CSS")}} properties like {{cssxref("margin")}} to create the effect:

```css
p {
  margin-bottom: 2em; /* increase white space after a paragraph */
}
```

## Examples

### HTML

```html
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>
<p>
  This is the second paragraph. This is the second paragraph. This is the second
  paragraph. This is the second paragraph.
</p>
```

### Result

{{EmbedLiveSample('Examples')}}

## Styling paragraphs

By default, browsers separate paragraphs with a single blank line. Alternate separation methods, such as first-line indentation, can be achieved with {{glossary("CSS")}}:

### HTML

```html
<p>
  Separating paragraphs with blank lines is easiest for readers to scan, but
  they can also be separated by indenting their first lines. This is often used
  to take up less space, such as to save paper in print.
</p>

<p>
  Writing that is intended to be edited, such as school papers and rough drafts,
  uses both blank lines and indentation for separation. In finished works,
  combining both is considered redundant and amateurish.
</p>

<p>
  In very old writing, paragraphs were separated with a special character: ¶,
  the <i>pilcrow</i>. Nowadays, this is considered claustrophobic and hard to
  read.
</p>

<p>
  How hard to read? See for yourself:
  <button data-toggle-text="Oh no! Switch back!">
    Use pilcrow for paragraphs
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### Result

{{EmbedLiveSample('Styling_paragraphs')}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag is required. The end tag may be omitted if the
        {{HTMLElement("p")}} element is immediately followed by an
        {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}},
        {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}},
        {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}},
        {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} or another {{HTMLElement("p")}}
        element, or if there is no more content in the parent element and the
        parent element is not an {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} or {{HTMLElement("video")}} element,
        or an autonomous custom element.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/structural_roles"
          >paragraph</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
