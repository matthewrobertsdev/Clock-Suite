import React from 'react';
import {Provider} from 'react-redux';
import createModelStore from './ModelStore';
import AppRouter from './AppRouter';
import './App.css';
export default function App(){
  return (
    <Provider store={createModelStore()}>
        <AppRouter/>
    </Provider>
  );
}
