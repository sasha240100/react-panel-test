import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  Layout
} from 'antd';

import LoginForm from '../components/LoginForm';
import style from './App.scss';

const {
  Header,
  Content,
  Sider
} = Layout;

export default connect(state => ({
  logged: state.logged,
  username: state.username,
  password: state.password
}))(class App extends Component {
  render() {
    const {logged, username} = this.props;

    return (
      <BrowserRouter>
        <Layout className={style.App__Layout}>
          <Header>Header</Header>
          <Layout>
            <Sider>
              username: {username}
            </Sider>
            <Content>
              <Route exact path="/" component={LoginForm} />

              <Route path="/profile" render={({}) => (
                logged ? (
                    <p>Profile page!</p>
                  ) : (
                    <span>Login unsuccessful!!!</span>
                  )
              )} />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    )
  }
})
