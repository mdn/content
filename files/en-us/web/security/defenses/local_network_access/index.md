---
title: Local network access
slug: Web/Security/Defenses/Local_network_access
page-type: guide
sidebar: security
---

**Local network access** places restrictions on the ability of websites to make requests to the user's local network, mitigating the risk of attacks such as cross-site request forgeries. This article explains how local network access works, and what web developers need to do to interact with it.

## Background

There are a number of scenarios in which a site might want to make a request to a local network. For example:

- A website accessing a local device to retrieve diagnostic information when troubleshooting it.
- A website accessing a local device to provide configuration details during a setup procedure.
- A website connecting to a local site (such as an intranet) to provide authentication information, or as part of test environment.

Allowing local network access comes with risks — attackers can use such requests to initiate [cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks against local network devices such as routers and printers, and fingerprint the user's local network. Local network access mitigates these risks, controlling local network access via a set of permission prompts and {{httpheader("Permissions-Policy")}} directives.

## Address spaces

Local network access defines three different **address spaces**, which all network addresses are categorised under:

- Local
  - : A local address is only accessible on the local network: Its target will differ on different networks. For example, `http://192.168.0.1`.
- Loopback
  - : A loopback address is only accessible on the local device: Its target will differ on every device. For example, `127.0.0.1`, which is generally known as `localhost`.
- Public
  - : A public web address is available from anywhere on the internet: Its target is the same for all devices globally on the IP network. For example, `https://example.com`.

Depending on which address space a request URL is categorised in, the browser will handle its permissions differently.

## What request types are effected?

Local network access restrictions apply to:

- Subresource requests
- {{domxref("Window.fetch", "fetch()")}} requests
- Navigating subframes
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
- [WebTransport](/en-US/docs/Web/API/WebTransport_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)

## Local network access permissions

In browsers that support local network access, loopback and local requests are gated behind specific permissions — `local-network` and `loopback-network`, respectively. This means that when a website makes a request to a local IP or loopback address, or a local website (for example, an intranet) makes a request to a loopback address, the user will be shown a permission dialog asking them to allow or deny the request.

You can check on the permission status using the {{domxref("Permissions.query()")}} method, for example to check whether a local request will succeed and advise the user accordingly:

```js
navigator.permissions.query({ name: "local-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

```js
navigator.permissions.query({ name: "loopback-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

The permissions are restricted to secure contexts. On non-secure contexts, all requests will fail.

## Relaxing mixed content

If granted, the permissions additionally relax [mixed content](/en-US/docs/Web/Security/Defenses/Mixed_content) blocking for local network requests. This is useful because many local devices are not able to obtain publicly trusted TLS certificates for various reasons. For example, it allows public websites to access local testing servers or devices running on HTTP.

To explicitly tell supporting browsers to skip mixed content checks, set the {{domxref("Request.targetAddressSpace")}} property to `local` or `loopback` on new requests (via the {{domxref("Request.Request", "Request()")}} constructor or directly in the {{domxref("Window.fetch", "fetch()")}} method).

For example:

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback
```

This is needed in cases where a URL is a public domain address, but ends up resolving to a local network address, such as `http://example.com`.

Some addresses such as private IP literals (such as `http://192.168.0.1`) and `local` addresses (such as `http://router.local`) are exempt from mixed content checks, so don't need the `targetAddressSpace` property to be set.

## Local network access permissions policies

You can control local network access to local and loopback addresses at the document level using the {{httpheader('Permissions-Policy/local-network','local-network')}} and {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} directives.

The default allowlist for these directives is `self`, which means that requests will be allowed in the current document and embedded browsing contexts in the same origin only. To allow local or loopback requests at the document level for a particular origin, use these directives in an `Permissions-Policy` HTTP header:

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

Or in an `<iframe>` [`allow`](/en-US/docs/Web/HTML/Reference/Elements/iframe#allow) attribute for an embedded document:

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

When a local network request is made from the embedded document, it will be treated as though the embedding document had requested the local network access permission, and any permission decision by the user will be tied to the embedding document's origin. If the document inside the `<iframe>` navigates to other documents that also make local network requests, then you must specify all their origins in the permission policy.

For example, if `https://example.com` navigated the `<iframe>` to `https://example2.com`, and both `https://example.com` and `https://example2.com` made local network access requests, you would need to explicitly delegate the permission to both origins as follows:

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

You could also specify `allow="local-network *"` to allow any origin loaded in the `<iframe>` to make local network requests. For example, this can be useful in cases where an `<iframe>` makes arbitrary redirects to another origin (such as for SSO) before redirecting back to `localhost`.

## The `local-network-access` alias

Local network access was originally implemented with the {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} permission, which was used to control network requests to both local and loopback addresses together. This was updated to the more granular {{httpheader('Permissions-Policy/local-network','local-network')}} and {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} permissions, which you should use going forward.

However, the `local-network-access` permission continues to be supported for backwards-compatibility, as an alias of `local-network` and `loopback-network`.

### Permission status for `local-network-access`

When querying the permission status of `local-network-access`, for example:

```js
navigator.permissions.query({ name: "local-network-access" })
.then((result) => { ... });
```

The returned result is a combination of the state of the two more recent permissions. If only one of `local-network` or `loopback-network` has a non-`prompt` state, that value will be returned. If either permission was previously `denied`, then the `local-network-access` permission will also return `denied`. The following table summarizes all possible permission results:

| `local-network` permission | `loopback-network` permission | `local-network-access` permission |
| -------------------------- | ----------------------------- | --------------------------------- |
| `allowed`                  | `allowed`                     | `allowed`                         |
| `allowed`                  | `prompt`                      | `allowed`                         |
| `allowed`                  | `denied`                      | `denied`                          |
| `prompt`                   | `allowed`                     | `allowed`                         |
| `prompt`                   | `prompt`                      | `prompt`                          |
| `prompt`                   | `denied`                      | `denied`                          |
| `denied`                   | `allowed`                     | `denied`                          |
| `denied`                   | `prompt`                      | `denied`                          |
| `denied`                   | `denied`                      | `denied`                          |

### Permission policy for `local-network-access`

Setting a permissions policy for `local-network-access` is equivalent to setting a permissions policy for both `local-network` and `loopback-network` simultaneously.

For example, the `allow` attribute shown here:

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

is equivalent to:

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

If you need to allow all forms of the permissions policy in an `<iframe>` for backwards-compatibility purposes, you can specify either

```html
<iframe
  src="https://example.com"
  allow="local-network-access; local-network; loopback-network"></iframe>
```

or

```html
<iframe
  src="https://example.com"
  allow="local-network-access *; local-network *; loopback-network *"></iframe>
```

## See also

- [Cross-site request forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attack
- {{httpheader('Permissions-Policy/local-network','local-network')}} and {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} directives
- {{domxref("Request.targetAddressSpace")}}
