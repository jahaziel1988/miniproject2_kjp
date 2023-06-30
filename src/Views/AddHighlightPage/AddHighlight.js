import React from 'react';
import './AddHighlight.css';

const AddHighlightForm = () => {

  return (
    <div className='add-highlight-container'>
        <div className="add-highlight-box">
            <form>
                <button className='exit-button'>
                  X
                </button>
                <p>
                  Become a member and showcase your highlights!
                </p>
            </form>
        </div>
    </div>
  );
};

export default AddHighlightForm;
