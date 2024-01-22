import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import ReadCSV from "../components/readcsv"
import Author from "../components/author"
import CrudForm from "../components/crud"

const App = () => (
    <Layout>
        <Router>
            <PrivateRoute path="/app/profile" component={Profile} />
            <Login path="/app/login" />
            <ReadCSV path="/app/readcsv" />
            <Author path="/app/author" />
            <CrudForm path="/app/crud" />
        </Router>
    </Layout>
)

export default App