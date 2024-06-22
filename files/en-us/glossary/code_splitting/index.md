---
title: Code splitting
slug: Glossary/Code_splitting
page-type: glossary-definition
---

{{GlossarySidebar}}

**Code splitting** is the practice of splitting the code a web application depends on — including its own code and any third-party dependencies — into separate bundles that can be loaded independently of each other.
This allows an application to load only the code it actually needs at a given point in time, and load other bundles on demand.
This approach is used to improve application performance, especially on initial load.

Code splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/) and [Browserify](https://browserify.org/) which can create multiple bundles that can be dynamically loaded at runtime.

## See also

- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
- [Tree shaking](/en-US/docs/Glossary/Tree_shaking)
