
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} = useContext(ChallengesContext);
    
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/defaultusername.png" alt="user avatar" />
            <div>
                <strong>User Name</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    LV. {level}
                </p>
            </div>
        </div>
    )
}