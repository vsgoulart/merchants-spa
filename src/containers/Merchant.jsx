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
  const merchant = merchants[id]
    ? {
        ...merchants[id],
        bids: merchants[id].bids.sort((firstBid, secondBid) => {
          const firstDate = new Date(firstBid.created).getTime();
          const secondDate = new Date(secondBid.created).getTime();

          return secondDate - firstDate;
        })
      }
    : undefined;
  const loading = state.merchants.isFetching
    ? true
    : !merchants.hasOwnProperty(id);

  return {
    merchant,
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
