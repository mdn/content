---
title: Code splitting
slug: Glossary/Code_splitting
page-type: glossary-definition
---

{{GlossarySidebar}}

**Code splitting** is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.

As an application grows in complexity or is maintained, CSS and JavaScripts files or bundles grow in byte size, especially as the number and size of included third-party libraries increases. To prevent the requirement of downloading ginormous files, scripts can be split into multiple smaller files. Then features required at page load can be downloaded immediately with additional scripts being [lazy loaded](/en-US/docs/Glossary/Lazy_load) after the page or application is interactive, thus improving performance. While the total amount of code is the same (and perhaps even a few bytes larger), the amount of code needed during initial load can be reduced.

Code splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/) and [Browserify](https://browserify.org/) which can create multiple bundles that can be dynamically loaded at runtime.

## See also

- Bundling
- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
- [Tree shaking](/en-US/docs/Glossary/Tree_shaking)
