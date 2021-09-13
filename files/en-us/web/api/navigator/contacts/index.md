---
title: Navigator.contacts
slug: Web/API/Navigator/contacts
tags:
  - Contact Picker API
  - Contacts
  - Navigator
  - PWA
  - Property
  - Read-only
  - contact picker
browser-compat: api.Navigator.contacts
---
{{draft}}{{DefaultAPISidebar("Contact Picker API")}}

The **`contacts`** read-only property of the
{{domxref("Navigator")}} interface returns a {{domxref('ContactsManager')}} interface
which allows users to select entries from their contact list and share limited details
of the selected entries with a website or application.

## Syntax

```js
var contactsManager = navigator.contacts;
```

### Return Value

{{domxref('ContactsManager')}}

## Examples

The following code checks whether the Contact Picker API is supported.

```js
const supported = ('contacts' in navigator && 'ContactsManager' in window);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A Contact Picker for the Web](https://web.dev/contact-picker/)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
