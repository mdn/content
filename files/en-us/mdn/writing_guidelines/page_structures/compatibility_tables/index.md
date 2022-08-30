---
title: Compatibility tables and the browser compatibility data repository (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
page-type: mdn-writing-guide
tags:
  - meta
  - writing-guide
browser-compat: api.AbortController
---
{{MDNSidebar}}

MDN has a standard format for compatibility tables for our open web documentation; that is, documentation of technologies such as the DOM, HTML, CSS, JavaScript, SVG, and so forth, that are shared across all browsers. This article is a "getting started" guide to how to add to and maintain the database from which the compatibility tables are generated, as well as how to integrate the tables into articles.

For more advanced documentation, as well as the very latest changes to the processes and JSON schemas used to represent the data, take a look at the data repository's [contributor guide](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) as well as the [data guidelines guide](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines.md).

If you have questions or discover problems, you are welcome to [ask for help](/en-US/docs/MDN/Community/Contributing/Getting_started#step_4_ask_for_help).

## How to access the data repository

The data is stored in a GitHub repository — see <https://github.com/mdn/browser-compat-data>. To access it, you need to get a GitHub account, fork the browser-compat-data repo over to your own account, then clone your fork onto your local machine.

## Preparing to add the data

Before adding some new data, you should make sure that your fork is up-to-date with the main repo (it contains the same content), create a new branch inside your fork to contain your additions, then pull that branch into your local clone so you can start working inside it:

Let's look at a simple way to make sure your fork is to-to-date is as follows:

### Adding the main browser-compat-data repo as a remote

Go to your local clone of your fork in your terminal/command line, and add a remote pointing to the main (upstream) repo like so (you only need to do this once):

```bash
git remote add upstream https://github.com/mdn/browser-compat-data.git
```

If you are unsure whether you've done this, you can check what remotes your repo has using

```bash
git remote -v
```

### Updating your fork with the remote's content

Now, whenever you want to update your fork, you can do so by:

1. Making sure you are in the main branch:

    ```bash
    git checkout main
    ```

2. fetching the up-to-date repo contents using the following:

    ```bash
    git fetch upstream
    ```

3. rebasing the contents of your main branch with the official repo's contents:

    ```bash
    git rebase upstream/main
    ```

4. pushing these updates back to your remote fork using this:

    ```bash
    git push
    ```

### Creating a new branch to do your work in

Next, go to your remote fork (it will be at `https://github.com/your-username/browser-compat-data`) and create a new branch to store your changes for this data addition. This can be done by:

1. Clicking on the "Branch: Main" button.
2. Entering a new branch name into the "Find or create a branch…" text field.
3. Pressing the resulting "Create branch _name-of-branch_ from Main" button.

For example, if you were wanting to add data for the WebVR API, you'd create a branch called something like "webvr".

### Switching to the new branch

At this point, go back to your terminal/command line, and update your fork's local clone to include your new branch using the following command:

```bash
git pull
```

Now switch to your new branch using this:

```bash
git checkout name-of-branch
```

You should now be ready to start adding your data!

## Adding the data

To add the data, you need to create a new file or files to store your compat data in. The files you need to create differ, depending on what technology you are working on:

- **[HTML](/en-US/docs/Web/HTML):** One file per HTML element, contained in [browser-compat-data/html/elements](https://github.com/mdn/browser-compat-data/tree/main/html/elements). The file should be called the name of the element, all in lower case, e.g. `div.json`.
- **[CSS](/en-US/docs/Web/CSS):** One file per CSS property or selector, contained in the appropriate directory (see [browser-compat-data/css](https://github.com/mdn/browser-compat-data/tree/main/css)). The file should be called the name of the feature, all in lower case, e.g. `background-color.json`, or `hover.json`.
- **[JS](/en-US/docs/Web/JavaScript):** One file per JS object, contained in [browser-compat-data/javascript/builtins](https://github.com/mdn/browser-compat-data/tree/main/javascript/builtins). The file should be called the exact name of the object, with the casing preserved, e.g. `Date.json` or `InternalError.json`.
- **[APIs](/en-US/docs/Web/API):** One file per interface contained in the API, put in [browser-compat-data/api](https://github.com/mdn/browser-compat-data/tree/main/api). Each file should be called the exact name of the interface, with the casing preserved, e.g. The WebVR API has `VRDisplay.json`, `VRDisplayCapabilities.json`, etc.

Each file you create has to follow the pattern defined in the schema contained within our repo; you can see the [detailed schema description here](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md).

### Basic compat data structure

Let's look at an example. CSS property JSON files for example need the following basic structure:

```json
{
  "css": {
    "properties": {
      "border-width": {
        "__compat": {
          // …
        }
      }
    }
  }
}
```

You have the `css` object, inside of which is a `properties` object. Inside the `properties` object, you need one member for each of the specific features you want to define the compat data for. Each of these members has a `__compat` member, inside of which the actual data goes.

The above data is found in the [border-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json) file — compare this to the [rendered border-width support table on MDN](/en-US/docs/Web/CSS/border-width#browser_compatibility).

Other types of features work in the same way, but with different object names:

- CSS selectors work in basically the same way as CSS properties, except that the top-level object structure is `css.selectors` instead of `css.properties`. See [cue.json](https://github.com/mdn/browser-compat-data/blob/main/css/selectors/cue.json) for an example.
- HTML data works in basically the same way, except that the top-level object structure is `html.elements`. See [article.json](https://github.com/mdn/browser-compat-data/blob/main/html/elements/article.json) for an example.
- The top level object structure for JS built-in objects is `javascript.builtins`; see [Array.json](https://github.com/mdn/browser-compat-data/blob/main/javascript/builtins/Array.json) for an example.

In HTML, CSS, and JS pages, you'll normally only need one feature. API interfaces work slightly differently — they always have multiple sub-features (see [Sub-features](#sub-features), below).

### Basic structure inside a feature

Inside a feature `__compat` member, you need to include the following members:

- `mdn_url`: Contains the URL of the reference page for this feature on MDN. Note that this needs to be written without the locale directory inside, e.g. `/docs/…` not `/en-US/docs/…`. This is added in by the macro when the data is put on the page, for localization purposes.
- `spec_url`: URL or array of URLs to specification(s) in which this feature is defined.
- `support`: Contains members representing the browser support information for this feature in all the different browsers we want to report.
- `status`: Contains members reporting the standards track status of this feature.

The names of the browser members are defined in the schema (see [Browser identifiers](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#browser-identifiers)). You should use the full list of currently defined identifiers. If you wish to add another browser, talk to us first, as this could have a wide-ranging impact and should not be done without careful thought.

In a basic browser compat data file, you'll only need to include "version_added" inside the browser identifier members (we'll cover [Adding data: Advanced cases](#adding_data_advanced_cases) later on). The different values you might want to include are as follows:

- A version number: If you know the exact version in which a browser started to support your feature, use a string representing the number, e.g. `"47"`.
- `true`: If a browser supports a feature but you don't know the exact version number, use the value `true`.
- `false`: If a browser does not support a feature, use the value `false`.
- `null`: If you don't know whether a browser supports a feature or not, use the value `null`.

Inside the `status` member, you'll include three submembers:

- `experimental`: This should be set to `true` if the feature is [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), or `false` otherwise.
- `standard_track`: This should be set to `true` if a feature is on some kind of standards track (most commonly W3C/WHATWG, but there are also other standards efforts such as Khronos, TC39, etc.) or `false` otherwise.
- `deprecated`: This should be set to `true` if the feature is [deprecated](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated_and_obsolete), or `false` otherwise.

The feature data for [border-width](/en-US/docs/Web/CSS/border-width#browser_compatibility) (also see [border-width.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/border-width.json)) is shown below as an example:

```json
"__compat": {
  "mdn_url": "https://developer.mozilla.org/docs/Web/CSS/border-width",
  "spec_url": "https://drafts.csswg.org/css-backgrounds/#the-border-width",
  "support": {
    "chrome": {
      "version_added": "1"
    },
    "webview_android": {
      "version_added": "2"
    },
    "edge": {
      "version_added": true
    },
    "edge_mobile": {
      "version_added": true
    },
    "firefox": {
      "version_added": "1"
    },
    "firefox_android": {
      "version_added": "1"
    },
    "ie": {
      "version_added": "4"
    },
    "ie_mobile": {
      "version_added": "6"
    },
    "opera": {
      "version_added": "3.5"
    },
    "opera_android": {
      "version_added": "11"
    },
    "safari": {
      "version_added": "1"
    },
    "safari_ios": {
      "version_added": "3"
    }
  },
  "status": {
    "experimental": false,
    "standard_track": true,
    "deprecated": false
  }
}
```

#### Adding a description

There is a fourth, optional, member that can go inside the `__compat` member — `description`. This can be used to include a human-readable description of the feature. You should only include this if it is hard to see what the feature is from glancing at the data. For example, it might not be that obvious what a constructor is from looking at the data structure, so you can include a description like so:

```json
{
  "api": {
    "AbortController": {
      "__compat": {
        // …
      },
      "AbortController": {
        "__compat": {
          "mdn_url": "https://developer.mozilla.org/docs/Web/API/AbortController/AbortController",
          "description": "<code>AbortController()</code> constructor",
          "support": {
            …
          }
        }
      }

      // …
    }
  }
}
```

### Sub-features

In a page where the compat table has more than one row, you'll need multiple subfeatures inside each feature to define the information for each row. This can happen, for example, when you've got the basic support for a feature stored in one row, but then the feature also has a new property or value type that was added much later in the specification's life and is only supported in a couple of browsers.

As an example, see the [compat data](https://github.com/mdn/browser-compat-data/blob/main/css/properties/background-color.json) and [corresponding MDN page](/en-US/docs/Web/CSS/background-color) for the `background-color` property. The basic support exists inside the `__compat` object as explained above, then you have an additional row for browsers' support for "alpha channel for hex values", which contains its own `__compat` object.

```json
{
  "css": {
    "properties": {
      "background-color": {
        "__compat": {
          // …
        },
        "alpha_ch_for_hex": {
          "__compat": {
            // …
          },
        }
      }
    }
  }
}
```

For an API, you've got the top two levels defined as `api.name-of-the-interface`, then a top-level `__compat` section to define the overall browser compatibility of the interface, then a sub-feature for each of the methods, properties, and constructors contained inside the interface. The basic structure looks like this:

```json
{
  "api": {
    "VRDisplay": {
      "__compat": {
        // …
      },
      "cancelAnimationFrame": {
        "__compat": {
          // …
        }
      },
      "capabilities": {
        "__compat": {
          // …
        }
      },

      // …

    }
  }
}
```

See [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) for a full example.

## Adding data: Advanced cases

There are some advanced features that you'll want to include in browser compat data. The aim of this section is to list the most common ones, providing an example of each to show how you can implement them in your own compat data.

### Including a footnote

Often compat tables will include footnotes related to certain entries that explain useful details or strange behavior that developers will find useful. As an example, the Chrome Android entry for {{domxref("VRDisplay.capabilities")}} (see also [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json)) (at the time of writing) had a footnote "Currently supported only by Google Daydream." To include this in the capabilities data, we added a "notes" submember inside the relevant "chrome_android" submember; it would look like this:

```json
"chrome_android": {
  "version_added": true,
  "notes": "Currently supported only by Google Daydream."
}
```

### Including a vendor prefix

If a feature is supported behind a vendor prefix in one or more browsers, you'll want to make that clear in the browser compat data. imagine you had a feature that was supported with a `-moz-` prefix in Firefox. To specify this in the compat data, you'd need to add a "prefix" submember inside the relevant "firefox" submember. It would look something like this:

```json
"firefox": {
  "version_added": true,
  "prefix": "-moz-"
}
```

### Including browser preferences or flags

Some features may be supported in a browser, but they are experimental and turned off by default. If a user wants to play with this feature they need to turn it on using a preference/flag.

To represent this in the compat data, you need to add the "flags" submember inside the relevant browser identifier submember. The value of "flags" is an array of objects each of which contains of three members:

- `type`: The type of flag or pref this is. The most common value is "preference", which is set inside the browser (for example, using `about:config` in Firefox, or `chrome://flags` in Chrome), but you might also sometimes use a value of "compile_flag", which is a preference set when the browser build is compiled.
- `name`: This is a string representing the name of the preference that needs to have a value set on it. For example, "Enable Experimental Web Platform Features" is a preference that exists in Chrome, found in `chrome://flags`.
- `value_to_set`: This is a string representing the value that needs to be set on the preference, for example "true".

So to add a preference/flag to the Chrome support for a feature, you'd do something like this:

```json
"chrome": {
  "version_added": "50",
  "flags": [
    {
      "type": "preference",
      "name": "Enable Experimental Web Platform Features",
      "value_to_set": "true"
    }
  ]
},
```

If a feature is behind two or more flags, you can add additional objects to the "flags" array, like in this case, for example:

```json
"firefox": {
  "version_added": "57",
  "flags": [
    {
      "type": "preference",
      "name": "dom.streams.enabled",
      "value_to_set": "true"
    },
    {
      "type": "preference",
      "name": "javascript.options.streams",
      "value_to_set": "true"
    }
  ]
},
```

### Including a version where support was removed

Sometimes a feature will be added in a certain browser version, but then removed again as the feature is deprecated. This can be easily represented using the "version_removed" submember, which takes as its value a string representing the version number it was removed on. For example:

```json
"firefox": {
  "version_added": "35",
  "version_removed": "47",
},
```

### Including multiple support points for the same browser entry

Sometimes you'll want to add multiple support data points for the same browser inside the same feature.

As an example, the {{cssxref("text-align-last")}} property (see also [text-align-last.json](https://github.com/mdn/browser-compat-data/blob/main/css/properties/text-align-last.json)) was added to Chrome in version 35, supported behind a pref.

The support mentioned above was then removed in version 47; also in version 47, support was added for `text-align-last` enabled by default.

To include both of these data points, you can make the value of the "chrome" submember an array containing two support information objects, rather than just a single support information object:

```json
"chrome": [
  {
    "version_added": "47"
  },
  {
    "version_added": "35",
    "version_removed": "47",
    "flags": [
      {
        "type": "preference",
        "name": "Enable Experimental Web Platform Features",
        "value_to_set": "true"
      }
    ]
  }
],
```

> **Note:** You should put the most current or important support point first in the array — this makes the data easier to read for people who just want to scan it for the latest info.

### Including an alternative name

Occasionally browsers will support a feature under a different name to the name defined in its specification. This might be for example because a browser added experimental support for a feature early, and then the name changed before the spec stabilized.

To include such a case in the browser compat data, you can include a support information point that specifies the alternative name inside an "alternative_name" member.

> **Note:** The alternative name might not be an exact alias — it might have differing behavior to the standard version.

Let's look at an example. The {{cssxref("border-top-right-radius")}} property (see also [border-top-right-radius.json](https://github.com/mdn/browser-compat-data/blob/2a0cc3f6bb17aa4345441bed47a059dffd847793/css/properties/border-top-right-radius.json)) was supported in Firefox:

- From version 4 onwards with the standard name `border-top-right-radius`.
- From version 49 onwards with a `-webkit-` prefix, for browser compatibility purposes.
- From version 1 onwards with the alternative name `-moz-border-radius-topright`. Support for this alias was removed in version 12.

To represent this in the data, we used the following JSON:

```json
"firefox": [
  {
    "version_added": "4",
    "notes": "Prior to Firefox 50.0, border styles of rounded corners were always rendered as if <code>border-style</code> was solid. This has been fixed in Firefox 50.0."
  },
  {
    "prefix": "-webkit-",
    "version_added": "49",
    "notes": "From Firefox 44 to 48, the <code>-webkit-</code> prefix was available with the <code>layout.css.prefixes.webkit</code> preference. Starting with Firefox 49, the preference defaults to <code>true</code>."
  },
  {
    "alternative_name": "-moz-border-radius-topright",
    "version_added": "1",
    "version_removed": "12"
  }
],
```

## Pushing a change back to the main repo

Once you are finished with adding your compat data, you should first test it using the following commands:

- `npm run lint` — tests all the compat data to make sure the JSON is valid, and is written in the correct style, for example correct indentation, no missing commas, etc. It will print out a long list of file names and test results; if an error is found, the linter will throw an error on the file it is found in, giving you useful debugging info like line number, error message, etc.
- `npm run show-errors` — validates the JSON against the data schema, and highlights errors such as invalid browser version numbers being used.

If it is looking OK, you then need to commit it and push it back up to your remote fork on GitHub. You can do this easily with terminal commands like this:

```bash
git add .
git commit -m 'adding compat data for name-of-feature'
git push
```

Now go to your remote fork (i.e. `https://github.com/your-username/browser-compat-data`) and you should see information about your push at the top of the files list (under "Your recently pushed branches"). You can create a pull request (starting the process of pushing this to the main repo) by pressing the "Compare & pull request" button, then following the simple prompts on the subsequent screen.

At this point, you just need to wait. A reviewer will review your pull request, and merge it with the main repo, OR request that you make changes. If changes are needed, make the changes and submit again until the PR is accepted.

## Inserting the data into MDN pages

Once your new compatibility data has been included in the main [browser-compat-data](https://github.com/mdn/browser-compat-data) repo, you can start dynamically generating browser compatibility and specification tables based on that data on MDN pages.

First you need to find the query string for the relevant compatibility data you wish to include. This can be determined by inspecting its source file. For example:

- {{domxref("AbortController")}} compatibility data is defined in [AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) and can be queried using `api.AbortController`.
- {{HTTPHeader("Content-Type")}} HTTP header compatibility data is defined in [content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) and the query is `http.headers.Content-Type`.
- {{domxref("VRDisplay.capabilities")}} property compatibility data is defined in [VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) and its query is `api.VRDisplay.capabilities`.

The compatibility data query should be specified in the page front-matter using the `browser-compat` key.
For example, for the {{domxref("AbortController")}} this would be added as shown below:

```plain
---
title: AbortController
slug: Web/API/AbortController

…

browser-compat: api.AbortController
---
```

The compatibility and specification tables corresponding to the key are then automatically rendered in place of the `\{{Compat}}` and `\{{Specifications}}` macros in the source.

You can also specify the desired API as the first argument to the macro as shown: `\{{Compat("api.AbortController")}}`. This can be useful if multiple compatibility tables are required on the same page.

The macro calls generate the following tables (and corresponding set of notes):

#### Compatibility table example

{{Compat}}

#### Specifications table examples

{{Specifications}}
