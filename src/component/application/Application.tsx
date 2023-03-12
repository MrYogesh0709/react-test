export const Application = () => {
  return (
    <>
      <h1>Job Application From</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close"></span>
      <img src="" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            value="Yogesh"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
            <option value="">Select a Country</option>
            <option value="USA">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="AUS">Australia</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I Agree to Terms and Conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
