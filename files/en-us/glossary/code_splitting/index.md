---
title: Code splitting
slug: Glossary/Code_splitting
tags:
  - Glossary
  - Reference
  - Web Performance
  - code splitting
  - latency
---
<p><strong>Code splitting</strong> is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.</p>

<p>As an application grows in complexity or is maintained, CSS and JavaScripts files or  bundles grow in byte size, especially as the number and size of included third-party libraries increases. To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. Then features required at page load can be downloaded immediately with additional scripts being <a href="/en-US/docs/Glossary/Lazy_load">lazy loaded</a> after the page or application is interactive, thus improving performance. While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed during initial load can be reduced.</p>

<p>Code splitting is a feature supported by bundlers like <a href="https://webpack.js.org/">Webpack</a> and <a href="http://browserify.org/">Browserify</a> which can create multiple bundles that can be dynamically loaded at runtime.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Bundling</li>
 <li><a href="/en-US/docs/Web/Performance/Lazy_loading">Lazy loading</a></li>
 <li><a href="/en-US/docs/Glossary/HTTP_2">HTTP/2</a></li>
 <li><a href="/en-US/docs/Glossary/Tree_shaking">Tree shaking</a></li>
</ul>
