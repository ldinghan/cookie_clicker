
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount } from './CounterSlice'
import { incrementByAmount } from './MultiplierSlice';
import { upgrade } from "./UpgradesSlice";

interface Upgrades {
    big: number;
    medium: number;
    small: number;
}
interface BuyBtn {
    btnName: keyof Upgrades;
    btnCost: number;
    btnMultiplier: number;
}

const BuyBtn = ({ btnName, btnCost, btnMultiplier }: BuyBtn ) => {
    const count = useSelector((state:any) => state.counter.value);
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    
    const currentLevelRef = useSelector((state:any) => state.upgrades.value);
    const currentLevel = currentLevelRef[btnName];

    
    const handlePurchase = () => {
        if (count >= btnCost) {
            dispatch(decrementByAmount(btnCost));
            dispatch(incrementByAmount(btnMultiplier));
            dispatch(upgrade(btnName));
        } else {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 1500);
        }
    }

    return (
        <div className='select-none mx-4 flex flex-col h-fit'>
            Level {currentLevel} ({((currentLevel-1) * btnMultiplier)?.toFixed(2)})
            <button onClick={handlePurchase} className="bg-green-300 w-fit h-fit px-8">Buy {btnName} for {btnCost} points</button>
            {showError && <div className='text-red-500'>Not enough points!</div>}
            
        </div>
    )
}

export default BuyBtn;