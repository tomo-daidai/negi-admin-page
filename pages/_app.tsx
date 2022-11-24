import '../styles/main.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import { setTheme } from '../utilities/theme'

const App = ({ Component, pageProps }: AppProps) => {

  // テーマ切り替え（ユーザーのOS環境依存なのでSSGから切り離した場所で実行）
  if (typeof document !== 'undefined') {
    // 初期設定
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(darkModeMediaQuery.matches)
    // イベント設定
    darkModeMediaQuery.addEventListener('change', e => {setTheme(e.matches)})
  }

  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App