---
title: Origin-Agent-Cluster
slug: Web/HTTP/Headers/Origin-Agent-Cluster
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Origin-Agent-Cluster
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP **`Origin-Agent-Cluster`** {{Glossary("response header")}} is used to request that the associated {{domxref("Document")}} should be placed in an **origin-keyed [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)**. This means that operating system resources (for example, the operating system process) used to evaluate the document should be shared only with other documents from the same {{glossary("origin")}}.

The effect of this is that a resource-intensive document will be less likely to degrade the performance of documents from other origins.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Origin-Agent-Cluster: <boolean>
```

### Directives

- `<boolean>`
  - : `?1` indicates that the associated {{domxref("Document")}} should be placed in an origin-keyed agent cluster.
    Values other than `?1` are ignored (e.g., the `?0` structured field for false).

## Description

Modern web browsers have a multiprocess architecture in which pages from different origins can run in different operating system processes. This is important for performance, because it means that a resource-intensive page will not have as much of an impact on other pages that the user has open.

However, browsers can't as a general rule run {{glossary("site", "same-site")}}, {{glossary("origin", "cross-origin")}} pages in different processes, because of certain DOM APIs that depend on same-site, cross-origin communication. For example, by default, pages from the following two origins will share the same operating system resources:

```plain
https://apples.example.org
https://oranges.example.org
```

By setting the `Origin-Agent-Cluster` header, a page can request that the browser allocate dedicated resources to this origin that are not shared with any other origins.

The browser is not required to honor the request. If it does, the {{domxref("Window.originAgentCluster")}} property returns `true`, and the window is not able to do the following things, which all depend on same-site, cross-origin communication:

- Use {{domxref("Document.domain")}}.
- Send [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects to other same-site cross-origin pages using {{domxref("Window.postMessage()", "postMessage()")}}.
- Send {{jsxref("SharedArrayBuffer")}} or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects to other same-site cross-origin pages.

Origin-keyed agent clusters should not be viewed as a security feature: browsers may ignore the request for various reasons, or choose to implement it in a way that does not provide memory protection (for example, using separate threads instead of separate processes). Instead, this feature is a hint that the user experience would be improved if this origin were allocated dedicated resources.

For example, suppose your site includes a page from one origin that embeds a same-site, cross-origin iframe which runs a resource-intensive game. By setting `Origin-Agent-Cluster` on the document in the iframe, you can prevent the game from affecting the performance of the main page.

The browser will ensure that all pages from a given origin are either origin-keyed or they are not. This means that:

- If the first page from an origin does not set the header, then no other pages from that origin will be origin-keyed, even if those other pages do set the header.
- If the first page from an origin sets the header and is made origin-keyed, then all other pages from that origin will be origin-keyed whether they ask for it or not.

To avoid this kind of unpredictable situation, you should set this header for all pages from a given origin, or none of them.

## Examples

```http
Origin-Agent-Cluster: ?1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.originAgentCluster")}}
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster) on web.dev
