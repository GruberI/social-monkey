import React, { useContext } from 'react'
import { signInWithGoogle } from '../../services/auth'
import "./style.css"
import { UserContext } from '../../contexts/user'

export default function SignInBtn() {
    const [user, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();
        if(userBySignIn) setUser(userBySignIn);
    }

    return (
        <div className="signInBtn" onClick={signInBtnClick}>
            <p>Sign in with Google</p>
        </div>
    )
}

