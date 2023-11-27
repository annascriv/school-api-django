import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'

const Navbar = () => {
    return (
        <>
        <Row style={{textAlign:"center"}}>
            <Link to='/'>Home</Link>
            <Link to='students'>Students</Link>
            <Link to='subjects'>Subjects</Link>

        </Row>
        
        </>
    )
}

export default Navbar;