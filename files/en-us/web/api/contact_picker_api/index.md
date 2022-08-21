---
title: Contact Picker API
slug: Web/API/Contact_Picker_API
page-type: web-api-overview
tags:
  - API
  - Contact Picker API
  - Contacts
  - Landing
  - Overview
  - PWA
  - contact picker
  - Experimental
browser-compat: api.ContactsManager
---
{{securecontext_header}}{{DefaultAPISidebar("Contact Picker API")}}{{SeeCompatTable}}

The Contact Picker API allows users to select entries from their contact list and share limited details of the selected entries with a website or application.

> **Note:** This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

## Contact Picker API Concepts and Usage

Access to contacts has long been a feature available within native applications. The Contacts Picker API brings that functionality to web applications.

Use cases include selecting contacts to message via an email or chat application, selecting a contacts phone number for use with voice over IP (VOIP), or for discovering contacts who have already joined a social platform. User agents can also offer a consistent experience with other applications on a users device.

When calling the {{domxref('ContactsManager.select', 'select')}} method of the {{domxref('ContactsManager')}} interface, the user is presented with a contact picker, whereby they can then select contact information to share with the web application. User interaction is required before permission to display the contact picker is granted and access to contacts is not persistent; the user must grant access every time a request is made by the application.

This API is only available from a secure top-level browsing context and very carefully considers the sensitivity and privacy of contact data. The onus is on the user for choosing data to share and only allows specific data for selected contacts, with no access to any data for other contacts.

## Interfaces

- {{domxref("ContactAddress")}}
  - : Represents a physical address.
- {{domxref("ContactsManager")}}
  - : Provides a way for users to select and share limited details of contacts with a web application.
- {{domxref("Navigator.contacts")}}
  - : Returns a {{domxref("ContactsManager")}} object instance, from which all other functionality can be accessed.

## Examples

### Feature Detection

The following code checks whether the Contact Picker API is supported.

```js
const supported = 'contacts' in navigator;
```

### Checking for Supported Properties

The following asynchronous function uses the `getProperties()` method to check for supported properties.

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

### Selecting Contacts

The following example sets an array of properties to be retrieved for each contact, as well as setting an options object to allow for multiple contacts to be selected.

An asynchronous function is then defined which uses the `select()` method to present the user with a contact picker interface and handle the chosen results.

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

## See also

- [A Contact Picker for the Web](https://web.dev/contact-picker/)
- [A Contact Picker demo on glitch](https://contact-picker.glitch.me/)
