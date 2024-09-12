const Error = () => {
  return (
    <div className="error">
      <span className="oops">Oops!</span>
      <div className="error-br"></div>
      <div className="error-span">
        <span>an unexpected error!</span>
        <span>please try again later.</span>
      </div>
    </div>
  );
};

export default Error;
