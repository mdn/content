---
title: 'ARIA: form role'
slug: Web/Accessibility/ARIA/Roles/Form_Role
tags:
  - ARIA
  - ARIA Role
  - ARIA figure
  - Accessibility
  - Reference
  - Role
  - form
---
The `form` [landmark role](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) can be used to identify a group of elements on a page that provide equivalent functionality to an HTML form.

```html
<div role="form" id="contact-info" aria-label="Contact information">
  <!-- form content -->
</div>
```

This is a form that collects and saves a user's contact information.

<div class="warning"><p><strong>Important</strong>: Use an HTML {{htmlelement("form")}} element to contain your form controls, rather than the ARIA `form` role, unless you have a very good reason. The HTML `<form>` element is sufficient to tell assistive technologies that there is a form.</p></div>

## Description

A `form` [landmark](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) identifies a region of content that contains a collection of items and objects that, as a whole, combine to create a form when no other named landmark is appropriate (e.g. [`main`](/en-US/docs/Web/Accessibility/ARIA/Roles/Main_role) or [`search`](/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role)).

<div class="note"><p>Using the <a href="/en-US/docs/Web/HTML/Element/form">`<form>` element</a> will automatically communicate a section of content as a `form` landmark, if it is provided an accessible name. Developers should always prefer using the correct semantic HTML element over using ARIA.</p></div>

Use the HTML [`<form>` element](/en-US/docs/Web/HTML/Element/form) if possible. The \<form> element defines a `form` landmark when it has an accessible name (e.g. `aria-labelledby`, `aria-label` or `title`). Make sure to have a unique label on each form in a document to help users understand the purpose of the form. This label should be visible to all users, not just assistive technology users. Use the `search` landmark instead of the `form` landmark when the form is used for search functionality.

Use the `role="form"` to identify a region of the page; do not use it to identify every form field. Even if you are using the form landmark instead of \<form>, you are encouraged to use native HTML form controls like `button`, `input`, `select`, and` textarea`

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
  <input id="username" name="username" autocomplete="nickname" autocorrect="off" type="text">

  <label for="email">Email</label>
  <input id="email" name="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" type="text">

  <label for="comment">Comment</label>
  <textarea id="comment" name="comment"></textarea>

  <input value="Comment" type="submit">
</div>
```

It is recommended to use \<form> instead.

```html
<form id="send-comment" aria-label="Add a comment">
  ....
</form>
```

## Accessibility concerns

### Use sparingly

[Landmark roles](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles) are intended to identify larger overall sections of the document. Using too many landmark roles can create "noise" in screen readers, making it difficult to understand the overall layout of the page.

### Inputs are not forms

You do not need to declare `role="form"` on every [form element](/en-US/docs/Web/HTML/Element#forms) (inputs, text areas, selects, etc.). It should be declared on the HTML element that wraps the form elements. Ideally, use the [`<form>` element](/en-US/docs/Web/HTML/Element/form) as the wrapping element and do not declare `role="form"`.

### Search

If a form is used to search, <span class="ILfuVd yZ8quc">you should use the more specialized `role="search"` value</span>.

### Labeling landmarks

Each [`<form>` element](/en-US/docs/Web/HTML/Element/form) and form `role` that needs to be exposed as a landmark must be given an accessible name. This name will allow an assistive technology user to be able to quickly understand the purpose of the form landmark.

Use an `aria-labelledby`, `aria-label` or `title`  on the same element that was given the `role="form"` to provide it an accessible name.

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

Using the [`<form>` element](/en-US/docs/Web/HTML/Element/form) will automatically communicate a section has a role of `form`. If at all possible, prefer using it instead.

### Added benefits

Certain technologies such as browser extensions can generate lists of all landmark roles present on a page, allowing non-screen reader users to also quickly identify and navigate to large sections of the document.

- [Landmarks browser extension](https://matatk.agrip.org.uk/landmarks/)

## Specifications

| Specification                                                                    | Status                                           |
| -------------------------------------------------------------------------------- | ------------------------------------------------ |
| {{SpecName("ARIA","#form","ARIA Form Role")}}                     | {{Spec2('ARIA')}}                         |
| {{SpecName("ARIA Authoring Practices 1.2","#form","Role Form")}} | {{Spec2('ARIA Authoring Practices 1.2')}} |

## Screen reader support

TBD

## See also

- [\<form>: The Form element](/en-US/docs/Web/HTML/Element/form)
- [\<legend>: The Legend element](/en-US/docs/Web/HTML/Element/legend)
- [form (role): Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria/#form)
- [Using HTML sections and outlines](/en-US/docs/Web/HTML/Element/Heading_Elements)
- [Landmark roles: Using ARIA: Roles, States, and Properties](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#landmark_roles)
- [Accessible Landmarks | scottohara.me](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Using WAI-ARIA Landmarks – 2013 | The Paciello Group](https://developer.paciellogroup.com/blog/2013/02/using-wai-aria-landmarks-2013/)

<section id="Quick_links"><ol><li><a href="/en-US/docs/Web/Accessibility/ARIA/Roles"><strong>WAI-ARIA roles</strong></a>{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}</li></ol></section>
