import React from 'react';
import './NewsFeed.css';

const newsArticles = [
  { title: 'Innovatech VR Pro Launch Date Announced', content: 'We are excited to announce that Innovatech VR Pro will be launching on June 1st.' },
  { title: 'Innovatech VR Pro Features', content: 'Discover the amazing features of the Innovatech VR Pro, including a high-resolution display and 360-degree tracking.' },
  { title: 'Pre-order Now Available', content: 'Pre-orders for the Innovatech VR Pro are now open. Be the first to experience the next level of virtual reality.' }
];

function NewsFeed() {
  return (
    <div className="news-feed">
      <h2>Latest News</h2>
      {newsArticles.map((article, index) => (
        <article key={index}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </article>
      ))}
    </div>
  );
}

export default NewsFeed;
