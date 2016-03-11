# Frontend Test - Martin Szyllo

## Architecture

This is a client/server app written in JS using Meteor 1.3

I used Materialize CSS to beautify the app.

Essentially the client makes a remote call to the server to get Yahoo news data. The server asynchronously executes the API call and when ready passes on the resulting data to the client.

It is possible to select a category of news on the client side.

## installation instructions

```
$ curl https://install.meteor.com/ | sh
$ git clone https://github.com/ficshelf/wud-1.git yhoo 

$ cd yhoo
$ meteor 

```

A running vwersion is available here:

# [DEMO](http://50.112.148.15:3000/)
 
