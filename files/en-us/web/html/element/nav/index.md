---
title: '<nav>: The Navigation Section element'
slug: Web/HTML/Element/nav
tags:
  - Element
  - HTML
  - HTML sections
  - Links
  - Navigation
  - Reference
  - Sections
  - Web
  - nav
browser-compat: html.elements.nav
---
{{HTMLRef}}

The **`<nav>`** [HTML](/en-US/docs/Web/HTML) element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

{{EmbedInteractiveExample("pages/tabbed/nav.html", "tabbed-standard")}}

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
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content"
          >sectioning content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
            >navigation</a
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

- It's not necessary for all links to be contained in a `<nav>` element. `<nav>` is intended only for major block of navigation links; typically the {{HTMLElement("footer")}} element often has a list of links that don't need to be in a {{HTMLElement("nav")}} element.
- A document may have several {{HTMLElement("nav")}} elements, for example, one for site navigation and one for intra-page navigation. [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) can be used in such case to promote accessibility, see [example](/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content).
- User agents, such as screen readers targeting disabled users, can use this element to determine whether to omit the initial rendering of navigation-only content.

## Examples

In this example, a `<nav>` block is used to contain an unordered list ({{HTMLElement("ul")}}) of links. With appropriate CSS, this can be presented as a sidebar, navigation bar, or drop-down menu.

```html
<nav class="menu">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

The semantics of the `nav` element is that of providing links. However a `nav` element doesn't have to contain a list, it can contain other kinds of content as well. In this navigation block, links are provided in prose:

```html
<nav>
  <h2>Navigation</h2>
  <p>You are on my home page. To the north lies <a href="/blog">my
  blog</a>, from whence the sounds of battle can be heard. To the east
  you can see a large mountain, upon which many <a
  href="/school">school papers</a> are littered. Far up thus mountain
  you can spy a little figure who appears to be me, desperately
  scribbling a <a href="/school/thesis">thesis</a>.</p>
  <p>To the west are several exits. One fun-looking exit is labeled <a
  href="https://games.example.com/">"games"</a>. Another more
  boring-looking exit is labeled <a
  href="https://isp.example.net/">ISP™</a>.</p>
  <p>To the south lies a dark and dank <a href="/about">contacts
  page</a>. Cobwebs cover its disused entrance, and at one point you
  see a rat run quickly out of the page.</p>
</nav>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}};
- [Sections and outlines of an HTML document](/en-US/docs/Web/HTML/Element/Heading_Elements).
- [ARIA: Navigation role](/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role)
