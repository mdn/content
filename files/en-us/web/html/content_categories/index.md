---
title: Content categories
slug: Web/HTML/Content_categories
page-type: guide
---

{{HTMLSidebar}}

Most [HTML](/en-US/docs/Web/HTML) elements are a member of one or more **content categories** — these categories group elements that share common characteristics. This is a loose grouping (it doesn't actually create a relationship among elements of these categories), but they help define and describe the categories' shared behavior and their associated rules. It's possible for elements (such as {{HTMLElement("track")}}) to not be a member of _any_ of these categories.

The content categories are used to define the _content model_ of elements, in other words what each element can take as descendants. For example, a `<p>` element can only contain _phrasing content_, while a `<div>` element can contain _flow content_.

There are seven main content categories, which can be summarized with the Venn diagram below:

![A Venn diagram showing how the various content categories interrelate. The following sections explain these relationships in text.](content_categories_venn.png)

> [!NOTE]
> A more detailed discussion of these content categories and their comparative functionalities is beyond the scope of this article; for that, you may wish to read the [relevant portions of the HTML specification](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

## Metadata content

Elements belonging to the _metadata content_ category modify the presentation or the behavior of the rest of the document, set up links to other documents, or convey other _out-of-band_ information. Everything in the {{htmlelement("head")}}, including the `<title>`, `<link>`, `<script>`, `<style>`, and the lesser used `<base>`, is metadata content. There is a `<meta>` element for metadata that cannot be represented by these other elements.

The metadata elements are:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Some of these elements belong to more than one content category. For example, `<script>` is a member of the metadata, flow, and phrasing content categories, and is a script-supporting element; `<script>` can be used where metadata content, phrasing content, or script-supporting elements are expected.

## Flow content

Flow content is a broad category that encompasses most elements that can go inside the {{HTMLElement("body")}} element, including heading elements, sectioning elements, phrasing elements, embedding elements, interactive elements, and form-related elements. It also includes text nodes (but not those that only consist of white space characters).

The flow elements are:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("search")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Autonomous custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- Plain text

A few other elements belong to this category, but only if a specific condition is fulfilled:

- {{HTMLElement("area")}}, if it is a descendant of a {{HTMLElement("map")}} element
- {{HTMLElement("link")}}, if the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute is present
- {{HTMLElement("meta")}}, if the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute is present

## Sectioning content

Sectioning content, a subset of flow content, creates a [section in the current outline](/en-US/docs/Web/HTML/Element/Heading_Elements) defining the scope of {{HTMLElement("header")}} and {{HTMLElement("footer")}} elements.

The sectioning elements are:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Heading content

Heading content, a subset of flow content, defines the title of a section. This definition applies both to sections marked by an explicit [sectioning content](#sectioning_content) elements and to those implicitly defined by the heading content itself.

The heading elements are:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Though likely to contain heading content, the {{HTMLElement("header")}} is not heading content itself.

## Phrasing content

Phrasing content, a subset of flow content, refers to the text and the markup within a document. Sequences of phrasing content make up paragraphs.

The phrasing elements are:

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Autonomous custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- Plain text

A few other elements belong to this category, but only if a specific condition is fulfilled:

- {{HTMLElement("a")}}, if it contains only phrasing content
- {{HTMLElement("area")}}, if it is a descendant of a {{HTMLElement("map")}} element
- {{HTMLElement("del")}}, if it contains only phrasing content
- {{HTMLElement("ins")}}, if it contains only phrasing content
- {{HTMLElement("link")}}, if the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute is present
- {{HTMLElement("map")}}, if it contains only phrasing content
- {{HTMLElement("meta")}}, if the [`itemprop`](/en-US/docs/Web/HTML/Global_attributes/itemprop) attribute is present

## Embedded content

Embedded content, a subset of flow content, imports another resource or inserts content from another markup language or namespace into the document.

The embedded content elements are:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

## Interactive content

Interactive content, a subset of flow content, includes elements that are specifically designed for user interaction.

The interactive content elements are:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Some elements belong to this category only under specific conditions:

- {{HTMLElement("a")}}, if the [`href`](/en-US/docs/Web/HTML/Element/a#href) attribute is present
- {{HTMLElement("audio")}}, if the [`controls`](/en-US/docs/Web/HTML/Element/audio#controls) attribute is present
- {{HTMLElement("img")}}, if the [`usemap`](/en-US/docs/Web/HTML/Element/img#usemap) attribute is present
- {{HTMLElement("input")}}, if the [`type`](/en-US/docs/Web/HTML/Element/input#type) attribute is not in the hidden state
- {{HTMLElement("object")}}, if the [`usemap`](/en-US/docs/Web/HTML/Element/object#usemap) attribute is present
- {{HTMLElement("video")}}, if the [`controls`](/en-US/docs/Web/HTML/Element/video#controls) attribute is present

## Palpable content

**Palpable content** is content that is neither empty nor hidden; it is content that is rendered and substantive. Palpable content is not used to define content models but is used to define a general rule: Elements whose content model allows any flow content or phrasing content should have at least one node in its contents that is palpable content and that does not have the `hidden` attribute specified.

The palpable elements are:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("div")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("form")}}
- {{HtmlElement("iframe")}}
- {{HtmlElement("img")}}
- {{HtmlElement("ins")}}
- {{HtmlElement("kbd")}}
- {{HtmlElement("label")}}
- {{HtmlElement("main")}}
- {{HtmlElement("map")}}
- {{HtmlElement("mark")}}
- {{MathMLElement("math")}}
- {{HtmlElement("meter")}}
- {{HtmlElement("nav")}}
- {{HtmlElement("object")}}
- {{HtmlElement("p")}}
- {{HtmlElement("picture")}}
- {{HtmlElement("pre")}}
- {{HtmlElement("progress")}}
- {{HtmlElement("q")}}
- {{HtmlElement("ruby")}}
- {{HtmlElement("s")}}
- {{HtmlElement("samp")}}
- {{HtmlElement("search")}}
- {{HtmlElement("section")}}
- {{HtmlElement("select")}}
- {{HtmlElement("small")}}
- {{HtmlElement("span")}}
- {{HtmlElement("strong")}}
- {{HtmlElement("sub")}}
- {{HtmlElement("sup")}}
- {{SVGElement("svg")}}
- {{HtmlElement("table")}}
- {{HtmlElement("textarea")}}
- {{HtmlElement("time")}}
- {{HtmlElement("u")}}
- {{HtmlElement("var")}}
- {{HtmlElement("video")}}
- [Autonomous custom elements](/en-US/docs/Web/API/Web_components/Using_custom_elements)
- Plain text that is not inter-element [whitespace](/en-US/docs/Glossary/Whitespace)

Some elements belong to this category only under specific conditions:

- {{HTMLElement("audio")}}, if the [`controls`](/en-US/docs/Web/HTML/Element/audio#controls) attribute is present
- {{HTMLElement("dl")}}, if the element's children include at least one name-value group
- {{HTMLElement("input")}}, if the [type](/en-US/docs/Web/HTML/Element/input#type) attribute is not in the hidden state
- {{HTMLElement("ol")}}, if it's children include at least one {{HTMLElement("li")}} element
- {{HTMLElement("ul")}}, if it's children include at least one {{HTMLElement("li")}} element

## Script-supporting elements

**Script-supporting elements** are elements that don't directly contribute to a document's rendered output. Instead, they serve to support scripts, either by containing or specifying script code directly or by specifying data that will be used by scripts. Nearly all elements, including those that only take specific elements (such as {{HTMLElement("ul")}}, which takes {{HTMLElement("li")}} elements), can contain script-supporting elements.

The script-supporting elements are:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Form-associated content

Form-associated content is a subset of flow content comprising elements that have a form owner and can be used everywhere flow content is expected. A form owner is either the containing {{HTMLElement("form")}} element or the `<form>` whose `id` is specified in the element's `form` attribute.

The form-associated elements are:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("img")}}

This category contains several sub-categories:

- listed
  - : Elements that are listed in the {{domxref("HTMLFormElement.elements")}} and {{domxref("HTMLFieldSetElement.elements")}} collections. Includes {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- submittable
  - : Elements that can be used for constructing the form data set when the form is submitted. Includes {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- resettable
  - : Elements that can be affected when a form is reset. Includes {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- autocapitalize-and-autocorrect-inheriting
  - : Elements that inherit the [`autocapitalize`](/en-US/docs/Web/HTML/Global_attributes/autocapitalize) and [`autocorrect`](/en-US/docs/Web/HTML/Global_attributes/autocorrect) attributes from their form owner. Includes {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- labelable
  - : Elements that can be associated with {{HTMLElement("label")}} elements. Includes {{HTMLElement("button")}}, {{HTMLElement("input")}} (all types other than `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.

## Transparent content model

If an element has a transparent content model, then its contents must be structured such that they would be valid HTML, even if the transparent element were removed and replaced by the child elements.

For example, the {{HTMLElement("del")}} and {{HTMLElement("ins")}} elements are transparent:

```html
<p><del>Shopping</del> <ins>Returns</ins> list</p>
<ul>
  <del>
    <li>Oranges</li>
    <li>Toilet paper</li>
  </del>
  <li>Toothpaste</li>
</ul>
```

If those elements were removed, this fragment would still be valid HTML (if not correct English).

```html
<p>Shopping Returns list</p>
<ul>
  <li>Oranges</li>
  <li>Toilet paper</li>
  <li>Toothpaste</li>
</ul>
```
