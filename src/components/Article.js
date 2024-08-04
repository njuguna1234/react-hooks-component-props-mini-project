
import React from 'react';

function Article({ title, date, preview, minutes }) {
  const minutesToRead = (minutes) => {
    const cups = Math.ceil(minutes / 5);
    return "☕️".repeat(cups) + ` ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"} - {minutesToRead(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
