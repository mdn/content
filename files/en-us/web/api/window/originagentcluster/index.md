---
title: "Window: originAgentCluster property"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
page-type: web-api-instance-property
browser-compat: api.Window.originAgentCluster
---

{{APIRef}}{{SeeCompatTable}}

The **`originAgentCluster`** read-only property of the {{domxref("Window")}} interface returns `true` if this window belongs to an [agent cluster](https://tc39.es/ecma262/#sec-agent-clusters) (a maximal set of agents that can communicate by operating on shared memory, every agent belongs to exactly one agent cluster) which is origin-keyed.

A Document delivered over a {{Glossary("secure context")}} environment can request that it be placed in an origin-keyed agent cluster, by using the `Origin-Agent-Cluster` HTTP response header. This will result Document's [agent cluster key](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-key) to be its origin, instead of the corresponding site. So attempting to relax the {{Glossary("same-origin policy")}} restriction editing `document.domain` property will take no effect.

Note that within a browsing context group, same-origin Document objects can never end up in different agent clusters. This means that the `originAgentCluster` of Document is usually decided by whether the previously-loaded same-origin page has set `Origin-Agent-Cluster` HTTP response header or not.

Documents with an [opaque origin](https://html.spec.whatwg.org/multipage/browsers.html#concept-origin-opaque) or the[cross-origin isolation mode](https://html.spec.whatwg.org/multipage/webappapis.html#agent-cluster-cross-origin-isolation) of Documents' agent cluster is not `none` are considered as origin-keyed and the `originAgentCluster` property will always return `true`, no matter whether the `Origin-Agent-Cluster` HTTP response header is set or not.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Agent Clusters](https://tc39.es/ecma262/#sec-agent-clusters)
