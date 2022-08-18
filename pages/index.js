import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="main-content">
      <Head>
        <title>@austinfroste | Austin Frost</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <header>
          <h1><a href="/">Austin Frost</a></h1>
        </header>

        <hr></hr>

	      <div>
		      <p>Howdy, I'm <b>Austin Frost</b>, a third year CS student working in UO's Computational Social Neuroscience Lab. 
          If you have any inquiries, or would just like to chat, feel free to email! You can also check out my projects on GitHub. ✌️</p>
    	    <a href="mailto:afrost6@uoregon.edu">Email</a> <a href="https://github.com/austinfroste">GitHub</a> <a href="https://csnl.uoregon.edu/people/">CSNLab</a>
	      </div>

        <div>
          
          <div>
            <h3>2020</h3>
            <p><a href="https://github.com/austinfroste/rps-game">RPS Game</a></p>
          </div>

        </div>

        <footer>
          <a href="mailto:afrost6@uoregon.edu">Email</a> <a href="https://github.com/austinfroste">GitHub</a> <a href="https://csnl.uoregon.edu/people/">CSNLab</a>
        </footer>
      </body>
      
    </div>
  )
}
