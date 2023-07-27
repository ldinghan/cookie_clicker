
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrementByAmount } from './CounterSlice'
import { incrementByAmount } from './MultiplierSlice';

interface BuyBtn {
    btnName: string;
    btnCost: number;
    btnMultiplier: number;
}

const BuyBtn = ({ btnName, btnCost, btnMultiplier }: BuyBtn ) => {
    const count = useSelector((state:any) => state.counter.value);
    const dispatch = useDispatch();
    const [showError, setShowError] = useState(false);
    const [currentLevel, setCurrentLevel] = useState(1);
    const handlePurchase = () => {
        if (count >= btnCost) {
            dispatch(decrementByAmount(btnCost));
            dispatch(incrementByAmount(btnMultiplier));
            setCurrentLevel(level => level + 1);
        } else {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 1500);
        }
    }
    return (
        <div className='flex flex-col w-1/4 h-fit'>
            Level {currentLevel} ({(currentLevel-1) * btnMultiplier})
            <button onClick={handlePurchase} className="bg-green-300 w-fit h-fit px-8">Buy {btnName} for {btnCost} points</button>
            {showError && <div className='text-red-500'>Not enough points!</div>}
        </div>
    )
}

export default BuyBtn;