import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function RPSGame() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | Rock Paper Scissors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
        <div>
          <h1>Rock Paper Scissors</h1>
          <p className="blog-post-date">8 September 2020</p>
        </div>
	      <div>
          <p>A simple Rock Paper Scissors (RPS) game coded in Swift for the iOS platform.</p>
          <h2>A brief overview</h2>
		      <p>I developed this app roughly a month prior to starting my formal CS education. Thus, this project was made entirely on a self-learning merit. Later on in my first year of my CS degree, I was assigned a RPS game for a class project, of which ended up working better than this one. However, that one was made to be played through the Terminal whereas this has a full GUI for iOS. Though simple, I did design the various RPS images found throughout the app. Note that this app was developed specifically for an iPhone 11 Pro. Scaling for other devices was not taken into account.</p>
          <h2>Gameplay</h2>
          <p>The interface is simple. Users are instantly thrown into the gameplay. They are prompted to pick from "rock", "paper", or "scissors". After they do, a random computer-generated move will be made and then the user and computer moves will be evaluated. Whoever won that round will have a point added to their score. This is the extent of the gameplay.</p>
          <a href="https://github.com/austinfroste/rps-game">The project</a>
	      </div>
      </body>
      
    </div>
  )
}