import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import {
  fetchMerchant,
  fetchCreateMerchant,
  fetchUpdateMerchant
} from "../actions/merchants";
import { redirect } from "../actions/redirect";
import MerchantFormView from "../components/MerchantFormView";

class MerchantForm extends Component {
  render() {
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/" />;
    } else {
      return <MerchantFormView {...this.props} />;
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { initialValues, getMerchant } = this.props;

    if (id && !initialValues) {
      getMerchant(id);
    }
  }
}

MerchantForm = reduxForm({ form: "merchant" })(MerchantForm);

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  if (id) {
    const merchants = state.merchants.data;
    const initialValues = merchants[id] ? { ...merchants[id] } : undefined;
    const loading = state.merchants.isFetching
      ? true
      : !merchants.hasOwnProperty(id);

    return {
      initialValues,
      loading,
      error: state.merchants.error,
      redirect: state.redirect
    };
  } else {
    return { redirect: state.redirect };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    save(values) {
      if (id) {
        dispatch(fetchUpdateMerchant(values));
        dispatch(redirect());
      } else {
        dispatch(fetchCreateMerchant(values));
        dispatch(redirect());
      }
    },
    getMerchant(id) {
      dispatch(fetchMerchant(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantForm);
