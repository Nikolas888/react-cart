import './style.scss'

const Count = ({count, increase, id, decrease, changeVale}) => {
    return (
        <div className="count">
            <div className="count__box">
                <input onChange={(e)=>{changeVale(id, +e.target.value)}} type="number" className="count__input" min="1" max="100" value={count} />
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={()=>{increase(id)}}>
                    <img src="./img/icons/icon-up.svg " alt="inc" />
                </button>
                <button type="button" className="count__down" onClick={()=>{decrease(id)}}>
                    <img src="./img/icons/icon-down.svg " alt="dec" />
                </button>
            </div>
        </div>
    );
}
 
export default Count;
