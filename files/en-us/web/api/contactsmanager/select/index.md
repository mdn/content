---
title: ContactsManager.select()
slug: Web/API/ContactsManager/select
tags:
  - Contact Picker API
  - Contacts
  - ContactsPicker
  - Method
  - PWA
  - contact picker
browser-compat: api.ContactsManager.select
---
{{draft}}{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}

The **`select()`** method of the
{{domxref("ContactsManager")}} interface returns a {{jsxref('Promise')}} which, when
resolved, presents the user with a contact picker which allows them to select contact(s)
they wish to share. This method requires a user gesture for the {{jsxref('Promise')}} to
resolve.

## Syntax

```js
var ContactInfo = ContactsManager.select(properties, options);
```

### Parameters

- _properties_

  - : An array of {{jsxref('String', 'strings')}} defining what information to retrieve
    from a contact. Allowed values are as follows:

    - `'name'`: The contact's name.
    - `'tel'`: The telephone number(s) of the contact.
    - `'email'`: The email address of the contact.
    - `'address'`: The contact's postal address.
    - `'icon'`: The avatar of the contact.

- `options` {{optional_inline}}

  - : Options are as follows:

    - `multiple`: A Boolean that allows multiple contacts to be selected.
      The default is `false`.

### Return value

Returns a {{jsxref('Promise')}} which resolves on successful contact selection.

### Exceptions

- `InvalidStateError`
  - : The browsing context is not top-level or the contact picker is showing a flag. A
    flag denotes an already existing contact picker, only one picker can exist at any
    time.
- `SecurityError`
  - : If the method is not triggered by user interaction.
- `TypeError`
  - : If `properties` is empty, or if any of the specified properties are not
    supported.

## Examples

The following example sets an array of properties to be retrieved for each contact, as
well as setting an options object to allow for multiple contacts to be selected.

An asynchronous function is then defined which uses the `select()` method to
present the user with a contact picker interface and handle the chosen results.

```js
const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = {multiple: true};

async function getContacts() {
  try {
      const contacts = await navigator.contacts.select(props, opts);
      handleResults(contacts);
  } catch (ex) {
      // Handle any errors here.
  }
}
```

`handleResults()` is a developer defined function.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
