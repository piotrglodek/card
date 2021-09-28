import { Card } from 'components/Card/Card';
import houseMobile from 'assets/house_mobile.png';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#c7c7c7',
      }}>
      <Card disabled imgSrc={houseMobile} imgAlt='house' />
      <Card disabled error imgSrc={houseMobile} imgAlt='house' />
      <Card imgSrc={houseMobile} imgAlt='house' />
      <Card error imgSrc={houseMobile} imgAlt='house' />
    </div>
  );
}

export default App;
