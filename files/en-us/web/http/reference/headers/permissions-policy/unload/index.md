---
title: "Permissions-Policy: unload directive"
short-title: unload
slug: Web/HTTP/Reference/Headers/Permissions-Policy/unload
page-type: http-permissions-policy-directive
status:
  - experimental
  - non-standard
browser-compat: http.headers.Permissions-Policy.unload
sidebar: http
---

{{SeeCompatTable}}{{non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `unload` directive controls whether the current document is allowed to run [`unload`](/en-US/docs/Web/API/Window/unload_event) event handlers.

Where a defined policy disallows use of this feature, `unload` event handlers registered in the document will not run.

`unload` handlers are unreliable and prevent pages from being stored in the [back/forward cache](https://web.dev/articles/bfcache) (bfcache). Blocking them lets a page stay eligible for the bfcache, even if third-party scripts in the page add `unload` handlers. See the [usage notes for the `unload` event](/en-US/docs/Web/API/Window/unload_event#usage_notes) for alternatives.

## Syntax

```http
Permissions-Policy: unload=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

In Chrome, the default allowlist for `unload` is `()`, which means that `unload` handlers do not run unless a document opts in. Chrome originally used a default allowlist of `*`, and [changed it gradually](https://developer.chrome.com/docs/web-platform/deprecating-unload).

## Examples

### Blocking unload handlers

A site wants to make sure that no `unload` handlers run in its pages or in any of their embedded iframes, so that the pages remain eligible for the bfcache. It can do so by delivering the following HTTP response header:

```http
Permissions-Policy: unload=()
```

### Allowing unload handlers

A site that still depends on `unload` handlers can allow them to run in its top-level pages by delivering the following HTTP response header:

```http
Permissions-Policy: unload=self
```

To also allow `unload` handlers in a cross-origin iframe whose origin is `https://example.com`, the embedding page must include that origin in its allowlist:

```http
Permissions-Policy: unload=(self "https://example.com")
```

It must also include an {{HTMLElement('iframe','allow','#allow')}} attribute on the `<iframe>` element:

```html
<iframe src="https://example.com/embed" allow="unload"></iframe>
```

The document loaded in the iframe must also allow `unload` handlers, using its own `Permissions-Policy: unload=self` response header.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Window/unload_event", "unload")}} event
- [Deprecating the unload event](https://developer.chrome.com/docs/web-platform/deprecating-unload) on developer.chrome.com
