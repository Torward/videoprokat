import style from "./MainPage.module.css"
import Header from "../UI/Header/Header";

function MainPage(props) {
    return(
        <div className={style.container}>
            <Header logout={props.logout}/>

        </div>
    )
}

export default MainPage;