---
title: <input type="reset">
slug: Web/HTML/Element/input/reset
tags:
  - Element
  - Form Button
  - Form input
  - Forms
  - HTML
  - HTML forms
  - Input
  - Input Types
  - Reference
  - Reset Button
  - reset
browser-compat: html.elements.input.input-reset
---

{{HTMLRef("Input_types")}}

{{HTMLElement("input")}} elements of type **`reset`** are rendered as buttons, with a default {{event("click")}} event handler that resets all of the inputs in the form to their initial values.

{{EmbedInteractiveExample("pages/tabbed/input-reset.html", "tabbed-standard")}}

> **Note:** You should usually avoid including reset buttons in your forms. They're rarely useful, and are instead more likely to frustrate users who click them by mistake (often while trying to click the [submit button](/en-US/docs/Web/HTML/Element/input/submit)).

<table class="properties">
  <tbody>
    <tr>
      <td><strong>{{anch("Value")}}</strong></td>
      <td>A {{domxref("DOMString")}} used as the button's label</td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>{{domxref("Element/click_event", "click")}}</td>
    </tr>
    <tr>
      <td><strong>Supported common attributes</strong></td>
      <td>
        {{htmlattrxref("type", "input")}} and
        {{htmlattrxref("value", "input")}}
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td><code>value</code></td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>None</td>
    </tr>
  </tbody>
</table>

## Value

An `<input type="reset">` element's {{htmlattrxref("value", "input")}} attribute contains a {{domxref("DOMString")}} that is used as the button's label. Buttons such as `reset` don't have a value otherwise.

### Setting the value attribute

```html
<input type="reset" value="Reset the form">
```

{{EmbedLiveSample("Setting_the_value_attribute", 650, 30)}}

### Omitting the value attribute

If you don't specify a `value`, you get an button with the default label (typically "Reset," but this will vary depending on the {{Glossary("user agent")}}):

```html
<input type="reset">
```

{{EmbedLiveSample("Omitting_the_value_attribute", 650, 30)}}

## Using reset buttons

`<input type="reset">` buttons are used to reset forms. If you want to create a custom button and then customize the behavior using JavaScript, you need to use [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button), or better still, a {{htmlelement("button")}} element.

### A simple reset button

We'll begin by creating a simple reset button:

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Reset the form">
  </div>
</form>
```

This renders like so:

{{EmbedLiveSample("A_simple_reset_button", 650, 100)}}

Try entering some text into the text field, and then pressing the reset button.

### Adding a reset keyboard shortcut

To add a keyboard shortcut to a reset button — just as you would with any {{HTMLElement("input")}} for which it makes sense — you use the {{htmlattrxref("accesskey")}} global attribute.

In this example, <kbd>r</kbd> is specified as the access key (you'll need to press <kbd>r</kbd> plus the particular modifier keys for your browser/OS combination; see {{htmlattrxref("accesskey")}} for a useful list of those).

```html
<form>
  <div>
    <label for="example">Type in some sample text</label>
    <input id="example" type="text">
  </div>
  <div>
    <input type="reset" value="Reset the form"
     accesskey="r">
  </div>
</form>
```

{{EmbedLiveSample("Adding_a_reset_keyboard_shortcut", 650, 100)}}

The problem with the above example is that there's no way for the user to know what the access key is! This is especially true since the modifiers are typically non-standard to avoid conflicts. When building a site, be sure to provide this information in a way that doesn't interfere with the site design (for example by providing an easily accessible link that points to information on what the site access keys are). Adding a tooltip to the button (using the {{htmlattrxref("title")}} attribute) can also help, although it's not a complete solution for accessibility purposes.

### Disabling and enabling a reset button

To disable a reset button, specify the {{htmlattrxref("disabled")}} global attribute on it, like so:

```html
<input type="reset" value="Disabled" disabled>
```

You can enable and disable buttons at run time by setting `disabled` to `true` or `false`; in JavaScript this looks like `btn.disabled = true` or `btn.disabled = false`.

> **Note:** See the [`<input type="button">`](/en-US/docs/Web/HTML/Element/input/button#disabling_and_enabling_a_button) page for more ideas about enabling and disabling buttons.

## Validation

Buttons don't participate in constraint validation; they have no real value to be constrained.

## Examples

We've included simple examples above. There isn't really anything more to say about reset buttons.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface which implements it.
- [Forms and buttons](/en-US/docs/Learn/Forms/Basic_native_form_controls#actual_buttons)
- [Forms (accessibility)](/en-US/docs/Web/Accessibility/ARIA/forms)
- [HTML forms](/en-US/docs/Learn/Forms)
- The {{HTMLElement("button")}} element
- [Compatibility of CSS properties](/en-US/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
