
import { useSelector } from 'react-redux'


const ScoreDisplay = () => {
    const count = useSelector((state:any) => state.counter.value)


    return (
        <>
            <div className="text-5xl">{count.toFixed(2)}</div>
        </>
    )
}

export default ScoreDisplay;