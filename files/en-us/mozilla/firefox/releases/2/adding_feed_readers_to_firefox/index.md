---
title: Adding feed readers to Firefox
slug: Mozilla/Firefox/Releases/2/Adding_feed_readers_to_Firefox
page-type: guide
---

{{FirefoxSidebar}}

Starting with Firefox 2, Firefox has support for selecting different RSS or Atom feed readers to use when you try to read a feed. This article provides information about how to add support for additional readers not supported by default.

## Adding a new web-based feed reader

### Adding a feed reader from a web application

Support for adding feed readers from the web was removed from the HTML5 spec, and Firefox support is scheduled for removal in Firefox 62. {{Deprecated_Inline}}

In older versions, JavaScript code on the web can add a feed reader easily, using the {{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler()")}} function, like this:

```js
navigator.registerContentHandler(
  "application/vnd.mozilla.maybe.feed",
  "https://www.example.com/?feed-feed=%s",
  "My Feed Reader",
);
```

Note that web content is limited to adding handler URLs which have the same origin as the page performing the call.

### Adding a new feed reader manually

Support for adding new feed readers was removed in Firefox 63. {{deprecated_inline}}.

Prior to Firefox 63, to add support for a new web-based feed reader, you would need to add three new preferences:

- `browser.contentHandlers.types.number.title`
  - : The name of the feed reader.
- `browser.contentHandlers.types.number.type`
  - : For a feed reader, this should be "application/vnd.mozilla.maybe.feed".
- `browser.contentHandlers.types.number.uri`
  - : The URI of the feed reader. Use "%s" where the URL of the feed should be inserted.

`number` should be replaced with the next highest unique number that hasn't already been used. For example, if you want to add a new feed reader called "Easy Reader", and there are already defined content handlers with numbers 0 through 4, you should use a `number` of 5, like this:

- `browser.contentHandlers.types.5.title`: `Easy Reader`
- `browser.contentHandlers.types.5.type`: `application/vnd.mozilla.maybe.feed`
- `browser.contentHandlers.types.5.uri`: `http://www.theeasyreaderurl.com?feed=%s`

You can add these preferences by hand, by visiting `about:config`.

### Adding a new feed reader application

The easiest way to do this is to use the provided user interface, by using the Feeds panel in the Preferences (or Options, depending on your platform) window.

### See also

- {{ domxref("window.navigator.registerContentHandler()") }}
