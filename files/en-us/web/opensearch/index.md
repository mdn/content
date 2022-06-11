---
title: OpenSearch description format
slug: Web/OpenSearch
tags:
  - Add-ons
  - Guide
  - OpenSearch
  - Search
  - Search plugins
  - Web
  - Web Standards
---
{{AddonSidebar}}

The **[OpenSearch description format](https://github.com/dewitt/opensearch)** lets a website describe a search engine for itself, so that a browser or other client application can use that search engine. OpenSearch is supported by (at least) Firefox, Edge, Internet Explorer, Safari, and Chrome. (See [Reference Material](#reference_material) for links to other browsers' documentation.)

Firefox also supports additional features not in the OpenSearch standard, such as search suggestions and the `<SearchForm>` element. This article focuses on creating OpenSearch-compatible search plugins that support these additional Firefox features.

OpenSearch description files can be advertised as described in [Autodiscovery of search plugins](#autodiscovery_of_search_plugins), and can be installed programmatically.

> **Warning:** OpenSearch plugins can't be uploaded anymore on [addons.mozilla.org](https://addons.mozilla.org) (AMO). Search engine feature must use WebExtension API with [chrome settings](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/chrome_settings_overrides) in `manifest.json` file.

## OpenSearch description file

The XML file that describes a search engine follows the basic template below. Sections in _\[square brackets]_ should be customized for the specific plugin you're writing.

```xml
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
                       xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>[SNK]</ShortName>
  <Description>[Search engine full name and summary]</Description>
  <InputEncoding>[UTF-8]</InputEncoding>
  <Image width="16" height="16" type="image/x-icon">[https://example.com/favicon.ico]</Image>
  <Url type="text/html" template="[searchURL]"/>
  <Url type="application/x-suggestions+json" template="[suggestionURL]"/>
  <moz:SearchForm>[https://example.com/search]</moz:SearchForm>
</OpenSearchDescription>
```

- ShortName
  - : A short name for the search engine. It must be **16 or fewer character**s of plain text, with no HTML or other markup.
- Description
  - : A brief description of the search engine. It must be **1024 or fewer characters** of plain text, with no HTML or other markup.
- InputEncoding
  - : The [character encoding](/en-US/docs/Glossary/character_encoding) to use when submitting input to the search engine.
- Image

  - : URL of an icon for the search engine. When possible, include a 16×16 image of type `image/x-icon` (such as `/favicon.ico`) and a 64×64 image of type `image/jpeg` or `image/png`.

    The URL may also use the [`data:` URL scheme](/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs). (You can generate a `data:` URL from an icon file at [The `data:` URL kitchen](https://software.hixie.ch/utilities/cgi/data/data).)

    ```xml
    <Image height="16" width="16" type="image/x-icon">https://example.com/favicon.ico</Image>
      <!-- or -->
    <Image height="16" width="16">data:image/x-icon;base64,AAABAAEAEBAAA … DAAA=</Image>
    ```

    Firefox caches the icon as a [base64](https://en.wikipedia.org/wiki/Base64) `data:` URL (search plug-ins are stored in the [profile](/en-US/docs/Mozilla/Profile_Manager)'s `searchplugins/` folder). `http:` and `https:` URLs are converted to `data:` URLs when this is done.

    > **Note:** For icons loaded remotely (that is, from `https://` URLs as opposed to `data:` URLs), Firefox will reject icons larger than **10 kilobytes**.

    ![Search suggestions from Google displayed in Firefox's search box](searchsuggestionsample.png)

- Url

  - : Describes the URL or URLs to use for the search. The `template` attribute indicates the base URL for the search query.

    Firefox supports three URL types:

    - `type="text/html"` specifies the URL for the actual search query.
    - `type="application/x-suggestions+json"` specifies the URL for fetching search suggestions. In Firefox 63 onwards, `type="application/json"` is accepted as an alias of this.
    - `type="application/x-moz-keywordsearch"` specifies the URL used when a keyword search is entered in the location bar. This is supported only in Firefox.

    For these URL types, you can use `{searchTerms}` to substitute the search terms entered by the user in the search bar or location bar. Other supported dynamic search parameters are described in [OpenSearch 1.1 parameters](https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-11-parameters).

    For search suggestions, the `application/x-suggestions+json` URL template is used to fetch a suggestion list in [JSON](/en-US/docs/Glossary/JSON) format. For details on how to implement search suggestion support on a server, see [Supporting search suggestions in search plugins](/en-US/docs/Archive/Add-ons/Supporting_search_suggestions_in_search_plugins).

- moz:SearchForm

  - : The URL for the site's search initiation page for the plugin. This lets Firefox users visit the web site, and search from the site directly.

    > **Note:** Since this element is Firefox-specific, and not part of the OpenSearch specification, we use the `moz:` XML namespace prefix in the example above to ensure that other user agents that don't support this element can safely ignore it.

## Autodiscovery of search plugins

Web sites with search plugins can advertise them so Firefox users can easily install the plugins.

To support autodiscovery, add a `<link>` element for each plugin to the `<head>` of your web page:

```html
<link rel="search"
      type="application/opensearchdescription+xml"
      title="searchTitle"
      href="pluginURL">
```

Replace the bolded items as explained below:

- searchTitle
  - : The name of the search to perform, such as "Search MDC" or "Yahoo! Search". This must match your plugin file's `<ShortName>`.
- pluginURL
  - : The URL to the XML search plugin, so the browser can download it.

If your site offers multiple search plugins, you can support autodiscovery for them all. For example:

```html
<link rel="search" type="application/opensearchdescription+xml"
      title="MySite: By Author" href="http://example.com/mysiteauthor.xml">

<link rel="search" type="application/opensearchdescription+xml"
      title="MySite: By Title" href="http://example.com/mysitetitle.xml">
```

This way, your site can offer plugins to search by author, or by title.

> **Note:** In Firefox, an icon change in the search box indicates there's a provided search plugin. (See image, the green plus sign.) Thus if a search box is not shown in the user's UI, they will receive _no_ indication. _In general, behavior varies among browsers_.

## Supporting automatic updates for OpenSearch plugins

OpenSearch plugins can automatically update. To support this, include an extra `Url` element with `type="application/opensearchdescription+xml"` and `rel="self"`. The `template` attribute should be the URL of the OpenSearch document to automatically update to.

For example:

```xml
<Url type="application/opensearchdescription+xml"
     rel="self"
     template="https://example.com/mysearchdescription.xml" />
```

> **Note:** At this time, [addons.mozilla.org](https://addons.mozilla.org) (AMO) doesn't support automatic updating of OpenSearch plugins. If you want to put your search plugin on AMO, remove the auto-updating feature before submitting it.

## Troubleshooting Tips

If there is a mistake in your Search Plugin XML, you could run into errors when adding a discovered plugin. If the error message isn't be helpful, the following tips could help you find the problem.

- Your server should serve OpenSearch plugins using `Content-Type: application/opensearchdescription+xml`.
- Be sure that your Search Plugin XML is well formed. You can check by loading the file directly into Firefox. Ampersands (&) in the `template` URL must be escaped as `&amp;`, and tags must be closed with a trailing slash or matching end tag.
- The `xmlns` attribute is important — without it you could get the error message "Firefox could not download the search plugin".
- You **must** include a `text/html` URL — search plugins including only Atom or [RSS](/en-US/docs/Glossary/RSS) URL types (which is valid, but Firefox doesn't support) will also generate the "could not download the search plugin" error.
- Remotely fetched favicons must not be larger than 10KB (see {{ Bug(361923) }}).

In addition, the search plugin service provides a logging mechanism that may be useful to plugin developers. Use `about:config` to set the pref '`browser.search.log`' to `true`. Then, logging information will appear in Firefox's [Error Console](/en-US/docs/Archive/Mozilla/Error_console) (Tools ➤ Error Console) when search plugins are added.

## Reference Material

- [OpenSearch Documentation](https://github.com/dewitt/opensearch)
- [Safari 8.0 Release Notes: Quick Website Search](https://developer.apple.com/library/archive/releasenotes/General/WhatsNewInSafari/Articles/Safari_8_0.html)
- [Microsoft Edge Dev Guide: Search provider discovery](https://docs.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/)
- [The Chromium Projects: Tab to Search](https://www.chromium.org/tab-to-search/)
- imdb.com has a [working `osd.xml`](https://m.media-amazon.com/images/G/01/imdb/images/imdbsearch-3349468880._CB470047351_.xml)
- [Ready2Search](https://ready.to/search/en/) - create OpenSearch plugins. [Customized Search through Ready2Search](https://ready.to/search/make/en_make_plugin.htm)
