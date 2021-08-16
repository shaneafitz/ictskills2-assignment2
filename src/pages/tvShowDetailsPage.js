import React from "react";
import { withRouter } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvShowPage";
// import useMovie from "../hooks/useMovie";
import { getTvShow } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const TvShowDetailsPage = (props) => {
    const { id } = props.match.params;
    // console.log("id", id);
    const { data: tvShow, error, isLoading, isError } = useQuery(
        ["tvShow", { id: id }],
        getTvShow
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <>
            {tvShow ? (
                <>
                    <PageTemplate tvShow={tvShow}>
                        <TvShowDetails tvShow={tvShow} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for TV show details</p>
            )}
        </>
    );
};

export default withRouter(TvShowDetailsPage);