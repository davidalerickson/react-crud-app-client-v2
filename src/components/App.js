import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const PageOne = () => {
    return <div className="">
        Page 1 - <Link to="/pagetwo">To Page 2</Link>
        </div>
}

const PageTwo = () => {
    return <div className="">
         Page 2 - <Link to="/">Back to Page 1</Link>
    </div>
}

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App
 