import React from 'react';
import {connect} from 'react-redux';

import {FilterForm} from '../components/filter-form/filter-form.component';
import {updateField, resetFilters} from '../store/filters/actions';

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (fieldName, fieldVal) => dispatch(updateField(fieldName, fieldVal)),
  resetFilters: () => dispatch(resetFilters()),
});

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterForm);
