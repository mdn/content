---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
tags:
  - Autocapitalize
  - Global attributes
  - HTML
  - Reference
browser-compat: html.global_attributes.autocapitalize
---

{{HTMLSidebar("Global_attributes")}}

The **`autocapitalize`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is an enumerated attribute that controls whether and how text input is automatically capitalized as it is entered/edited by the user.

The attribute must take one of the following values:

- `off` or `none`: No autocapitalization is applied (all letters default to lowercase)
- `on` or `sentences`: The first letter of each sentence defaults to a capital letter; all other letters default to lowercase
- `words`: The first letter of each word defaults to a capital letter; all other letters default to lowercase
- `characters`: All letters should default to uppercase

The `autocapitalize` attribute doesn't affect behavior when typing on a physical keyboard. Instead, it affects the behavior of other input mechanisms, such as virtual keyboards on mobile devices and voice input. The behavior of such mechanisms is that they often assist users by automatically capitalizing the first letter of sentences. The `autocapitalize` attribute enables authors to override that behavior per-element.

The `autocapitalize` attribute never causes autocapitalization to be enabled for an {{HTMLElement("input")}} element with a {{htmlattrxref("type", "input")}} attribute whose value is `url`, `email`, or `password`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
