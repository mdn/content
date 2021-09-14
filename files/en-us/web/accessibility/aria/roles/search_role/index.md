---
title: 'ARIA: search role'
slug: Web/Accessibility/ARIA/Roles/Search_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - role-search
---
The `search` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) is used to identify a section of the page used to search the page, site, or collection of sites.

```html
<form role="search">
  <!-- search input -->
</form>
```

## Description

The `search` role is [a landmark](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles). Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. The `search` role is added to the container element that encompasses the items and objects that, as a whole, combine to create search functionality. When a `<form>` is a search form, use the `search` role instead of [`form`](/en-US/docs/Web/Accessibility/ARIA/Roles/Form_Role). If a document includes more than one search, each should have a unique label. While there is a [input of type search](/en-US/docs/Web/HTML/Element/input/search), there is no HTML element that defines a search landmark.

## Examples

<pre class="bush: html">&#x3C;form id="search" role="search">
  &#x3C;label for="search-input">Search this site&#x3C;/label>
  &#x3C;input type="search" id="search-input" name="search" spellcheck="false">
  &#x3C;input value="Submit" type="submit">
&#x3C;/form>
</pre>

## Accessibility concerns

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to be used sparingly, to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

## Best practices

### Prefer HTML

Using the [`<form>` element](/en-US/docs/Web/HTML/Element/form) in conjunction with a declaration of `role="search"` will provide the largest amount of support.

### Labeling landmarks

#### Multiple landmarks

If there is more than one `search` landmark role in a document, provide a label for each landmark. This label will allow an assistive technology user to be able to quickly understand the purpose of each landmark.

```html
<form id="site-search" role="search" aria-label="Sitewide">
  <!-- search input -->
</form>

...

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

...

<footer>
  <form id="site-search-bottom" role="search" aria-label="Sitewide">
    <!-- search input -->
  </form>
</footer>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="search"` with an `aria-label="Sitewide search"` may be announced redundantly as, "sitewide search search".

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

| Specification                                                                                            | Status                                           |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#search","ARIA search role")}}                                         | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_search","ARIA search role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |



## See also

- [\<form>: The Form element](/en-US/docs/Web/HTML/Element/form)
- [\<input type="search">](/en-US/docs/Web/HTML/Element/input/search)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Landmark roles: Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
