import React from 'react';
import {Link} from 'react-router-dom';


import {Input} from '../common/input.component';


const classNames = {
  container: 'pa4 mt4 bg-black-10 center w-40',
  heading: 'black-60',
  form: 'tl flex items-center justify-around',
  buttonContainer: 'flex flex-column items-end',
  submit: 'ttu bold dib ph4 pv3 bg-black-90 link hover-bg-black-70 bg-animate white-90',
  reset: 'mt3 ttu bold dib ph4 pv3 bg-black-40 link hover-bg-black-20 bg-animate white-90',
};


export const FilterForm = ({filters, resetFilters, updateFilter}) => {
  return (
    <div className={classNames.container}>
      <h2 className={classNames.heading}>Choose filters for article list</h2>
      <div className={classNames.form}>
        <div className={classNames.row}>
          <Input
            fieldName="Article ID"
            fieldId="articleId"
            fieldPlaceholder="5 ..."
            fieldVal={filters.articleId}
            updateFn={updateFilter.bind(null, "articleId")}
          />

        <Input
          fieldName="Show Comments"
          fieldId="commentsCheck"
          fieldType="checkbox"
          fieldVal={filters.showComments}
          updateFn={updateFilter.bind(null, "showComments")}
        />
      </div>

      <div className={classNames.buttonContainer}>
        <Link className={classNames.submit} to="/articles">
          view articles
        </Link>
        <button className={classNames.reset} onClick={resetFilters}>reset filters</button>
      </div>
    </div>
  </div>
  );
}
