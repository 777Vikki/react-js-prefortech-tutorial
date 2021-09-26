
import './Btn.css';

function Btn(props) {
    return (
        <span className={props.cls} onClick={props.performOp}>{props.sign}</span> 
    )
}

export default Btn;