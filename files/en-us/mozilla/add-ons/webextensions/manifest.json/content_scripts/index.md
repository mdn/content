---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
page-type: webextension-manifest-key
browser-compat: webextensions.manifest.content_scripts
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json">
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Instructs the browser to load [content scripts](/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) into web pages whose URL matches a given pattern.

This key is an array. Each item is an object which:

- **must** contain a key named **`matches`**, which specifies the URL patterns to be matched in order for the scripts to be loaded;
- **may** contain keys named **`js`** and **`css`**, which list scripts and/or stylesheets to be loaded into matching pages; and
- **may** contain a number of other properties that control finer aspects of how and when content scripts are loaded.

Details of all the keys you can include are given in the table below.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a id="all_frames"><code>all_frames</code></a>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <dl>
          <dt><code>true</code></dt>
          <dd>
            <p>
              Inject the scripts specified in
              <code><a href="#js">js</a></code> and
              <code><a href="#css">css</a></code> into all frames matching the
              specified URL requirements, even if the frame is not the topmost
              frame in a tab. This does not inject into child frames where only
              their parent matches the URL requirements and the child frame does
              not match the URL requirements. The URL requirements are checked
              for each frame independently.
            </p>
            <div class="notecard note">
              <p>
                <strong>Note:</strong> This also applies to any tracker or ad
                that uses iframes, which means that enabling this could make
                your content script get called dozens of times on some pages.
              </p>
            </div>
          </dd>
          <dt><code>false</code></dt>
          <dd>
            Inject only into frames matching the URL requirements which are the
            topmost frame in a tab.
          </dd>
        </dl>
        <p>Defaults to <code>false</code>.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          An array of paths, relative to <code>manifest.json</code>, referencing
          CSS files that will be injected into matching pages.
        </p>
        <p>
          Files are injected in the order given, and at the time specified by
          <code><a href="#run_at">run_at</a></code
          >.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> Firefox resolves URLs in injected CSS files
            relative to the CSS file itself, rather than to the page it's
            injected into.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        An array of strings containing wildcards. See
        <a href="#matching_url_patterns">Matching URL patterns</a> below.
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        An array of
        <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
          >match patterns</a
        >. See <a href="#matching_url_patterns">Matching URL patterns</a> below.
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        An array of strings containing wildcards. See
        <a href="#matching_url_patterns">Matching URL patterns</a> below.
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          An array of paths, relative to <code>manifest.json</code>, referencing
          JavaScript files that will be injected into matching pages.
        </p>
        <p>
          Files are injected in the order given. This means that, for example,
          if you include jQuery here followed by another content script, like
          this:
        </p>
        <pre class="brush: json">
"js": ["jquery.js", "my-content-script.js"]</pre
        >
        <p>Then, <code>"my-content-script.js"</code> can use jQuery.</p>
        <p>
          The files are injected after any files in
          <code><a href="#css">css</a></code
          >, and at the time specified by
          <code><a href="#run_at">run_at</a></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_about_blank">match_about_blank</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          Insert the content scripts into pages whose URL is
          <code>"about:blank"</code> or <code>"about:srcdoc"</code>, if the URL
          of the page that opened or created this page
          <a href="#matching_url_patterns">matches the patterns</a> specified in
          the rest of the <code>content_scripts</code> key.
        </p>
        <p>
          This is especially useful to run scripts in empty iframes, whose URL
          is <code>"about:blank"</code>. To do this you should also set the
          <code>all_frames</code> key.
        </p>
        <p>
          For example, suppose you have a <code>content_scripts</code> key like
          this:
        </p>
        <pre class="brush: json">
  "content_scripts": [
    {
      "js": ["my-script.js"],
      "matches": ["https://example.org/"],
      "match_about_blank": true,
      "all_frames": true
    }
  ]</pre
        >
        <p>
          If the user loads <code>https://example.org/</code>, and this page
          embeds an empty iframe, then <code>"my-script.js"</code> will be
          loaded into the iframe.
        </p>
        <div class="notecard note">
          <p>
            <strong>Note:</strong> <code>match_about_blank</code> is supported
            in Firefox from version 52.
          </p>
          <p>
            Note that in Firefox, content scripts won't be injected into empty
            iframes at <code>"document_start"</code>, even if you specify that
            value in <code><a href="#run_at">run_at</a></code> .
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_origin_as_fallback">match_origin_as_fallback</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        When <code>true</code>, code is injected into <code>about:</code>, <code>data:</code>, and <code>blob:</code> pages when their origin matches the pattern in <code>matches</code>, even if the document origin is opaque (due to the use of CSP or iframe sandbox). Match patterns in <code>matches</code> must specify a wildcard path glob. Defaults to <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          An array of
          <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >match patterns</a
          >. See
          <a href="#matching_url_patterns">Matching URL patterns</a> below.
        </p>
        <p>This is the only mandatory key.</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          This option determines when the files specified in
          <code><a href="#css">css</a></code> and
          <code><a href="#js">js</a></code> are injected. You can supply one of
          three strings here, each of which identifies a state in the process of
          loading a document. The states directly correspond to
          {{domxref("Document/readyState", "Document.readyState")}}:
        </p>
        <dl>
          <dt><code>"document_start"</code></dt>
          <dd>
            Corresponds to <code>loading</code>. The DOM is still loading.
          </dd>
          <dt><code>"document_end"</code></dt>
          <dd>
            Corresponds to <code>interactive</code>. The DOM has finished
            loading, but resources such as scripts and images may still be
            loading.
          </dd>
          <dt><code>"document_idle"</code></dt>
          <dd>
            Corresponds to <code>complete</code>. The document and all its
            resources have finished loading.
          </dd>
        </dl>
        <p>The default value is <code>"document_idle"</code>.</p>
        <p>
          In all cases, files in <code><a href="#js">js</a></code> are injected
          after files in <code><a href="#css">css</a></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="world"><code>world</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          The JavaScript world the script executes in.
        </p>
        <dl>
          <dt><code>"ISOLATED"</code></dt>
          <dd>
            The default <a href="/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts">content scripts</a> execution environment.
            This environment is isolated from the page's context: while they share the same document, the global scopes and available APIs differ.
          </dd>
          <dt><code>"MAIN"</code></dt>
          <dd>
            The web page's execution environment.
            This environment is shared with the web page without isolation.
            Scripts in this environment don't have any access to the APIs that are only available to content scripts.
            <div class="notecard warning" id="sect1">
              <p>
                <strong>Warning:</strong> Due to the lack of isolation, the web page can detect and interfere with the executed code.
                Do not use the <code>MAIN</code> world unless it is acceptable for web pages to read, access, or modify the logic or data that flows through the executed code.
              </p>
            </div>
          </dd>
        </dl>
        <p>The default value is <code>"ISOLATED"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Matching URL patterns

The `"content_scripts"` key attaches content scripts to documents based on URL matching: if the document's URL matches the specification in the key, then the script will be attached. There are four properties inside `"content_scripts"` that you can use for this specification:

- `matches`
  - : an array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `exclude_matches`
  - : an array of [match patterns](/en-US/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)
- `include_globs`
  - : an array of [globs](#globs)
- `exclude_globs`
  - : an array of [globs](#globs)

To match one of these properties, a URL must match at least one of the items in its array. For example, given a property like:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

Both `http://example.org/` and `http://example.com/` will match.

Since `matches` is the only mandatory key, the other three keys are used to limit further the URLs that match. To match the key as a whole, a URL must:

- match the `matches` property
- AND match the `include_globs` property, if present
- AND NOT match the `exclude_matches` property, if present
- AND NOT match the `exclude_globs` property, if present

### globs

A _glob_ is just a string that may contain wildcards.

There are two types of wildcard, and you can combine them in the same glob:

1. `*` matches zero or more characters
2. `?` matches exactly one character.

For example: `"*na?i"` would match `"illuminati"` and `"annunaki"`, but not `"sagnarelli"`.

## Example

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

This injects a single content script `borderify.js` into all pages under `mozilla.org` or any of its subdomains, whether served over HTTP or HTTPS.

```json
  "content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

This injects two content scripts into all pages under `mozilla.org` or any of its subdomains except `developer.mozilla.org`, whether served over HTTP or HTTPS.

The content scripts see the same view of the DOM and are injected in the order they appear in the array, so `borderify.js` can see global variables added by `jquery.js`.

## Browser compatibility

{{Compat}}
