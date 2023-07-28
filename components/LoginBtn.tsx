
import { useEffect, useState } from "react";
import { signInAnonymously } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, database } from "../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setUID } from './CurrentUserSlice';
import { setPoints } from "./CounterSlice";
import { setMultiplier } from "./MultiplierSlice";
import { setUpgrades } from "./UpgradesSlice";


const LoginBtn = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const dispatch = useDispatch();
    const uid = useSelector((state:any) => state.uid.value);
    const handleLogin = () => {
        signInAnonymously(auth)
        .then(() => {
            console.log("signed in")
            setLoggedIn(true);
            if (auth.currentUser) {
                dispatch(setUID(auth.currentUser.uid));
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });
    }


    useEffect(() => {
        const playerRef = ref(database, `players/${uid}`);
        
        const getPlayerObj = async () => {
            try {
                const playerSnapshot = await get(playerRef)
                const playerObj = playerSnapshot.val();
                
                if (loggedIn && playerObj) {
                    console.log(playerObj)
                    dispatch(setPoints(playerObj.currentPoints));
                    dispatch(setMultiplier(playerObj.multiplier));
                    dispatch(setUpgrades(playerObj.upgrades));
                }
            } catch (error) {
                console.error(error);
            }
            
        }
        getPlayerObj();
    }, [uid]);

    

    return (
        <button onClick={handleLogin}>Login</button>
    )

}

export default LoginBtn;