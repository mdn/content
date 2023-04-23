---
title: "ARIA: contentinfo role"
slug: Web/Accessibility/ARIA/Roles/contentinfo_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#contentinfo
  - https://w3c.github.io/aria-practices/#aria_lh_contentinfo
---

The `contentinfo` role defines a footer, containing identifying information such as copyright information, navigation links, and privacy statements, found on every document within a site. This section is commonly called a footer.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

This is a website footer. Using the {{HTMLElement('footer')}} element instead is recommended:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Description

The `contentinfo` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) used to identify a page footer. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Pages should only include one top-level `contentinfo` landmark role per page.

Each page should only include one `contentinfo` landmark, created by either using the {{HTMLElement('footer')}} element or by declaring `role="contentinfo"`. `contentinfo` landmarks present in content embedded via {{HTMLElement('iframe')}} do not count towards this limit.

> **Note:** Using the {{HTMLElement('footer')}} element will automatically communicate a section has a role of `contentinfo`. Developers should always prefer using the correct semantic HTML element over using ARIA, making sure to {{HTMLElement('footer#accessibility_concerns', 'test for known issues')}} in VoiceOver.

## Examples

```html
<body>
  <!-- other page content -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">Web Technologies</a></li>
      <li><a href="#">Learn Web Development</a></li>
      <li><a href="#">About MDN</a></li>
      <li><a href="#">Feedback</a></li>
    </ul>
    <p>
      © 2005-2012 Mozilla and individual contributors. Content is available
      under <a href="#">these licenses</a>.
    </p>
  </div>
</body>
```

## Accessibility concerns

### Use sparingly

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) are intended to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

### One `contentinfo` landmark per page

#### The `<body>` element

There should be only one `contentinfo` landmark per document, used as the immediate descendant of the {{HTMLElement('body')}} element.

#### Mega-footers

Do not nest additional {{HTMLElement('footer')}} elements or `contentinfo` landmarks inside the document's footer. Use other [content sectioning elements](/en-US/docs/Web/HTML/Element#content_sectioning) instead.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `contentinfo` landmark role or {{HTMLElement('footer')}} element in a document, provide a label with the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute for each landmark. This label will allow assistive technology users to quickly understand the purpose of each landmark.

```html
<body>
  …

  <article>
    <h2>Everyday Pad Thai</h2>
    <!-- article content -->
    <footer aria-label="Everyday Pad Thai metadata">
      <p>
        Posted on <time datetime="2021-09-23 12:17">September 23</time> by
        <a href="#">Lisa</a>.
      </p>
    </footer>
  </article>

  …

  <footer aria-label="Footer">
    <!-- footer content -->
  </footer>
</body>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="contentinfo"` with an of `aria-label="Footer"` may be announced redundantly as, "contentinfo footer".

## Best practices

### Prefer HTML

When it is an immediate descendant of the {{HTMLElement('body')}} using the {{HTMLElement('footer')}} element will automatically communicate a section has a role of `contentinfo` (save for {{HTMLElement('footer#accessibility_concerns', 'a known issue')}} in VoiceOver). If at all possible, prefer using `<footer>` instead. Note that a `footer` element nested within an `article`, `aside`, `main`, `nav`, or `section` is not considered `contentinfo`.

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('footer')}} element
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
