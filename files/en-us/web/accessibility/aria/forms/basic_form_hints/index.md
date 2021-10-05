---
title: Basic form hints
slug: Web/Accessibility/ARIA/forms/Basic_form_hints
tags:
  - ARIA
  - Accessibility
  - Forms
---
When implementing forms using traditional HTML form-related elements, it is important to provide labels for controls, and explicitly associate a label with its control. When a screen reader user navigates a page, the screen reader will describe form controls. Without a direct association between the control and its label, the screen reader has no way of knowing which label is the correct one.

The example below shows a simple form with labels. Note that each {{ HTMLElement("input") }} element has an `id`, and each {{ HTMLElement("label") }} element has a `for` attribute, indicating the `id` of the associated {{ HTMLElement("input") }}.

```html
<form>
  <ul>
    <li>
      <input id="wine-1" type="checkbox" value="riesling"/>
      <label for="wine-1">Berg Rottland Riesling</label>
    </li>
    <li>
      <input id="wine-2" type="checkbox" value="pinot-blanc"/>
      <label for="wine-2">Pinot Blanc</label>
    </li>
    <li>
      <input id="wine-3" type="checkbox" value="pinot-grigio"/>
      <label for="wine-3">Pinot Grigio</label>
    </li>
    <li>
      <input id="wine-4" type="checkbox" value="gewurztraminer"/>
      <label for="wine-4">Gewürztraminer</label>
    </li>
  </ul>
</form>
```

## Labeling with ARIA

The HTML {{ HTMLElement("label") }} element is appropriate for form-related elements, but many form controls are implemented as a dynamic JavaScript widget, using {{ HTMLElement("div") }}s or {{ HTMLElement("span") }}s. [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/), the **Accessible Rich Internet Applications** specification from the W3C's [Web Accessibility Initiative](https://www.w3.org/WAI/), provides the [`aria-labelledby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) attribute for these cases.

The example below shows a radio button group implemented using an unordered list. Note that on line 3, the {{ HTMLElement("ul") }} element sets the `aria-labelledby` attribute to `rg1_label`, the `id` of the {{ HTMLElement("h3") }} element on line 1, which is the label for the radio group.

```html
<h3 id="rg1_label">Lunch Options</h3>

<ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label">
  <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Thai
  </li>
  <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Subway
  </li>
  <li id="r3"   tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> Radio Maria
  </li>
</ul>
```

## Describing with ARIA

Form controls sometimes have a description associated with them, in addition to the label. ARIA provides the [`aria-describedby`](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) attribute to directly associate the description with the control.

The example below shows a {{ HTMLElement("button") }} element that is described by a sentence in a separate {{ HTMLElement("div") }} element. The `aria-describedby` attribute on the {{ HTMLElement("button") }} references the `id` of the {{ HTMLElement("div") }}.

```html
<button aria-describedby="descriptionRevert">Revert</button>
<div id="descriptionRevert">Reverting will undo any changes that have been made
                            since the last save.</div>
```

<div class="note"><p><strong>Note</strong>: The <code>aria-describedby</code> attribute is used for other purposes, in addition to form controls.</p></div>

## Required and invalid fields

<div class="note"><p><strong>Note</strong>: Now that <code>required</code> is available to more than 97% of users globally, it is no longer recommended that you use both <code>required</code> and <code>aria-required</code>.</p></div>

Web developers typically use presentational strategies to indicate required or invalid fields. Assistive technologies (ATs) cannot necessarily infer this information from the presentation. ARIA provides attributes for indicating that form controls are required or invalid:

- The [**aria-required**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) property can be applied to a form element, to indicate to an AT that it is required to complete the form.
- The [**aria-invalid**](https://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) state can be programmatically applied, to indicate to an AT which data fields have incorrect data, so that the user knows they have entered invalid data.

The example below shows a simple form with three fields. On lines 4 and 12, the `aria-required` attributes are set to true (in addition to the asterisks next to the labels), indicating that the name and email fields are required. The second part of the example, a snippet of JavaScript validates the email format, and sets the `aria-invalid` attribute of the email field (line 12 of the HTML) according to the result (in addition to changing the presentation of the element).

```html
<form>
  <div>
    <label for="name">* Name:</label>
    <input type="text" value="name" id="name" aria-required="true"/>
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input type="text" value="phone" id="phone" aria-required="false"/>
  </div>
  <div>
    <label for="email">* E-mail:</label>
    <input type="text" value="email" id="email" aria-required="true"/>
  </div>
</form>
```

The script that validates the form entry would look something like this:

```js
var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // returns true if valid, false otherwise

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColor(emailElement, valid); // sets the border to red if second arg is false
};
```

## Providing Helpful Error Messages

Read how to use [ARIA alerts to enhance forms](/en-US/docs/Web/Accessibility/ARIA/forms/alerts).

For more guidance on using ARIA for forms accessibility, see the [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices/) document.
