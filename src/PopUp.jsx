import React,{ Component } from 'react';

class PopUp extends Component
{


    render()
    {
        return(<div>
             <button type="button" className="btn btn-info btn-lg" 
                     data-toggle="modal" data-target="#myModal">
              Add row
           </button>

         <div className="modal fade" id="myModal" role="dialog">
             <div className="modal-dialog">
                <div className="modal-content">
                   <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                  </div>
                  <div className="modal-body">
                     



                <div className="container">
                     <h2>Add new entry</h2>
                     <form  className="form-inline">
                       
                         <label htmlFor="fname">First name</label><br />
                         <input type="text"  placeholder="first name"  value={undefined}
                                 onChange={this.props.onFnameChange}
                                 className="form-control"  required /> <br />
                    
                         <label htmlFor="lname">Last name</label> <br />
                         <input type="text" placeholder="last name" name="lname" value={undefined}
                                onChange={this.props.onLnameChange} 
                                className="form-control" required
                                /> <br />

                         <label htmlFor="iurl">Image url</label> <br />
                         <input type="text" placeholder="image url" value={undefined}
                                onChange={this.props.onIurlChange} name="iurl"
                                className="form-control" required
                                /> <br /> <br />
                        
                        <button onClick={ this.props.submitForm } data-dismiss="modal"
                         > Submit </button>
                         
                          
                     </form>
               </div>
            </div>
            <div className="modal-footer">
               <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
         </div>
    </div>
 </div>
            </div>);
    }
}

export default PopUp;