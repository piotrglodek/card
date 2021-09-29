import { Card, TCardProps } from 'components/Card/Card';
import houseMobile from 'assets/house_mobile.png';

const tempProps = {
  img: {
    src: houseMobile,
    alt: 'house',
  },
  tagText: 'available',
  leadText: 'Functional house',
  overlineText: 'Project',
  majorText: '4leafs',
};
function App() {
  const cards: TCardProps[] = [
    {
      type: 'success',
      ...tempProps,
    },
    {
      type: 'success',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'success',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'success',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    },

    // informational
    {
      type: 'informational',
      ...tempProps,
    },
    {
      type: 'informational',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'informational',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'informational',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    },
    // error
    {
      type: 'error',
      ...tempProps,
    },
    {
      type: 'error',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'error',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'error',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    },
    // warn
    {
      type: 'warning',
      ...tempProps,
    },
    {
      type: 'warning',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'warning',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'warning',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    }, // neutral
    {
      type: 'neutral',
      ...tempProps,
    },
    {
      type: 'neutral',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'neutral',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'neutral',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    },
    // attention
    {
      type: 'attention',
      ...tempProps,
    },
    {
      type: 'attention',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'attention',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'minor',
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'minor',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'minor',
      disabled: true,
      error: true,
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'light',
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'light',
      disabled: true,
      ...tempProps,
    },
    {
      type: 'attention',
      tagType: 'light',
      disabled: true,
      error: true,
      ...tempProps,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#000',
        padding: '40px',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
}

export default App;
