---
title: dns.resolve()
slug: Mozilla/Add-ons/WebExtensions/API/dns/resolve
page-type: webextension-api-function
browser-compat: webextensions.api.dns.resolve
---

{{AddonSidebar}}

Resolves the given hostname to a DNS record.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let resolving = browser.dns.resolve(
  hostname,    // string
  flags        // array of string
)
```

### Parameters

- `hostname`
  - : `string`. The hostname to resolve.
- `flags` {{optional_inline}}

  - : `array` of `string`. Flags to modify the way the hostname is resolved. Any omitted flags default to `false`. You can pass zero or more of the following flags:

    - `"allow_name_collisions"`: Allow name collision results which are normally filtered out.
    - `"bypass_cache"`: Suppresses the internal DNS lookup cache.
    - `"canonical_name"`: The canonical name of the specified host will be queried.
    - `"disable_ipv4"`: Only IPv6 addresses will be returned.
    - `"disable_ipv6"`: Only IPv4 addresses will be returned.
    - `"disable_trr"`: Do not use the Trusted Recursive Resolver (TRR) for resolving the host name. A TRR enables resolving of host names using a dedicated [DNS-over-HTTPS](https://datatracker.ietf.org/doc/html/draft-ietf-doh-dns-over-https-02) server.
    - `"offline"`: Only literals and cached entries will be returned.
    - `"priority_low"`: The request is given lower priority. If "priority_medium" is also given, the query is given medium priority.
    - `"priority_medium"`: The request is given medium priority. If "priority_low" is also given, the query is given medium priority.
    - `"speculate"`: Indicates that the request is speculative. Speculative requests return errors if prefetching is disabled by the browser's configuration.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with a `DNSRecord` object. This object can contain the following properties:

- `addresses`
  - : `array` of `string`. The IP addresses associated with this DNS record.
- `canonicalName`
  - : `string`. The canonical name for this record. This is only included in the response if the `"canonical_name"` flag was passed to `resolve()`.
- `isTRR`
  - : `boolean`: `true` if the record was retrieved using a Trusted Recursive Resolver (TRR).

## Browser compatibility

{{Compat}}

## Examples

```js
function resolved(record) {
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("example.com");
resolving.then(resolved);

// > e.g. Array [ "192.0.2.172" ]
```

Bypass the cache, and ask for the canonical name:

```js
function resolved(record) {
  console.log(record.canonicalName);
  console.log(record.addresses);
}

let resolving = browser.dns.resolve("developer.mozilla.org", [
  "bypass_cache",
  "canonical_name",
]);
resolving.then(resolved);

// > e.g. xyz.us-west-2.elb.amazonaws.com
// > e.g. Array [ "192.0.2.172", "198.51.100.45" ]
```

{{WebExtExamples}}
