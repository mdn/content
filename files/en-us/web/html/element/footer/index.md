---
title: "<footer>: The Footer element"
slug: Web/HTML/Element/footer
page-type: html-element
browser-compat: html.elements.footer
---

{{HTMLSidebar}}

The **`<footer>`** [HTML](/en-US/docs/Web/HTML) element represents a footer for its nearest ancestor [sectioning content](/en-US/docs/Web/HTML/Content_categories#sectioning_content) or [sectioning root](/en-US/docs/Web/HTML/Element/Heading_Elements#labeling_section_content) element. A `<footer>` typically contains information about the author of the section, copyright data or links to related documents.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- Enclose information about the author in an {{HTMLElement("address")}} element that can be included into the `<footer>` element.
- When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page.
- The `<footer>` element is not sectioning content and therefore doesn't introduce a new section in the [outline](/en-US/docs/Web/HTML/Element/Heading_Elements).

## Accessibility

Prior to the release of Safari 13, the `contentinfo` [landmark role](/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) was not properly exposed by [VoiceOver](https://help.apple.com/voiceover/info/guide/). If needing to support legacy Safari browsers, add `role="contentinfo"` to the `footer` element to ensure the landmark will be properly exposed.

- Related: [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://webkit.org/b/146930)

## Examples

```html
<body>
  <h3>FIFA World Cup top goalscorers</h3>
  <ol>
    <li>Miroslav Klose, 16</li>
    <li>Ronaldo Nazário, 15</li>
    <li>Gerd Müller, 14</li>
  </ol>

  <footer>
    <small>
      Copyright © 2023 Football History Archives. All Rights Reserved.
    </small>
  </footer>
</body>
```

```css
footer {
  text-align: center;
  padding: 5px;
  background-color: #abbaba;
  color: #000;
}
```

{{EmbedLiveSample('Examples')}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">Flow content</a>, but with no <code>&#x3C;footer></code> or
        {{HTMLElement("header")}} descendants.
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
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content">flow content</a>. Note that a <code>&#x3C;footer></code> element must not be a
        descendant of an {{HTMLElement("address")}},
        {{HTMLElement("header")}} or another
        <code>&#x3C;footer></code> element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role">contentinfo</a>, or
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role">generic</a>
        if a descendant of an
        <a href="/en-US/docs/Web/HTML/Element/article">article</a>,
        <a href="/en-US/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/en-US/docs/Web/HTML/Element/main">main</a>,
        <a href="/en-US/docs/Web/HTML/Element/nav">nav</a> or
        <a href="/en-US/docs/Web/HTML/Element/section">section</a> element, or
        an element with
        <code>role=<a href="/en-US/docs/Web/Accessibility/ARIA/Roles/article_role">article</a></code>,
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/complementary_role">complementary</a></code>,
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/main_role">main</a></code>,
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role">navigation</a></code>
        or
        <code><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/region_role">region</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a> or
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
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

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Contentinfo role](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
