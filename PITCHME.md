# Intro to Vue + Firebase

---

## What are we talking about

* What is Firebase and why use it
* Integrating it into an app

---

## What is Firebase?

"Firebase" is actually use to mean two things:

* a suite of tools owned by Google, including auth, storage, hosting, etc
* their Realtime Database product in particular.

---

## Why Firebase (the db)

Realtime Database makes it trivial to sync your app state to a database, **and your database across clients**.

No networking code to write, no exceptions to handle; that's Google's job.

---

## Limits

* 100,000 simultaneous connections
* 100,000/s simulatenous responses sent from a single db
* 1000 cloud functions triggered by a single write (more on this later)

---

## Pricing

![Foo](img/plans.png)
