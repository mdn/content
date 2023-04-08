---
title: "ContactsManager: select() method"
short-title: select()
slug: Web/API/ContactsManager/select
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.ContactsManager.select
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`select()`** method of the
{{domxref("ContactsManager")}} interface returns a {{jsxref('Promise')}} which, when
resolved, presents the user with a contact picker which allows them to select contact(s)
they wish to share. This method requires a user gesture for the {{jsxref('Promise')}} to
resolve.

## Syntax

```js-nolint
select(properties)
select(properties, options)
```

### Parameters

- `properties`

  - : An array of {{jsxref('String', 'strings')}} defining what information to retrieve
    from a contact. Allowed values are as follows:

    - `'name'`: The contact's name.
    - `'tel'`: The telephone number(s) of the contact.
    - `'email'`: The email address of the contact.
    - `'address'`: The contact's postal address.
    - `'icon'`: The avatar of the contact.

- `options` {{optional_inline}}

  - : Options are as follows:

    - `multiple`
      - : A Boolean that allows multiple contacts to be selected. The default is `false`.

### Return value

Returns a {{jsxref('Promise')}} that resolves with an array of objects containing contact information. Each object represents a single contact may contain the following properties:

- `address`
  - : An {{jsxref("Array")}} of {{domxref("ContactAddress")}} objects, each containing specifics of a unique physical address.
- `email`
  - : An array of strings containing email addresses.
- `icon`
  - : An array of {{domxref("Blob")}} objects containing images of an individual.
- `name`
  - : An array strings, each a unique name of an individual.
- `tel`
  - : An array strings, each a unique phone number of an individual.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if the browsing context is not top-level or the contact picker is showing a flag. A flag denotes an already existing contact picker; only one picker can exist at any time.
- `SecurityError` {{domxref("DOMException")}}
  - : Returned if the method is not triggered by user interaction.
- {{jsxref("TypeError")}}
  - : Returned if `properties` is empty, or if any of the specified properties are not
    supported.

## Examples

### Basic Example

The following example sets an array of properties to be retrieved for each contact, as
well as setting an options object to allow for multiple contacts to be selected.

An asynchronous function is then defined which uses the `select()` method to
present the user with a contact picker interface and handle the chosen results.
`handleResults()` is a developer defined function.

```js
const props = ["name", "email", "tel", "address", "icon"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    handleResults(contacts);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

### Select Using Only Supported Properties

The following example uses {{domxref("ContactsManager.getProperties", "getProperties()")}} to ensure that only supported properties are passed. Otherwise, `select()` might throw a {{jsxref("TypeError")}}. `handleResults()` is a developer defined function.

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
