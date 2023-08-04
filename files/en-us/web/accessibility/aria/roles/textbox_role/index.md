---
title: "ARIA: textbox role"
slug: Web/Accessibility/ARIA/Roles/textbox_role
page-type: aria-role
---

The `textbox` role is used to identify an element that allows the input of free-form text. Whenever possible, rather than using this role, use an {{HTMLElement("input")}} element with [type="text"](/en-US/docs/Web/HTML/Element/input/text), for single-line input, or a {{HTMLElement("textarea")}} element for multi-line input.

## Description

When an element has the `textbox` role, the browser sends an accessible textbox event to assistive technologies, which can then notify the user about it.

The default is a single line input, in which <kbd>Return</kbd> or <kbd>Enter</kbd> submits the form; in this case, it is preferable to use an HTML {{HTMLElement("input")}} with `type="text"`. To create a multi-line text box which supports line breaks, as in an HTML {{HTMLElement("textarea")}}, set `aria-multiline="true"`. Including the HTML `contenteditable` attribute ensures the text node is editable.

```html
<!-- Simple text input field -->
<div id="txtboxLabel">Enter your five-digit zipcode</div>
<div
  role="textbox"
  contenteditable="true"
  aria-placeholder="5-digit zipcode"
  aria-labelledby="txtboxLabel"></div>

<!-- Multi-line text area -->
<div id="txtboxMultilineLabel">Enter the tags for the article</div>
<div
  role="textbox"
  contenteditable="true"
  aria-multiline="true"
  aria-labelledby="txtboxMultilineLabel"
  aria-required="true"></div>
```

Semantic elements are more concise and require no JavaScript to support textbox features.

```html
<label for="txtbox">Enter your five-digit zipcode</label>
<input type="text" placeholder="5-digit zipcode" id="txtbox" />

<!-- Multi-line text area -->
<label for="txtboxMultiline">Enter the tags for the article</label>
<textarea id="txtboxMultiline" required></textarea>
```

Where a text field is read-only, indicated this by setting `aria-readonly="true"` on the element.

### Associated ARIA properties

- [`aria-activedescendant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-activedescendant) attribute
  - : Taking as it's value the ID of is either a descendant of the element with DOM focus or is a logical descendant as indicated by the [`aria-owns`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-owns) attribute, it indicates when that element has focus, when it is part of a composite widget such as a [`combobox`](/en-US/docs/Web/Accessibility/ARIA/Roles/combobox_role). For example, in a combobox, focus may remain on the textbox while the value of `aria-activedescendant` on the textbox element refers to a descendant of a popup listbox that is controlled by the textbox. This attribute must be updated programmatically as the focus changes.
- [`aria-autocomplete`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) attribute

  - : Indicates whether and how the user's input into the field could trigger display of a prediction of the intended value. It supports the following values:

    - `inline`: Predicted text is inserted after the caret.
    - `list`: Predicted text is presented as a collection of values.
    - `both`: Predicted text is presented as a collection of values, with the text needed to complete one value inserted after the caret.
    - `none` (default): Predicted text is not offered.

    If list or both is set, the [`aria-controls`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls) and [`aria-haspopup`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) attributes should also be included. The value of `aria-controls` is the ID of the element that contains the list of suggested values. Additionally, either the textbox or a containing element with role `combobox` has a value for `aria-haspopup` that matches the role of the element that contains the list of suggested values.

- [`aria-multiline`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) attribute

  - : If `aria-multiline="true`" is set, the AT informs the user that the textbox supports multi-line input, with the expectation that

    <kbd>Enter</kbd>

    or

    <kbd>Return</kbd>

    will create a line break rather than submitting the form. ARIA does not alter the behavior of the element; rather this feature must be controlled by the developer. If false is set, or the attribute is omitted and defaults to false, the user expectation is that the control is a single line text box, and

    <kbd>Enter</kbd>

    or

    <kbd>Return</kbd>

    submits the form.

- [`aria-placeholder`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) attribute
  - : Represents a hint (word or phrase) to the user about what to enter into the text field. The hint should be a sample value or a brief description of the expected format. This information should not be used as a substitute for a label: a label is focusable, permanent, indicates what kind of information is expected, and increases the hit area for setting focus on the control, whereas placeholder text is only temporary hint about the expected value, which if implemented incorrectly can decrease accessibility. The placeholder should be visible when the control's value is the empty string such as when the control first receives focus and when users remove a previously-entered value. Instead of using `aria-placeholder`, use the semantic `<input type="text">` or `<textarea>` with a `placeholder` attribute.
- [`aria-readonly`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) attribute
  - : Indicates that the user cannot modify the value of the text field. Instead of using `aria-readonly`, use the semantic `<input type="text">` or `<textarea>` with a `readonly` attribute.
- [`aria-required`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required) attribute
  - : Indicates that a value must be provided for the field before it is submitted. Instead of using `aria-required`, use the semantic `<input type="text">` or `<textarea>` with a `required` attribute.

### Keyboard interactions

In a single-line use (when `aria-multiline` is `false` or not used), the Return or Enter key submits the form. In a multi-line use (when `aria-multiline` is `true`), Return or Enter key inserts a line break.

### JavaScript features

All features associated with any and all properties and states must be maintained, and forms submission on enter or return on a single line textbox needs to be handled.

- Focus event handler and aria-activedescendant attribute
  - : If you are implementing a composite widget, such as a combobox composed of a text box and a listbox, you need to manage the `aria-activedescendant` attribute using a handler. Before using this technique, ensure that the browsers you need to target currently support it. See the [specification of aria-descendant](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant) for further information.

> **Note:**It is a better practice to use an {{HTMLElement("input")}} element with type="text", or a {{HTMLElement("textarea")}} element instead of the ARIA textbox role. When using either semantic element, the ARIA textbox role is not necessary. See [Notes on Using ARIA in HTML](https://www.w3.org/TR/aria-in-html/).

## Possible effects on user agents and assistive technology

When the `textbox` role is added to an element, or such an element becomes visible, the user agent should do the following:

- Expose the element as having a textbox role in the operating system's accessibility API.
- Fire an accessible textbox event using the operating system's accessibility API if it supports it.

Assistive technology products should listen for such an event and notify the user accordingly:

- Screen readers should announce its label and role when focus first lands on a textbox. If it also contains content, this should be announced as with a regular textbox.
- Screen magnifiers may enlarge the textbox.

> **Note:** Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and may be experienced differently.

## Examples

### Example 1: Adding the role in the HTML code for single line input

The snippet below shows how the textbox role is added directly into the HTML source code.

```html
<div role="textbox" contenteditable="true"></div>
```

### Example 2: Adding the role in the HTML code for multi-line input

The snippet below shows how the textbox role is added directly into the HTML source code.

```html
<div role="textbox" contenteditable="true" aria-multiline="true"></div>
```

## Best practices

- Be sure to add the `contenteditable="true"` attribute to the HTML element to which this role is applied. Do so even if you set `aria-readonly` to `true`; in this way, you communicate that the content would be editable if it were not read-only.

## See also

- [ARIA: search role](/en-US/docs/Web/Accessibility/ARIA/Roles/search_role)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
