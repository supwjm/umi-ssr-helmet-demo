import React from 'react';
import { connect, useIntl, getLocale, setLocale } from 'umi';
import style from './index.less'
import {Helmet} from "react-helmet";

const Home = (props) => {
  const { title } = props;
  console.log('renderd', title);
  const intl = useIntl();
  return (
    <div>
      <Helmet>
          <title>test</title>
          <meta name="keywords" content="ming test" />
	        <meta name="description" content="ming test" />
      </Helmet>
      <h1 className={style.title}>test</h1>
    </div>
  )
}
Home.getInitialProps = (async ({ store, isServer, history, match, route }) => {
  console.log('history111',history);
  if (!isServer) { return }
  await store.dispatch({ type: 'test/test' })
  const { test } = store.getState()
  return { test }
})

export default connect((({ test }) => ({ title: test.title })))(Home)
