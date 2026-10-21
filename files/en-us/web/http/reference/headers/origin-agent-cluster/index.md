---
title: Origin-Agent-Cluster header
short-title: Origin-Agent-Cluster
slug: Web/HTTP/Reference/Headers/Origin-Agent-Cluster
page-type: http-header
browser-compat: http.headers.Origin-Agent-Cluster
sidebar: http
---

The HTTP **`Origin-Agent-Cluster`** {{Glossary("response header")}} is used to request that the associated {{domxref("Document")}} should be placed in an origin-keyed [agent cluster](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing).
This means that operating system resources (for example, the operating system process) used to evaluate the document should be shared only with other documents from the same {{glossary("origin")}}.

The effect of this is that a resource-intensive document will be less likely to degrade the performance of documents from other origins.

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
  - : `?1` requests an origin-keyed agent cluster. The effect of `?0` depends on the
    browser: Chrome 115 and later use it to opt out of origin-keying by default for
    documents in secure contexts that are not cross-origin isolated, while browsers
    that do not implement this behavior may ignore it.

## Description

Modern web browsers have a multiprocess architecture in which pages from different origins can run in different operating system processes. This is important for performance, because it means that a resource-intensive page will not have as much of an impact on other pages that the user has open.

However, browsers can't as a general rule run {{glossary("site", "same-site")}}, {{glossary("origin", "cross-origin")}} pages in different processes, because of certain DOM APIs that depend on same-site, cross-origin communication. For example, by default, pages from the following two origins will share the same operating system resources:

```plain
https://apples.example.org
https://oranges.example.org
```

By setting the `Origin-Agent-Cluster` header, a page can request that the browser allocate dedicated resources to this origin that are not shared with any other origins.

Since Chrome 115, documents in secure contexts are origin-keyed by default, even if this
header is omitted. In Chrome, an explicit `Origin-Agent-Cluster: ?0` requests a site-keyed
agent cluster instead, except for cross-origin isolated documents. The default behavior
may differ in other browsers.

The browser is not required to honor the request. If it does, the {{domxref("Window.originAgentCluster")}} property returns `true`, and the window is not able to do the following things, which all depend on same-site, cross-origin communication:

- Use {{domxref("Document.domain")}}.
- Send [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects to other same-site cross-origin pages using {{domxref("Window.postMessage()", "postMessage()")}}.
- Send {{jsxref("SharedArrayBuffer")}} or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects to other same-site cross-origin pages.

Origin-keyed agent clusters should not be viewed as a security feature: browsers may ignore the request for various reasons, or choose to implement it in a way that does not provide memory protection (for example, using separate threads instead of separate processes). Instead, this feature is a hint that the user experience would be improved if this origin were allocated dedicated resources.

For example, suppose your site includes a page from one origin that embeds a same-site, cross-origin iframe which runs a resource-intensive game. By setting `Origin-Agent-Cluster` on the document in the iframe, you can prevent the game from affecting the performance of the main page.

The browser will ensure that all pages from a given origin are either origin-keyed or they are not.
Because the default behavior varies by browser, the result can depend on the first page from
an origin loaded in a browsing context group. For example:

- In browsers where an absent header does not request origin-keying, if the first page from an
  origin omits the header, then no other pages from that origin will be origin-keyed, even if
  they set `?1`.
- If the first page from an origin is origin-keyed, because the browser defaults to origin-keying
  or because the page sets `?1` and the browser honors it, then other pages from that origin
  will also be origin-keyed, whether or not they set the header.

To avoid unpredictable behavior across browsers, configure all pages from an origin consistently
and test the behavior in each browser you support.

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
- [Agent clusters and memory sharing](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing) in _JavaScript execution model_
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster) on web.dev
