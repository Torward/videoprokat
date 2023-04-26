import style from "./MainPage.module.css"
import Header from "../UI/Header/Header";
import FilmCard from "../../widgets/FilmCard/FilmCard";
import {Component} from "react";
import axios from "axios";
import {Pagination} from "@mui/material";

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
    // nextPage = () =>{
    //     if(this.state.currentPage < Math.ceil(this.state.films.length/ this.state.))
    // }
    render() {
        const {films, currentPage} = this.state;
    return(
        <div className={style.container}>
            <Header logout={this.props.logout}/>
            <div className={style.catalog}>
                {
                    films.length === 0 ?
                        <div className={style.empty}>
                            <h1>Неть</h1>
                        </div> :
                        films.map((film) => (
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
                <div className={style.pagination}>
                    {
                        films.length > 0 ?
                            <Pagination count={films.totalPages} defaultPage={films.currentPage} siblingCount={0} boundaryCount={1} />
                            :
                            <div className={style.empty}>
                                <h1>Неть</h1>
                            </div>
                    }
                </div>


            </div>



        </div>
    )
}


}

export default MainPage;