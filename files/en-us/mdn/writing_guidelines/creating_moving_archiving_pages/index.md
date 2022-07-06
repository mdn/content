---
title: Creating, moving, and deleting pages
slug: MDN/Writing_guidelines/Creating_moving_deleting
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
---
{{MDNSidebar}}

This article describes how to create, move, or delete a page. In all these instances, it's a good idea to check our [What we write](/en_US/docs/MDN/Writing_guidelines/What_we_write) guidelines to confirm if any of these actions should be taken and discuss it with the MDN Web Docs team <!--add contact link here--> before going ahead.

## Creating pages

All pages are on MDN Web Docs are authored in markdown format. The content is written in the file named `index.md`, which is stored in its own unique directory. The directory name represents the name of the page. For example, if `align-content` is a new CSS property for which you want to create a new reference page, you'd create a folder in `en-us/web/css` named `align-content` and create a file called `index.md` inside it.

> **Note:** The name of the directory differs slightly from the slug of the page. Most notably, the slug follows sentence casing.

There are lots of different [page types with certain structures](/en_US/docs/MDN/Writing_guidelines/How_to_write/Page_types) and supporting page templates for them, which you can copy to get you started. <!--link to be done-->

A document's `index.md` file must start with front matter that defines the `title`, `slug`, `page-type`, and `tags`. All of this front matter information can be found in the aforementioned page templates. Alternatively, you might find it helpful to refer to the front matter within a similar document's `index.md`.

The general step-by-step process for creating a page would be:

1. Start a fresh, up-to-date branch to work in.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-add
    ```

2. Create one or more new document folders, each with their own `index.md` files.

3. Add and commit your new files, as well as push your new branch to your fork.

    ```sh
    git add files/en-us/folder/you/created
    git commit
    git push -u origin my-add
    ```

4. Create your pull request.

## Moving pages

Moving one or more documents or an entire tree of documents is easy
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
`/en-US/Learn/Accessibility` tree to `/en-US/Learn/A11y`, you'd perform the following steps:

1. You'll start a fresh branch to work in.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-move
    ```

2. Perform the move (which will delete and modify existing files, as well
as create new files).

    ```sh
    yarn content move Learn/Accessibility Learn/A11y
    ```

3. Add and commit all of the deleted, created, and modified files, as well as
push your branch to your fork.

    ```sh
    git commit -a
    git push -u origin my-move
    ```

4. Create your pull request.

> **Note:** `yarn content move` automatically adds the necessary redirect
information to the `_redirects.txt` file so that the old location will redirect
to the new one. Don't edit the `_redirects.txt` file manually!
Mistakes can easily creep in if you do. If you need to add a redirect without
moving a file, talk to the MDN Web Docs team <!--add link to contact--> about it.

## Deleting pages

Documents should only be removed from MDN Web Docs under special circumstances. If you are thinking about deleting pages, please discuss it with the MDN Web Docs team <!--add link to contact--> first.

Deleting one or more documents or an entire tree of documents is easy, just like moving pages, because we've created a special command that takes care of the
details for you:

```sh
yarn content delete <document-slug> [locale]
```

You just have to specify the slug of the existing document that you'd like
to delete (e.g., `Learn/Accessibility`), optionally followed by the locale
of the existing document (defaults to `en-US`). If the existing document
that you'd like to delete has child documents (i.e. it represents a
document tree), you must also specify the `-r, --recursive` option, otherwise
the command will fail.

> **Important:** You need to use the `yarn content delete` command to delete pages from MDN Web Docs. Don't
just delete their directories from the repo. The `yarn content delete` command also handles other necessary changes such as updating the `_wikihistory.json` file.


For example, if you want to delete the
entire `/en-US/Learn/Accessibility` tree, you'd perform the following steps:

1. You'll start a fresh branch to work in.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-delete
    ```

2. Perform the delete.

    ```sh
    yarn content delete Learn/Accessibility --recursive
    ```

3. Add a redirect. The target page can be an external URL or another page on MDN Web Docs.

    ```sh
    yarn content add-redirect /en-US/path/of/deleted/page /en-US/path/of/target/page
    ```

4. Add and commit all of the deleted files, as well as
push your branch to your fork.

    ```sh
    git commit -a
    git push -u origin my-delete
    ```

5. Create your pull request.

```sh
yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
```

    > **Note:** If the slug of the page you wish to delete contains special characters, include it in quotes, like so:

    ```sh
    yarn content delete "Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)"
    ```

Removing content from MDN Web Docs will inevitably result in updating existing content as well, as a lot of articles link to others, the removed content will be referenced elsewhere.

Adding the redirect will mitigate the impact of removing content; however, it's best practice to edit content to reflect the change and include the edits alongside the removal pull request.
