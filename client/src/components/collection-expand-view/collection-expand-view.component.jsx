/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import PathEditorContext from '../../contexts/path-editor-context';
import { addCollection } from '../../actions/path-editor';
import styles from './collection-expand-view.css';

const ExpandedCollectionView = ({ collectionID, title, category, description }) => {
  const history = useHistory();
  const [expanded, toggleExpanded] = useState(false);
  const { dispatch } = useContext(PathEditorContext);

  const handleUse = () => {
    dispatch(
      addCollection({
        _id: collectionID,
        title,
        description,
        category,
      })
    );
    history.push('/path-editor');
  };

  const handleContainerClick = () => {
    toggleExpanded(!expanded);
  };

  return (
    <div tabIndex={0} role="button" onClick={handleContainerClick} className={styles.Container}>
      {expanded ? (
        <>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className={styles.Button} onClick={handleUse} type="button">
            Use
          </button>
        </>
      ) : (
        <h3>{title}</h3>
      )}
    </div>
  );
};

export default ExpandedCollectionView;
