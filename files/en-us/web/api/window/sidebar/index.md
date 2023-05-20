---
title: "Window: sidebar property"
short-title: sidebar
slug: Web/API/Window/sidebar
page-type: web-api-instance-property
status:
  - deprecated
  - non-standard
---

{{APIRef}} {{Deprecated_Header}}

> **Warning:** This non-standard Firefox-only alias of the [`window.external`](/en-US/docs/Web/API/Window/external) property [has been removed](#browser_compatibility).

Returns a sidebar object which contains several methods for registering add-ons with the browser.

## Instance methods

The sidebar object returned has the following methods:

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Method</th>
      <th>Description (SeaMonkey)</th>
      <th>Description (Firefox)</th>
    </tr>
    <tr>
      <td>
        <code>addPanel(<var>title</var>, <var>contentURL</var>, "")</code>
      </td>
      <td>Adds a sidebar panel.</td>
      <td rowspan="2">
        Obsolete since Firefox 23 (only present in SeaMonkey).<br />End users
        can use the "load this bookmark in the sidebar" option instead. Also see
        <a href="/en-US/docs/Mozilla/Creating_a_Firefox_sidebar"
          >Creating a Firefox sidebar.</a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code
          >addPersistentPanel(<var>title</var>, <var>contentURL</var>, "")</code
        >
      </td>
      <td>Adds a sidebar panel, which is able to work in the background.</td>
    </tr>
    <tr>
      <td>
        <code>AddSearchProvider(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        Dummy function; does nothing. See
        <a href="/en-US/docs/Web/OpenSearch#Autodiscovery_of_search_plugins"
          >Autodiscovery of search plugins</a
        >.
      </td>
    </tr>
    <tr>
      <td>
        <code
          >addSearchEngine(<var>engineURL</var>, <var>iconURL</var>,
          <var>suggestedTitle</var>, <var>suggestedCategory</var>)</code
        >
        {{deprecated_inline}}
      </td>
      <td colspan="2">
        <p>
          Installs a search engine (Sherlock).
          <a
            href="/en-US/docs/Web/API/Window/sidebar/Adding_search_engines_from_Web_pages#Installing_Sherlock_plugins"
            title="Adding_search_engines_from_web_pages"
            >Adding Sherlock search engines </a
          >contains more details.
        </p>
        <div class="note">
          <p>
            <strong>Note:</strong> This was made obsolete in Firefox 44, and has
            been removed completely in Firefox 59.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <code>IsSearchProviderInstalled(<em>descriptionURL)</em></code>
      </td>
      <td colspan="2">
        Indicates if a specific search provider (OpenSearch) is installed.
      </td>
    </tr>
  </tbody>
</table>

## Specifications

Mozilla-specific. Not part of any standard.

## Browser compatibility

Moved behind preference in Firefox 102.
For more information see Firefox compatibility information in [`window.external`](/en-US/docs/Web/API/Window/external#browser_compatibility).
