---
title: Code splitting
slug: Glossary/Code_splitting
page-type: glossary-definition
---

{{GlossarySidebar}}

**Code splitting** is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.

As an application becomes more complex or undergoes maintenance, the CSS and JavaScript files, or bundles, tend to increase in size, particularly when incorporating numerous and sizable third-party libraries. To mitigate the need to download excessively large files, it can be benficial to split scripts into smaller files. By doing so, essential features required during the page load can be promptly downloaded, while additional scripts can be [lazy loaded](/en-US/docs/Glossary/Lazy_load) after the page or application has become interactive. This approach enhances performance, even if the overall code size remains the same, and may even result in a slight increase in byte size. The key benefit lies in reducing the amount of code necessary during the initial load.

Code splitting is a feature supported by bundlers like [Webpack](https://webpack.js.org/) and [Browserify](https://browserify.org/) which can create multiple bundles that can be dynamically loaded at runtime.

## See also

- Bundling
- [Lazy loading](/en-US/docs/Web/Performance/Lazy_loading)
- [HTTP/2](/en-US/docs/Glossary/HTTP_2)
- [Tree shaking](/en-US/docs/Glossary/Tree_shaking)
