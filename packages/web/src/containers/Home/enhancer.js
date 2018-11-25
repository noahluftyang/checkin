import { connect } from 'react-redux';

import { HomeContainer } from './Home';

const mapStateToProps = ({ location }) => ({
  locations: location.locations,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps)(HomeContainer);
