
const Item = (props) => {
    return (
        <li className={props.className}>
            <img src={props.stateImg} alt="iconFront" />
            <p>{props.name}</p>
            <img src={props.categoryImg} alt="iconBack" />
        </li>
    )
}

export default Item