---
title: scope
slug: Web/Manifest/scope
page-type: web-manifest-member
browser-compat: html.manifest.scope
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

The `scope` member is a string that defines the navigation scope of this web application's application context. It restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it reverts to a normal web page inside a browser tab or window.

A valid `scope` needs to allow [`start_url`](/en-US/docs/Web/Manifest/start_url) to be in scope. If the `scope` is a relative URL, the base URL will be the URL of the manifest. The query and fragment of the URL are always ignored.

If `scope` is unspecified or invalid in any way (such as not a string, not a valid URL, or causes `start_url` to be out of scope), the `start_url` is used, with its last path segment removed.

## Examples

If the scope is relative, the manifest URL is used as a base URL:

```json
"scope": "/app/"
```

The following scope limits navigation to the current site:

```json
"scope": "https://example.com/"
```

Finally, the following example limits navigation to a subdirectory of the current site:

```json
"scope": "https://example.com/subdirectory/"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
