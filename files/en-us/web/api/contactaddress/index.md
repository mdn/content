---
title: ContactAddress
slug: Web/API/ContactAddress
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ContactAddress
---

{{securecontext_header}}{{APIRef("Contact Picker API")}}{{SeeCompatTable}}

The **`ContactAddress`** interface of the [Contact Picker API](/en-US/docs/Web/API/Contact_Picker_API) represents a physical address. Instances of this interface are retrieved from the `address` property of the objects returned by {{domxref("ContactsManager.getProperties()")}}.

It may be useful to refer to the Universal Postal Union website's [Addressing S42 standard](https://www.upu.int/en/Postal-Solutions/Programmes-Services/Addressing-Solutions#addressing-s42-standard) materials, which provide information about international standards for postal addresses.

## Instance properties

- {{domxref('ContactAddress.addressLine')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : An array of strings providing each line of the address not included among the other properties. The exact size and content varies by country or location and can include, for example, a street name, house number, apartment number, rural delivery route, descriptive instructions, or post office box number.
- {{domxref('ContactAddress.country')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string specifying the country in which the address is located, using the [ISO-3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) standard. The string is always given in its canonical upper-case form. Some examples of valid `country` values: `"US"`, `"GB"`, `"CN"`, or `"JP"`.
- {{domxref('ContactAddress.city')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string which contains the city or town portion of the address.
- {{domxref('ContactAddress.dependentLocality')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string giving the dependent locality or sublocality within a city, for example, a neighborhood, borough, district, or UK dependent locality.
- {{domxref('ContactAddress.organization')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string specifying the name of the organization, firm, company, or institution at the address.
- {{domxref('ContactAddress.phone')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string specifying the telephone number of the recipient or contact person.
- {{domxref('ContactAddress.postalCode')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string specifying a code used by a jurisdiction for mail routing, for example, the ZIP code in the United States or the PIN code in India.
- {{domxref('ContactAddress.recipient')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string giving the name of the recipient, purchaser, or contact person at the address.
- {{domxref('ContactAddress.region')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string containing the top level administrative subdivision of the country, for example a state, province, oblast, or prefecture.
- {{domxref('ContactAddress.sortingCode')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string providing a postal sorting code such as is used in France.

## Instance methods

- {{domxref('ContactAddress.toJSON()')}} {{experimental_inline}}
  - : A standard serializer that returns a JSON representation of the `ContactAddress` object's properties.

## Examples

The following example prompts the user to select contacts, then prints the first returned address to the console.

```js
const props = ["address"];
const opts = { multiple: true };

async function getContacts() {
  try {
    const contacts = await navigator.contacts.select(props, opts);
    const contactAddress = contacts[0].address[0];
    console.log(contactAddress);
  } catch (ex) {
    // Handle any errors here.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
