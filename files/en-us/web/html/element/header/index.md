---
title: <header>
slug: Web/HTML/Element/header
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
browser-compat: html.elements.header
---
{{HTMLRef}}

The **`<header>`** [HTML](/en-US/docs/Web/HTML) element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

{{EmbedInteractiveExample("pages/tabbed/header.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >palpable content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, but with no <code>&#x3C;header></code> or
        {{HTMLElement("footer")}} descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >. Note that a <code>&#x3C;header></code> element must not be a
        descendant of an {{HTMLElement("address")}},
        {{HTMLElement("footer")}} or another
        {{HTMLElement("header")}} element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Banner_role">banner</a
        >, or
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >no corresponding role</a
        >
        if a descendant of an
        <code><a href="/en-US/docs/Web/HTML/Element/article">article</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/aside">aside</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/main">main</a></code
        >, <code><a href="/en-US/docs/Web/HTML/Element/nav">nav</a></code> or
        <code><a href="/en-US/docs/Web/HTML/Element/section">section</a></code>
        element, or an element with
        <code
          >role=<a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role"
            >main</a
          ></code
        >,
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
            >navigation</a
          ></code
        >
        or
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Region_role"
            >region</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("group")}}, {{ARIARole("presentation")}} or
        {{ARIARole("none")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Usage notes

The `<header>` element has an identical meaning to the site-wide [`banner`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) landmark role, unless nested within sectioning content. Then, the `<header>` element is not a landmark.

The `<header>` element can define a global site header, described as a `banner` in the accessibility tree. It usually includes a logo, company name, search feature, and possibly the global navigation or a slogan. It is generally located at the top of the page.

Otherwise, it is a `section` in the accessibility tree, and usually contain the surrounding section's heading (an `h1`–`h6` element) and optional subheading, but this is **not** required.

### Historical Usage

The `<header>` element originally existed at the very beginning of HTML for headings. It is seen in [the very first website](http://info.cern.ch/). At some point, headings became [`<h1>` through `<h6>`](/en-US/docs/Web/HTML/Element/Heading_Elements), allowing `<header>` to be free to fill a different role.

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

### Page Header

```html
<header>
  <h1>Main Page Title</h1>
  <img src="mdn-logo-sm.png" alt="MDN logo">
</header>
```

### Article Header

```html
<article>
  <header>
    <h2>The Planet Earth</h2>
    <p>Posted on Wednesday, <time datetime="2017-10-04">4 October 2017</time> by Jane Smith</p>
  </header>
  <p>We live on a planet that's blue and green, with so many things still unseen.</p>
  <p><a href="https://example.com/the-planet-earth/">Continue reading…</a></p>
</article>
```

## Accessibility

The `<header>` element defines a [`banner`](/en-US/docs/Web/Accessibility/ARIA/Roles/banner_role) landmark when its context is the {{HTMLElement('body')}} element. The HTML header element is not considered a banner landmark when it is descendant of an {{HTMLElement('article')}}, {{HTMLElement('aside')}}, {{HTMLElement('main')}}, {{HTMLElement('nav')}}, or {{HTMLElement('section')}} element.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
