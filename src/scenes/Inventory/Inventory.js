import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import AddPartToBillBar from './components/AddPartToBillBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSelection: [],
      cart: [],
      filter: {},
    };
  }

  onRowSelection = selectedElements => {
    console.log(selectedElements);
  };

  onAddToCard = () => {};

  onCheckOut = () => {};

  componentDidMount() {
    this.props.dispatchFetchInventory();
  }

  render() {
    const { inventoryTableData } = this.props;
    console.log(inventoryTableData);

    return (
      <Container>
        <TableWrapper>
          {inventoryTableData ? (
            <CustomDataTable onRowSelection={this.onRowSelection} tableData={inventoryTableData} />
          ) : (
            undefined
          )}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
          <AddPartToBillBar />
        </Wrapper>
      </Container>
    );
  }
}

export default Inventory;
