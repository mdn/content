---
title: ContactsManager
slug: Web/API/ContactsManager
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ContactsManager
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`ContactsManager`** interface of the [Contact Picker API](/en-US/docs/Web/API/Contact_Picker_API) allows users to select entries from their contact list and share limited details of the selected entries with a website or application.

The `ContactsManager` is available through the global {{domxref('navigator.contacts')}} property.

## Instance methods

- {{domxref('ContactsManager.select','select()')}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} which, when resolved, presents the user with a contact picker which allows them to select contact(s) they wish to share.
- {{domxref('ContactsManager.getProperties()','getProperties()')}} {{Experimental_Inline}}
  - : Returns a {{jsxref('Promise')}} which resolves with an {{jsxref('Array')}} of {{jsxref('String','strings')}} indicating which contact properties are available.

## Examples

### Feature Detection

The following code checks whether the Contact Picker API is supported.

```js
const supported = "contacts" in navigator && "ContactsManager" in window;
```

### Checking for Supported Properties

The following asynchronous function uses the `getProperties` method to check for supported properties.

```js
async function checkProperties() {
  const supportedProperties = await navigator.contacts.getProperties();
  if (supportedProperties.includes("name")) {
    // run code for name support
  }
  if (supportedProperties.includes("email")) {
    // run code for email support
  }
  if (supportedProperties.includes("tel")) {
    // run code for telephone number support
  }
  if (supportedProperties.includes("address")) {
    // run code for address support
  }
  if (supportedProperties.includes("icon")) {
    // run code for avatar support
  }
}
```

### Selecting Contacts

The following example sets an array of properties to be retrieved for each contact, as well as setting an options object to allow for multiple contacts to be selected.

An asynchronous function is then defined which uses the `select()` method to present the user with a contact picker interface and handle the chosen results.

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

`handleResults()` is a developer defined function.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [A Contact Picker for the Web](https://developer.chrome.com/docs/capabilities/web-apis/contact-picker)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
