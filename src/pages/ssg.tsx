import {NextPage} from 'next'
import Head from 'next/head'

type SSGProps={}

const SSG:NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title> ssg </title>
        <link rel="icon" href="/favicon.io" />

      </Head>
      <main>
        <p>
          이
        </p>
      </main>
    </div>
  )
}

export default SSG