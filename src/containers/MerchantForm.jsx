import React, { Component } from "react";
import { connect } from "react-redux";
import MerchantFormView from "../components/MerchantFormView";

class MerchantForm extends Component {
  render() {
    return <MerchantFormView {...this.props} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  if (id) {
    const merchants = state.merchants.data;
    const loading = state.merchants.isFetching
      ? true
      : !merchants.hasOwnProperty(id);

    return {
      initialValues: { ...merchants[id] },
      loading,
      error: state.merchants.error
    };
  } else {
    return {};
  }
};

export default connect(mapStateToProps)(MerchantForm);
