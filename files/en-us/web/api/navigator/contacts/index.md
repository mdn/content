---
title: "Navigator: contacts property"
short-title: contacts
slug: Web/API/Navigator/contacts
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.contacts
---

{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`contacts`** read-only property of the
{{domxref("Navigator")}} interface returns a {{domxref('ContactsManager')}} interface
which allows users to select entries from their contact list and share limited details
of the selected entries with a website or application.

### Value

A {{domxref('ContactsManager')}} object. Two successive calls return the same object.

## Examples

The following code checks whether the Contact Picker API is supported.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A Contact Picker for the Web](https://web.dev/contact-picker/)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
