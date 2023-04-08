---
title: <main>
slug: Web/HTML/Element/main
page-type: html-element
browser-compat: html.elements.main
---

{{HTMLSidebar}}

The **`<main>`** [HTML](/en-US/docs/Web/HTML) element represents the dominant content of the {{HTMLElement("body")}} of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

A document mustn't have more than one `<main>` element that doesn't have the [`hidden`](/en-US/docs/Web/HTML/Global_attributes#hidden) attribute specified.

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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None; both the starting and ending tags are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Where
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >flow content</a
        >
        is expected, but only if it is a
        <a
          href="https://html.spec.whatwg.org/multipage/grouping-content.html#hierarchically-correct-main-element"
          >hierarchically correct <code>main</code> element</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role"
            >main</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

The content of a `<main>` element should be unique to the document. Content that is repeated across a set of documents or document sections such as sidebars, navigation links, copyright information, site logos, and search forms shouldn't be included unless the search form is the main function of the page.

`<main>` doesn't contribute to the document's outline; that is, unlike elements such as {{HTMLElement("body")}}, headings such as {{HTMLElement("Heading_Elements", "h2")}}, and such, `<main>` doesn't affect the {{glossary("DOM", "DOM's")}} concept of the structure of the page. It's strictly informative.

## Examples

```html
<!-- other content -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>…</p>
    <p>…</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>…</p>
    <p>…</p>
  </article>
</main>

<!-- other content -->
```

### Result

{{EmbedLiveSample('Examples')}}

## Accessibility concerns

### Landmark

The `<main>` element behaves like a [`main` landmark](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) role. [Landmarks](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) can be used by assistive technology to quickly identify and navigate to large sections of the document. Prefer using the `<main>` element over declaring `role="main"`, unless there are [legacy browser support concerns](#browser_compatibility).

### Skip navigation

Skip navigation, also known as "skipnav", is a technique that allows an assistive technology user to quickly bypass large sections of repeated content (main navigation, info banners, etc.). This lets the user access the main content of the page faster.

Adding an [`id`](/en-US/docs/Web/HTML/Global_attributes#id) attribute to the `<main>` element lets it be a target of a skip navigation link.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### Reader mode

Browser reader mode functionality looks for the presence of the `<main>` element, as well as [heading](/en-US/docs/Web/HTML/Element/Heading_Elements) and [content sectioning elements](/en-US/docs/Web/HTML/Element#content_sectioning) when converting content into a specialized reader view.

- [Building websites for Safari Reader Mode and other reading apps.](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Basic structural elements: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}
- Section-related elements: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, or {{HTMLElement("nav")}}
- [ARIA: Main role](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role)
