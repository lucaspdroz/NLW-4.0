import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge() {
    const { challengesCompleted } = useContext(ChallengesContext);
    return (
        <div className={style.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}