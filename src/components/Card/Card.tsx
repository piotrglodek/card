import houseMobile from 'assets/house_mobile.png';

type Props = {
  disabled?: boolean;
};

export const Card = ({ disabled }: Props) => {
  return (
    <div className='card'>
      <div className='card__container-image'>
        <img className='card__image' src={houseMobile} alt='house' />
      </div>
      <div className='card__container'>
        <p className='card__tag overline-text color-blue800 bg-blue100'>
          tag text
        </p>
        <p className='card__lead lead-text'>lead text</p>
        <p className='card__overline-text overline-text'>overline text</p>
        <p className='card__major-text major-text'>major text</p>
      </div>
    </div>
  );
};
