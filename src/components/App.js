import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  
  const blogName = "My Blog";
  const blogImage = "https://example.com/blog-logo.png";
  const blogAbout = "This is my awesome blog about everything.";
  const articleData = [
    {
      id: 1,
      title: "First Article",
      date: "2024-04-30",
      preview: "This is the preview of the first article."
    },
    {
      id: 2,
      title: "Second Article",
      date: "2024-05-01",
      preview: "This is the preview of the second article."
    },
    
  ];

  return (
    <div className="App">
      <Header name={blogName} />
      <About image={blogImage} about={blogAbout} />
      <ArticleList articles={articleData} />
    </div>
  );
}

export default App;


