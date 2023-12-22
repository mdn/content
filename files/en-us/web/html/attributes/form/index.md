# HTML `<form>` Element
---
{}
---


The `<form>` element in HTML is a crucial component that allows users to input data and submit it to a server for processing. It serves as the foundation for creating interactive and dynamic web pages by providing a structure for user input fields, buttons, and other related elements. Let's delve into the attributes associated with the `<form>` element to understand its capabilities and customization options.
[![mdn-form.png](https://i.postimg.cc/3JS0BqNc/mdn-form.png)](https://postimg.cc/3dGwrngX)
## Attributes

1. **action**
   - *Description:* Specifies the URL to which the form data is sent when submitted.
   - *Example:*
     ```html
     <form action="/submit_form" method="post">
       <!-- Form elements go here -->
     </form>
     ```

2. **method**
   - *Description:* Defines the HTTP method used when sending form data. It can be "get" or "post."
   - *Example:*
     ```html
     <form action="/submit_form" method="post">
       <!-- Form elements go here -->
     </form>
     ```

3. **enctype**
   - *Description:* Indicates how the form data should be encoded before sending it to the server. Common values include "application/x-www-form-urlencoded" and "multipart/form-data."
   - *Example:*
     ```html
     <form action="/submit_form" method="post" enctype="multipart/form-data">
       <!-- Form elements go here -->
     </form>
     ```

4. **target**

   - _Description:_ Specifies where to display the response received after submitting the form. Values can include "\_blank," "\_self," "\_parent," or "\_top."
   - _Example:_

     ```html
     <form action="/submit_form" method="post" target="_blank">
       <!-- Form elements go here -->
     </form>
     ```

5. **autocomplete**

   - _Description:_ Controls whether the browser should automatically complete input fields based on previous user input.
   - _Example:_

     ```html
     <form action="/submit_form" method="post" autocomplete="on">
       <!-- Form elements go here -->
     </form>
     ```

6. **novalidate**

   - _Description:_ Prevents the browser from validating form elements before submission. Useful when custom validation is implemented.
   - _Example:_

     ```html
     <form action="/submit_form" method="post" novalidate>
       <!-- Form elements go here -->
     </form>
     ```

7. **name**

   - _Description:_ Provides a name for the form, which can be used for scripting or styling purposes.
   - _Example:_

     ```html
     <form action="/submit_form" method="post" name="userForm">
       <!-- Form elements go here -->
     </form>
     ```
