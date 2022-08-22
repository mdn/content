---
title: <footer>
slug: Web/HTML/Element/footer
tags:
  - Element
  - HTML
  - HTML sections
  - Reference
browser-compat: html.elements.footer
---
{{HTMLRef}}

The **`<footer>`** [HTML](/en-US/docs/Web/HTML) element represents a footer for its nearest ancestor [sectioning content](/en-US/docs/Web/Guide/HTML/Content_categories#sectioning_content) or [sectioning root](/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_root) element. A `<footer>` typically contains information about the author of the section, copyright data or links to related documents.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

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
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, but with no <code>&#x3C;footer></code> or
        {{HTMLElement("header")}} descendants.
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
        >. Note that a <code>&#x3C;footer></code> element must not be a
        descendant of an {{HTMLElement("address")}},
        {{HTMLElement("header")}} or another
        <code>&#x3C;footer></code> element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Contentinfo_role"
          >contentinfo</a
        >, or
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >no corresponding role</a
        >
        if a descendant of an
        <a href="/en-US/docs/Web/HTML/Element/article">article</a>,
        <a href="/en-US/docs/Web/HTML/Element/aside">aside</a>,
        <a href="/en-US/docs/Web/HTML/Element/main">main</a>,
        <a href="/en-US/docs/Web/HTML/Element/nav">nav</a> or
        <a href="/en-US/docs/Web/HTML/Element/section">section</a> element, or
        an element with
        <code
          >role=<a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Article_Role"
            >article</a
          ></code
        >,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
          >complementary</a
        >,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role">main</a>,
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role"
          >navigation</a
        >
        or
        <a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Region_role"
          >region</a
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

## Attributes

This element only includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Usage notes

- Enclose information about the author in an {{HTMLElement("address")}} element that can be included into the `<footer>` element.
- When the nearest ancestor sectioning content or sectioning root element is the body element the footer applies to the whole page.
- The `<footer>` element is not sectioning content and therefore doesn't introduce a new section in the [outline](/en-US/docs/Web/HTML/Element/Heading_Elements).

## Examples

```html
<footer>
  Some copyright info or perhaps some author
  info for an &lt;article&gt;?
</footer>
```

## Accessibility concerns

Prior to the release of Safari 13, the `contentinfo` [landmark role](/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) was not properly exposed by [VoiceOver](https://help.apple.com/voiceover/info/guide/). If needing to support legacy Safari browsers, add `role="contentinfo"` to the `footer` element to ensure the landmark will be properly exposed.

- Related: [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://bugs.webkit.org/show_bug.cgi?id=146930)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other section-related elements: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}};
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [ARIA: Contentinfo role](/en-US/docs/Web/Accessibility/ARIA/Roles/contentinfo_role)
