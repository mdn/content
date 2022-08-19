---
title: 'ARIA: banner role'
slug: Web/Accessibility/ARIA/Roles/banner_role
tags:
  - ARIA
  - ARIA role
  - Accessibility
  - Reference
spec-urls:
  - https://w3c.github.io/aria/#banner
  - https://w3c.github.io/aria-practices/#aria_lh_banner
---

The `banner` role is for defining a global site header, which usually includes a logo, company name, search feature, and possibly the global navigation or a slogan. It is generally located at the top of the page.

By default, the HTML's {{htmlelement("header")}} element has an identical meaning to the `banner` landmark, unless it is a descendant of {{htmlelement("aside")}}, {{htmlelement("article")}}, {{htmlelement("main")}}, {{htmlelement("nav")}}, or {{htmlelement("section")}}, at which point {{htmlelement("header")}} exposes a [`generic`](/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role) role, and not the equivalent of the site-wide banner.

## Description

A `banner` landmark role overwrites the implicit ARIA role of the container element upon which it is applied. It should be reserved for globally repeating site-wide content that is generally located at the top of every page.

The banner typically includes things such as a logo or corporate identity, or possibly a site-specific search tool, and is generally what your marketing team would call the "header" or "top banner" of the site. If the [`header` element](/en-US/docs/Web/HTML/Element/header) technique is not being used for that banner, a declaration of `role="banner"` should be used to define a banner landmark to assistive technologies.

Assistive technologies can identify the `header` element of a page as the `banner` if is a descendant of the [`body` element](/en-US/docs/Web/HTML/Element/body), and not nested within an `article`, `aside`, `main`, `nav` or `section` subsection.

Each page may have a `banner` landmark, but each page should generally be limited to a single element with the role of banner. In the case of a page containing nested `document` and/or `application` roles, each nested `document` or `application` role may also have one `banner` landmark. If a page includes more than one `banner` landmark, each should have a unique accessible name.

### Associated ARIA roles, states, and properties

None

### Keyboard interactions

None

### Required JavaScript features

None

## Examples

Here's a fake simple banner with a skip to navigation link, a logo, a title and a subtitle. As this is the main header for the site, we've added the `banner` landmark role to the container element.

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo">
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</div>
```

We could also have written the above with the HTML `header` element:

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">Skip To main content</a>
  <img src="images/w3c.png" alt="W3C Logo">
  <h1>ARIA Landmarks</h1>
  <p>Identifying page subsections for easy navigation</p>
  <nav>…</nav>
</header>
```

## Best practices

While it is best to use the `header` element and ensure it is not a descendant of any subsection of the page, sometimes you don't have access to the underlying HTML. If this is the case, you can add the role of `banner` to the element of the page which should be exposed as a `banner` with JavaScript. Identifying the page's banner in this way will help improve the site's accessibility.

## Specifications

{{Specifications}}

## See also

- [HTML `header` element](/en-US/docs/Web/HTML/Element/header)
- [WC3 Landmarks Example](https://w3c.github.io/aria-practices/examples/landmarks/banner.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
