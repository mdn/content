---
title: "Window: originAgentCluster property"
short-title: originAgentCluster
slug: Web/API/Window/originAgentCluster
page-type: web-api-instance-property
browser-compat: api.Window.originAgentCluster
---

{{APIRef}}{{SeeCompatTable}}

The **`originAgentCluster`** read-only property of the {{domxref("Window")}} interface returns `true` if this window belongs to an agent cluster (a maximal set of agents that can communicate by operating on shared memory, every agent belongs to exactly one agent cluster) which is origin-keyed.

A Document delivered over a secure context can request that it be placed in an origin-keyed agent cluster, by using the `Origin-Agent-Cluster` HTTP response header. The consequences are that the resulting Document's agent cluster key is its origin, instead of the corresponding site. In terms of observable effects, this means that attempting to relax the [same-origin](/en-US/docs/Web/Security/Same-origin_policy) restriction using `document.domain` will instead do nothing, and it will not be possible to send WebAssembly.Module objects to [cross-origin](/en-US/docs/Web/HTTP/CORS) Documents (even if they are same site). Behind the scenes, this isolation can allow user agents to allocate implementation-specific resources corresponding to agent clusters, such as processes or threads, more efficiently.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
