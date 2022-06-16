---
title: "Adding images"
weight: 4
---

Adding an image to a document is easy as well. All you need to do is add
your image file within the document's folder, and then reference the image
from within the document's `index.html` or `index.md` file, using an `<img>`
or [the equivalent Markdown syntax](https://github.github.com/gfm/#images).
It's as easy as that. Let's walk through an example:

1. You should be getting used to this by now, as we've done it several
    times above. Make sure you start with a fresh working branch updated with
    the latest content from the `main` branch of the `mdn` remote.

    ```sh
    cd ~/repos/mdn/content
    git checkout main
    git pull mdn main
    # Run "yarn" again just to ensure you've
    # installed the latest Yari dependency.
    yarn
    git checkout -b my-images
    ```

1. Add your image to the document folder. For this example, let's assume
    we're adding a new image to the `files/en-us/web/css` document.

    ```sh
    cd ~/repos/mdn/content
    cp /some/path/my-cool-image.png files/en-us/web/css/
    ```

1. Run the `filecheck` command on each image you add. It'll complain if
    something's wrong (see also the [Compressing images](#compressing-images)
    section below).
    We'll automatically run this as one of the tests we run when your new pull
    request is created, but why wait to fix any possible issues later?

    ```sh
    yarn filecheck files/en-us/web/css/my-cool-image.png
    ```

1. Use your image within the document. For example, add the following `<img>` element
    somewhere inside `files/en-us/web/css/index.html`:

    ```html
    <img src="my-cool-image.png" alt="My cool image" />
    ```

1. Add and commit all of the deleted, created, and modified files, as well as
    push your branch to your fork:

    ```sh
    git add files/en-us/web/css/my-cool-image.png files/en-us/web/css/index.html
    git commit
    git push -u origin my-images
    ```

1. Now you're ready to create your
    [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

## Compressing images

When you add images to MDN, you should make sure that they are compressed
as much as possible without degrading quality, to save on download size
for our readers. In fact, if you don't do this our CI process will fail
and the build results will warn you that some of your images are too big.

The best way to compress them is by using the built-in compression tool.
You can compress an image appropriately by using the `filecheck` command
with the `--save-compression` option — this compresses the specified image
as much as possible, and saves the result over the top of the original.

For example:

```sh
yarn filecheck files/en-us/web/css/my-cool-image.png --save-compression
```
