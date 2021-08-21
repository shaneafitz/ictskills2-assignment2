import React from "react";
import { withRouter } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
// import useMovie from "../hooks/useMovie";
import { getInfo } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorDetailsPage = (props) => {
    const { id } = props.match.params;
    // console.log("id", id);
    const { data: actor, error, isLoading, isError } = useQuery(
        ["actor", { id: id }],
        getInfo
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ActorDetails actor={actor} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default withRouter(ActorDetailsPage);