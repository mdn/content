---
title: "<section>: The Generic Section element"
slug: Web/HTML/Element/section
page-type: html-element
browser-compat: html.elements.section
---

{{HTMLSidebar}}

The **`<section>`** [HTML](/en-US/docs/Web/HTML) element represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.

{{EmbedInteractiveExample("pages/tabbed/section.html", "tabbed-standard")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

As mentioned above, `<section>` is a generic sectioning element, and should only be used if there isn't a more specific element to represent it. As an example, a navigation menu should be wrapped in a {{htmlelement("nav")}} element, but a list of search results or a map display and its controls don't have specific elements, and could be put inside a `<section>`.

Also consider these cases:

- If the contents of the element represent a standalone, atomic unit of content that makes sense syndicated as a standalone piece (e.g. a blog post or blog comment, or a newspaper article), the {{HTMLElement("article")}} element would be a better choice.
- If the contents represent useful tangential information that works alongside the main content, but is not directly part of it (like related links, or an author bio), use an {{HTMLElement("aside")}}.
- If the contents represent the main content area of a document, use {{HTMLElement("main")}}.
- If you are only using the element as a styling wrapper, use a {{HTMLElement("div")}} instead.

To reiterate, each `<section>` should be identified, typically by including a heading ({{HTMLElement("Heading_Elements", "h1")}} - {{HTMLElement("Heading_Elements", "h6")}} element) as a child of the `<section>` element, wherever possible. See below for examples of where you might see a `<section>` without a heading.

## Examples

### Basic usage example

#### Before

```html
<div>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</div>
```

##### Result

{{EmbedLiveSample('Before')}}

#### After

```html
<section>
  <h2>Heading</h2>
  <p>Bunch of awesome content</p>
</section>
```

##### Result

{{EmbedLiveSample('After')}}

### Using a section without a heading

Circumstances where you might see `<section>` used without a heading are typically found in web application/UI sections rather than in traditional document structures. In a document, it doesn't really make any sense to have a separate section of content without a heading to describe its contents. Such headings are useful for all readers, but particularly useful for users of assistive technologies like screen readers, and they are also good for SEO.

Consider however a secondary navigation mechanism. If the global navigation is already wrapped in a `<nav>` element, you could conceivably wrap a previous/next menu in a `<section>`:

```html
<section>
  <a href="#">Previous article</a>
  <a href="#">Next article</a>
</section>
```

Or what about some kind of button bar for controlling your app? This might not necessarily want a heading, but it is still a distinct section of the document:

```html
<section>
  <button class="reply">Reply</button>
  <button class="reply-all">Reply to all</button>
  <button class="fwd">Forward</button>
  <button class="del">Delete</button>
</section>
```

#### Result

{{EmbedLiveSample('Using a section without a heading')}}

Depending on the content, including a heading could also be good for SEO, so it is an option to consider.

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
        >,
        <a
          href="/en-US/docs/Web/HTML/Content_categories#sectioning_content"
          >Sectioning content</a
        >, <a href="/en-US/docs/Web/HTML/Content_categories#palpable_content">palpable content</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >. Note that a <code>&#x3C;section></code> element must not be a
        descendant of an {{HTMLElement("address")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/region_role"
            >region</a
          ></code
        >
        if the element has an
        <a
          href="/en-US/docs/Glossary/Accessible_name"
          >accessible name</a
        >, otherwise
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role"><code>alert</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/application_role"><code>application</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role"><code>banner</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/document_role"><code>document</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role"><code>feed</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/log_role"><code>log</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/main_role"><code>main</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/marquee_role"><code>marquee</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/note_role"><code>note</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/search_role"><code>search</code></a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/status_role"><code>status</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/tabpanel_role"><code>tabpanel</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Region role](/en-US/docs/Web/Accessibility/ARIA/Roles/region_role)
- [Why You Should Choose HTML5 article Over section](https://www.smashingmagazine.com/2020/01/html5-article-section/), by Bruce Lawson
