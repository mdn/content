---
title: 'ARIA: searchbox role'
slug: Web/Accessibility/ARIA/Roles/searchbox_role
tags: 
  - Accessibility
  - ARIA
  - roles
  - Reference
  - ARIA roles
  - searchbox
---

The `searchbox` role indicates an element is a type of `textbox` intended for specifying search criteria. 

## Description

The `searchbox` can be used instead of `textbox`, when the textbox is within an element with role `search`.  The HTML equivalent is an HTML {{HTMLElement('input')}} of type `search`,  [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search); which should be used if possible

The `searchbox` role is for an input field for search and should not be used with `combobox`. 

The `searchbox` must have an accessible name. If the searchbox role is applied to an HTML {{HTMLElement('input')}} element, an HTML {{HTMLElement('label')}} can be used. 
Otherwise, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present, otherwise use [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present..

## Examples

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

While the above is valid, it is simpler, less verbose, and less redundant to the screen reader user to write:

```html
<input type="search">
```

The following is a search form with a searchbox and button, ARIA live region, and container for search results.

```html
<form role="search">
  <input type="search" role="searchbox" aria-description="search results will appear below" id="srch" value="">
  <label for="srch">Search this site</label>
  <button>Submit search</button>
</form>
<div aria-live="polite" role="region" aria-atomic="true">
  <div class="sr-only"></div>
</div>
<div id="search-results"></div>
```

Including `role="searchbox"` when the form is a `search` and the label indicates the element is a search can result in assistive technology announcing "search search this site searchbox", which is a bit redundant. The inclusion of `role="searchbox"` is not necessary.

## Specifications

| Specification                                                                                                                    | Status                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#searchbox","ARIA: searchbox role")}}                                             | {{Spec2('ARIA')}}                         |

## See Also

- [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
- [ARIA: `search` role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)
- [ARIA: `textbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
