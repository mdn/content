---
title: ContactAddress
slug: Web/API/ContactAddress
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ContactAddress
  - Experimental
browser-compat: api.ContactAddress
---
{{securecontext_header}}{{APIRef("")}}{{SeeCompatTable}}

The **`ContactAddress`** interface of the {{domxref('contact_picker_api','Contact Picker API','','true')}} represents a physical address. Instances of this interface are retrieved from the `address` property of the objects returned by {{domxref("ContactManager.getProperties()")}}.

It may be useful to refer to the Universal Postal Union website's [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) materials, which provide information about international standards for postal addresses.

## Properties

_Inherits properties from its parent, {{domxref("PaymentAddress")}}_.

## Methods

_Inherits methods from its parent, {{domxref("PaymentAddress")}}_.

## Examples

The following example prompts the user to select contacts, then prints the first returned address to the console.

```js
const props = ['address'];
const opts = {multiple: true};

async function getContacts() {
  try {
      const contacts = await navigator.contacts.select(props, ops);
      const contactAddress = contacts[0].address[0];
      console.log(contactAddress)
  } catch (ex) {
      // Handle any errors here.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
