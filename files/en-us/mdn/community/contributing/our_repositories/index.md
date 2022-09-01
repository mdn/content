---
title: MDN Web Docs Repositories
slug: MDN/Community/Contributing/Our_repositories
page-type: mdn-community-guide
tags:
  - meta
  - community-guidelines
  - governance
---
{{MDNSidebar}}

[MDN Web Docs](https://developer.mozilla.org) is a complex project with lots of moving parts. It's a good idea to get familiar with the projects different repositories. This document intends to help you find the different repositories (repos) you may need when contributing to different parts of the MDN Web Docs project.

## Repository tiers

### Tier 1

Code in these repositories is core to the MDN Web Docs project and runs on Mozilla-owned domains.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

A Tier 1 project should have at least 3 members, including at least two with admin permissions.

### Tier 2

These repositories are mainly concentrated on supporting content such as code examples, the MDN Web Docs learn area, localization, and examples projects. Examples include:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

A Tier 2 project should have at least 2 members, including at least one with admin permissions.

### Tier 3

These are repository used for project planning, documenting the project itself, and community engagement. Examples include:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects).

A Tier 3 project needs 1 admin.

## Core repos

- **Core content**: <https://github.com/mdn/content>. The most important repo for MDN Web Docs content — this is where all the core English content of the site is stored, and where you'll make all standard changes to page content.
- **MDN Web Docs Platform**: <https://github.com/mdn/yari>. This is where the MDN Web Docs platform is stored, and where you'll go if you want to make changes to our high level page structure or rendering machinery.
- **Browser compatibility data**: <https://github.com/mdn/browser-compat-data>. This is where the data used to generate the browser compatibility tables found on our reference pages is stored ([example](/en-US/docs/Web/HTML/Element/progress#browser_compatibility)). If you have information about browser compatibility of Web features — or are willing and able to do some research and/or experimentation — you can help update MDN's [Browser Compatibility Data](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md)
- **Interactive examples**: <https://github.com/mdn/interactive-examples>. This repo stores the example code blocks that are found at the top of many of our reference pages ([example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Edit those examples here.
- **Bob** aka Builder of Bits: <https://github.com/mdn/bob>
  This repo stores the rendering code that produce the nice editable, copyable examples found at the top of many of our reference pages ([example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Translated content**: <https://github.com/mdn/translated-content>. This is where localized content lives. Go here if you want to help translate pages into any of our [actively maintained locales](https://github.com/mdn/translated-content#locales).
- **Workflows**: <https://github.com/mdn/workflows>
  A growing collection of reusable GitHub Actions for use on MDN Web Docs repositories.

## Code example

### Code examples and demos

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

The MDN Web Docs GitHub org contains a huge number of example repos. These generally contain free-standing code examples that are often linked to from our pages, but occasionally you'll find one of these examples embedded into a page using a macro call like this — `{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

Always remember, if you are updating the code on any given page, you'll need to update the corresponding example repo as well.

- [**dom-examples**](https://github.com/mdn/dom-examples)
- [**css-examples**](https://github.com/mdn/css-examples)
- [**webaudio-examples**](https://github.com/mdn/webaudio-examples)
- [**webassembly-examples**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-examples**](https://github.com/mdn/indexeddb-examples)
- [**js-examples**](https://github.com/mdn/js-examples)
- [**html-examples**](https://github.com/mdn/html-examples)
- [**web-components-examples**](https://github.com/mdn/web-components-examples)
- [**webextension-examples**](https://github.com/mdn/webextensions-examples)
- [**pwa-examples**](https://github.com/mdn/pwa-examples)
- [**houdini-examples**](https://github.com/mdn/houdini-examples)
- [**headless-examples**](https://github.com/mdn/headless-examples)
- [**perf-examples**](https://github.com/mdn/perf-examples)
- [**devtools-examples**](https://github.com/mdn/devtools-examples)
