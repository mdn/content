---
title: HTMLKeygenElement
slug: Web/API/HTMLKeygenElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - NeedsNewLayout
  - Reference
  - Deprecated
  - Non-standard
browser-compat: api.HTMLKeygenElement
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}{{Non-standard_Header}}

> **Note:** This page describes the Keygen Element interface as specified, not as currently implemented by Gecko. See {{Bug(101019)}} for details and status.

The {{HTMLElement("keygen")}} elements expose the **`HTMLKeygenElement`** interface, which provides special properties and methods (beyond the regular {{domxref("element")}} object interface they also have available to them by inheritance) for manipulating the layout and presentation of `keygen` elements.

## Properties

- `autofocus`
  - : A boolean value that reflects the {{ htmlattrxref("autofocus", "keygen") }} HTML attribute, indicating that the form control should have input focus when the page loads.
- `challenge`
  - : A string that reflects the {{ htmlattrxref("challenge", "keygen") }} HTML attribute, containing a challenge string that is packaged with the submitted key.
- `form` {{ReadOnlyInline}}
  - : A [`HTMLFormElement`](/en-US/docs/Web/API/HTMLFormElement) that indicates the control's form owner, reflecting the {{ htmlattrxref("form", "keygen") }} HTML attribute if it is defined.
- `keytype`
  - : A string that reflects the {{ htmlattrxref("keytype", "keygen") }} HTML attribute, containing the type of key used.
- `labels` {{ReadOnlyInline}} {{ unimplemented_inline(556743) }}
  - : A [`NodeList`](/en-US/docs/Web/API/NodeList) that represents a list of label elements associated with this keygen element.
- `name`
  - : A string that reflects the {{ htmlattrxref("name", "keygen") }} HTML attribute, containing the name for the control that is submitted with form data.
- `type` {{ReadOnlyInline}}
  - : A string that must be the value `keygen`.
- `validationMessage` {{ReadOnlyInline}}
  - : A string representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- `validity` {{ReadOnlyInline}}
  - : A {{domxref("ValidityState")}} object representing the validity states that this element is in.
- `willValidate`
  - : A boolean value that is always false because `keygen` objects are never candidates for constraint validation.

## Methods

- `checkValidity()`
  - : Always returns the boolean value `true` because `HTMLKeygenElement` objects are never candidates for constraint validation.
- `setCustomValidity()`
  - : Takes a string as parameter and sets it as the custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
