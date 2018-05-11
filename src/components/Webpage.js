class Webpage extends React.Component {
  render() {
    return (
      <div className="registrationForm">
        <title>The world's coolest webpage.</title>
      </div>
    );
  }
}

export default Webpage;
import FillerText from './FillerText';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <FillerText />,
  <FillerText />,
  document.getElementById('root')
);
