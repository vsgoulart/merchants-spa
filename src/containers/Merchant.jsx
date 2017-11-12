import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMerchant } from "../actions/merchants";
import MerchantView from "../components/MerchantView";

class Merchant extends Component {
  render() {
    return <MerchantView {...this.props} />;
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
