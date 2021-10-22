---
title: Blocking By Domain
slug: Plugins/Blocking_By_Domain
---
Plugins such as Flash are a performance and security problem for Firefox users. However, some legacy Flash content hasn't yet been ported to HTML and is valuable to users. Rather than block plugins entirely, Firefox is limiting the impact of plugins by blocking certain domains from using plugins. These blocks improve Firefox security and performance and also make the click-to-activate feature more valuable to users by reducing unnecessary prompts.

> **Note:** According to the Firefox plugin [roadmap](/en-US/docs/Plugins/Roadmap), the plugin block list is planned for Firefox 55.

## Effects of Plugin Blocking

Once a site is included in plugin blocking, it is not possible for that site or any subframes within that site to use plugins. Any attempt to use a plugin (via the [\<object>](/en-US/docs/Web/HTML/Element/object) or [\<embed>](/en-US/docs/Web/HTML/Element/embed) element) will behave as if the plugin was not installed, and use fallback content as specified by the [HTML standard](https://html.spec.whatwg.org/multipage/dom.html#fallback-content). Plugin detection mechanisms such as [navigator.mimeTypes](/en-US/docs/Web/API/NavigatorPlugins/mimeTypes) and [navigator.plugins](/en-US/docs/Web/API/NavigatorPlugins/plugins) will also behave as if the plugin were not installed.

There are two versions of plugin blocking:

- First-party Plugin Blocking List
  - : Sites on this list may not use plugins.
- Third-party Plugin Block List
  - : Sites on this list may not use plugins when they are loaded into a third-party iframe in another site.

## Criteria

In order to improve Firefox security and performance, there are two major categories of sites Mozilla may choose to add to plugin domain blocking:

- Sites commonly embedded in a 3rd-party context
  - : Web sites which are commonly embedded into other sites using iframes can have a large impact on browser security and also cause many sites to show plugin activation prompts. Sites in this category may include advertisers, social media sites, and other utilities.
- Top sites
  - : Many popular sites work properly without plugins, but still prompt users for activation. In order to improve site performance and reduce the number of plugin prompts that users see, popular sites that show unnecessary plugin prompts or slow the browser down with unnecessary plugins will be added to the plugin block list.

## List Contents and Updates

The plugin block lists are freely-licensed lists maintained by Mozilla [in github](https://github.com/mozilla-services/shavar-plugin-blocklist/). The initial contents of the third-party plugin block list are based on Disconnect's [open source blocklist](https://github.com/disconnectme/disconnect-tracking-protection). Subsequent updates to the list will be made using telemetry from Firefox experiments. In general, sites will not be removed from the list unless there is an error that renders a site in a seriously defective manner.

Any concerns or questions about the plugin block lists should be directed to plugin-blocking-by-domain\@mozilla.com.
