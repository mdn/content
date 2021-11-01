---
title: '<form>: The Form element'
slug: Web/HTML/Element/form
tags:
  - Element
  - Form Element
  - Forms
  - HTML
  - HTML Form Element
  - HTML forms
  - Reference
  - Web
browser-compat: html.elements.form
---

{{HTMLRef}}

The **`<form>`** [HTML](/en-US/docs/Web/HTML) element represents a document section containing interactive controls for submitting information.

{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}

It is possible to use the {{cssxref(':valid')}} and {{cssxref(':invalid')}} CSS [pseudo-classes](/en-US/docs/Web/CSS/Pseudo-classes) to style a `<form>` element based on whether or not the {{domxref("HTMLFormElement.elements", "elements")}} inside the form are valid.

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
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >palpable content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, but not containing <code>&#x3C;form></code> elements
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
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Form_Role"
            >form</a
          ></code
        > if the form has an
        <a href="https://www.w3.org/TR/accname-1.1/#dfn-accessible-name"
          >accessible name</a
        >, otherwise
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >no corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role"
            >search</a
          ></code
        >, {{ARIARole("none")}} or {{ARIARole("presentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLFormElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("accept")}} {{deprecated_inline}}

  - : Comma-separated [content types](/en-US/docs/Web/SVG/Content_type) the server accepts.

    > **Note:** **This attribute was removed in HTML5 and should not be used.** Instead, use the {{htmlattrxref("accept", "input")}} attribute on `<input type=file>` elements.

- {{htmlattrdef("accept-charset")}}
  - : Space-separated [character encodings](/en-US/docs/Web/Guide/Localizations_and_character_encodings) the server accepts. The browser uses them in the order in which they are listed. The default value means [the same encoding as the page](/en-US/docs/Web/HTTP/Headers/Content-Encoding).
    (In previous versions of HTML, character encodings could also be delimited by commas.)
- {{htmlattrdef("autocapitalize")}} {{non-standard_inline}}

  - : A nonstandard attribute used by iOS Safari that controls how textual form elements should be automatically capitalized. `autocapitalize` attributes on a form elements override it on `<form>`. Possible values:

    - `none`: No automatic capitalization.
    - `sentences` (default): Capitalize the first letter of each sentence.
    - `words`: Capitalize the first letter of each word.
    - `characters`: Capitalize all characters — that is, uppercase.

- {{htmlattrdef("autocomplete")}}

  - : Indicates whether input elements can by default have their values automatically completed by the browser. `autocomplete` attributes on form elements override it on `<form>`. Possible values:

    - `off`: The browser may not automatically complete entries. (Browsers tend to ignore this for suspected login forms; see [The autocomplete attribute and login fields](/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#the_autocomplete_attribute_and_login_fields).)
    - `on`: The browser may automatically complete entries.

- {{htmlattrdef("name")}}
  - : The name of the form. The value must not be the empty string, and must be unique among the `form` elements in the forms collection that it is in, if any.
- {{htmlattrdef("rel")}}
  - : Creates a hyperlink or annotation depending on the value, see the [{{htmlattrdef("rel")}}](/en-US/docs/Web/HTML/Attributes/rel) attribute for details.

### Attributes for form submission

The following attributes control behavior during form submission.

- {{htmlattrdef("action")}}
  - : The URL that processes the form submission. This value can be overridden by a {{htmlattrxref("formaction", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) element.
- {{htmlattrdef("enctype")}}

  - : If the value of the `method` attribute is `post`, `enctype` is the [MIME type](https://en.wikipedia.org/wiki/Mime_type) of the form submission. Possible values:

    - `application/x-www-form-urlencoded`: The default value.
    - `multipart/form-data`: Use this if the form contains {{HTMLElement("input")}} elements with `type=file`.
    - `text/plain`: Introduced by HTML5 for debugging purposes.

    This value can be overridden by {{htmlattrxref("formenctype", "button")}} attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) elements.

- {{htmlattrdef("method")}}

  - : The [HTTP](/en-US/docs/Web/HTTP) method to submit the form with. Possible (case insensitive) values:

    - `post`: The [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5); form data sent as the [request body](/en-US/docs/Web/API/Request/body).
    - `get`: The [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); form data appended to the `action` URL with a `?` separator. Use this method when the form [has no side-effects](/en-US/docs/Glossary/Idempotent).
    - `dialog`: When the form is inside a {{HTMLElement("dialog")}}, closes the dialog on submission.

    This value is overridden by {{htmlattrxref("formmethod", "button")}} attributes on {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image"> `](/en-US/docs/Web/HTML/Element/input/image)elements.

- {{htmlattrdef("novalidate")}}
  - : This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form **_is_** validated), it can be overridden by a {{htmlattrxref("formnovalidate", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) element belonging to the form.
- {{htmlattrdef("target")}}

  - : Indicates where to display the response after submitting the form. In HTML 4, this is the name/keyword for a frame. In HTML5, it is a name/keyword for a _browsing context_ (for example, tab, window, or iframe). The following keywords have special meanings:

    - `_self` (default): Load into the same browsing context as the current one.
    - `_blank`: Load into a new unnamed browsing context.
    - `_parent`: Load into the parent browsing context of the current one. If no parent, behaves the same as `_self`.
    - `_top`: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as `_self`.

    This value can be overridden by a {{htmlattrxref("formtarget", "button")}} attribute on a {{HTMLElement("button")}}, [`<input type="submit">`](/en-US/docs/Web/HTML/Element/input/submit), or [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) element.

    > **Note:** Setting `target="_blank"` on `<form>` elements implicitly provides the same `rel` behavior as setting [`rel="noopener"`](/en-US/docs/Web/HTML/Link_types/noopener) which does not set `window.opener`.

## Examples

### HTML

```html
<!-- Form which will send a GET request to the current URL -->
<form>
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form which will send a POST request to the current URL -->
<form method="post">
  <label>Name:
    <input name="submitted-name" autocomplete="name">
  </label>
  <button>Save</button>
</form>

<!-- Form with fieldset, legend, and label -->
<form method="post">
  <fieldset>
    <legend>Title</legend>
    <label><input type="radio" name="radio"> Select me</label>
  </fieldset>
</form>
```

{{ EmbedLiveSample('Examples', '100%', 110) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML forms guide](/en-US/docs/Learn/Forms)
- Other elements that are used when creating forms: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.
- Getting a list of the elements in the form: {{domxref("HTMLFormElement.elements")}}
- [ARIA: Form role](/en-US/docs/Web/Accessibility/ARIA/Roles/Form_Role)
- [ARIA: Search role](/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role)
