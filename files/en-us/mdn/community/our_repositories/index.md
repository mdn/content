---
title: MDN GitHub repositories
short-title: GitHub repositories
slug: MDN/Community/Our_repositories
page-type: mdn-community-guide
sidebar: mdnsidebar
---

MDN Web Docs is a complex project with lots of moving parts.
It's a good idea to get familiar with the different code repositories.
This document describes the repositories (repos) you may need when contributing to MDN Web Docs.

## Main repositories

- [content](https://github.com/mdn/content)
  - : This is where all the English content of the site is maintained, and where you'll make all changes to page content, prose, and in-page code examples.
- [rari](https://github.com/mdn/rari)
  - : The **backend** of the MDN Web Docs platform, where you'll go if you want to make changes to page structures, templating, and rendering machinery.
- [yari](https://github.com/mdn/yari)
  - : The **frontend** of MDN Web Docs, where you'll find styles, design, and layout functionality.
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
  - : Data used to generate the browser compatibility tables found on our reference pages.
    If you have information about browser compatibility of Web features — or are willing and able to do some research and/or experimentation — you can help update MDN's [Browser Compatibility Data](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)
- [translated-content](https://github.com/mdn/translated-content)
  - : This is where localized content lives.
    Go here if you want to help translate pages into any of our [actively maintained locales](https://github.com/mdn/translated-content#locales).

### Infrastructure

- [rumba](https://github.com/mdn/rumba)
  - : A back-end system that powers MDN Plus.
- [workflows](https://github.com/mdn/workflows)
  - : A collection of reusable GitHub Actions for use on MDN Web Docs repositories.

### Planning and coordination

These are repository used for project planning, documenting the project itself, and community projects.

- [mdn/mdn](https://github.com/mdn/mdn)
  - : Project proposals and planning issues are maintained here.
- [mdn-community](https://github.com/mdn/mdn-community)
  - : This repository hosts GitHub Discussions when writers and contributors need to decide how to proceed with writing or technical decisions.

## Code examples

These generally contain standalone code examples that are too big or cannot be rendered using the [`EmbedLiveSample`](/en-US/docs/MDN/Writing_guidelines/Page_structures/Live_samples#live_sample_macros) macro.

> [!NOTE]
> If you are updating the code on any given page, check if it's referenced in a corresponding example repo and, if so, make sure you've updated the example repo as well.

- [learning-area](https://github.com/mdn/learning-area)
- [dom-examples](https://github.com/mdn/dom-examples)
- [css-examples](https://github.com/mdn/css-examples)
- [webaudio-examples](https://github.com/mdn/webaudio-examples)
- [webassembly-examples](https://github.com/mdn/webassembly-examples)
- [indexeddb-examples](https://github.com/mdn/indexeddb-examples)
- [js-examples](https://github.com/mdn/js-examples)
- [html-examples](https://github.com/mdn/html-examples)
- [web-components-examples](https://github.com/mdn/web-components-examples)
- [webextension-examples](https://github.com/mdn/webextensions-examples)
- [pwa-examples](https://github.com/mdn/pwa-examples)
- [houdini-examples](https://github.com/mdn/houdini-examples)
- [headless-examples](https://github.com/mdn/headless-examples)
- [perf-examples](https://github.com/mdn/perf-examples)
