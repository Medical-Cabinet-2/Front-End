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
        <PrivateRoute path = "/dashboard" exact component={Display} />
        <PrivateRoute path="/strains" exact component={Strains} />
        </>
    );
};

export default Routes;