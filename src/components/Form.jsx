export const Form = () => {
  return (
    <>
      <label for="exampleDataList" className="form-label">
        Find track
      </label>
      <input
        class="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
    </>
  );
};
