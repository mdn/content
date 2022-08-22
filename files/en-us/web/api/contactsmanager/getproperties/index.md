---
title: ContactsManager.getProperties()
slug: Web/API/ContactsManager/getProperties
page-type: web-api-instance-method
tags:
  - Contact Picker API
  - Contacts
  - ContactsManager
  - Method
  - PWA
  - contact picker
  - Experimental
browser-compat: api.ContactsManager.getProperties
---
{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`getProperties()`** method of the
{{domxref("ContactsManager")}} interface returns a {{jsxref('Promise')}} which resolves
with an {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating which contact
properties are available.

## Syntax

```js
getProperties()
```

### Parameters

This method receives no parameters.

### Return value

Returns a {{jsxref('Promise')}} that resolves with an {{jsxref('Array')}} of {{jsxref('String','strings')}} naming the contact properties that can be returned by the current system.

Properties can include the following:

- `'name'`: The contact's name.
- `'tel'`: The telephone number(s) of the contact.
- `'email'`: The email address of the contact.
- `'address'`: The contact's postal address.
- `'icon'`: The avatar of the contact.

### Exceptions

No exceptions are thrown.

## Examples

### Verify Property Support

The following asynchronous function uses the `getProperties()` method to check
whether the current system supports the `icon` property.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (!supportedProperties.includes('icon')) {
    console.log("Your system does not support getting icons.");
  }
}
```

### Select Using Only Supported Properties

The following example is similar to one for the {{domxref("ContactsManager.select", "select()")}} method. Instead of hard-coding the properties passed to `select()`, it uses `getProperties()` to ensure that only supported properties are passed. Otherwise, `select()` might throw a {{jsxref("TypeError")}}. `handleResults()` is a developer defined function.

```js
const supportedProperties = await navigator.contacts.getProperties();

async function getContacts() {
  try {
      const contacts = await navigator.contacts.select(supportedProperties);
      handleResults(contacts);
  } catch (ex) {
      // Handle any errors here.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
