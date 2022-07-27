---
title: 'ARIA: main role'
slug: Web/Accessibility/ARIA/Roles/main_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - Accessibility
  - main role
  - landmark role
spec-urls:
  - https://w3c.github.io/aria/#main
  - https://w3c.github.io/aria-practices/#aria_lh_main
---
The `main` landmark role is used to indicate the primary content of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the main function of an application.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

This is the main section of a document that discusses avocados. Subsections of this document could discuss their history, the different types, regions where they grow, etc.

## Description

The `main` role is a navigational [landmark](/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles) role identifying the main content of a document. Landmarks can be used by assistive technology such as screen readers to quickly identify and navigate to large sections of the document.

By classifying and labeling sections of a page, structural information conveyed visually through layout can be represented programmatically. Screen readers use landmark roles to provide keyboard navigation to important sections of a page. For those navigating via landmark roles, the main role is an alternative for "skip to main content" links.

There should only be one `main` landmark role per document.

The {{HTMLElement('main')}} element has a role of `main`. Developers should use semantic HTML — in this case {{HTMLElement('main')}} — over using ARIA.

### Associated ARIA roles, states, and properties

- [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns)

  - : The `aria-owns` attribute establishes relationships in the accessibility layer that aren't present in the DOM. Documents and applications can be nested in the DOM, which may lead to having more than one main element as DOM descendants. If this is the case, include `aria-owns` to identify the relationship of the main to its document or application ancestor.

- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or `aria-labelledby`

  - : Providing an accessible name can with [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible header is present, otherwise with [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label), can be helpful for orienting assistive technology users, especially in single-page applications where main content changes happen without generating a page load event.

## Example

```html
<body>
  <!-- primary navigation -->

  <div role="main">
    <h1>The First Indochina War</h1>
    <!-- article content -->
  </div>

 <!-- sidebar and footer -->
</body>
```

## Accessibility concerns

### Use only one `main` role per document

The `main` [landmark role](/en-US/docs/Web/Accessibility/ARIA/Roles#landmark_roles) should only be used once per document.

If a document contains two `main` roles, say updating page content when triggered by JavaScript, the inactive `main` role's presence should be removed from assistive technology via techniques such as toggling the [`hidden` attribute](/en-US/docs/Web/HTML/Global_attributes/hidden).

```html
<main>
  <h1>Active `main` element</h1>
  <!-- content -->
</main>

<main hidden>
  <h1>Hidden `main` element</h1>
  <!-- content -->
</main>
```

It is also helpful to include an accessible name to help orient assistive technology users, especially in single-page applications where main content changes happen without generating a page load event. This can be added with `aria-labelledby` if there is an appropriate name in the content, or `aria-label` if not.

## Best practices

### Prefer HTML

Using the {{HTMLElement('main')}} element will automatically communicate a section has a role of `main`. If at all possible, prefer using it instead.

### Skip navigation

Skip navigation, also known as "skipnav", is a technique that allows an assistive technology user to quickly bypass large sections of repeated content (main navigation, info banners, etc.). This allows the user to access the main content of the page faster.

Adding an [`id` attribute](/en-US/docs/Web/HTML/Global_attributes/id) to the element with a declaration of `role="main"` allows it to be a target of a skip navigation link users.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

Which is the equivalent of:

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

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('main')}} element
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The main element | HTML5 Doctor](https://html5doctor.com/the-main-element/)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
