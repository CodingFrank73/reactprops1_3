import Item from "./item"
import toDo from "../data/toDo.json"

const List = () => {
    // if (this.props.eachItem.state == 1)
    return (
        <main>
            <ul>
                {toDo.map((eachItem) => <Item
                    className={eachItem.className}
                    stateImg={eachItem.stateImg}
                    name={eachItem.name}
                    categoryImg={eachItem.categoryImg}
                />)}
            </ul>
        </main>

    )
}

export default List