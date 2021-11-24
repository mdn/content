---
title: Where is everything on MDN? A guide to our repos
slug: MDN/Contribute/Where_is_everything
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Repos
---
{{MDNSidebar}}

MDN is a complex project with lots of moving parts. Contributing to the site is easy to begin with, if you have a bit of GitHub knowledge and are starting out on some simple typo fixes or code snippet improvements. However, when you start making more significant contributions such as adding entire new pages, you'll notice that there are quite a few bits of the content that aren't stored in the page sources and instead come from somewhere else.

This article acts as a quick guide to finding the different repos you need to edit to update the different parts of MDN content.

## Core repos

- **Core content**: <https://github.com/mdn/content>. The most important repo for MDN content — this is where all the core English content of the site is stored, and where you'll make all standard changes to page content.
- **MDN Platform**: <https://github.com/mdn/yari>. This is where the MDN platform is stored, and where you'll go if you want to make changes to MDN's high level page structure or rendering machinery.
- **Browser compat data**: <https://github.com/mdn/browser-compat-data>. This is where the data used to generate the browser compatibility tables found on our reference pages is stored (example). Go here to make compat data changes!
- **Interactive examples**: <https://github.com/mdn/interactive-examples>. This repo stores the rendering code and example code blocks that together produce the nice editable, copyable examples found at the top of many of our reference pages (example). Edit those examples here.
- **Translated content**: <https://github.com/mdn/translated-content>. This is where localized content lives. Go here if you want to help translate pages into any of our actively maintained locales.
- **CSS data**: <https://github.com/mdn/data>. Originally envisaged as a hold-all repo for general purpose MDN data, the data repo now serves the purpose of holding data about CSS features such as formal syntax, inheritance, computed value, animation type, etc. This is used to generate sections on CSS reference pages such as formal definition (example) and formal syntax (example).

## Other repos

- **Demo repos**. The MDN GitHub org contains a huge number of demo repos, for example [css-examples](https://github.com/mdn/css-examples), [dom-examples](https://github.com/mdn/dom-examples), [webaudio-examples](https://github.com/mdn/webaudio-examples). These generally contain free-standing examples that are often linked to from MDN pages, but occasionally you'll find one of these examples embedded into a page using a macro call like this — \\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}. If you want to edit a standalone live example, it will always be found in one of these example repos.
- **MDN-minimalist**: <https://github.com/mdn/mdn-minimalist>. The base styling information for MDN. If you want to help improve MDN's CSS styling, this is the place to visit.
