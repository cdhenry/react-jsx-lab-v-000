class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="registrationForm">
        <form>
          <input type="text">
          <input type="password">
        </form>
        <img src="http://twitter.com/some-avatar.png" className="tweet__avatar" />
        <div className="tweet__body">
            <p>We are writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}
