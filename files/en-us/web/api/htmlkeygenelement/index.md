---
title: HTMLKeygenElement
slug: Web/API/HTMLKeygenElement
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
  - Deprecated
browser-compat: api.HTMLKeygenElement
---
{{deprecated_header}} {{ APIRef("HTML DOM") }}

> **Note:** This page describes the Keygen Element interface as specified, not as currently implemented by Gecko. See {{Bug(101019)}} for details and status.

The {{HTMLElement("keygen")}} elements expose the **`HTMLKeygenElement`** interface, which provides special properties and methods (beyond the regular {{domxref("element")}} object interface they also have available to them by inheritance) for manipulating the layout and presentation of `keygen` elements.

## Properties

- autofocus
  - : Is a [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) that reflects the {{ htmlattrxref("autofocus", "keygen") }} HTML attribute, indicating that the form control should have input focus when the page loads.
- challenge
  - : Is a [`DOMString`](/en-US/docs/Web/API/DOMString) that reflects the {{ htmlattrxref("challenge", "keygen") }} HTML attribute, containing a challenge string that is packaged with the submitted key.
- form {{ReadOnlyInline}}
  - : Is a [`HTMLFormElement`](/en-US/docs/Web/API/HTMLFormElement) that indicates the control's form owner, reflecting the {{ htmlattrxref("form", "keygen") }} HTML attribute if it is defined.
- keytype
  - : Is a [`DOMString`](/en-US/docs/Web/API/DOMString) that reflects the {{ htmlattrxref("keytype", "keygen") }} HTML attribute, containing the type of key used.
- labels {{ReadOnlyInline}} {{ unimplemented_inline(556743) }}
  - : Is a [`NodeList`](/en-US/docs/Web/API/NodeList) that represents a list of label elements associated with this keygen element.
- name
  - : Is a [`DOMString`](/en-US/docs/Web/API/DOMString) that reflects the {{ htmlattrxref("name", "keygen") }} HTML attribute, containing the name for the control that is submitted with form data.
- type {{ReadOnlyInline}}
  - : Is a [`DOMString`](/en-US/docs/Web/API/DOMString) that must be the value `keygen`.
- validationMessage {{ReadOnlyInline}}
  - : Is a [`DOMString`](/en-US/docs/Web/API/DOMString) representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is false), or it satisfies its constraints.
- validity {{ReadOnlyInline}}
  - : Is a [`ValidityState`](/en-US/docs/DOM/ValidityState_Interface) representing the validity states that this element is in.
- willValidate
  - : Is a [`Boolean`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) that is always false because `keygen` objects are never candidates for constraint validation.

## Methods

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name &#x26; Arguments</th>
      <th scope="col">Return</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>
        <code
          ><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean"
            >Boolean</a
          ></code
        >
      </td>
      <td>
        Always returns true because <code>keygen</code> objects are never
        candidates for constraint validation.
      </td>
    </tr>
    <tr>
      <td><code>setCustomValidity(in DOMString error)</code></td>
      <td><code>void</code></td>
      <td>
        Sets a custom validity message for the element. If this message is not
        the empty string, then the element is suffering from a custom validity
        error, and does not validate.
      </td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
