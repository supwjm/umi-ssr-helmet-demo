import React from 'react';
import { connect, useIntl, getLocale, setLocale } from 'umi';
import { Button } from 'antd';
import style from './index.less'
import {Helmet} from "react-helmet";

const Home = (props) => {
  const { title } = props;
  console.log('renderd', title);
  const changeLangs = () => {

    const lang = getLocale()
    console.log('changeLangs', lang);
    const change = lang === 'zh-CN' ? 'en-US' : 'zh-CN'
    //     // 刷新页面
    // setLocale('zh-TW', true);
    // // 不刷新页面
    setLocale(change, false);
  }
  const intl = useIntl();
  return (
    <div>
      <Helmet>
          <title>index</title>
          <meta name="keywords" content="ming index" />
	        <meta name="description" content="ming index" />
      </Helmet>
      <h1 className={style.title}>{title}</h1>
      <h2 >{intl.formatMessage(
        {
          id: 'umi',
        }
      )}</h2>
      <Button onClick={changeLangs}>切换语言1</Button>
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
