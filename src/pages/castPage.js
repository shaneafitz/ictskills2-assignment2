import React, {useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import CastList from "../components/castList";
import { getMovieCast } from '../api/tmdb-api'
import Grid from "@material-ui/core/Grid";

const MovieCastPage = (props) => {
    const { id } = props.match.params

    // const [cast, setCast] = useState([]);
    // useEffect(() => {
    //     getMovieCast(id).then((cast) => {
    //         setCast(cast);
    //     });
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id]);

    const { data: cast, error, isLoading, isError } = useQuery(
        ["cast", { id: id }],
        getMovieCast 
    );

    const { data: movie, error2, isLoading2, isError2 } = useQuery(
        ["movie", { id: id }],
        getMovie
    );

    if (isLoading || isLoading2) {
        return <Spinner />;
    }

    if (isError || isError2) {
        return <h1>{error.message}{error2.message}</h1>;
    }
    return (
        <>
            {cast && movie ? (
                <>
                    <PageTemplate movie={movie}>
                    <Grid container spacing={5}>
                        <CastList cast={cast.cast} />
                        </Grid>
                    </PageTemplate>
                </>
                
            ) : (
                <p>Waiting for cast details</p>
            )}
        </>
    );
};

export default withRouter(MovieCastPage);