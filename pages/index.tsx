
import ClickBtn from '../components/ClickBtn'
import BuyBtn from '../components/BuyBtn'
import ScoreDisplay from '../components/ScoreDisplay';

export default function Home() {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
      <div className='text-3xl text-center bg-emerald-300 w-full mb-10'>HI THERE</div>
      <ScoreDisplay />
      <ClickBtn />
      <div className='flex justify-around w-1/2'>
        <BuyBtn btnName="Small Upgrade" btnCost={5} btnMultiplier={0.01}/>
        <BuyBtn btnName="Medium Upgrade" btnCost={12} btnMultiplier={0.03}/>
        <BuyBtn btnName="Big Upgrade" btnCost={25} btnMultiplier={0.09}/>
      </div>
    </div>
    </>
  )
}
