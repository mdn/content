---
title: Match patterns
slug: Mozilla/Add-ons/WebExtensions/Match_patterns
page-type: guide
browser-compat: webextensions.match_patterns.scheme
---

{{AddonSidebar}}

Match patterns are a way to specify groups of URLs: a match pattern matches a specific set of URLs. They are used in WebExtensions APIs in a few places, most notably to specify which documents to load [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) into, and to specify which URLs to add [`webRequest`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) listeners to.

APIs that use match patterns usually accept a list of match patterns, and will perform the appropriate action if the URL matches any of the patterns. See, for example, the [`content_scripts`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) key in manifest.json.

## Match pattern structure

> **Note:** Some browsers don't support certain schemes.
> Check the [Browser compatibility table](#browser_compatibility) for details.

All match patterns are specified as strings. Apart from the special [`<all_urls>`](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns#all_urls) pattern, match patterns consist of three parts: _scheme_, _host_, and _path_. The scheme and host are separated by `://`.

```
<scheme>://<host><path>
```

### scheme

The _scheme_ component may take one of two forms:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>
        Only "http" and "https" and in some browsers also
        <a href="/en-US/docs/Web/API/WebSockets_API">"ws" and "wss"</a>.
      </td>
    </tr>
    <tr>
      <td>
        One of <code>http</code>, <code>https</code>, <code>ws</code>,
        <code>wss</code>, <code>ftp</code>, <code>data</code>,
        <code>file</code>, or <code>(chrome-)extension</code>.
      </td>
      <td>Only the given scheme.</td>
    </tr>
  </tbody>
</table>

### host

The _host_ component may take one of three forms:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Form</th>
      <th scope="col">Matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>*</code></td>
      <td>Any host.</td>
    </tr>
    <tr>
      <td><code>*.</code> followed by part of the hostname.</td>
      <td>The given host and any of its subdomains.</td>
    </tr>
    <tr>
      <td>A complete hostname, without wildcards.</td>
      <td>Only the given host.</td>
    </tr>
  </tbody>
</table>

_host_ must not include a port number.

_host_ is optional only if the _scheme_ is "file".

Note that the wildcard may only appear at the start.

### path

The _path_ component must begin with a `/`.

After that, it may subsequently contain any combination of the `*` wildcard and any of the characters that are allowed in URL paths or query strings. Unlike _host_, the _path_ component may contain the `*` wildcard in the middle or at the end, and the `*` wildcard may appear more than once.

The value for the _path_ matches against the string which is the URL path plus the [URL query string](https://en.wikipedia.org/wiki/Query_string). This includes the `?` between the two, if the query string is present in the URL. For example, if you want to match URLs on any domain where the URL path ends with `foo.bar`, then you need to use an array of Match Patterns like `['*://*/*foo.bar', '*://*/*foo.bar?*']`. The `?*` is needed, rather than just `bar*`, in order to anchor the ending `*` as applying to the URL query string and not some portion of the URL path.

Neither the [URL fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier), nor the `#` which precedes it, are considered as part of the _path_.

> **Note:** The path pattern string should not include a port number. Adding a port, as in: `http://localhost:1234/*` causes the match pattern to be ignored. However, `http://localhost:1234` will match with `http://localhost/*`.

### \<all_urls>

The special value `<all_urls>` matches all URLs under any of the supported schemes: that is "http", "https", "ws", "wss", "ftp", "data", and "file".

## Examples

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Pattern</th>
      <th scope="col">Example matches</th>
      <th scope="col">Example non-matches</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>&#x3C;all_urls></code></p>
        <p>Match all URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
        <p><code>ftp://files.somewhere.org/</code></p>
      </td>
      <td>
        <p><code>resource://a/b/c/</code><br />(unsupported scheme)</p>
        <p>
          <code>ftps://files.somewhere.org/</code><br />(unsupported scheme)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*/*</code></p>
        <p>Match all HTTP, HTTPS and WebSocket URLs.</p>
      </td>
      <td>
        <p><code>http://example.org/</code></p>
        <p><code>https://a.org/some/path/</code></p>
        <p><code>ws://sockets.somewhere.org/</code></p>
        <p><code>wss://ws.example.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.example.org/</code><br />(unmatched scheme)</p>
        <p><code>file:///a/</code><br />(unmatched scheme)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://*.mozilla.org/*</code></p>
        <p>
          Match all HTTP, HTTPS and WebSocket URLs that are hosted at
          "mozilla.org" or one of its subdomains.
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>http://a.mozilla.org/</code></p>
        <p><code>http://a.b.mozilla.org/</code></p>
        <p><code>https://b.mozilla.org/path/</code></p>
        <p><code>ws://ws.mozilla.org/</code></p>
        <p><code>wss://secure.mozilla.org/something</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>http://mozilla.com/</code><br />(unmatched host)</p>
        <p><code>http://firefox.org/</code><br />(unmatched host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>*://mozilla.org/</code></p>
        <p>
          Match all HTTP, HTTPS and WebSocket URLs that are hosted at exactly
          "mozilla.org/".
        </p>
      </td>
      <td>
        <p><code>http://mozilla.org/</code></p>
        <p><code>https://mozilla.org/</code></p>
        <p><code>ws://mozilla.org/</code></p>
        <p><code>wss://mozilla.org/</code></p>
      </td>
      <td>
        <p><code>ftp://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>http://a.mozilla.org/</code><br />(unmatched host)</p>
        <p><code>http://mozilla.org/a</code><br />(unmatched path)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>ftp://mozilla.org/</code></p>
        <p>Match only "ftp://mozilla.org/".</p>
      </td>
      <td><code>ftp://mozilla.org</code></td>
      <td>
        <p><code>http://mozilla.org/</code><br />(unmatched scheme)</p>
        <p><code>ftp://sub.mozilla.org/</code><br />(unmatched host)</p>
        <p><code>ftp://mozilla.org/path</code><br />(unmatched path)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path</code></p>
        <p>Match HTTPS URLs on any host, whose path is "path".</p>
      </td>
      <td>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://a.mozilla.org/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.org/path/</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/path?foo=1</code><br />(unmatched path due
          to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          Match HTTPS URLs on any host, whose path is "path/" and which has no
          URL query string.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/path/</code></p>
        <p><code>https://a.mozilla.org/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p><code>http://mozilla.org/path/</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.org/path</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/path/?foo=1</code
          ><br />(unmatched path due to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*</code></p>
        <p>
          Match HTTPS URLs only at "mozilla.org", with any URL path and URL
          query string.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/</code></p>
        <p><code>https://mozilla.org/path</code></p>
        <p><code>https://mozilla.org/another</code></p>
        <p><code>https://mozilla.org/path/to/doc</code></p>
        <p><code>https://mozilla.org/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p><code>http://mozilla.org/path</code><br />(unmatched scheme)</p>
        <p><code>https://mozilla.com/path</code><br />(unmatched host)</p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p>Match only this URL, or this URL with any URL fragment.</p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/a/b/c/#section1</code></p>
      </td>
      <td>Anything else.</td>
    </tr>
    <tr>
      <td>
        <p><code>https://mozilla.org/*/b/*/</code></p>
        <p>
          Match HTTPS URLs hosted on "mozilla.org", whose path contains a
          component "b" somewhere in the middle. Will match URLs with query
          strings, if the string ends in a <code>/</code>.
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/a/b/c/</code></p>
        <p><code>https://mozilla.org/d/b/f/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/</code></p>
        <p><code>https://mozilla.org/a/b/c/d/#section1</code></p>
        <p><code>https://mozilla.org/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://mozilla.org/a?foo=21314&#x26;bar=/b/&#x26;extra=c/</code
          >
        </p>
      </td>
      <td>
        <p><code>https://mozilla.org/b/*/</code><br />(unmatched path)</p>
        <p><code>https://mozilla.org/a/b/</code><br />(unmatched path)</p>
        <p>
          <code>https://mozilla.org/a/b/c/d/?foo=bar</code><br />(unmatched path
          due to URL query string)
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>file:///blah/*</code></p>
        <p>Match any FILE URL whose path begins with "blah".</p>
      </td>
      <td>
        <p><code>file:///blah/</code></p>
        <p><code>file:///blah/bleh</code></p>
      </td>
      <td><code>file:///bleh/</code><br />(unmatched path)</td>
    </tr>
  </tbody>
</table>

### Invalid match patterns

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Invalid pattern</th>
      <th scope="col">Reason</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>resource://path/</code></td>
      <td>Unsupported scheme.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org</code></td>
      <td>No path.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.*.org/</code></td>
      <td>"*" in host must be at the start.</td>
    </tr>
    <tr>
      <td><code>https://*zilla.org/</code></td>
      <td>"*" in host must be the only character or be followed by ".".</td>
    </tr>
    <tr>
      <td><code>http*://mozilla.org/</code></td>
      <td>"*" in scheme must be the only character.</td>
    </tr>
    <tr>
      <td><code>https://mozilla.org:80/</code></td>
      <td>Host must not include a port number.</td>
    </tr>
    <tr>
      <td><code>*://*</code></td>
      <td>Empty path: this should be "<code>*://*/*</code>".</td>
    </tr>
    <tr>
      <td><code>file://*</code></td>
      <td>Empty path: this should be "<code>file:///*</code>".</td>
    </tr>
  </tbody>
</table>

## Browser compatibility

{{Compat}}
