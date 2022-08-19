---
title: 'ARIA: navigation Role'
slug: Web/Accessibility/ARIA/Roles/navigation_role
tags:
  - ARIA
  - ARIA Role
  - Accessibility
  - Reference
  - navigation role
  - landmark role
spec-urls:
  - https://w3c.github.io/aria/#navigation
  - https://w3c.github.io/aria-practices/#aria_lh_navigation
---
The `navigation` role is used to identify major groups of links used for navigating through a website or page content.

```html
<div role="navigation" aria-label="Main">
  <!-- list of links to main website locations -->
</div>
```

This is a website's main navigation.

## Description

The `navigation` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles) role. Landmark roles provide a way to identify the organization and structure of a web page. By classifying and labeling sections of a page, structural information conveyed visually through layout is represented programmatically. Screen readers use landmark roles to provide keyboard navigation to important sections of a page. Like the HTML {{HTMLElement('nav')}} element, navigation landmarks provide a way to identify groups (e.g. lists) of links that are intended to be used for website or page content navigation. If a page includes more than one navigation landmark, each should have a unique label. If two or more navigational landmark on a page have the same set of links, use the same label for each.

It is preferable to use the HTML5 [`<nav>` element](/en-US/docs/Web/HTML/Element/nav) to define a navigation landmark. If the HTML5 nav element technique is not being used, use a `role="navigation"` attribute to define a navigation landmark.

> **Note:** Using the {{HTMLElement('nav')}} element will automatically communicate a section has a role of `navigation`. Developers should always prefer using the correct semantic HTML element over using ARIA

### Associated WAI-ARIA Roles, States, and Properties

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : A brief description of the purpose of the navigation, omitting the term "navigation", as the screen reader will read both the role and the contents of the label.

### Keyboard Interactions

None.

### Required JavaScript features

None.

## Examples

```html
<div role="navigation" aria-label="Customer service">
  <ul>
    <li><a href="#">Help</a></li>
    <li><a href="#">Order tracking</a></li>
    <li><a href="#">Shipping &amp; Delivery</a></li>
    <li><a href="#">Returns</a></li>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Find a store</a></li>
  </ul>
</div>
```

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Best practices

### Prefer HTML

Using the {{HTMLElement('nav')}} element will automatically communicate a section has a role of `navigation`. If at all possible, prefer using it instead.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `navigation` landmark role or {{HTMLElement('nav')}} element in a document, provide a label for each landmark. This label will allow an assistive technology user to be able to quickly understand the purpose of each landmark.

```html
<div id="main-nav" role="navigation" aria-label="Main">
  <!-- content -->
</div>

…

<nav id="footer-nav" aria-label="Footer">
  <!-- content -->
</nav>
```

#### Repeated landmarks

If a `navigation` landmark role or {{HTMLElement('nav')}} element in a document is repeated in a document, and both landmarks have identical content, use the same label for each landmark. An example of this would be repeating the main navigation at the top and bottom of the page.

```html
<header>
  <nav id="main-nav" aria-label="Main">
    <!-- list of links to main website locations -->
  </nav>
</header>

…

<footer>
  <nav id="footer-nav" aria-label="Main">
    <!-- list of links to main website locations -->
  </nav>
</footer>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="navigation"` with an of `aria-label="Primary navigation"` may be announced redundantly as, "primary navigation navigation".

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('nav')}} element
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Semantic navigation with the nav element | HTML5 Doctor](https://html5doctor.com/nav-element/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
