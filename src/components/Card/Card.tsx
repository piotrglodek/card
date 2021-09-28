import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  disabled?: boolean;
  error?: boolean;
  imgSrc: string;
  imgAlt: string;
  tagColor?: string;
  tagBg?: string;
};

export const Card = ({
  disabled = false,
  error = false,
  imgSrc,
  imgAlt,
  tagColor = 'blue800',
  tagBg = 'blue100',
}: Props) => {
  tagColor = error ? 'red800' : tagColor;
  tagBg = error ? 'red100' : tagBg;

  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(prev => !prev);
  };

  const cardClass = classNames({
    card: true,
    'card--disabled': disabled && error === false,
    'card--disabled-error': disabled && error,
    'card--selected': selected,
  });
  const cardTagClass = classNames({
    card__tag: true,
    'overline-text': true,
  });

  return (
    <section
      onClick={toggleSelected}
      className={`${cardClass} border-${tagColor}`}>
      <figure className='card__container-image'>
        <img className='card__image' src={imgSrc} alt={imgAlt} />
      </figure>
      <article className='card__container'>
        <p className={`${cardTagClass} color-${tagColor} bg-${tagBg}`}>
          tag text
        </p>
        <p className='card__lead lead-text color-dark700'>0012-DE-Muller</p>
        <p className='card__overline-text overline-text color-dark500'>
          Projekt:
        </p>
        <p className='card__major-text major-text color-dark700'>Point 145</p>
      </article>
    </section>
  );
};
