import Inventory from './Inventory';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  fetchInventory,
  fetchInventorySuccessful,
  fetchInventoryFailed,
  addPartsToBill,
  addPartsToBillSuccessful,
  addPartsToBillFailed,
  searchParts,
  searchPartsSuccessful,
  searchPartsFailed,
} from './action';
import { fetchInventoryApi, addPartsToBillApi, searchPartsApi } from './api.Inventory';

const mapStateToProps = state => ({
  ...state.inventory,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchInventory: filterData => {
    dispatch(fetchInventory());
    fetchInventoryApi()
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log('successful Data Fetch');
          console.log(data.parts);
          dispatch(fetchInventorySuccessful(data.parts));
        } else {
          console.log(data.error);
          dispatch(fetchInventoryFailed());
        }
      });
  },
  dispatchAddPartsToBill: (employeeId, partsArray, billId) => {
    const data = { employeeId, partsArray, billId };
    dispatch(addPartsToBill());
    addPartsToBillApi(data)
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('Error in network');
      })
      .then(data => {
        if (data.code === '200' && data.error === 'none') {
          console.log('successful Addition To Bill');
          dispatch(addPartsToBillSuccessful());
        } else {
          console.log(data.error);
          dispatch(addPartsToBillFailed());
        }
      });
  },
  dispatchSeachParts: (fuelType, manufacturer) => {
    // search for parts
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventory));
