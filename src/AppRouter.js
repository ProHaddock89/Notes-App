import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing/Landing';


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter