'use client';

import React from 'react';

interface CompanyMapEmbedProps {
  embedUrl?: string;
  width?: string;
  height?: string;
}

const CompanyMapEmbed: React.FC<CompanyMapEmbedProps> = ({
  embedUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.9069277982608!2d46.8463552849971!3d24.86702818405085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUyJzAxLjMiTiA0NsKwNTAnMzkuMCJF!5e0!3m2!1sar!2ssa!4v1748968945868!5m2!1sar!2ssa",
  width = "80%",
  height = "200px",
}) => {
  return (
    <div
      className="w-full max-w-xl mx-auto mt-6 mb-0 rounded-lg overflow-hidden shadow-lg"
      style={{ width, height }}
    >
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default CompanyMapEmbed;
