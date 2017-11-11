import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMerchant } from "../actions/merchants";

class Merchant extends Component {
  render() {
    const { merchant, loading, error } = this.props;
    if (error) {
      return <h1>error</h1>;
    } else if (loading) {
      return <h1>loading</h1>;
    } else if (merchant) {
      return <h1>{JSON.stringify(merchant)}</h1>;
    } else {
      return <h1>lol</h1>;
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { merchant, getMerchant } = this.props;

    if (!merchant) {
      getMerchant(id);
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const merchants = state.merchants.data;
  const loading = state.merchants.isFetching
    ? true
    : !merchants.hasOwnProperty(id);

  return {
    merchant: merchants[id],
    loading,
    error: state.merchants.error
  };
};

const mapDispatchToProps = dispatch => ({
  getMerchant(id) {
    dispatch(fetchMerchant(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Merchant);
