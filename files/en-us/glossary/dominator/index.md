---
title: Dominator
slug: Glossary/Dominator
tags:
  - CodingScripting
  - Glossary
---
<p>In graph theory, node A dominates node B if every path from the root node to B passes through A.</p>

<p>This concept is important for {{Glossary("garbage collection")}} because it means that B is only reachable through A. So if the garbage collector found A to be unreachable and eligible for reclaiming, than B would also be unreachable and eligible for reclaiming. So objects that A dominates contribute to the retained size of A: that is, the total amount of memory that could be freed if A itself were freed.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li>{{interwiki("wikipedia", "Dominator (graph theory)", "Dominator")}} on Wikipedia</li>
 <li><a href="/en-US/docs/Tools/Memory/Dominators">Dominators</a></li>
 <li><a href="/en-US/docs/Web/JavaScript/Memory_Management#garbage_collection">Garbage collection</a></li>
</ul>
