# djmu
DJ Mu 2.0

## File Structure
```
.
├── DJ\ Mu.bmpr
├── gulpfile.js
├── package.json
├── node_modules/                     /* Ignored by git */
└── src
    ├── client
    │   ├── app                       /* AngularJS application code */
    │   │   ├── app.js
    │   │   ├── core
    │   │   │   ├── config.js
    │   │   │   └── index.js
    │   │   ├── dashboard
    │   │   │   ├── dashboard.html
    │   │   │   ├── dashboard.js
    │   │   │   └── index.js
    │   │   ├── gallery
    │   │   │   ├── gallery.html
    │   │   │   ├── gallery.js
    │   │   │   └── index.js
    │   │   └── layout
    │   │       ├── index.js
    │   │       ├── shell.html
    │   │       ├── shell.js
    │   │       └── topnav.html
    │   ├── bower_components/         /* Ignored by git */
    │   ├── bower.json
    │   ├── css
    │   │   └── styles.css
    │   ├── images
    │   ├── index.html
    │   └── js
    │       └── bundle.js
    └── server
        ├── app.js                    /* Node server */
        ├── bin
        │   └── www
        ├── routes
        │   ├── index.js
        │   └── users.js
        └── styles
            ├── config.rb
            └── sass
                ├── components
                │   ├── _buttons.scss
                │   └── _navigation.scss
                ├── helpers
                │   ├── _mixins.scss
                │   └── _variables.scss
                ├── pages
                │   ├── _home.scss
                │   └── _signup.scss
                └── styles.scss
```
