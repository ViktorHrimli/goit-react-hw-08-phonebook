import { useLocation } from 'react-router-dom';
import { TitleText, Text } from './Home.styled';
import { Box, Links, Conteier } from 'commonStyle/Common.styled';
import icons from 'commonStyle/Common.styled';
function Home() {
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;
  const location = useLocation();
  return (
    <Conteier>
      <Box
        as="nav"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gridGap="15px"
      >
        <IconsRecord />
        <Links to="/register" state={{ from: location }}>
          Register
        </Links>
        <Links to="/login" state={{ from: location }}>
          Login
        </Links>
      </Box>
      <Text>
        <TitleText>Україна починається з тебе</TitleText> <br /> В’ячеслав
        Чорновіл
      </Text>
      <Box
        display="flex"
        alignItems="flex-end"
        gridGap="20px"
        justifyContent="space-around"
        mt={[155]}
      >
        <IconsExpand />
        <IconsStanby />
        <IconsCheckBox />
      </Box>
    </Conteier>
  );
}

export default Home;
