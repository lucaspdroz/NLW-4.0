
import { CompletedChallenge } from "../components/CompletedChallenge";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head'
import style from '../styles/pages/Home.module.css';
import { ChallengeBox } from "../components/ChallengeBox";
import { CoutdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      <CoutdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenge />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CoutdownProvider>
    </div>
  )
}
