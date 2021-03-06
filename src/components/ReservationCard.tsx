import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}
export default function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name: name,
            food: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
}
