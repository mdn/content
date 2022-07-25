---
title: IndexedDB API
slug: Web/API/IndexedDB_API
page-type: web-api-overview
tags:
  - API
  - Advanced
  - Database
  - IndexedDB
  - Landing
  - Reference
  - Storage
spec-urls: https://w3c.github.io/IndexedDB/
---
{{DefaultAPISidebar("IndexedDB")}}

IndexedDB is a low-level API for client-side storage of significant amounts of structured data, including files/blobs. This API uses indexes to enable high-performance searches of this data. While [Web Storage](/en-US/docs/Web/API/Web_Storage_API) is useful for storing smaller amounts of data, it is less useful for storing larger amounts of structured data. IndexedDB provides a solution. This is the main landing page for MDN's IndexedDB coverage — here we provide links to the full API reference and usage guides, browser support details, and some explanation of key concepts.

{{AvailableInWorkers}}

> **Note:** IndexedDB API is powerful, but may seem too complicated for simple cases. If you'd prefer a simple API, try libraries in [See also](#see_also) section that make IndexedDB more programmer-friendly.

## Key concepts and usage

IndexedDB is a transactional database system, like an SQL-based RDBMS. However, unlike SQL-based RDBMSes, which use fixed-column tables, IndexedDB is a JavaScript-based object-oriented database. IndexedDB lets you store and retrieve objects that are indexed with a **key**; any objects supported by the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) can be stored. You need to specify the database schema, open a connection to your database, and then retrieve and update data within a series of **transactions**.

- Read more about [IndexedDB key characteristics and basic terminology](/en-US/docs/Web/API/IndexedDB_API/Basic_Terminology).
- Learn to use IndexedDB asynchronously from first principles with our [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) guide.
- Combine IndexedDB for storing data offline with Service Workers for storing assets offline, as outlined in [Making PWAs work offline with Service workers](/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers).

> **Note:** Like most web storage solutions, IndexedDB follows a [same-origin policy](https://www.w3.org/Security/wiki/Same_Origin_Policy). So while you can access stored data within a domain, you cannot access data across different domains.

### Synchronous and asynchronous

Operations performed using IndexedDB are done asynchronously, so as not to block applications.

### Storage limits and eviction criteria

There are a number of web technologies that store data of one kind or another on the client side (i.e. on your local disk). IndexedDB is most commonly talked about. The process by which the browser works out how much space to allocate to web data storage and what to delete when that limit is reached is not simple, and differs between browsers. [Browser storage limits and eviction criteria](/en-US/docs/Web/API/IndexedDB_API/Browser_storage_limits_and_eviction_criteria) attempts to explain how this works, at least in the case of Firefox.

## Interfaces

To get access to a database, call [`open()`](/en-US/docs/Web/API/IDBFactory/open) on the [`indexedDB`](/en-US/docs/Web/API/indexedDB) attribute of a [window](/en-US/docs/Web/API/Window) object. This method returns an {{domxref("IDBRequest")}} object; asynchronous operations communicate to the calling application by firing events on {{domxref("IDBRequest")}} objects.

### Connecting to a database

- {{domxref("IDBFactory")}}
  - : Provides access to a database. This is the interface implemented by the global object {{domxref("indexedDB")}}  and is therefore the entry point for the API.
- {{domxref("IDBOpenDBRequest")}}
  - : Represents a request to open a database.
- {{domxref("IDBDatabase")}}
  - : Represents a connection to a database. It's the only way to get a transaction on the database.

### Retrieving and modifying data

- {{domxref("IDBTransaction")}}
  - : Represents a transaction. You create a transaction on a database, specify the scope (such as which object stores you want to access), and determine the kind of access (read only or readwrite) that you want.
- {{domxref("IDBRequest")}}
  - : Generic interface that handles database requests and provides access to results.
- {{domxref("IDBObjectStore")}}
  - : Represents an object store that allows access to a set of data in an IndexedDB database, looked up via primary key.
- {{domxref("IDBIndex")}}
  - : Also allows access to a subset of data in an IndexedDB database, but uses an index to retrieve the record(s) rather than the primary key. This is sometimes faster than using {{domxref("IDBObjectStore")}}.
- {{domxref("IDBCursor")}}
  - : Iterates over object stores and indexes.
- {{domxref("IDBCursorWithValue")}}
  - : Iterates over object stores and indexes and returns the cursor's current value.
- {{domxref("IDBKeyRange")}}
  - : Defines a key range that can be used to retrieve data from a database in a certain range.
- {{domxref("IDBLocaleAwareKeyRange")}} {{Non-standard_inline}}
  - : Defines a key range that can be used to retrieve data from a database in a certain range, sorted according to the rules of the locale specified for a certain index (see [`createIndex()`'s optionalParameters](/en-US/docs/Web/API/IDBObjectStore/createIndex#parameters).).  This interface isn't part of the 2.0 specification.

### Custom event interfaces

This specification fires events with the following custom interface:

- {{domxref("IDBVersionChangeEvent")}}
  - : The `IDBVersionChangeEvent` interface indicates that the version of the database has changed, as the result of an {{domxref("IDBOpenDBRequest.upgradeneeded_event", "IDBOpenDBRequest.onupgradeneeded")}} event handler function.

## Examples

- [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](https://mdn.github.io/to-do-notifications/)): The reference application for the examples in the reference docs.

## Specifications

{{Specifications}}

## See also

- [localForage](https://localforage.github.io/localForage/): A Polyfill providing a simple name:value syntax for client-side data storage, which uses IndexedDB in the background, but falls back to WebSQL and then localStorage in browsers that don't support IndexedDB.
- [Dexie.js](https://dexie.org/): A wrapper for IndexedDB that allows much faster code development via nice, simple syntax.
- [ZangoDB](https://github.com/erikolson186/zangodb): A MongoDB-like interface for IndexedDB that supports most of the familiar filtering, projection, sorting, updating and aggregation features of MongoDB.
- [JsStore](https://jsstore.net/): An IndexedDB wrapper with SQL like syntax.
- [MiniMongo](https://github.com/mWater/minimongo): A client-side in-memory mongodb backed by localstorage with server sync over http. MiniMongo is used by MeteorJS.
- [PouchDB](https://pouchdb.com): A client-side implementation of CouchDB in the browser using IndexedDB
- [idb](https://www.npmjs.com/package/idb): A tiny (\~1.15k) library that mostly mirrors the IndexedDB API, but with small improvements that make a big difference to usability.
- [idb-keyval](https://www.npmjs.com/package/idb-keyval):  A super-simple-small (\~600B) promise-based keyval store implemented with IndexedDB
- [sifrr-storage:](https://www.npmjs.com/package/@sifrr/storage) A small (\~2kB) promise based library for client side key-value storage. Works with IndexedDB, localStorage, WebSQL, Cookies. Can automatically use supported storage available based on priority.
- [lovefield](https://github.com/google/lovefield): Lovefield is a relational database for web apps. Written in JavaScript, works cross-browser. Provides SQL-like APIs that are fast, safe, and easy to use.
- [$mol_db](https://github.com/hyoo-ru/mam_mol/tree/master/db): Tiny (\~1.3kB) TypeScript facade with promise-based API and automatic migrations.
