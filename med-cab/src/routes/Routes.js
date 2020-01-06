import React from "react";
import { Route } from "react-router";
import StrainForm from "../../features/StrainForm";
import Strains from "../../features/strains/Strains";
import Recommendations from "../../features/strainRecommender/Recommendations";

const Routes = () => {
    return (
        <>
        <PrivateRoute path="/strainform" exact component={StrainForm} />
        <PrivateRoute
            path="/intake/recommendations"
            exact
            component={Recommendations}
        />
        <PrivateRoute path="/strains" exact component={Strains} />
        </>
    );
};

export default Routes;