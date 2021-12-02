import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieData, setMovieData] = useState({});
    const {id} = useParams();
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovieData(json.data.movie);
        setLoading(false);
    }
    console.log('render....', movieData)

    useEffect(() => {
        getMovie();
    }, [])

    return (
        <div>
            { loading? <h1>Loading.....</h1> :
                <div>
                    <h1>title : {movieData.title}</h1>
                    <img src={movieData.medium_cover_image} alt="image content" />
                </div>}
        </div>
    )
}

Detail.prototype = {



    title: PropTypes.string.isRequired
}


export default Detail;