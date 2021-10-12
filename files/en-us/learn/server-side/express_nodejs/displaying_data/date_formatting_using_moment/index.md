---
title: Date formatting using luxon
slug: Learn/Server-side/Express_Nodejs/Displaying_data/Date_formatting_using_moment
tags:
  - Express
  - Node
  - displaying data
  - part 5
  - server-side
---
The default rendering of dates from our models is very ugly: _Tue Oct 06 2020 15:49:58 GMT+1100 (AUS Eastern Daylight Time)_. In this section we'll show how you can update the _BookInstance List_ page from the previous section to present the `due_date` field in a more friendly format: Oct 6th, 2020.

The approach we will use is to create a virtual property in our `BookInstance` model that returns the formatted date. We'll do the actual formatting using [luxon](https://www.npmjs.com/package/luxon), a powerful, modern, and friendly library for parsing, validating, manipulating, formatting and localising dates.

> **Note:** It is possible to use *luxon* to format the strings directly in our Pug templates, or we could format the string in a number of other places. Using a virtual property allows us to get the formatted date in exactly the same way as we get the `due_date` currently.

> **Note:** This tutorial previously used the [moment](https://www.npmjs.com/package/moment) library for date formatting. We've moved to Luxon because moment has [declared itself "legacy"](https://momentjs.com/docs/#/-project-status/). Luxon is one of the [moment project's main recommendations](https://momentjs.com/docs/#/-project-status/recommendations/) for a great alternative library.

## Install luxon

Enter the following command in the root of the project:

```bash
npm install luxon
```

## Create the virtual property

1.  Open **./models/bookinstance.js**.
2.  At the top of the page, import _luxon_.

    ```js
    const { DateTime } = require("luxon");
    ```

Add the virtual property `due_back_formatted` just after the url property.

```js
BookInstanceSchema
.virtual('due_back_formatted')
.get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});
```

> **Note:** Luxon can import strings in many formats and export to both predefined and free-form formats. In this  case we use `fromJSDate()` to import a JavaScript date string and `toLocaleString()` to output the date in  `DATE_MED` format in English: Oct 6th, 2020.
> For information about other formats and date string internationalisation see the Luxon documentation on [formatting](https://github.com/moment/luxon/blob/master/docs/formatting.md#formatting).

## Update the view

Open **/views/bookinstance_list.pug** and replace `due_back` with `due_back_formatted`.

```js
      if val.status != 'Available'
        //span  (Due: #{val.due_back} )
        span  (Due: #{val.due_back_formatted} )
```

That's it. If you go to _All book-instances_ in the sidebar, you should now see all the due dates are far more attractive!

## Next steps

- Return to [Express Tutorial Part 5: Displaying library data](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data).
- Proceed to the next subarticle of part 5: [Author list page and Genre list page challenge](/en-US/docs/Learn/Server-side/Express_Nodejs/Displaying_data/Author_list_page).
