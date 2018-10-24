# firekit-provider
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

This project was bootstrapped with [nwb](https://github.com/insin/nwb)

firekit-provider was created to help working with Firebase in React Projects that use Redux as state storage.

You can find a full functional **DEMO** project (React Most Wanted) with source code [here](https://www.react-most-wanted.com/).
You can also find more about the concepts used in this library [here](https://codeburst.io/firekit-provider-concepts-to-sync-firebase-and-redux-606a1e3e50d6)

## Table of Contents

- [Features](#features)
- [Configuration](#configuration)
- [Usage](#usage)
- [Accessing firebaseApp](#accessing-firebaseapp)
- [License](#license)

## Features

firekit-provider allows you to watch firebase data and sync it to your redux store with a minimum of code to write. It uses a `Provider` to server the `firebaseApp` to all Components that need it.

Some features that are unique to this firebase toolkit are:
* **persistant watchers** - the watchers are persistant and are not linked to components. You deside when to watch a value in your firebase database and when to unwatch (turn off listeners) it.

* **your create firebaseApp** - you initialise the firebaseApp how you want and add it as prop to the firekit-provider `FirebaseProvider` and all your components have access to the firebaseApp

* **easy persistance** - firekit-provider saves in your store only simple json data so that persistance is no nightmare any more!

* **normalised redux store** - the firekit-provider reducers are structured with normalisation in mind

* **native firebase** - you can use firebases native sdk for the web. firekit-provider is just listening on changes. Every change on the data you can make as it is described in the official firebase documentation

* **realtime forms** - firekit-provider has a special Warapper for `redux-forms` witch allows to sync them with the realtime database very simple and plus it is automaticaly synced on field changes in real time if they ocure while your are in the Form

Features like populating values in the database are omited with purpose. The [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) are the place where you should populate data that must be saved in multiple places.


## Configuration

We will use code snipets from the demo project to explan how to configure firekit-provider. There are two main steps for the configuration:
* prepare the `FirebaseProvider`
* add the firekit-provider reducers to your redux reducer

To initialize the `FirebaseReducer` we need to initialize our firebase app as it is described in the official firebase documentation.
When we have the `firebaseApp` we just add it as paramater to our Provider.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FirebaseProvider } from 'firekit-provider'; // Import the FirebaseProvider from firekit-provider
import configureStore from './store';
import { Root } from './containers/Root';
import { addLocalizationData } from './locales';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const store = configureStore();
addLocalizationData();

//Get the configs of your firerbase project
const firebaseConf={
    apiKey: "AIzaSyBQAmNJ2DbRyw8PqdmNWlePYtMP0hUcjpY",
    authDomain: "react-most-wanted-3b1b2.firebaseapp.com",
    databaseURL: "https://react-most-wanted-3b1b2.firebaseio.com",
    projectId: "react-most-wanted-3b1b2",
    storageBucket: "react-most-wanted-3b1b2.appspot.com",
    messagingSenderId: "258373383650"
}

//Initialise your firebase app
const firebaseApp = firebase.initializeApp(firebaseConf);

//The part above can be done in a seperate file so it can be acessed from everiwhere in your application
//It is moved here in this snipped for simplicity purpose

//Now in your root part of your application add the FirebaseProvider as you have done with the redux Provoder
//Take care that the FirebaseProvider comes after the redux Provider to have access to the redux store
ReactDOM.render(
  <Provider store={store}>
    <FirebaseProvider firebaseApp={firebaseApp}>
      <Root />
    </FirebaseProvider>
  </Provider>
  , document.getElementById('root')
);

registerServiceWorker();

```

Take care that adding the `FirebaseProvider` happens in a root part of your application and after the redux Provider.
Taht would be the first part. In the second one we just add the firekit-provider reducers to our redux reduxer.

```js
import { responsiveStateReducer } from 'redux-responsive';
import { combineReducers } from 'redux';
import { responsiveDrawer } from 'material-ui-responsive-drawer';
import { reducer as formReducer } from 'redux-form'
import auth from './auth/reducer';
import dialogs from './dialogs/reducer';
import messaging from './messaging/reducer';
import locale from './locale/reducer';
import theme from './theme/reducer';
import firekit-providerReducers from 'firekit-provider'; //Import the firekit-providerReducers


console.log(firekit-providerReducers);

const reducers = combineReducers({
  browser: responsiveStateReducer,
  responsiveDrawer,
  form: formReducer,
  auth,
  dialogs,
  messaging,
  locale,
  theme,
  ...firekit-providerReducers //Spread the firekit-provider reducers
})

export default reducers;

```
To add all firekit-provider reducers to your redux store just spread the firekit-providerReducers object into your `comineReducers` object.

**WARNING:** if you are using persistance take care that the reducer `initialization` is not persisted! He saves the watchers. If he would be persisted the watcher would not initialize again after a page reload. If you are using `redux-persist` just add him to the black list.

```js
  persistStore(store, {blacklist:['auth', 'form', 'connection', 'initialization'] }, ()=>{}); //Add initialization to persistance blacklist if you use persistance
```

**INFO:** the reducers are not customasable. In future we could add customatisation for this so they could have any name you want.

## Usage

Let us now do something with our firekit-provider :smile:
To use `firekit-provider` in a component we need to tell the component to get all `firekit-provider` props from the context.
We use for that a simple call `withFirebase`. It is very similar to the `react-router` call `withRouter`. The usage is exactly the same.

Let us take a look on a simple component.

```js

import React, { Component }  from 'react';
import {injectIntl, intlShape} from 'react-intl';
import { Activity } from '../../containers/Activity';
import { withFirebase } from 'firekit-provider';

class MyComponent extends Component {

  componentDidMount(){
    const { watchList }= this.props;
    watchList('companies'); //Here we started watching a list

  }

  render() {
    const { intl }= this.props;

    return (
      <Activity
        title={intl.formatMessage({id: 'my_component'})}>
      </Activity>
    );
  }

}

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};


export default injectIntl(withFirebase(MyComponent)); //Here using 'withFirebase()' we added all we need to our component

```
As you can see calling `withFirebase(Component)` adds to our Component all props we need to work with firekit-provider. `watchList` is one of more API calls we can make. More about every one is writen below in the [API](#api) section.

Now that we know how to add the `firekit-provider` props to our Compont lets take a look what we can do with it.

### Accessing firebaseApp

The `FirebaseProvider` provides the `firebaseApp` trought the rect context and `withFirebase` allows us to get it easely as Component property. We can then do with the `firebaseApp` whatever we want: create, update, delete data in the realtime databae, work with the auth or with the storage. You have all your freedom with firebase cause `firebaseApp` is the same one you initialised and put into the `FirebaseProvider`.


```js

import React, { Component }  from 'react';
import {injectIntl, intlShape} from 'react-intl';
import { Activity } from '../../containers/Activity';
import { withFirebase } from 'firekit-provider';

class MyComponent extends Component {

  componentDidMount(){
    const { firebaseApp }= this.props;
    firebaseApp.database().ref('some_value').update(55); //Here we just changed a value in our database
  }

  render() {
    const { intl }= this.props;

    return (
      <Activity
        title={intl.formatMessage({id: 'my_component'})}>
      </Activity>
    );
  }

}

MyComponent.propTypes = {
  intl: intlShape.isRequired,
};


export default injectIntl(withFirebase(MyComponent)); //Here using 'withFirebase()' we added all we need to our component

```





## License

MIT @TarikHuber

[travis-image]: https://travis-ci.org/TarikHuber/firekit-provider.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/firekit-provider
[daviddm-image]: https://img.shields.io/david/TarikHuber/firekit-provider.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/firekit-provider
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/firekit-provider.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/firekit-provider
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/firekit-provider/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
