import React from 'react';
import './App.css';
import createModelStore from './ModelStore';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
export default function App(){
  return (
    <Provider store={createModelStore()}>
        <AppRouter/>
    </Provider>
  );
}
