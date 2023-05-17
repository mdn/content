---
title: "ARIA: complementary role"
slug: Web/Accessibility/ARIA/Roles/complementary_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#complementary
  - https://w3c.github.io/aria-practices/#aria_lh_complementary
---

The `complementary` [landmark role](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) is used to designate a supporting section that relates to the main content, yet can stand alone when separated. These sections are frequently presented as sidebars or call-out boxes. If possible, use the [HTML \<aside> element](/en-US/docs/Web/HTML/Element/aside) instead.

```html
<div role="complementary">
  <h2>Our partners</h2>
  <!-- complementary section content -->
</div>
```

This is a sidebar containing links to project sponsors.

## Description

The `complementary` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) role. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. Content listed within a container with the `complementary` landmark role should make sense if separated from the main content of the document.

> **Note:** Using the {{HTMLElement('aside')}} element will automatically communicate a section has a role of `complementary`. Developers should always prefer using the correct semantic HTML element over using ARIA.

## Examples

```html
<div role="complementary">
  <h2>Trending articles</h2>
  <ul>
    <li><a href="#">18 tweets that will make you feel all the feels</a></li>
    <li>
      <a href="#">Stop searching! I've found the perfect lunch containers.</a>
    </li>
    <li>
      <a href="#">The time has come to decide how to call these foods</a>
    </li>
    <li><a href="#">17 really good posts we saw on Tumblr this week</a></li>
    <li><a href="#">10 parent hacks we know work because we tried them</a></li>
  </ul>
</div>
```

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Best practices

### Prefer HTML

Using the {{HTMLElement('aside')}} element will automatically communicate a section has a role of `complementary`. If at all possible, prefer using it instead.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `complementary` landmark role or {{HTMLElement('aside')}} element in a document, provide a label for each landmark using the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) attribute, or, if the aside has an appropriately descriptive title, point to it with the [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) attribute. This label will allow an assistive technology user to be able to quickly understand the purpose of each landmark.

```html
<aside aria-label="Note about usage">
  <!-- content -->
</aside>

…

<aside id="sidebar" aria-label="Sponsors">
  <!-- content -->
</aside>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="complementary"` with an of `aria-label="Sidebar"` may be announced redundantly as, "complementary sidebar".

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

{{Specifications}}

## See also

- [\<aside>: The Aside element](/en-US/docs/Web/HTML/Element/aside)
- [complementary (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#complementary)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Landmark roles: Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Aside Revisited | HTML5 Doctor](https://html5doctor.com/aside-revisited/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
