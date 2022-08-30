---
title: scope
slug: Web/Manifest/scope
tags:
  - Manifest
  - Web
  - scope
browser-compat: html.manifest.scope
---
{{QuickLinksWithSubpages("/en-US/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

The `scope` member is a string that defines the navigation scope of this web application's application context. It restricts what web pages can be viewed while the manifest is applied. If the user navigates outside the scope, it reverts to a normal web page inside a browser tab or window.

If the `scope` is a relative URL, the base URL will be the URL of the manifest.

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
