---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
Most of them are created using a system that defines data structures in YAML files, and includes sidebars on pages via front matter or a macro.

In this guide, you will learn how these sidebars work so you can edit existing sidebars and create new ones as required.

> [!NOTE]
> If you're editing sidebars, you can use `yarn tool` commands for formatting and syncing with redirects.
> See [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) documentation for information.

## How sidebars work

Each sidebar has a corresponding YAML file contained inside the MDN `content` repo's [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) directory. This defines the hierarchical structure of the sidebar links, the URLs each link should point to, and optional custom heading/link text, which can be localized into different languages as required.

The page you are currently reading has a sidebar defined in the [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) file.

The sidebar is rendered on the current page (and all others in the same document tree) by including a `sidebar` front matter entry in the [document source](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md):

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

The front matter is the content between the dashes. Including `sidebar: mdnsidebar` in the front matter causes the system to look for a YAML file with the same name inside the `files/sidebars` directory. If it finds one, it automatically takes care of rendering the sidebar and placing it on the page as one or more ordered lists ({{htmlelement("ol")}} elements).

Try navigating around the sidebar, before returning to this page. You'll notice that generally when navigating to a page, the link list for the section you are currently in will be expanded, whereas the others will be collapsed, and the page you are on is highlighted.

## Sidebar YAML syntax explained

This section explains the different features that can be included in MDN sidebars, and the YAML syntax used to generate each one. As you work through this documentation, cross-reference the features against the [existing sidebar YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Starting a sidebar definition

The start of each YAML sidebar data definition is a `sidebar` key, the value of which is a list defining the sidebar data:

```yaml
sidebar:
  # sidebar definition goes here
```

### Single links

To create a single link in a sidebar, you include a YAML list item containing a relative URL:

```yaml
sidebar:
  - /MDN/Changelog
```

The URL is relative to the `docs` directory in the MDN URL structure, so for example, `/MDN/Changelog` would generate a link to https://developer.mozilla.org/en-US/docs/MDN/Changelog. The system automatically uses the linked page's document title as the link text.
If the page has a `short-title` key in the front matter, that will be used for the sidebar link display text instead.

If you want to use custom link text that's not a document's `title` or `short-title`, you need to include two keys inside the list item — `title`, which contains the custom link text, and `link`, which contains the relative URL as before. The following example would create a link to the MDN Web Docs changelog as before, but with custom link text of "Our changelog":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Section titles

A section title is a sidebar item rendered at a larger font size than normal sidebar items. This is commonly used as a title at the top of a sidebar that links to the landing page for that section of docs, or as a section divider in the case of particular large sidebars (as seen in the [Learn web development section](/en-US/docs/Learn_web_development).)

A section title is defined by including a `type` key with a value of `section` in the list item. For example:

```yaml
sidebar:
  - type: section
    link: /MDN
```

A section title can have custom link text specified:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Or you can omit the `link` key to just render a text list item that doesn't include a link:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Creating expanding/collapsing lists of links

To create an expanding/collapsing list of links, you create a list item as before, but include a `children` key, the value of which is a list containing the links you want to show as child list items underneath the parent item. Each child list item has the same syntax as the parent. A child list item can even contain its own `children`, allowing you to create multiple hierarchy levels. Here's an example:

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Note also the `details` key — this controls whether a list item's list of children is rendered closed or open when the page first loads. Possible values are as follows:

- `closed`: The children are rendered closed, unless the current page is linked to by one of the children, in which case they are rendered open.
- `open`: The children are always rendered open.

When a list item has `children` and `details` specified, it is rendered with a {{htmlelement("details")}}/{{htmlelement("summary")}} element structure inside it, containing the child list, which can then be expanded/collapsed by clicking the disclosure triangle widget, or focusing the summary and pressing <kbd>Enter</kbd>/<kbd>Return</kbd>.

### Automatically rendering a subpage list

If you want to create a list containing links to a particular page's subpages, you can generate this by specifying a list item with a `type` key of value `listSubPages`, and a `path` key whose value is the path to the page whose subpages you want to generate links to. For example, the entire [Glossary](/en-US/docs/Glossary) sidebar definition (see [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) looks like this:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

This renders a sidebar with a section title that links back to the Glossary landing page, and a top-level list of links to all the glossary child pages.

If you wanted to render this as a parent list item with the subpages appearing as an expanding/collapsing child list, you would need to additionally include a `title` key specifying the text to display for the parent item, and a `details` key specifying the open/close behavior of the `<details>`/`<summary>` structure.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Grouping list sub-pages

There is also a `type` value of `listSubPagesGrouped`. This causes any child pages with titles that begin with the same substring followed by a hyphen (for example `item-`) to be included in a child list under a list item of the substring, plus a hyphen and a star (for example `item-*`).

For example, at the time of writing, the MDN Glossary contains three CORS-related pages:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

If we were to update the glossary sidebar definition to this:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

The links to those pages would be grouped into a child list structure like this:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

More realistic examples can be found in the [CSS](/en-US/docs/Web/CSS) sidebar definition (see [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), where `listSubPagesGrouped` is used to group together links of related shorthand and longhand properties. The list item that generates the properties sidebar menu looks like this:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

This list item definition also contains `tags`, which is the subject of the next section.

#### Filtering list sub-pages

If you have several different page types inside the same directory (as specified by the `page-type` key inside the page front-matter), you can filter the list items generated by `listSubPages` and `listSubPagesGrouped` by page type. To do so, include a `tags` key inside the list item, the value of which is a single page type or list of the page types you want to include in the generated list items. The CSS sidebar contains several such examples:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectors
  tags: css-selector
  details: closed
# etc.
```

### Localizing text strings

As we explained above, you can include custom text to populate your link text or section title in a `title` key. If you want to localize that text into multiple languages, you can include a placeholder in the `title` key, then include the definitions of what that placeholder should be in different languages inside a `l10n` dictionary at the bottom of the YAML file.

Let's look at an example to show what this looks like. In the [HTML](/en-US/docs/Web/HTML) sidebar (see [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)), we define a list item that generates a list of links to all the {{htmlelement("input")}} type reference pages. The parent list item text is defined in the `title` key as a placeholder of `Input_types`:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Down at the bottom of the file, we define the `l10n` dictionary. Each key inside `l10n` represents a different locale — `en-US`, `fr`, `ja`, etc. The value of each one of these keys is a sub-dictionary, the keys of which are the placeholders defined in the list item definitions. Each key value is the value of that placeholder, in that respective locale.

For example:

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

We've only included the `Input_types` values in each locale for brevity.

When the sidebar is rendered, the system replaces the `Input_types` text with its defined value in whatever locale version of the site is being accessed. Compare the following, for example:

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

If an MDN locale is accessed that does not have a value defined for a particular placeholder, it defaults to the `en-US` version. If an `en-US` version is not defined, the literal placeholder text is displayed (which would be `Input_types`, in the above case).

## Non-standard sidebars

There are some sidebars on MDN that don't use the standard system described above. These are complex, fully automated macros that don't need changing very often:

- `\{{APIRef("<API>")}}`
  - : The API sidebar displayed on [API reference pages](/en-US/docs/Web/API#interfaces). For each interface, the macro auto-generates links to members defined on the interface — properties, methods, events, etc. The single parameter is the name of the relevant API group defined in the [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) file. To edit the related pages shown at the bottom of the sidebar, edit that API's GroupData entry.
- `\{{DefaultAPISidebar("<API>")}}`
  - : The API sidebar displayed on [API landing pages](/en-US/docs/Web/API#specifications). The single parameter is the name of the relevant API group defined in the [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) file. To edit the guides, interfaces, etc. linked to in a particular API's sidebar, edit that API's GroupData entry.
- `\{{JSRef("<JS_topic>")}}`
  - : The sidebar on [JavaScript reference pages](/en-US/docs/Web/JavaScript/Reference). The single parameter is the directory you want to generate the links for.

If you think one of these should be updated, get in touch with us via the [usual channels](/en-US/docs/MDN/Community/Communication_channels).

## See also

- [Using macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Content link macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Page section macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banners and notices macros](/en-US/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
