# djmu
DJ Mu 2.0

## File Structure
```
.
├── gulpfile.js
├── package.json
├── node_modules/                   /* Ignored by git */
└── src/
    ├── client/
    │   ├── index.html
    │   ├── bower.json
    │   ├── bower_components/       /* Ignored by git */
    │   ├── app/                    /* AngularJS application code */
    │   │   ├── app.js              /* Browserify entry file */
    │   │   ├── core/
    │   │   ├── dashboard/
    │   │   ├── gallery/
    │   │   └── layout/
    │   ├── css/
    │   ├── images/
    │   └── js/
    │       └── bundle.js           /* Browserify output file */
    └── server/
        ├── app.js                  /* Node.js server */
        ├── bin/
        ├── routes/
        └── styles/
            └── sass/
                ├── styles.scss
                ├── config.rb
                ├── components/
                ├── helpers/
                └── pages/
```
