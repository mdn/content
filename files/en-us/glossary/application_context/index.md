---
title: Application Context
slug: Glossary/application_context
tags:
  - CodingScripting
  - Glossary
---
<p>An <strong>application context</strong> is a top-level <a href="/en-US/docs/Glossary/Browsing_context">browsing context</a> that has a <a href="/en-US/docs/Web/Manifest">manifest</a> applied to it. </p>

<p>If an application context is created as a result of the user agent being asked to navigate to a deep link, the user agent must immediately navigate to the deep link with replacement enabled. Otherwise, when the application context is created, the user agent must immediately navigate to the start URL with replacement enabled.</p>

<p>Please note that the start URL is not necessarily the value of the start_url member: the user or user agent could have changed it when the application was added to home-screen or otherwise bookmarked.</p>
