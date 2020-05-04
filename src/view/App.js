//Copyright  © 2020  Matt Roberts
import React from 'react';
import {Provider} from 'react-redux';
import createModelStore from '../model/ModelStore';
import AppRouter from '../management/AppRouter';
export default function App(){
  return (
    <Provider store={createModelStore()}>
        <AppRouter/>
    </Provider>
  );
}
