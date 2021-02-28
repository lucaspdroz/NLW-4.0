import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={style.ChallengeBoxContainer}>
            {activeChallenge ?
                (
                    <div className={style.ChallengeBoxActive}>
                        <header>Ganhe {activeChallenge.amount}</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                            <strong>Novo desafio</strong>
                            <p>
                                {activeChallenge.description}
                            </p>
                        </main>
                        <footer>
                            <button type="button" className={style.succeededButton} onClick={handleChallengeSucceeded}>Completei</button>
                            <button type="button" className={style.FailButton} onClick={handleChallengeFailed}>Falhei</button>
                        </footer>
                    </div>
                ) : (
                    <>
                        <div className={style.ChallengeBoxNotActive}>
                            <strong>Finalize um ciclo para receber um desafio</strong>
                            <p>
                                <img src="icons/level-up.svg" alt="level up" />
                                Complete-os e ganhe experiência e avance de leve.
                            </p>
                        </div>
                    </>
                )
            }
        </div >
    )
}