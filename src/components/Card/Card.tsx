import { useEffect, useState } from 'react';

type Props = {
  disabled?: boolean;
  error?: boolean;
  imgSrc: string;
  imgAlt: string;
};

type cardClasses = {
  card: string;
  cardContainerImage: string;
  cardImage: string;
  cardContainer: string;
  cardTag: string;
  cardLead: string;
  cardOverline: string;
  cardMajor: string;
};

export const Card = ({ disabled, error, imgSrc, imgAlt }: Props) => {
  const cardClasses = {
    card: `card`,
    cardContainerImage: `card__container-image`,
    cardImage: `card__image`,
    cardContainer: `card__container`,
    cardTag: `card__tag overline-text color-blue800 bg-blue100`,
    cardLead: `card__lead lead-text color-dark700`,
    cardOverline: `card__overline-text overline-text color-dark500`,
    cardMajor: `card__major-text major-text color-dark700`,
  };
  const [cardDefaultClasses, setCardDefaultClasses] =
    useState<cardClasses>(cardClasses);

  useEffect(() => {
    const handleCardClasses = () => {
      if (error) {
        setCardDefaultClasses(prev => ({
          ...prev,
          cardTag: `card__tag overline-text color-red800 bg-red100`,
        }));
      }
      if (disabled) {
        setCardDefaultClasses(prev => ({
          ...prev,
          cardContainer: `card__container card__container--disabled`,
        }));
      }
      if (disabled && error) {
        setCardDefaultClasses(prev => ({
          ...prev,
          card: `card card--disabled`,
        }));
      }
    };

    handleCardClasses();
  }, [error, disabled]);

  return (
    <section className={cardDefaultClasses.card}>
      <figure className={cardDefaultClasses.cardContainerImage}>
        <img className='card__image' src={imgSrc} alt={imgAlt} />
      </figure>
      <article className={cardDefaultClasses.cardContainer}>
        <p className={cardDefaultClasses.cardTag}>tag text</p>
        <p className={cardDefaultClasses.cardLead}>0012-DE-Muller</p>
        <p className={cardDefaultClasses.cardOverline}>Projekt:</p>
        <p className={cardDefaultClasses.cardMajor}>Point 145</p>
      </article>
    </section>
  );
};
