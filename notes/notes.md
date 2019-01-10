git checkout initial

    (Show app.vue)
    This is what you get from the Vue CLI to start.  App is our only component right now.
    Components have three basic parts

git checkout basic-firebase

    (Show firebase.js)
    This is the config
    (Show app.vue)
    We are writing very simple data to firebase here.
    (Show firebase console)

git checkout topics-locally

    (Show app.vue)
    We have a form to create topics, and push them to a local array
    (Show this in app)

git checkout firebase-write-delete

    We write to firebase and can delete, from db, but that isn't sync to local
    (Show this in app vs database)

git checkout crud-firebase

    There is syncing of local state vs db and across browsers
    (Show this in app vs database)

    (Show app.vue)
    But look at all this code.  Way too much!  There has to be a different way.

git checkout vuefire

    (Show app.vue)
    See this firebae parameter?  Everything is synced into there.
    (Demo this)

    (Show main.js)
    Vue.use is the magic here.  We'll see this more.

git checkout vuetify

    (Show app.vue)
    Much prettier!  There is also a validator for edits not being empty or too long.


    (Show main.js)
    Vue.use again, and importing some css

git checkout router

    (Show app.vue in wide mode)
    We've added a navigation drawer with vuetify and another (empty) component

    Link activeness gets styles appropriately when we change things.
    (Show)

git checkout firebase-hosting

    (Show firebase.json)
    We've added some config

git checkout jumbotron

    (Show home)
    We've added a CTA!

Show https://vuedemo-75f01.firebaseapp.com/#/