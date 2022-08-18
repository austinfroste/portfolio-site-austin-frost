import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function RPSGame() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | RPS Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
          <h2>Rock Paper Scissors Game</h2>
	      <div>
		      <p>Here is a simple project I made when I first started getting into coding.
                I wanted some experience working with iOS/Swift/Xcode, and I thought a simple game would be a good way to get that.
              </p>

              <a href="https://github.com/austinfroste/rps-game">The project</a>
	      </div>
      </body>
      
    </div>
  )
}