export default function PetsFilter() {
  const action = () => {
    console.log("action");
    // this.props.setFilterPet();
  };

  return (
    <>
      <form action="">
        <button
          onClick={() => {
            action();
          }}
        ></button>
        <input type="breed" />
      </form>
    </>
  );
}
