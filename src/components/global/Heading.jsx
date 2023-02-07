const Heading = (props) => {
  switch (props.tag) {
    case "h1": {
      return <h1 className={props.className}>{props.textContent}</h1>;
    }
    case "h2": {
      return <h2 className={props.className}>{props.textContent}</h2>;
    }
    case "h3": {
      return <h3 className={props.className}>{props.textContent}</h3>;
    }
    case "h4": {
      return <h4 className={props.className}>{props.textContent}</h4>;
    }
    case "h5": {
      return <h5 className={props.className}>{props.textContent}</h5>;
    }
    case "h6": {
      return <h6 className={props.className}>{props.textContent}</h6>;
    }
    default: {
      return <h1 className={props.className}>{props.textContent}</h1>;
    }
  }
};

export default Heading;
