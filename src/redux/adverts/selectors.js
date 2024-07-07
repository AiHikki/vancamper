import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectHasMore = state => state.adverts.hasMore;
export const selectFavorites = state => state.adverts.favorites;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) => {
    return adverts?.filter(advert => {
      const includesLocation = advert.location
        .toLowerCase()
        .includes(filters.location.toLowerCase());

      // const matchesVehicleType = filters.vehicleType ? advert.form === filters.vehicleType : true;

      // const matchesEquipment =
      //   filters.equipment.length > 0
      //     ? filters.equipment.every(equip => advert.details[equip] >= 1)
      //     : true;

      return includesLocation;
      // && matchesVehicleType && matchesEquipment;
    });
  }
);

export const selectFavoriteAdverts = createSelector(
  [selectAdverts, selectFavorites],
  (adverts, favorites) => {
    return adverts?.filter(advert => favorites.includes(advert._id));
  }
);
