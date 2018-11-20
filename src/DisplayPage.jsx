import React,{Component} from 'react';
import PopUp from './PopUp';

class DisplayPage extends Component
{
  render()
  {
      return( 
    <table className="table table-hover">
        <thead >
           <tr className="success">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Picture </th>
              <th>Edit row</th>
           </tr>
       </thead>
       <tbody>
        { this.props.items.map(item =>(
              <tr key={ item.id } className="info" >
                  <td>{ item.first_name } </td>
                  <td>{ item.last_name } </td>
                  <td> <img src={item.avatar} alt='pic' className="img-circle" height="170" width="170" /> </td>
                  
                  <td> <PopUp onLnameChange={this.props.onLnameChange}
                              onFnameChange={this.props.onFnameChange}
                              onIurlChange={this.props.onIurlChange}
                              submitForm={this.props.submitForm}
                              btnName={"Edit"} 
                            
                              onEditClick={()=>this.props.onEditClick(item.id)}
                              
                              fnameDefault={this.props.fname}
                              lnameDefault={this.props.lname}
                              iurlDefault={this.props.iurl}
                       />
                  </td>
                  
              </tr>
             ))
        }
        </tbody>
   </table>);
  }
}
export default DisplayPage;