import { connect } from 'react-redux';

import { HomeContainer } from './Home';

const mapStateToProps = ({ checkin, history }) => ({
  history,
  success: checkin.success,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps)(HomeContainer);
