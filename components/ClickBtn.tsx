
import { useSelector, useDispatch } from 'react-redux'
import { incrementByAmount } from './CounterSlice'
import ThreeScene from './ThreeScene';

const ClickBtn = () => {
    const multiplier = useSelector((state:any) => state.multiplier.value);
    const dispatch = useDispatch()

    return (
        <button className="select-none bg-blue-300 w-36 h-36 my-5" onClick={() => dispatch(incrementByAmount(multiplier))}>
            {/* click me ({multiplier?.toFixed(2)}) */}
            <ThreeScene/>
        </button>
    )
}

export default ClickBtn;