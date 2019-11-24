import React from 'react';
import Layout from '@theme/Layout';

function About() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '50vh',
      fontSize: '20px',
    }}>
   
   
        <p>這是我(Eddy Chang)的個人部落格，記錄了許多技術性的、日常性的文章。我是一名軟體開發者，也是學校或開發教學課程的講師，目前專注於 JavaScript、React、React Native 等相關技術的研究與開發。</p>
            
      </div>
    </Layout>
  );
}
export default About;