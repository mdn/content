---
title: "`storage` module"
short-title: storage
slug: Web/WebDriver/Reference/BiDi/Modules/storage
page-type: listing-page
browser-compat: webdriver.bidi.storage
sidebar: webdriver
---

The **`storage`** module contains commands for managing [cookies](/en-US/docs/Glossary/Cookie) in [storage partitions](#storage_partitions), including setting, retrieving, and deleting cookies.

## Storage partitions

A storage partition is a [namespace](/en-US/docs/Glossary/Namespace) in which a browser organizes stored data, such as cookies and local storage, to keep it separate from data in other partitions.
Although a partition can contain different kinds of data, the commands in the `storage` module of WebDriver BiDi operate on its **cookie store**, the collection of cookies within that partition.

## Partition keys

A partition key is a set of attributes that uniquely identifies a storage partition.
A browser may support additional, browser-specific partition key attributes beyond the standard [`sourceOrigin`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies#sourceorigin) and [`userContext`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies#usercontext) attributes.

The partition key attributes, their default values, and which attributes are required depend on the storage partitioning model used by a browser.
If a required attribute has no default value, the client must supply it when selecting a partition by its attributes.

## Commands

- [`storage.deleteCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/deleteCookies)
- [`storage.getCookies`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/getCookies)
- [`storage.setCookie`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/storage/setCookie)

## Events

The `storage` module has no associated events.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP cookies](/en-US/docs/Web/HTTP/Guides/Cookies) guide
- [State partitioning](/en-US/docs/Web/Privacy/Guides/State_Partitioning) guide
- [`browser`](/en-US/docs/Web/WebDriver/Reference/BiDi/Modules/browser) module
