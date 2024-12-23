import React from 'react';
import Header from './Component/Header';
import LoginForm from './Component/LoginForm';
import Label from './Component/atoms/Label/Label'
import CustomInput from './Component/atoms/Input/CustomInput'

const App = () => (
  <>
    <Header />
    <Label label="Email Address" type="title" />
    <Label label="Password" type="sub-title" />
    <Label label="Term & Condition" type="sub-title-link" />
    <CustomInput type="text" label="Email" />
    <CustomInput type="password" label="Password" />
  </>
);
export default App;
