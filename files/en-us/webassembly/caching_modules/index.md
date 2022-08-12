---
title: Caching compiled WebAssembly modules
slug: WebAssembly/Caching_modules
tags:
  - Caching
  - IndexedDB
  - JavaScript
  - Module
  - WebAssembly
  - compile
  - wasm
---
{{WebAssemblySidebar}}

> **Warning:** Experimental {{jsxref("WebAssembly.Module")}} IndexedDB serialization support is being removed from browsers; see {{bug("1469395")}} and [this spec issue](https://github.com/WebAssembly/spec/issues/821).

Caching is useful for improving the performance of an app — we can store compiled WebAssembly modules on the client so they don't have to be downloaded and compiled every time. This article explains the best practices around this.

## Caching via IndexedDB

[IndexedDB](/en-US/docs/Web/API/IndexedDB_API) is a transactional database system that allows you to store and retrieve structured data on the client-side. It is ideal for persisting assets locally for the saved state of an application, including text, blobs, and any other type of cloneable object.

This includes compiled wasm modules ({{jsxref("WebAssembly.Module")}} JavaScript objects).

## Setting up a caching library

Because IndexedDB is a somewhat old-fashioned API, we wanted to provide a library function to speed up writing caching code, and make it work better along with today's more modern APIs.

In our wasm-utils.js library script, you'll find `instantiateCachedURL()` — this function fetches the wasm module at `url` with a version of `dbVersion`, instantiates it with the given `importObject`, and returns a promise resolving to the finished wasm Instance. Additionally, it handles creating a database to cache the compiled wasm modules in, attempts to store new modules in the database, and retrieves previously cached modules from the database, saving you from having to download them again.

> **Note:** The entire site's wasm cache (not just the given URL) is versioned by the specified `dbVersion` passed into the function. If the wasm module code is updated, or its URL changes, you will need to update `dbVersion`. Any subsequent call to `instantiateCachedURL()` will then clear out the entire cache, allowing you to avoid using out-of-date modules.

The function starts off by defining some necessary constants:

```js
function instantiateCachedURL(dbVersion, url, importObject) {
  const dbName = 'wasm-cache';
  const storeName = 'wasm-cache';
```

### Setting up the database

The first helper function contained inside `instantiateCachedURL()` — `openDatabase()` — creates an object store for storing wasm modules, and also handles clearing out the database if the `dbVersion` is updated; it returns a promise resolving to the new database.

```js
  function openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, dbVersion);
      request.onerror = reject.bind(null, 'Error opening wasm cache database');
      request.onsuccess = () => { resolve(request.result) };
      request.onupgradeneeded = (event) => {
        const db = request.result;
        if (db.objectStoreNames.contains(storeName)) {
          console.log(`Clearing out version ${event.oldVersion} wasm cache`);
          db.deleteObjectStore(storeName);
        }
        console.log(`Creating version ${event.newVersion} wasm cache`);
        db.createObjectStore(storeName)
      };
    });
  }
```

### Looking up modules in the database

Our next function — `lookupInDatabase()` — provides a simple promise-based operation for looking up the given `url` in the object store we created above. It resolves with the stored compiled module, or rejects with an error.

```js
  function lookupInDatabase(db) {
    return new Promise((resolve, reject) => {
      const store = db.transaction([storeName]).objectStore(storeName);
      const request = store.get(url);
      request.onerror = reject.bind(null, `Error getting wasm module ${url}`);
      request.onsuccess = (event) => {
        if (request.result) {
          resolve(request.result);
        } else {
          reject(`Module ${url} was not found in wasm cache`);
        }
      }
    });
  }
```

### Storing and instantiating modules

Next, we define a function `storeInDatabase()` that fires off an async operation to store a given wasm module in a given database.

```js
  function storeInDatabase(db, module) {
    const store = db.transaction([storeName], 'readwrite').objectStore(storeName);
    const request = store.put(module, url);
    request.onerror = (err) => { console.log(`Failed to store in wasm cache: ${err}`) };
    request.onsuccess = (err) => { console.log(`Successfully stored ${url} in wasm cache`) };
  }
```

### Using our helper functions

With all the Promise-based helper functions defined, we can now express the core logic of an IndexedDB cache lookup. We start by trying to open a database, then see if we already have a compiled Module with the key `url` stored in the given `db`:

```js
  return openDatabase().then((db) => {
    return lookupInDatabase(db).then((module) => {
```

If we do, we instantiate it with the given import object:

```js
      console.log(`Found ${url} in wasm cache`);
      return WebAssembly.instantiate(module, importObject);
    },
```

If not, we compile it from scratch and then store the compiled Module in the database with a key of URL, for next time we want to use it:

```js
    (errMsg) => {
      console.log(errMsg);
      return WebAssembly.instantiateStreaming(fetch(url)).then((results) => {
        storeInDatabase(db, results.module);
        return results.instance;
      });
    })
  },
```

> **Note:** It is for this kind of usage that {{jsxref("WebAssembly.instantiate()")}} returns both a {{jsxref("WebAssembly.Module()", "Module")}} and an {{jsxref("WebAssembly.Instance()", "Instance")}}: the Module represents the compiled code and can be stored/retrieved in IDB or shared between Workers via [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage); the Instance is stateful and contains the callable JavaScript functions, therefore it cannot be stored/shared.

If opening the database failed (for example due to permissions or quota), we fall back to fetching and compiling the module and don't try to store the results (since there is no database to store them into).

```js
  (errMsg) => {
    console.log(errMsg);
    return WebAssembly.instantiateStreaming(fetch(url)).then((results) => {
      return results.instance
    });
  });
}
```

## Caching a wasm module

With the above library function defined, getting a wasm module instance and using its exported features (while handling caching in the background) is as simple as calling it with the following parameters:

- A cache version, which — as we explained above — you need to update when any wasm module is updated or moved to a different URL.
- The URL of the wasm module you want to instantiate.
- An import object, if required.

```js
const wasmCacheVersion = 1;

instantiateCachedURL(wasmCacheVersion, 'test.wasm').then((instance) =>
  console.log(`Instance says the answer is: ${instance.exports.answer()}`)
).catch((err) =>
  console.error(`Failure to instantiate: ${err}`)
);
```

## Browser support

At the moment, this technique will work in Firefox and Edge, as they both have support for structured cloning of WebAssembly modules.

Chrome has support implemented behind the _WebAssembly structured cloning support_ flag, but is yet to turn it on by default because of some concerns ([see this discussion](https://github.com/WebAssembly/design/issues/972), for example).

Safari is still yet to implement.
