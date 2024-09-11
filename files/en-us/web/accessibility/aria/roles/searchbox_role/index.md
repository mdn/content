---
title: "ARIA: searchbox role"
slug: Web/Accessibility/ARIA/Roles/searchbox_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#searchbox
---

{{AccessibilitySidebar}}

The `searchbox` role indicates an element is a type of `textbox` intended for specifying search criteria.

## Description

The `searchbox` can be used instead of [`textbox`](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role) when the text box is within an element with role [`search`](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role). A `searchbox` is the semantic equivalent is HTML's {{HTMLElement('input')}} of type `search`, [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search), which should be used instead if possible.

The `searchbox` must have an accessible name. If the `searchbox` role is applied to an HTML {{HTMLElement('input')}} element, an associated {{HTMLElement('label')}} should be used.
Otherwise, use [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) if a visible label is present, or [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) if a visible label is not present.

The screen reader will announce "search box", "search edit", or "search field" plus the accessible name. This can be redundant if "search" is included in the label.

## Examples

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

While the above is valid, it is simpler, more concise, and less redundant to the screen reader user to write:

```html
<input type="search" />
```

The following is a search form with a searchbox and button, ARIA live region, and container for search results.

```html
<form role="search">
  <input
    type="search"
    role="searchbox"
    aria-description="search results will appear below"
    id="search"
    value="" />
  <label for="search">Search this site</label>
  <button>Submit search</button>
</form>
<div aria-live="polite" role="region" aria-atomic="true">
  <div class="sr-only"></div>
</div>
<div id="search-results"></div>
```

Including `role="searchbox"` when the form is a `search` and the label indicates the element is a search may result in assistive technology announcing something along the lines of "search search this site search box", which is redundant. The inclusion of `role="searchbox"` is not necessary:

```html
<input
  type="search"
  aria-description="search results will appear below"
  id="search"
  value="" />
```

## Specifications

{{Specifications}}

## See also

- [`<input type="search">`](/en-US/docs/Web/HTML/Element/input/search)
- [ARIA: `search` role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)
- [ARIA: `textbox` role](/en-US/docs/Web/Accessibility/ARIA/Roles/textbox_role)
