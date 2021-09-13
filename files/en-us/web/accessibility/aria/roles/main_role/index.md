---
title: 'ARIA: main role'
slug: Web/Accessibility/ARIA/Roles/Main_role
tags:
  - ARIA
  - ARIA Role
  - Reference
  - role-main
---
The `main` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) is used to indicate the primary content of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

```html
<div id="main" role="main">
  <h1>Avocados</h1>
  <!-- main section content -->
</div>
```

This is the main section of a document that discusses avocados. Subsections of this document could discuss their history, the different types, regions where they grow, etc.

## Description

The `main` role is a navigational [landmark](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) role identifying the main content of a document. Landmarks can be used by assistive technology to quickly identify and navigate to large sections of the document. By classifying and labeling sections of a page, structural information conveyed visually through layout can be represented programmatically. Screen readers use landmark roles to provide keyboard navigation to important sections of a page. For those navigating via landmark roles, the main role is an alternative for "skip to main content" links.There should only be one `main` landmark role per document.

The [`<main>` element](/en-US/docs/Web/HTML/Element/main) has a role of `main`. Developers should always prefer using the correct semantic HTML element over using ARIA.

Documents and applications can be nested in the DOM, which may lead to having more than one main element as DOM descendants. If this is the case, include `aria-owns` to identify the relationship of the main to it's document or application ancestor.

## Example

```html
<body>
  <!-- primary navigation -->

  <div role="main">
    <h1>The The First Indochina War</h1>
    <!-- article content -->
  </div>

 <!-- sidebar and footer -->
</body>
```

## Accessibility concerns

### Use only one `main` role per document

The `main` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) should only be used once per document.

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

## Best practices

### Prefer HTML

Using the [`<main>` element](/en-US/docs/Web/HTML/Element/main) will automatically communicate a section has a role of `main`. If at all possible, prefer using it instead.

### Skip navigation

Skip navigation, also known as "skipnav", is a technique that allows an assistive technology user to quickly bypass large sections of repeated content (main navigation, info banners, etc.). This allows the user to access the main content of the page faster.

Adding an [`id` attribute](/en-US/docs/Web/HTML/Global_attributes/id) to the element with a declaration of `role="main"` allows it to be a target of a skip navigation link.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <div id="main-content" role="main">
    <!-- main page content -->
  </div>
</body>
```

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

| Specification                                                                                                    | Status                                           |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#main","ARIA Navigation Role")}}                                             | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#aria_lh_main","Navigation Landmark Role")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |



## See also

- [\<main>: The Main element](/en-US/docs/Web/HTML/Element/main)
- [main (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#main)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Landmark roles: Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [The main element | HTML5 Doctor](https://html5doctor.com/the-main-element/)

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
