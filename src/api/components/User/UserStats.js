import React, { useEffect } from "react";
import Head from "../Helpers/Head";
import useFetch from "../../../hooks/useFetch";
import { STATS_GET } from "../../../api";
import Loading from "../Helpers/Loading";
import Error from "../Helpers/Error";
const UserStatsGraphs = React.lazy(() => {
    return import("./UserStatsGraphs");
});

const UserStats = () => {
    const { data, error, loading, request } = useFetch();

    useEffect(() => {
        async function getData() {
            const { url, options } = STATS_GET();
            const { response, json } = await request(url, options);
            console.log(json);
        }
        getData();
    }, [request]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (data)
        return (
            <React.Suspense fallback={<div></div>}>
                <Head title="Statics" />
                <UserStatsGraphs data={data} />
            </React.Suspense>
        );
    else return null;
};

export default UserStats;
