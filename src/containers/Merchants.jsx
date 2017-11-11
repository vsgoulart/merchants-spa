import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMerchants } from "../actions/merchants";

class Merchants extends Component {
  render() {
    const { merchants, loading, error } = this.props;
    if (error) {
      return <h1>{error}</h1>;
    } else if (loading) {
      return <h1>loading</h1>;
    } else {
      return (
        <ul>
          {merchants.map(merchant => (
            <li key={merchant.id}>
              <Link to={`/merchants/${merchant.id}`}>{merchant.firstname}</Link>
            </li>
          ))}
        </ul>
      );
    }
  }

  componentDidMount() {
    const { getMerchants } = this.props;

    getMerchants(0);
  }
}

const mapStateToProps = state => ({
  merchants: Object.keys(state.merchants.data).map(
    key => state.merchants.data[key]
  ),
  loading: state.merchants.isFetching,
  error: state.merchants.error
});

const mapDispatchToProps = dispatch => ({
  getMerchants(pagination) {
    dispatch(fetchMerchants(pagination));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Merchants);
