import { connect } from 'react-redux';

import { PostContainer } from './Post';
import { appendHistory, postCheckIn, setCheckInComment } from '../../redux';

const mapStateToProps = ({ checkin, location }) => ({
  checkin,
  location,
});
const mapDispatchToProps = {
  appendHistory,
  postCheckIn,
  setCheckInComment,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
