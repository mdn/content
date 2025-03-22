---
title: Submit button
slug: Glossary/Submit_button
page-type: glossary-definition
---

{{GlossarySidebar}}

A **submit button** is an {{Glossary("element")}} in HTML that can be used to submit a {{HTMLElement("form")}}. The native submit button elements are:

- {{HtmlElement("button")}} (its default `type` is `"submit"`)
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

In addition to submitting a form, a submit button can affect the form's behavior and what data is sent.

## Overriding the form's behavior

Submit buttons can override the form's submission behavior through various attributes:

- `{{HtmlElement("button#formaction", "formaction")}}`: Override the [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute of the form.
- `{{HtmlElement("button#formenctype", "formenctype")}}`: Override the [`enctype`](/en-US/docs/Web/HTML/Element/form#enctype) attribute of the form.
- `{{HtmlElement("button#formmethod", "formmethod")}}`: Override the [`method`](/en-US/docs/Web/HTML/Element/form#method) attribute of the form.
- `{{HtmlElement("button#formnovalidate", "formnovalidate")}}`: Override the [`novalidate`](/en-US/docs/Web/HTML/Element/form#novalidate) attribute of the form.
- `{{HtmlElement("button#formtarget", "formtarget")}}`: Override the [`target`](/en-US/docs/Web/HTML/Element/form#target) attribute of the form.

## Form data entries

If the submit button is a {{HtmlElement("button")}} or `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` and has a `name` attribute, the form data set will include an entry for its `name` and `value`.

If the submit button is an `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`, the form data set will include entries for the X and Y coordinates that the user clicked on (e.g. `x=100&y=200` or `buttonName.x=123&buttonName.y=234`).

## See also

- [Basic native form controls](/en-US/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
- [Sending form data](/en-US/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
