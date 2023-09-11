---
title: "ARIA: form role"
slug: Web/Accessibility/ARIA/Roles/form_role
page-type: aria-role
spec-urls:
  - https://w3c.github.io/aria/#form
  - https://w3c.github.io/aria-practices/#aria_lh_form
---

The `form` role can be used to identify a group of elements on a page that provide equivalent functionality to an HTML form.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

This is a form that collects and saves a user's contact information.

> **Warning:** Use an HTML {{htmlelement("form")}} element to contain your form controls, rather than the ARIA `form` role, unless you have a very good reason.
> The HTML `<form>` element is sufficient to tell assistive technologies that there is a form.

## Description

A `form` [landmark](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) identifies a region of content that contains a collection of items and objects that, as a whole, combine to create a form when no other named landmark is appropriate (e.g. [`main`](/en-US/docs/Web/Accessibility/ARIA/Roles/main_role) or [`search`](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)).

> **Note:** Using the {{HTMLElement('form')}} element will automatically communicate a section of content as a `form` landmark, if it is provided an accessible name. Developers should always prefer using the correct semantic HTML element over using ARIA.

Use the HTML {{HTMLElement('form')}} element if possible. The `<form>` element defines a `form` landmark when it has an accessible name (e.g. [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby), [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) or [`title`](/en-US/docs/Web/HTML/Global_attributes#title)). Make sure to have a unique label on each form in a document to help users understand the purpose of the form. This label should be visible to all users, not just assistive technology users. Use the `search` landmark instead of the `form` landmark when the form is used for search functionality.

Use the `role="form"` to identify a region of the page; do not use it to identify every form field. Even if you are using the form landmark instead of `<form>`, you are encouraged to use native HTML form controls like {{HTMLElement('button')}}, {{HTMLElement('input')}}, {{HTMLElement('select')}}, and {{HTMLElement('textarea')}}.

### Associated WAI-ARIA Roles, States, and Properties

No role specific states or properties.

### Keyboard Interactions

No role specific keyboard interactions

### Required JavaScript features

- `onsubmit`
  - : The onSubmit event handler handles the event raised when the form is submitted. Anything that is not a `<form>` cannot be submitted, therefore you would have to use JavaScript to build an alternative data submission mechanism, for example with {{domxref("XMLHTTPRequest")}}.

## Examples

```html
<div role="form" id="send-comment" aria-label="Add a comment">
  <label for="username">Username</label>
  <input
    id="username"
    name="username"
    autocomplete="nickname"
    autocorrect="off"
    type="text" />

  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    autocomplete="email"
    autocapitalize="off"
    autocorrect="off"
    spellcheck="false"
    type="text" />

  <label for="comment">Comment</label>
  <textarea id="comment" name="comment"></textarea>

  <input value="Comment" type="submit" />
</div>
```

It is recommended to use `<form>` instead.

```html
<form id="send-comment" aria-label="Add a comment">…</form>
```

## Accessibility concerns

### Use sparingly

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/Roles#3._landmark_roles) are intended to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

### Inputs are not forms

You do not need to declare `role="form"` on every [form element](/en-US/docs/Web/HTML/Element#forms) (inputs, text areas, selects, etc.). It should be declared on the HTML element that wraps the form elements. Ideally, use the {{HTMLElement('form')}} element as the wrapping element and do not declare `role="form"`.

### Search

If a form is used to search, you should use the more specialized [`role="search"`](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role) value.

### Labeling landmarks

Each {{HTMLElement('form')}} element and form `role` that needs to be exposed as a landmark must be given an accessible name. This name will allow an assistive technology user to be able to quickly understand the purpose of the form landmark.

Use an `aria-labelledby`, `aria-label` or `title` on the same element that was given the `role="form"` to provide it an accessible name.

#### Using `role="form"`

```html
<div role="form" id="gift-cards" aria-label="Purchase a gift card">
  <!-- form content -->
</div>
```

#### Redundant descriptions

Screen readers will announce the type of role the landmark is. Because of this, you do not need to describe what the landmark is in its label. For example, a declaration of `role="form"` with an of `aria-label="Contact form"` may be announced redundantly as, "contact form form".

## Best practices

### Prefer HTML

Using the {{HTMLElement('form')}} element will automatically communicate a section has a role of `form`. If at all possible, prefer using it instead.

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('form')}} element
- The {{HTMLElement('legend')}} element
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
