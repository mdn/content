---
title: '<button>: The Button element'
slug: Web/HTML/Element/button
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.button
---

{{HTMLRef}}

The **`<button>`** [HTML](/en-US/docs/Web/HTML) element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs a programmable action, such as submitting a [form](/en-US/docs/Learn/Forms) or opening a dialog.

By default, HTML buttons are presented in a style resembling the platform the {{Glossary("user agent")}} runs on, but you can change buttons' appearance with [CSS](/en-US/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/button.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >,
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >Interactive content</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_listed"
          >listed</a
        >,
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_labelable"
          >labelable</a
        >, and
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#form_submittable"
          >submittable</a
        >
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#form-associated_content"
          >form-associated</a
        >
        element, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >Phrasing content</a
        >
        but there must be no
        <a
          href="/en-US/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >Interactive content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
            >button</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        {{ARIARole("checkbox")}}, {{ARIARole("link")}},
        {{ARIARole("menuitem")}},
        {{ARIARole("menuitemcheckbox")}},
        {{ARIARole("menuitemradio")}}, {{ARIARole("option")}},
        {{ARIARole("radio")}}, {{ARIARole("switch")}},
        {{ARIARole("tab")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLButtonElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element's attributes include the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("autofocus")}}
  - : This Boolean attribute specifies that the button should have input [focus](/en-US/docs/Web/API/HTMLElement/focus) when the page loads. **Only one element in a document can have this attribute.**
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : This attribute on a {{HTMLElement("button")}} is nonstandard and Firefox-specific. Unlike other browsers, [Firefox persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Setting `autocomplete="off"` on the button disables this feature; see {{bug(654072)}}.
- {{htmlattrdef("disabled")}}

  - : This Boolean attribute prevents the user from interacting with the button: it cannot be pressed or focused.

    Firefox, unlike other browsers, [persists the dynamic disabled state](https://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) of a {{HTMLElement("button")}} across page loads. Use the {{htmlattrxref("autocomplete","button")}} attribute to control this feature.

- {{htmlattrdef("form")}}

  - : The {{HTMLElement("form")}} element to associate the button with (its _form owner_). The value of this attribute must be the `id` of a `<form>` in the same document. (If this attribute is not set, the `<button>` is associated with its ancestor `<form>` element, if any.)

    This attribute lets you associate `<button>` elements to `<form>`s anywhere in the document, not just inside a `<form>`. It can also override an ancestor `<form>` element.

- {{htmlattrdef("formaction")}}
  - : The URL that processes the information submitted by the button. Overrides the {{htmlattrxref("action","form")}} attribute of the button's form owner. Does nothing if there is no form owner.
- {{htmlattrdef("formenctype")}}

  - : If the button is a submit button (it's inside/associated with a `<form>` and doesn't have `type="button"`), specifies how to encode the form data that is submitted. Possible values:

    - `application/x-www-form-urlencoded`: The default if the attribute is not used.
    - `multipart/form-data`: Use to submit {{HTMLElement("input")}} elements with their {{htmlattrxref("type","input")}} attributes set to `file`.
    - `text/plain`: Specified as a debugging aid; shouldn't be used for real form submission.

    If this attribute is specified, it overrides the {{htmlattrxref("enctype","form")}} attribute of the button's form owner.

- {{htmlattrdef("formmethod")}}

  - : If the button is a submit button (it's inside/associated with a `<form>` and doesn't have `type="button"`), this attribute specifies the [HTTP method](/en-US/docs/Web/HTTP/Methods) used to submit the form. Possible values:

    - `post`: The data from the form are included in the body of the HTTP request when sent to the server. Use when the form contains information that shouldn't be public, like login credentials.
    - `get`: The form data are appended to the form's `action` URL, with a `?` as a separator, and the resulting URL is sent to the server. Use this method when the form [has no side effects](/en-US/docs/Glossary/Idempotent), like search forms.

    If specified, this attribute overrides the {{htmlattrxref("method","form")}} attribute of the button's form owner.

- {{htmlattrdef("formnovalidate")}}

  - : If the button is a submit button, this Boolean attribute specifies that the form is not to be [validated](/en-US/docs/Learn/Forms/Form_validation) when it is submitted. If this attribute is specified, it overrides the {{htmlattrxref("novalidate","form")}} attribute of the button's form owner.

    This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit) elements.

- {{htmlattrdef("formtarget")}}

  - : If the button is a submit button, this attribute is an author-defined name or standardized, underscore-prefixed keyword indicating where to display the response from submitting the form. This is the `name` of, or keyword for, a _browsing context_ (a tab, window, or {{HTMLElement("iframe")}}). If this attribute is specified, it overrides the {{htmlattrxref("target", "form")}} attribute of the button's form owner. The following keywords have special meanings:

    - `_self`: Load the response into the same browsing context as the current one. This is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed browsing context — usually a new tab or window, depending on the user's browser settings.
    - `_parent`: Load the response into the parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.

- {{htmlattrdef("name")}}
  - : The name of the button, submitted as a pair with the button's `value` as part of the form data, when that button is used to submit the form.
- {{htmlattrdef("type")}}

  - : The default behavior of the button. Possible values are:

    - `submit`: The button submits the form data to the server. This is the default if the attribute is not specified for buttons associated with a `<form>`, or if the attribute is an empty or invalid value.
    - `reset`: The button resets all the controls to their initial values, like [\<input type="reset">](/en-US/docs/Web/HTML/Element/input/reset). (This behavior tends to annoy users.)
    - `button`: The button has no default behavior, and does nothing when pressed by default. It can have client-side scripts listen to the element's events, which are triggered when the events occur.

- {{htmlattrdef("value")}}
  - : Defines the value associated with the button's `name` when it's submitted with the form data. This value is passed to the server in params when the form is submitted using this button.

## Notes

A submit button with the attribute `formaction` set, but without an associated form does nothing. You have to set a form owner, either by wrapping it in a `<form>` or set the attribute `form` to the id of the form.

`<button>` elements are much easier to style than {{HTMLElement("input")}} elements. You can add inner HTML content (think `<i>`, `<br>`, or even `<img>`), and use {{Cssxref("::after")}} and {{Cssxref("::before")}} pseudo-elements for complex rendering.

If your buttons are not for submitting form data to a server, be sure to set their `type` attribute to `button`. Otherwise they will try to submit form data and to load the (nonexistent) response, possibly destroying the current state of the document.

## Example

```html
<button name="button">Press me</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

## Accessibility concerns

### Icon buttons

Buttons that only show an icon to represent do not have an _accessible name_. Accessible names provide information for assistive technology, such as screen readers, to access when they parse the document and generate [an accessibility tree](/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). Assistive technology then uses the accessibility tree to navigate and manipulate page content.

To give an icon button an accessible name, put text in the `<button>` element that concisely describes the button's functionality.

#### Example

```html
<button name="favorite">
  <svg aria-hidden="true" viewBox="0 0 10 10"><path d="M7 9L5 8 3 9V6L1 4h3l1-3 1 3h3L7 6z"/></svg>
  Add to favorites
</button>
```

If you want to visually hide the button's text, an accessible way to do so is to use [a combination of CSS properties](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) to remove it visually from the screen, but keep it parsable by assistive technology.

However, it is worth noting that leaving the button text visually apparent can aid people who may not be familiar with the icon's meaning or understand the button's purpose. This is especially relevant for people who are not technologically sophisticated, or who may have different cultural interpretations for the icon the button uses.

- [What is an accessible name? | The Paciello Group](https://www.tpgi.com/what-is-an-accessible-name/)
- [MDN Understanding WCAG, Guideline 4.1 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust#guideline_4.1_—_compatible_maximize_compatibility_with_current_and_future_user_agents_including_assistive_technologies)
- [Understanding Success Criterion 4.1.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)

### Size and Proximity

#### Size

Interactive elements such as buttons should provide an area large enough that it is easy to activate them. This helps a variety of people, including people with motor control issues and people using non-precise forms of input such as a stylus or fingers. A minimum interactive size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

- [Understanding Success Criterion 2.5.5: Target Size | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5 | Adrian Roselli](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets - The A11Y Project](https://www.a11yproject.com/posts/large-touch-targets/)

#### Proximity

Large amounts of interactive content — including buttons — placed in close visual proximity to each other should have space separating them. This spacing is beneficial for people who are experiencing motor control issues, who may accidentally activate the wrong interactive content.

Spacing may be created using CSS properties such as {{cssxref("margin")}}.

- [Hand tremors and the giant-button-problem - Axess Lab](https://axesslab.com/hand-tremors/)

### ARIA state information

To describe the state of a button the correct ARIA attribute to use is [`aria-pressed`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) and not [`aria-checked`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-checked) or [`aria-selected`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected). To find out more read the information about the [ARIA button role](/en-US/docs/Web/Accessibility/ARIA/Roles/button_role).

### Firefox

Firefox will add a small dotted border on a focused button. This border is declared through CSS in the browser stylesheet, but you can override it to add your own focused style using [`button::-moz-focus-inner { }`](/en-US/docs/Web/CSS/::-moz-focus-inner).

If overridden, it is important to **ensure that the state change when focus is moved to the button is high enough** that people experiencing low vision conditions will be able to perceive it.

Color contrast ratio is determined by comparing the luminosity of the button text and background color values compared to the background the button is placed on. In order to meet current [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/), a ratio of 4.5:1 is required for text content and 3:1 for large text. (Large text is defined as 18.66px and {{cssxref("font-weight", "bold")}} or larger, or 24px or larger.)

- [WebAIM: Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

### Clicking and focus

Whether clicking on a {{HTMLElement("button")}} causes it to (by default) become focused varies by browser and OS. The results for {{HTMLElement("input")}} of `type="button"` and `type="submit"` are the same.

<table>
  <caption>
    Does clicking on a {{HTMLElement("button")}} give it focus?
  </caption>
  <thead>
    <tr>
      <th>Desktop Browsers</th>
      <th>Windows 8.1</th>
      <th>OS X 10.X</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Firefox</th>
      <td>✅ Yes - Firefox 30.0</td>
      <td>❌ No (even with a <code>tabindex</code>) Firefox 63</td>
    </tr>
    <tr>
      <th>Chrome</th>
      <td>✅ Yes - Chrome 35</td>
      <td>✅ Yes - Chrome 65</td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>N/A</td>
      <td>
        ❌ No (even with a <code>tabindex</code>) Safari 12 (<a
          href="https://bugs.webkit.org/show_bug.cgi?id=22261"
          >bug 22261</a
        >)
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>✅ Yes - Internet Explorer 11</td>
      <td>N/A</td>
    </tr>
    <tr>
      <th>Presto</th>
      <td>✅ Yes - Opera 12</td>
      <td>✅ Yes - Opera 12</td>
    </tr>
  </tbody>
</table>

<table>
  <caption>
    Does tapping on a {{HTMLElement("button")}} give it focus?
  </caption>
  <thead>
    <tr>
      <th>Mobile Browsers</th>
      <th>iOS 7.1.2</th>
      <th>Android 4.4.4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Safari Mobile</th>
      <td>❌ No (even with a <code>tabindex</code>)</td>
      <td>N/A</td>
    </tr>
    <tr>
      <th>Chrome 35</th>
      <td>❌ No (even with a <code>tabindex</code>)</td>
      <td>✅ Yes</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
