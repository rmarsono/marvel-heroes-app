# Marvel Heroes app by Rendy Marsono

React Native app that lets a user explore the Marvel character universe, find their favourite hero and view detailed info about them.

The app allows users to filter Marvel characters by their names. Tapping on a name will navigate to a screen with the characters' stats, description (if available) and display a gallery of comic books they have been featured in.

## How to view

1. pull down the master branch
1. run 
``` 
yarn
```
in the command line to install dependencies
1. run 
```
yarn ios
```
to view the app on an IOS simulator

## How to test (e2e)
1. you will need detox CLI installed: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md
1. in the command line, run 
```
detox build
```
the first time you run this, it will take a while
1. after detox finishes building, run 
```
detox test
```
1. the test will run through the pre-defined scenarios defined in ./e2e directory

## Development notes

* routing is done with react-navigation
* uses React Native UI Kitten design system
* uses React Native Chart Kit for charting