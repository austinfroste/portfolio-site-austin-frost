import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function DungeonCrawler() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | Dungeon Crawler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
        <div>
          <h1>Dungeon Crawler</h1>
          <p className="blog-post-date">16 April 2021</p>
        </div>
	      <div>
            <p>This project is a simple terminal-based dungeon crawler created for my CS162 course at Lane Community College.</p>
            <a href="https://github.com/austinfroste/cs162-lab3">The project (this is a private link atm)</a>
	    </div>
      </body>
      
    </div>
  )
}