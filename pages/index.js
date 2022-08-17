import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | Austin Frost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
	      <div>
		      <p>Hello, my name is Austin Frost. I am a CS student working towards becoming an iOS Software Engineer. If you have any inquiries, or would just like to chat, feel free to email! You can also check out my projects on GitHub. ✌️</p>
    	    <a href="https://github.com/austinfroste">GitHub</a> <a href="austindfrost@icloud.com">Email</a>
	      </div>
      </body>

      <Footer />
    </div>
  )
}
