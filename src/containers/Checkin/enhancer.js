import { connect } from 'react-redux';

import { CheckinContainer } from './Checkin';
import { setCheckInName } from '../../redux';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  setCheckInName,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckinContainer);
