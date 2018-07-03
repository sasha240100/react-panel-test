import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authAction} from '../actions';

import {
  Form,
  Button,
  Input,
  Icon
} from 'antd';

import style from './LoginForm.scss';

const FormItem = Form.Item;

export default connect()(Form.create()(class LoginForm extends Component {
  static creds = {
    username: 'admin',
    password: 'admin'
  };

  state = {
    username: '',
    password: '',
    logged: false
  };

  static contextTypes = Link.contextTypes;

  validate() {
    const {getFieldValue} = this.props.form;

    const username = getFieldValue('username');
    const password = getFieldValue('password');
    const {dispatch} = this.props;
    const {router: {history}} = this.context;

    if (
      username === LoginForm.creds.username
      && password === LoginForm.creds.password
    ) {
      dispatch(authAction(true, username, password));
    } else {
      dispatch(authAction(false, '', ''));
    }

    history.push('/profile');
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    const {logged, username, password} = this.state;

    const authData = logged ? {
      logged: true,
      username,
      password
    } : {logged: false};

    return (
      <Form className={style.LoginForm__Form}>
        <FormItem>
          {
            getFieldDecorator('username', {})(
              <Input prefix={
                <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }
              } />} placeholder="Username" />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password', {})(
              <Input prefix={
                <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
              } type="password" placeholder="Password" />
            )
          }
        </FormItem>
        <FormItem>
          <Button onClick={this.validate.bind(this)} type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </FormItem>
      </Form>
    )
  }
}));
