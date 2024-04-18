
const InputContent = ({ setCaptionText , caption }) => {

    return (
      <div>
        <h3>Ad Content: {caption}</h3>
        <input
          type="text"
          id="message"
          name="message"
          onChange={(e)=>setCaptionText(e.target.value)}
          value={caption}
        />
      </div>
    );
  };
  
  export default InputContent;
  