import React from 'react';
import PropTypes from 'prop-types';

const DetailsCard = ({ item }) => {
  return (
    <div className="details">
      <div className="details__price">
        {item.value.price === 0 ? 'Free' : item.value.price}
      </div>
      <div className="details__status">
          {item.status}
      </div>
      <div className="details__collection">
        <p>Pick Up: {item.collection_notes}</p>
      </div>
      <button className="details__request-this">Request This</button>
    </div>
  );
}

DetailsCard.propTypes = {
  item: PropTypes.object,
}

export default DetailsCard;
