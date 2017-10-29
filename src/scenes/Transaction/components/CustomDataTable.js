import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const CustomDataTabel = ({ tableData }) => (
  <Table height="670px" fixedHeader selectable>
    <TableHeader adjustForCheckbox>
      <TableRow>
        <TableHeaderColumn colSpan="9" style={{ textAlign: 'center' }}>
          Transaction Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Payment Method</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Transaction Type</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Contact Number</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.paymentMethod}</TableRowColumn>
          <TableRowColumn>{row.amount}</TableRowColumn>
          <TableRowColumn>{row.transactionType}</TableRowColumn>
          <TableRowColumn>{row.cardOwnerName}</TableRowColumn>
          <TableRowColumn>{row.contactNumberOnCard}</TableRowColumn>
          <TableRowColumn>{row.date}</TableRowColumn>
          <TableRowColumn>{row.time}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
