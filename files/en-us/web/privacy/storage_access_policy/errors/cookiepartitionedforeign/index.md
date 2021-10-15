---
title: 'Partitioned: All third-party storage access requests'
slug: Web/Privacy/Storage_access_policy/Errors/CookiePartitionedForeign
tags:
  - Cookies
  - Errors
  - Storage
  - storage access policy
  - tracking
---

<h2 id="Message">Message</h2>

<p>Firefox:</p>

<pre class="syntaxbox">CookiePartitionedForeign=Partitioned cookie
or storage access was provided to “&lt;URL&gt;” because it is loaded in the
third-party context and storage partitioning is enabled.</pre>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>A request to access cookies or storage was <em>partitioned</em> because it
came from a third-party (a different origin) and
<a href="/en-US/docs/Web/Privacy/State_Partitioning#dynamic_state_partitioning">
  dynamic state partitioning
</a> is enabled.</p>
<p>With Dynamic State Partitioning enabled, Firefox provides embedded resources with a
separate storage bucket for every top-level website. Embedded third-parties may
request access to the top-level storage bucket via the <a
href="/en-US/docs/Web/Privacy/State_Partitioning#storage_access_api">Storage Access API</a>.
You can also <a
href="/en-US/docs/Web/Privacy/State_Partitioning#disable_dynamic_state_partitioning">disable
Dynamic State Partitioning</a> with the
<code>network.cookie.cookieBehavior</code> pref.</p>

<h2 id="See_also">See also</h2>
<ul>
 <li><a href="/en-US/docs/Web/Privacy/State_Partitioning">State Partitioning</a></li>
</ul>
