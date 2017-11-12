import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import MerchantFormView from "../components/MerchantFormView";

class MerchantForm extends Component {
  render() {
    return <MerchantFormView {...this.props} />;
  }
}

MerchantForm = reduxForm({ form: "merchant" })(MerchantForm);

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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    save(values) {
      console.log(values);

      if (id) {
      } else {
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantForm);
