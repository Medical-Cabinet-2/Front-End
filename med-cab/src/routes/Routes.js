import React from "react";
import PrivateRoute from "./PrivateRoute";
import StrainForm from "../components/forms/StrainForm";
import Strains from "../components/strains/Strains";
import StrainRecs from "../components/recommendations/StrainRecs";
import Display from "../components/dashboard/Display";

const Routes = () => {
    return (
        <>
        <PrivateRoute path="/strainform" exact component={StrainForm} />
        <PrivateRoute
            path="/intake/recommendations"
            exact
            component={StrainRecs}
        />
        <PrivateRoute exact path = "/dashboard" component={Display} />
        <PrivateRoute exact path="/strains" component={Strains} />
        </>
    );
};

export default Routes;