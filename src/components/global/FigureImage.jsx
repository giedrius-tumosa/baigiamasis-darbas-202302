const FigureImage = (props) => {
  return (
    <figure className={props.className}>
      <img {...props.attributes} />
    </figure>
  );
};

export default FigureImage;
