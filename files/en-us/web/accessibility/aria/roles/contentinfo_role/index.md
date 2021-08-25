---
title: 'ARIA: contentinfo role'
slug: Web/Accessibility/ARIA/Roles/Contentinfo_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - role-contentinfo
---
The `contentinfo` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) is used to identify information repeated at the end of every page of a website, including copyright information, navigation links, and privacy statements. This section is commonly called a footer.

```html
<div role="contentinfo">
  <h2>Footer</h2>
  <!-- footer content -->
</div>
```

This is a website footer. Using the [`<footer>`](/en-US/docs/Web/HTML/Element/footer) element instead is recommended:

```html
<footer>
  <h2>Footer</h2>
  <!-- footer content -->
</footer>
```

## Description

The `contentinfo` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) used to identify a page footer. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Pages should only include one top-level `contentinfo` landmark role per page.

Each page should only include one `contentinfo` landmark, created by either using the [`<footer>` element](/en-US/docs/Web/HTML/Element/footer) or by declaring `role="contentinfo"`. `contentinfo` landmarks present in content embedded via [`<iframe>` elements](/en-US/docs/Web/HTML/Element/iframe) do not count towards this limit.

<div class="note"><p>Using the <a href="/en-US/docs/Web/HTML/Element/footer"><code>&#x3C;footer></code> element</a> will automatically communicate a section has a role of <code>contentinfo</code>. Developers should always prefer using the correct semantic HTML element over using ARIA, making sure to <a href="/en-US/docs/Web/HTML/Element/footer#accessibility_concerns">test for known issues</a> in VoiceOver.</p></div>

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
    <p>© 2005-2018 Mozilla and individual contributors. Content is available under <a href="#">these licenses</a>.</p>
  </div>
</body>
```

## Accessibility concerns

### Use sparingly

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

### One `contentinfo` landmark per page

#### The `<body>` element

There should be only one `contentinfo` landmark per document, used as the immediate descendant of the [`<body>` element](/en-US/docs/Web/HTML/Element/body).

#### Mega-footers

Do not nest additional [`<footer>` elements](/en-US/docs/Web/HTML/Element/footer) or `contentinfo` landmarks inside of the document's footer. Use other [content sectioning elements](/en-US/docs/Web/HTML/Element#content_sectioning) instead.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `contentinfo` landmark role or [`<footer>` element](/en-US/docs/Web/HTML/Element/footer) in a document, provide a label with the `aria-label` attribute for each landmark. This label will allow assistive technology users to quickly understand the purpose of each landmark.

```html
<body>

  ...

  <article>
    <h2>Everyday Pad Thai</h2>
    <!-- article content -->
    <footer aria-label="Everyday Pad Thai metadata">
      <p>Posted on <time datetime="2018-09-23 12:17">May 16</time> by <a href="#">Lisa</a>.</p>
    </footer>
  </article>

  ...

  <footer aria-label="Footer">
    <!-- footer content -->
  </footer>
</body>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="contentinfo"` with an of `aria-label="Footer"` may be announced redundantly as, "contentinfo footer".

## Best practices

### Prefer HTML

When it is an immediate descendant of the [`<body>` element,](/en-US/docs/Web/HTML/Element/body) using the [`<footer>` element](/en-US/docs/Web/HTML/Element/footer) will automatically communicate a section has a role of `contentinfo` (save for [a known issue](/en-US/docs/Web/HTML/Element/footer#accessibility_concerns) in VoiceOver). If at all possible, prefer using `<footer>` instead. Note that a `footer` element nested within an `article`, `aside`, `main`, `nav`, or `section` is not considered `contentinfo.`

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

| Specification                                                                                                            | Status                                           |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| {{SpecName("ARIA","#contentinfo","contentinfo landmark role")}}                                     | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices","#aria_lh_contentinfo","contentinfo landmark role")}} | {{Spec2('ARIA Authoring Practices')}} |

## Screen reader support

## See also

- [\<footer>: The Footer element](/en-US/docs/Web/HTML/Element/footer)
- [contentinfo (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#contentinfo)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Landmark roles: Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The Footer Element Update | HTML5 Doctor](https://html5doctor.com/the-footer-element-update/)

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
