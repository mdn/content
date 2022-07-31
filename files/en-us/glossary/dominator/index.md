---
title: Dominator
slug: Glossary/Dominator
tags:
  - CodingScripting
  - Glossary
---
In graph theory, node A dominates node B if every path from the root node to B passes through A.

This concept is important for {{Glossary("garbage collection")}} because it means that B is only reachable through A. So if the garbage collector found A to be unreachable and eligible for reclaiming, than B would also be unreachable and eligible for reclaiming. So objects that A dominates contribute to the retained size of A: that is, the total amount of memory that could be freed if A itself were freed.

## See also

- [Dominator](https://en.wikipedia.org/wiki/Dominator_(graph_theory)) on Wikipedia
- [Dominators](https://firefox-source-docs.mozilla.org/devtools-user/memory/dominators/index.html)
- [Garbage collection](/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection)
