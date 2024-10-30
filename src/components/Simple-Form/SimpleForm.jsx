const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value="" />
        <br />
        <input type="email" name="email" value="" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
