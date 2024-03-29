import React, { Fragment } from 'react';
import './skills.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';

export default function Skills() {
  const { items, loading, error, search } = useSelector(
    (state) => state.skills
  );

  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };

  const hasQuery = search.trim() !== '';
  return (
    <Fragment>
      <div className="skills__wrapper">
        <div>
          <input className="search-field" type="search" value={search} onChange={handleSearch} />
        </div>
        {!hasQuery && <div>Введите что-нибудь для поиска... </div>}
        {hasQuery && loading && <div>поиск...</div>}
        {error ? <div>Произошла ошибка...</div> : <ul>{items.map(o => <li key={o.id}>{o.name}</li>)}</ul>}
      </div>
    </Fragment>
  );
}
