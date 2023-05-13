import { Container } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";

function Navbar()
{

    const navigate = useNavigate();
    return (
        <Container>
           <Container>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
           </Container>
        </Container>
    );
}

export default Navbar;