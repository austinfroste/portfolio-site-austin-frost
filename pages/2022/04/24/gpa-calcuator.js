import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function GPACalculator() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | GPA Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
        <div>
            <h1>GPA Calculator</h1>
            <p className="blog-post-date">24 April 2022</p>
        </div>
	    <div>
            <p>This is my simple GPA calculator I use at the end of the term.</p>
            <a href="https://github.com/austinfroste/rps-game">The project</a>
	    </div>
      </body>
      
    </div>
  )
}