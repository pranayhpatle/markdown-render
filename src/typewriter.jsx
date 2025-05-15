import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const TypingEffect = ({ markdownText ,speed=200}) => {
  const [data, setData] = useState('');
  const [index, setIndex] = useState(0);
  const [chunks, setChunks] = useState([]);


  useEffect(() => {
    const chunkArray = markdownText.split(/(\s+|\n+)/).filter(Boolean); 
    setChunks(chunkArray);
  }, [markdownText]);

  useEffect(() => {
    if (chunks.length === 0) return;

    const typingSpeed = speed || 200; 
    const timer = setInterval(() => {
      setData((prev) => prev + chunks[index]);
      setIndex((prev) => prev + 1);
    }, typingSpeed);

    if (index === chunks.length) {
      clearInterval(timer);
    }

    return () => clearInterval(timer); 
  }, [index, chunks]);

  return (
    <div>
      <ReactMarkdown rehypePlugins={rehypeRaw}>{data}</ReactMarkdown>
    </div>
  );
};

export default TypingEffect;
