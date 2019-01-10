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

What we are going to do here:
    Make a local array.
    Make a form to make topics and push them into the array

git checkout topics-locally

    (Show app.vue)
    We have a form to create topics, and push them to a local array
    (Show this in app)

What we are going to do here:
    Write/delete to firebase
    Sync the list of topics with firebase on page load

git checkout firebase-write-delete

    We write to firebase and can delete, from db, but that isn't sync to local
    (Show this in app vs database)

What we are going to do here:
    CRUDify everything
    Sync the array all the time

git checkout crud-firebase

    There is syncing of local state vs db and across browsers
    (Show this in app vs database)

    (Show app.vue)
    But look at all this code.  Way too much!  There has to be a different way.

What we are going to do here:
    Remove a bunch of boilerplate

Cut back to slides for NoSQL modeling (2 slides)

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


Demo deploy

    (Change text)
    `npm run build`
    `firebase deploy`

Sizing:

    Firebase is about 100KB gzipped
    Vuetify is also, though we are not doing a la carte, and alternatives exist (bulma/buefy)

Ordering:
    .orderByKey/value/child
    maintaining indices
    Reversal unclear, I gather you push times also

Ordering:
    .orderByKey/value/child
    maintaining indices
    Reversal unclear, I gather you push times also