import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMerchants } from "../actions/merchants";

import MerchantsView from "../components/MerchantsView";

class Merchants extends Component {
  render() {
    return <MerchantsView {...this.props} />;
  }

  componentDidMount() {
    const { getMerchants } = this.props;
    let { page } = this.props.match.params;

    if (page) {
      page--;
    }

    getMerchants(page);
  }

  componentDidUpdate(prevProps) {
    const { getMerchants } = this.props;
    let { page } = this.props.match.params;
    const prevPage = prevProps.match.params.page;

    if (page !== prevPage) {
      if (page) {
        page--;
      }

      getMerchants(page);
    }
  }
}

const mapStateToProps = state => ({
  merchants: Object.keys(state.merchants.data).map(
    key => state.merchants.data[key]
  ),
  loading: state.merchants.isFetching,
  error: state.merchants.error,
  lastPage: state.merchants.lastPage
});

const mapDispatchToProps = dispatch => ({
  getMerchants(pagination) {
    dispatch(fetchMerchants(pagination));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Merchants);
