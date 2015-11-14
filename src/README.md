# /djmu/src/
Code is separated into client and server directories.

## /djmu/src/client
```
.
└── client
    ├── index.html
    ├── bower.json
    ├── bower_components/       /* Ignored by git */
    ├── app/                    /* AngularJS application code */
    │   ├── app.js              /* Browserify entry file */
    │   ├── core/
    │   ├── dashboard/
    │   ├── gallery/
    │   └── layout/
    ├── css/
    ├── images/
    └── js/
        └── bundle.js           /* Browserify output file */
```

## /djmu/src/server
```
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