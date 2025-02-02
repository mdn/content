---
title: "Window: originAgentCluster property"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Window.originAgentCluster
---

{{APIRef}}{{SeeCompatTable}}

The **`originAgentCluster`** read-only property of the {{domxref("Window")}} interface returns `true` if this window belongs to an _origin-keyed [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters)_: this means that the operating system has provided dedicated resources (for example an operating system process) to this window's origin that are not shared with windows from other origins.

Otherwise this property returns `false`.

Windows that are part of an origin-keyed agent cluster are subjects to some additional restrictions, compared with windows that are not. In particular, they cannot:

- Set {{domxref("Document.domain")}}, which is a legacy feature that normally allows same-site cross-origin pages to synchronously access each other's DOM.
- Send [`WebAssembly.Module`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Module) objects to other same-site cross-origin pages via {{domxref("Window.postMessage()")}}.
- Send {{jsxref("SharedArrayBuffer")}} or [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) objects to other same-site cross-origin pages.

To request that the browser assign this window to an origin-keyed agent cluster, the server must send the {{httpheader("Origin-Agent-Cluster")}} response header.

Note that the origin-keyed agent cluster feature is only supported in {{glossary("Secure Context", "secure contexts")}}. If a site is not a secure context, the `window.originAgentCluster` will always return `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{httpheader("Origin-Agent-Cluster")}} HTTP response header
- [Requesting performance isolation with the Origin-Agent-Cluster header](https://web.dev/articles/origin-agent-cluster)
