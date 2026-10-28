---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
page-type: http-header
browser-compat: http.headers.Origin-Agent-Cluster
sidebar: http
---

The HTTP **`Origin-Agent-Cluster`** {{Glossary("response header")}} is used to request that the associated {{domxref("Document")}} should be placed in an origin-keyed or site-keyed [agent cluster](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing).
This determines whether operating system resources (such as operating system processes or threads) used to evaluate the document should be isolated to only other documents from the same {{glossary("origin")}}, or shared with same-site, cross-origin documents.

Agent clusters are **origin-keyed by default**. The `Origin-Agent-Cluster` header is primarily used with `?0` to opt out of origin-keying, or explicitly with `?1` to request origin-keying.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Directives

- `<boolean>`
  - : A structured boolean value indicating the requested agent cluster scoping:
    - `?1`
      - : Requests that the associated {{domxref("Document")}} should be placed in an origin-keyed agent cluster (the default behavior).
    - `?0`
      - : Requests an opt-out from origin-keying, relaxing the document's execution environment to a site-keyed agent cluster. This re-enables cross-origin same-site communication, such as setting {{domxref("Document.domain")}} and sharing [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) or {{jsxref("SharedArrayBuffer")}} objects across same-site pages.

## Description

Modern web browsers have a multiprocess architecture in which pages from different origins can run in different operating system processes. This is important for performance, because it means that a resource-intensive page will not have as much of an impact on other pages that the user has open.

However, browsers historically ran {{glossary("site", "same-site")}}, {{glossary("origin", "cross-origin")}} pages in the same agent cluster, because of certain DOM APIs that depend on same-site, cross-origin communication. For example, historically, pages from the following two origins would share the same operating system resources:

```plain
https://apples.example.org
https://oranges.example.org
```

Browsers place documents in origin-keyed agent clusters by default. This isolates same-site cross-origin documents from each other and prevents:

- Using the {{domxref("Document.domain")}} setter.
- Sending [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects to other same-site cross-origin pages using {{domxref("Window.postMessage()", "postMessage()")}}.
- Sending {{jsxref("SharedArrayBuffer")}} or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects to other same-site cross-origin pages.

If an existing website relies on cross-origin same-site communication (such as `document.domain` or cross-origin `SharedArrayBuffer` sharing), it can deliver `Origin-Agent-Cluster: ?0` to opt out of origin isolation and restore legacy site-keyed agent clustering.

Origin-keyed agent clusters should not be viewed as a security boundary: browsers may ignore the request for various reasons, or choose to implement it in a way that does not provide memory protection (for example, using separate threads instead of separate processes).

The browser will ensure that all pages from a given origin are either origin-keyed or they are not. This means that:

- If the first page loaded from an origin opts out using `?0`, subsequent pages from that origin will also be site-keyed.
- To avoid unpredictable behavior, you should set this header consistently for all pages from a given origin.

## Examples

### Requesting origin-keying

```http
Origin-Agent-Cluster: ?1
```

### Opting out of origin-keying to allow cross-origin same-site communication

```http
Origin-Agent-Cluster: ?0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.originAgentCluster")}}
- [Agent clusters and memory sharing](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) in _JavaScript execution model_
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster) on web.dev
