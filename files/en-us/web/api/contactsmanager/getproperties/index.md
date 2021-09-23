---
title: ContactsManager.getProperties()
slug: Web/API/ContactsManager/getProperties
tags:
  - Contact Picker API
  - Contacts
  - ContactsManager
  - Method
  - PWA
  - contact picker
browser-compat: api.ContactsManager.getProperties
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}

The **`getProperties()`** method of the
{{domxref("ContactsManager")}} interface returns a {{jsxref('Promise')}} which resolves
with an {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating which contact
properties are available.

## Syntax

```js
var ContactProperties = ContactsManager.getProperties();
```

### Parameters

This method receives no parameters.

### Return value

Returns a {{jsxref('Promise')}} which when resolved returns an {{jsxref('Array')}} of
available contact properties as {{jsxref('String','strings')}}.

Properties can be any of the following:

- `'name'`: The contact's name.
- `'tel'`: The telephone number(s) of the contact.
- `'email'`: The email address of the contact.
- `'address'`: The contact's postal address.
- `'icon'`: The avatar of the contact.

### Exceptions

No exceptions are thrown.

## Examples

The following asynchronous function uses the `getProperties` method to check
for supported properties.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes('name')) {
    // run code for name support
  }
  if (supportedProperties.includes('email')) {
    // run code for email support
  }
  if (supportedProperties.includes('tel')) {
    // run code for telephone number support
  }
  if (supportedProperties.includes('address')) {
    // run code for address support
  }
  if (supportedProperties.includes('icon')) {
    // run code for avatar support
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
