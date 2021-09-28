import { Card } from 'components/Card/Card';
import houseMobile from 'assets/house_mobile.png';
import houseDesktop from 'assets/house_desktop.png';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1200px)' });
  return (
    <>
      {isBigScreen ? (
        <>
          <Card disabled imgSrc={houseDesktop} imgAlt='house' />
          <Card disabled error imgSrc={houseDesktop} imgAlt='house' />
          <Card imgSrc={houseDesktop} imgAlt='house' />
          <Card error imgSrc={houseDesktop} imgAlt='house' />
        </>
      ) : (
        <>
          <Card disabled imgSrc={houseMobile} imgAlt='house' />
          <Card disabled error imgSrc={houseMobile} imgAlt='house' />
          <Card imgSrc={houseMobile} imgAlt='house' />
          <Card error imgSrc={houseMobile} imgAlt='house' />
        </>
      )}
    </>
  );
}

export default App;
