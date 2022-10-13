import { Link, useLocation } from 'react-router-dom';
import { Box } from 'commonStyle/Common.styled';
function Home() {
  const location = useLocation();
  return (
    <Box>
      <nav>
        <Link to="/register" state={{ from: location }}>
          Register
        </Link>
        <Link to="/login">LogIn</Link>
      </nav>
    </Box>
  );
}

export default Home;
