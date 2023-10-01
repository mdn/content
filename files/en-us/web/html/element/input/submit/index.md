---
title: <input type="submit">
slug: Web/HTML/Element/input/submit
page-type: html-element
browser-compat: html.elements.input.type_submit
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elements of type **`submit`** are rendered as buttons. When the {{domxref("Element/click_event", "click")}} event occurs (typically because the user clicked the button), the {{Glossary("user agent")}} attempts to submit the form to the server.

## Value

An `<input type="submit">` element's [`value`](/en-US/docs/Web/HTML/Element/input#value) attribute contains a string which is displayed as the button's label. Buttons do not have a true value otherwise.

### Setting the value attribute

```html
<input type="submit" value="Send Request" />
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Omitting the value attribute

If you don't specify a `value`, the button will have a default label, chosen by the user agent. This label is likely to be something along the lines of "Submit" or "Submit Query." Here's an example of a submit button with a default label in your browser:

```html
<input type="submit" />
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Additional attributes

In addition to the attributes shared by all {{HTMLElement("input")}} elements, `submit` button inputs support the following attributes.

### formaction

A string indicating the URL to which to submit the data. This takes precedence over the [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute on the {{HTMLElement("form")}} element that owns the {{HTMLElement("input")}}.

This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and {{HTMLElement("button")}} elements.

### formenctype

A string that identifies the encoding method to use when submitting the form data to the server. There are three permitted values:

- `application/x-www-form-urlencoded`
  - : This, the default value, sends the form data as a string after [URL encoding](https://en.wikipedia.org/wiki/URL_encoding) the text using an algorithm such as {{jsxref("encodeURI", "encodeURI()")}}.
- `multipart/form-data`
  - : Uses the {{domxref("FormData")}} API to manage the data, allowing for files to be submitted to the server. You _must_ use this encoding type if your form includes any {{HTMLElement("input")}} elements of [`type`](/en-US/docs/Web/HTML/Element/input#type) `file` ([`<input type="file">`](/en-US/docs/Web/HTML/Element/input/file)).
- `text/plain`
  - : Plain text; mostly useful only for debugging, so you can easily see the data that's to be submitted.

If specified, the value of the `formenctype` attribute overrides the owning form's [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute.

This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and {{HTMLElement("button")}} elements.

### formmethod

A string indicating the HTTP method to use when submitting the form's data; this value overrides any [`method`](/en-US/docs/Web/HTML/Element/form#method) attribute given on the owning form. Permitted values are:

- `get`
  - : A URL is constructed by starting with the URL given by the `formaction` or [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute, appending a question mark ("?") character, then appending the form's data, encoded as described by `formenctype` or the form's [`enctype`](/en-US/docs/Web/HTML/Element/form#enctype) attribute. This URL is then sent to the server using an HTTP {{HTTPMethod("get")}} request. This method works well for simple forms that contain only {{Glossary("ASCII")}} characters and have no side effects. This is the default value.
- `post`
  - : The form's data is included in the body of the request that is sent to the URL given by the `formaction` or [`action`](/en-US/docs/Web/HTML/Element/form#action) attribute using an HTTP {{HTTPMethod("post")}} method. This method supports complex data and file attachments.
- `dialog`
  - : This method is used to indicate that the button closes the dialog with which the input is associated, and does not transmit the form data at all.

This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and {{HTMLElement("button")}} elements.

### formnovalidate

A Boolean attribute which, if present, specifies that the form should not be validated before submission to the server. This overrides the value of the [`novalidate`](/en-US/docs/Web/HTML/Element/form#novalidate) attribute on the element's owning form.

This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and {{HTMLElement("button")}} elements.

### formtarget

A string which specifies a name or keyword that indicates where to display the response received after submitting the form. The string must be the name of a **browsing context** (that is, a tab, window, or {{HTMLElement("iframe")}}). A value specified here overrides any target given by the [`target`](/en-US/docs/Web/HTML/Element/form#target) attribute on the {{HTMLElement("form")}} that owns this input.

In addition to the actual names of tabs, windows, or inline frames, there are a few special keywords that can be used:

- `_self`
  - : Loads the response into the same browsing context as the one that contains the form. This will replace the current document with the received data. This is the default value used if none is specified.
- `_blank`
  - : Loads the response into a new, unnamed, browsing context. This is typically a new tab in the same window as the current document, but may differ depending on the configuration of the {{Glossary("user agent")}}.
- `_parent`
  - : Loads the response into the parent browsing context of the current one. If there is no parent context, this behaves the same as `_self`.
- `_top`
  - : Loads the response into the top-level browsing context; this is the browsing context that is the topmost ancestor of the current context. If the current context is the topmost context, this behaves the same as `_self`.

This attribute is also available on [`<input type="image">`](/en-US/docs/Web/HTML/Element/input/image) and {{HTMLElement("button")}} elements.

## Using submit buttons

`<input type="submit">` buttons are used to submit forms. If you want to create a custom button and then customize the behavior using JavaScript, you need to use [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button), or better still, a {{htmlelement("button")}} element.

If you choose to use `<button>` elements to create the buttons in your form, keep this in mind: If the `<button>` is inside a {{HTMLElement("form")}}, that button will be treated as the "submit" button. So you should be in the habit of expressly specifying which button is the submit button.

### A simple submit button

We'll begin by creating a form with a simple submit button:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" />
  </div>
</form>
```

This renders like so:

{{EmbedLiveSample("A_simple_submit_button", 650, 100)}}

Try entering some text into the text field, and then submitting the form.

Upon submitting, the data name/value pair gets sent to the server. In this instance, the string will be `text=usertext`, where "usertext" is the text entered by the user, encoded to preserve special characters. Where and how the data is submitted depends on the configuration of the `<form>`; see [Sending form data](/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data) for more details.

### Adding a keyboard shortcut to a submit button

Keyboard shortcuts, also known as access keys and keyboard equivalents, let the user trigger a button using a key or combination of keys on the keyboard. To add a keyboard shortcut to a submit button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the [`accesskey`](/en-US/docs/Web/HTML/Global_attributes/accesskey) global attribute.

In this example, <kbd>s</kbd> is specified as the access key (you'll need to press <kbd>s</kbd> plus the particular modifier keys for your browser/OS combination). In order to avoid conflicts with the user agent's own keyboard shortcuts, different modifier keys are used for access keys than for other shortcuts on the host computer. See [`accesskey`](/en-US/docs/Web/HTML/Global_attributes/accesskey) for further details.

Here's the previous example with the <kbd>s</kbd> access key added:

```html
<form>
  <div>
    <label for="example">Let's submit some text</label>
    <input id="example" type="text" name="text" />
  </div>
  <div>
    <input type="submit" value="Send" accesskey="s" />
  </div>
</form>
```

For example, in Firefox for Mac, pressing <kbd>Control</kbd>-<kbd>Option</kbd>-<kbd>S</kbd> triggers the Send button, while Chrome on Windows uses <kbd>Alt</kbd>+<kbd>S</kbd>.

{{EmbedLiveSample("Adding_a_keyboard_shortcut_to_a_submit_button", 650, 100)}}

The problem with the above example is that the user will not know what the access key is! This is especially true since the modifiers are typically non-standard to avoid conflicts. When building a site, be sure to provide this information in a way that doesn't interfere with the site design (for example by providing an easily accessible link that points to information on what the site access keys are). Adding a tooltip to the button (using the [`title`](/en-US/docs/Web/HTML/Global_attributes/title) attribute) can also help, although it's not a complete solution for accessibility purposes.

### Disabling and enabling a submit button

To disable a submit button, specify the [`disabled`](/en-US/docs/Web/HTML/Attributes/disabled) attribute on it, like so:

```html
<input type="submit" value="Send" disabled />
```

You can enable and disable buttons at run time by setting `disabled` to `true` or `false`; in JavaScript this looks like `btn.disabled = true` or `btn.disabled = false`.

> **Note:** See the [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) page for more ideas about enabling and disabling buttons.

## Validation

Submit buttons don't participate in constraint validation; they have no real value to be constrained.

## Examples

We've included simple examples above. There isn't really anything more to say about submit buttons. There's a reason this kind of control is sometimes called a "simple button."

## Technical Summary

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Value</a></strong></td>
      <td>A string used as the button's label</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Supported common attributes</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML/Element/input#type"><code>type</code></a> and
        <a href="/en-US/docs/Web/HTML/Element/input#value"><code>value</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>DOM interface</strong></td>
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>None</td>
    </tr>
    <tr>
      <td><strong>Implicit ARIA Role</strong></td>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- [Forms and buttons](/en-US/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [HTML forms](/en-US/docs/Learn/Forms)
- The {{HTMLElement("button")}} element
- [Compatibility of CSS properties](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
