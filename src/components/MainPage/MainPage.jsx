import style from "./MainPage.module.css"
import Header from "../UI/Header/Header";
import FilmCard from "../../widgets/FilmCard/FilmCard";
import {Component} from "react";
import axios from "axios";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: [],
            currentPage: 1
        }
    }

    componentDidMount() {
        this.getAllFilms(this.state.currentPage)
    }
getAllFilms = (currentPage) => {
        currentPage -= 1;
        axios.get("http://localhost:5555/catalog/api/v1/film/list_all?currentPage=" + currentPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    films: data.content,
                    totalPages: data.totalPages,
                    currentPage: data.number + 1
                })
            }).catch((error) => {
            console.error("Error: " + error)
        })
    }

    render() {
    return(
        <div className={style.container}>
            <Header logout={this.props.logout}/>
            <div className={style.catalog}>
                {
                    this.state.films.length === 0 ?
                        <div className={style.empty}>
                            <h1>Неть</h1>
                        </div> :
                        this.state.films.map((film) => (
                            <FilmCard imageUrlLink={film.imageUrlLink}
                                      id={film.id}
                                      title={film.title}
                                      premierYear={film.premierYear}
                                      country={film.country}
                                      genre={film.genre}
                                      director={film.director}
                                      description={film.description}/>

                        ))

                }
            </div>



        </div>
    )
}


}

export default MainPage;