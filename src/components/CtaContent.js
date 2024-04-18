import React from 'react';

const CtaContent = ({ setCtaText ,cta}) => {


  return (
    <div>
      <h3>CTA : {cta}</h3>
      <input
        type="text"
        id="message"
        name="message"
        placeholder="Contact us"
        onChange={(e)=>setCtaText(e.target.value)}
        value={cta}
      />
    </div>
  );
};

export default CtaContent;
