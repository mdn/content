---
title: id
slug: Web/Manifest/id
page-type: web-manifest-member
browser-compat: html.manifest.id
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
  </tbody>
</table>

The `id` member is a string that represents the _identity of the web application_ — the unique identifier for the web application. If the web application ID does not match an existing ID, the application will be treated as a unique identity even if it is from the same URL.

A valid `id` needs to be same-origin with `start_url`. If the `id` is a relative URL, it is resolved using the origin of [`start_url`](/en-US/docs/Web/Manifest/start_url). The fragment is always ignored.

If the `id` is unspecified or invalid in any way (such as not a string, not a valid URL, not same-origin with `start_url`), the `start_url` is used.

> **Note:** The `id` member can be used to uniquely identify applications. The `id` member is processed like a `start_url` but can be out of [scope](/en-US/docs/Web/Manifest/scope) because it does not point to a resource that can be navigated to.

## Examples

```json
"id": "?homescreen=1"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
