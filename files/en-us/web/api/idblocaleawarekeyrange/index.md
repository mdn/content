---
title: IDBLocaleAwareKeyRange
slug: Web/API/IDBLocaleAwareKeyRange
tags:
  - API
  - Database
  - Experimental
  - IDBKeyRange
  - IndexedDB
  - Interface
  - Reference
  - Storage
browser-compat: api.IDBLocaleAwareKeyRange
---
{{non-standard_header}}{{APIRef("IndexedDB")}}{{SeeCompatTable}}

The **`IDBLocaleAwareKeyRange`** interface of the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API) is a Firefox-specific version of {{domxref("IDBKeyRange")}} — it functions in exactly the same fashion, and has the same properties and methods, but it is intended for use with {{domxref("IDBIndex")}} objects when the original index had a `locale` value specified upon its creation (see [`createIndex()`'s optionalParameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters)) — that is, it has [locale aware sorting](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#locale-aware_sorting) enabled.

## Methods

_This interface inherits all the methods of its parent interface, {{domxref("IDBKeyRange")}}._

## Properties

_This interface inherits all the properties of its parent interface, {{domxref("IDBKeyRange")}}._

Bear in mind however that `IDBLocaleAwareKeyRange` has its own implementation of {{domxref("IDBKeyRange.bound")}}. This is because when you use `bound()`, it checks if lower bound < upper bound, and throws an exception if that’s not the case. With locale-aware indexes, the meaning of < depends on the locale, so for example in Lithuanian Y is sorted between I and K. The only difference between `IDBKeyRange` and `IDBLocaleAwareKeyRange` is that the latter doesn’t do the aforementioned check.

Developers should always use `IDBLocaleAwareKeyRange` when dealing with locale-aware indexes.

## Examples

```js
function displayData() {
  var keyRangeValue = IDBLocaleAwareKeyRange.bound("A", "F");

  var transaction = db.transaction(['fThings'], 'readonly');
  var objectStore = transaction.objectStore('fThings');

  var myIndex = objectStore.index('lName');
  myIndex.openCursor(keyRangeValue).onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '&lt;td&gt;' + cursor.value.id + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.lName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.fName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.jTitle + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.company + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.eMail + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.phone + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.age + '&lt;/td&gt;';
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Entries all displayed.');
    }
  };
};
```

## Specifications

Not currently part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/).)
