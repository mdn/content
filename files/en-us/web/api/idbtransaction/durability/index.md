---
title: IDBTransaction.durability
slug: Web/API/IDBTransaction/durability
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - durability
  - IDBTransaction
  - IndexedDB
  - Database
  - Storage
browser-compat: api.IDBTransaction.durability
---
{{securecontext_header}}{{DefaultAPISidebar("IndexedDB")}}

The **`durability`** read-only property of the
{{domxref("IDBTransaction")}} interface returns the durability hint the transaction was
created with. This is a hint to the user agent of whether to prioritize performance or
durability when committing the transaction.

The value of this property is defined in the `options` parameter when creating a transaction using {{domxref("IDBDatabase.transaction()")}}.

## Value

Any of the following literal {{jsxref('String', 'strings')}}:

- `"strict"`
  - : The user agent may consider that the transaction has
    successfully committed only after verifying that all outstanding changes have been
    successfully written to a persistent storage medium.
- `"relaxed"`
  - : The user agent may consider that the transaction has
    successfully committed as soon as all outstanding changes have been written to the
    operating system, without subsequent verification.
- `"default"`
  - : The user agent should use its default durability behavior
    for the storage bucket. This is the default for transactions if not otherwise
    specified.

## Examples

For a full working example, see our [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](https://mdn.github.io/to-do-notifications/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
