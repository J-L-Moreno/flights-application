import { Route, Routes } from "react-router-dom";
import { SearchView } from "../pages/search/SearchView";
import { ResultsView } from "../pages/results/ResultsView";
import { DetailsView } from "../pages/details/DetailsView";

export function AppRouter(){
    return(
        <Routes>
            <Route path={"/"} element={<SearchView/>}/>
            <Route path={"/flights"} element={<ResultsView/>}/>
            <Route path={"/detail"} element={<DetailsView/>}/>
        </Routes>
    );
}