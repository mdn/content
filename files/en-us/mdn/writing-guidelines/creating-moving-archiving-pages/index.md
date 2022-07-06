---
title: 'Creating, moving, and deleting pages'
slug: MDN/Writing_guidelines
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

This article describes how to create, move or delete a page. In all instances it's a good idea to check our [What we write](/en_US/docs/MDN/Writing_guidelines/What_we_write) guidelines for whether any of these actions should be taken and discuss it with us before going ahead.

## Creating pages

All pages are authored in markdown format, with the filename `index.md` and their own unique directory. The directory name represents the name of the page. For example to create a new reference page for a new CSS property, you'd create a folder in `en-us/web/css` named with the property name and create a file called `index.md` inside it.

> **Note:** The name of the directory differs slightly from the slug of the page. Most notably the slug is capitalized.

There are lots of different [page types with certain structures](/en_US/docs/MDN/Writing_guidelines/How_to_write/Page_types), and supporting page templates for them, which you can copy to get you started.

A document's `index.md` file must start with front-matter that defines the `title`, `short-title`, `page-type`, `slug`, and `tags`. All of which can be found in the afore mentioned page templates. Alternatively you might find it helpful to refer to the front-matter within a similar document's `index.md`.

The step-by-step process in general would be:

1. Start a fresh, up-to-date branch to work within:

```sh
cd ~/repos/mdn/content
git checkout main
git pull mdn main
# Run "yarn" again to ensure you've
# installed the latest Yari dependency.
yarn
git checkout -b my-add
```

1. Create one or more new document folders, each with their own `index.md` file.

1. Add and commit your new files, as well as push your new branch to your fork:

    ```sh
    git add files/en-us/folder/you/created
    git commit
    git push -u origin my-add
    ```

1. And finally create your
pull request.

## Moving pages

Moving one or more documents, or an entire tree of documents is easy,
because we've created a special command that takes care of the details for you:

```sh
yarn content move <from-slug> <to-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to move (e.g., `Learn/Accessibility`), as well as the slug of its new
location (e.g., `Learn/A11y`), optionally followed by the locale of the
existing document (defaults to `en-US`).
If the existing document that you'd like to move has child documents (i.e.
it represents a document tree), the `yarn content move` command will move
the entire tree. For example, let's say you want to move the entire
`/en-US/Learn/Accessibility` tree to `/en-US/Learn/A11y`:

1. First, as we've outlined above, you'll start a fresh branch to work within:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-move
    ```

1. Perform the move (which will delete and modify existing files, as well
as create new files):

    ```sh
    yarn content move Learn/Accessibility Learn/A11y
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-move
    ```

1. Now you're ready to create your pull request.

> **Note:** `yarn content move` automatically adds the necessary redirect
information to the `_redirects.txt` file so that the old location will redirect
to the new one. Don't edit the `_redirects.txt` file manually!
mistakes can easily creep in if you do. If you need to add a redirect without
moving a file, talk to us about it.

## Deleting pages

Documents should only be removed from MDN in special circumstances. If you are thinking about deleting pages, please discuss it with the MDN team first.

Deleting one or more documents, or an entire tree of documents is also easy,
again because we've created a special command that takes care of the
details for you:

```sh
yarn content delete <document-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to delete (e.g., `Learn/Accessibility`), optionally followed by the locale
of the existing document (defaults to `en-US`). If the existing document
that you'd like to delete has child documents (i.e. it represents a
document tree), you must also specify the `-r, --recursive` option, or
the command will fail.

**Important: you need to use the `delete` command to delete MDN documents. Don't
just delete their directories from the repo, as `delete` also handles other
necessary changes such as updating the `_wikihistory.json` file.**

For example, let's say you want to delete the
entire `/en-US/Learn/Accessibility` tree:

1. First, as we've outlined above, you'll start a fresh branch to work in:

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-delete
    ```

1. Perform the delete:

    ```sh
    yarn content delete Learn/Accessibility --recursive
    ```

1. Add a redirect

```sh
    yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
    ```

    Note that the target page can be an external URL or another page.

1. Add and commit all of the deleted files, as well as
push your branch to your fork:

    ```sh
    git commit -a
    git push -u origin my-delete
    ```

1. Now you're ready to create your pull request.

> **Note:** If the slug of the page you wish to delete contain special
  characters, include it in quotes:

```sh
yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
```

Removing content from MDN will inevitably result in updating existing content as well, as a lot of articles link to others, the removed content will be referenced elsewhere.

Adding the redirect will mitigate the impact of removing content, however it's best practice to edit content to reflect the change and include the edits alongside the removal pr.


