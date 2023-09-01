---
title: "ARIA: search role"
slug: Web/Accessibility/ARIA/Roles/search_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#search
  - https://w3c.github.io/aria-practices/#aria_lh_search
---

The `search` role is used to identify the search functionality; the section of the page used to search the page, site, or collection of sites.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Description

The `search` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) role that can be added to the container element that encompasses all of the elements that combined to form the search feature of the document or application, including a descendant [(`<input type="search">`)](/en-US/docs/Web/HTML/Element/input/search). If a document includes more than one search, each should have a unique label, unless they are the same search repeated, then use the same name. While there is a [`input` of type `search`)](/en-US/docs/Web/HTML/Element/input/search), there is no HTML element that defines a search landmark.

## Examples

When a {{HTMLElement('form')}} is a search form, use the `search` role instead of [`form`](/en-US/docs/Web/Accessibility/ARIA/Roles/form_role) role.

```HTML
<form id="search" role="search">
  <label for="search-input">Search this site</label>
  <input type="search" id="search-input" name="search" spellcheck="false">
  <input value="Submit" type="submit">
</form>
```

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Best practices

### Prefer HTML

Using the {{HTMLElement('form')}} element in conjunction with a declaration of `role="search"` will provide the largest amount of support.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `search` landmark role in a document, provide a label for each landmark. This label will allow an assistive technology user to be able to quickly understand the purpose of each landmark.

```html
<form id="site-search" role="search" aria-label="Sitewide">
  <!-- search input -->
</form>

…

<form id="page-search" role="search" aria-label="On this page">
  <!-- search input -->
</form>
```

#### Repeated landmarks

If a `search` landmark role in a document is repeated in a document, and both landmarks have identical content, use the same label for each landmark. An example of this would be repeating the sitewide search at the top and bottom of the page.

```html
<header>
  <form id="site-search-top" role="search" aria-label="Sitewide">
    <!-- search input -->
  </form>
</header>

…

<footer>
  <form id="site-search-bottom" role="search" aria-label="Sitewide">
    <!-- search input -->
  </form>
</footer>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="search"` with an [`aria-label="Sitewide search"`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) may be announced redundantly as, "sitewide search search".

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('form')}} element
- The {{HTMLElement('input')}} element
- [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
