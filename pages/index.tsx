
import ClickBtn from '../components/ClickBtn'
import BuyBtn from '../components/BuyBtn'
import ScoreDisplay from '../components/ScoreDisplay';
import LoginBtn from '../components/LoginBtn';
import { useSelector } from 'react-redux'
import { database } from '../firebase';
import { useEffect } from 'react';
import { ref, update } from 'firebase/database';

export default function Home() {
  const uid = useSelector((state:any) => state.uid.value);
  const multiplier = useSelector((state:any) => state.multiplier.value);
  const currentPoints = useSelector((state:any) => state.counter.value);
  const currentUpgrades = useSelector((state:any) => state.upgrades.value)

  useEffect(() => {
    const saveToDB = () => {
      if (uid) {
        const playerRef = ref(database, `players/${uid}`);

        update(playerRef, {
          currentPoints: currentPoints,
          multiplier: multiplier,
          upgrades: {
            big: currentUpgrades.big,
            medium: currentUpgrades.medium,
            small: currentUpgrades.small
          }
        });
      }
    }
    saveToDB()
  }, [uid, multiplier, currentPoints, currentUpgrades]);



  return (
    <>
    <LoginBtn/>
    <div className='flex justify-center items-center flex-col'>
      <div className='text-3xl text-center bg-emerald-300 w-full mb-10'>HI THERE {uid}</div>
      <ScoreDisplay />
      <ClickBtn />
      <div className='flex justify-center items-center w-full max-w-xl'>
        <BuyBtn btnName="small" btnCost={5} btnMultiplier={0.01}/>
        <BuyBtn btnName="medium" btnCost={12} btnMultiplier={0.03}/>
        <BuyBtn btnName="big" btnCost={25} btnMultiplier={0.09}/>
      </div>
    </div>
    </>
  )
}
