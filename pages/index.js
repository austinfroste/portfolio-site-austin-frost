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

      <Header />

      <body>
	      <div>
		      <p>Howdy, I'm <b>Austin Frost</b>, a third year CS student working in UO's Computational Social Neuroscience Lab. 
          If you have any inquiries, or would just like to chat, feel free to email! You can also check out my projects on GitHub. ✌️</p>
    	    <a href="mailto:afrost6@uoregon.edu">Email</a> <a href="https://github.com/austinfroste">GitHub</a> <a href="https://csnl.uoregon.edu/people/">CSNLab</a>
	      </div>

        <hr></hr>

        <div>
          <h2>2022</h2>
          <a href="/2022/08/18">BIDS Conversion</a>
          <a href="/2022/04/24">GPA Calculator</a>
          <h2>2021</h2>
          <a href="/2021/04/16/dungeon-crawler">CS 162 Dungeon Crawler</a>
          <h2>2020</h2>
          <a href="/2020/09/08/rps-game">Rock Paper Scissors</a>
        </div>
      </body>
      
    </div>
  )
}
