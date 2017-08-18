import React, {Component} from "react";
import axios from "axios";
const ORG_ID = 649199458;
const AUTH_TOKEN = 'e0004d01c7fa98354ecf7258d8e70672';

class ContactTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    axios.get(`https://books.zoho.com/api/v3/contacts`,
      {headers: {'Authorization': 'Zoho-authtoken ' + AUTH_TOKEN}})
      .then(res => {
        console.log(res.data.contacts[0])
        const contacts = res.data.contacts;
        this.setState({contacts})
      });
  }

  renderPosts() {
    return this.state.contacts.map((contact) => {
      return (
        <tr key={contact.contact_id}>
          <td><input type="checkbox" id={contact.contact_id}/></td>
          <td>{contact.contact_name}</td>
          <td>{contact.company_name}</td>
          <td>{contact.email}</td>
          <td>{contact.email}</td>
          <td>{contact.gst_treatment}</td>
          <td> ₹{contact.outstanding_receivable_amount}</td>
          <td> ₹{contact.outstanding_payable_amount}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="table-controls clearfix">
          <div className="pull-left">
            <a href="javascript:;">
              All Contacts
            </a>
          </div>
          <div className="pull-right">
            <button className="btn btn-danger btn-sm"> <i className="fa fa-plus fa-1x"> </i> New </button> <button className="btn btn-default btn-sm"> <i className="fa fa-gear fa-1x"> </i>  </button> <button className="btn btn-default btn-sm"> <i className="fa fa-reorder fa-1x"> </i>  </button> <a href="btn btn-link"> <i className="fa fa-lightbulb-o fa-1x"> </i> Page Tips </a>
          </div>


        </div>
        <div className="table-responsive">
          <table className="table table-hover" width="100%">
            <thead>
            <tr>
              <th><input type="checkbox" id="all" value="all"/></th>
              <th>Name</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Work Phone</th>
              <th>GST Treatment</th>
              <th>Recievables</th>
              <th>Payables</th>
            </tr>
            </thead>
            <tbody>
            {this.renderPosts()}

            </tbody>
          </table>
        </div>
      </div>
    )

  }

}
export default ContactTable