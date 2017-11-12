import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMerchants, fetchDeleteMerchant } from "../actions/merchants";

import MerchantsView from "../components/MerchantsView";

class Merchants extends Component {
  render() {
    return <MerchantsView {...this.props} />;
  }

  componentDidMount() {
    const { getMerchants } = this.props;

    getMerchants();
  }
}

const mapStateToProps = (state, ownProps) => {
  const merchants = state.merchants.data;
  const merchantsKeys = Object.keys(merchants);
  const pageSize = 10;
  const pagesCount = Math.ceil(merchantsKeys.length / pageSize);
  let { page } = ownProps.match.params;

  if (page) {
    page--;
  } else {
    page = 0;
  }

  const lowerLimit = 0 + page * 10;
  const upperLimit = 10 + page * 10;

  return {
    merchants: merchantsKeys
      .map(key => merchants[key])
      .slice(lowerLimit, upperLimit),
    loading: state.merchants.isFetching,
    error: state.merchants.error,
    pagesCount
  };
};

const mapDispatchToProps = dispatch => ({
  getMerchants() {
    dispatch(fetchMerchants());
  },
  deleteMerchant(id) {
    dispatch(fetchDeleteMerchant(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Merchants);
