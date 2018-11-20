import React,{Component} from 'react';

class ApiCall extends Component
{
    constructor()
    {
        super();
        this.state={
          error:null,
          isLoaded:false,
          items:[],
          fname:"",
          lname:"",
          iurl:""
        }
    }


    componentDidMount()
    {

      //fetch request  
      fetch("https://reqres.in/api/users")
      .then(res => res.json() )
      .then(

          (result)=>{
            this.setState({
                isLoaded:true,
                items:result.data
            });
          },
          (error)=>{
            this.setState({ 
                isLoaded:true,
                error
            });
        }
      );

      //post request
      const data={

       "data":[{ 
             "id":23, 
             "first_name":"James",
             "last_name":"Clark",
             "avatar":"https://picsum.photos/200/300/?random"
             }]
     };

      fetch("https://reqres.in/api/users",{
             method:"POST",
             headers: {
                      'Accept': 'application/json, text/plain, */*',
                      'Content-Type': 'application/json'
                      },
             body :JSON.stringify(data) 
                
       })
      .then( res => res.json() )
      .then(

          (result)=>{
            console.log(result);
            this.setState({
                isLoaded:true,
                items:[...this.state.items,...result.data]
            });
          },
          (error)=>{
            this.setState({ 
                isLoaded:true,
                error
            });
        }
      );

// var data = [{
//     "first_name": "Surendra",
//     "last_name": "Galwa",
//     "avatar":"https://picsum.photos/200/300/?random"
//  }];
 
//  fetch("https://reqres.in/api/users", {
//     method: "POST",
//     body: { "data" : data }
//  })
//  .then(function(response){ 
//   return response.json();   
//  })
//  .then(  
//  (result)=>{
//                this.setState({
//                      isLoaded:true,
//                     items:result.data
//                  });
//                },
//                (error)=>{
//                  this.setState({ 
//                      isLoaded:true,
//                      error
//                 });
//              });

    }


   onFnameChange=(e)=>(this.setState({fname:e.target.value}));
   onLnameChange=(e)=>(this.setState({lname:e.target.value}));
   onIurlChange=(e)=>(this.setState({iurl:e.target.value}));

   submitForm = (e) =>{
   e.preventDefault();
   console.log("Submit block reached");
    var data={

        "data":[{ 
              "id":2123, 
              "first_name":this.state.fname,
              "last_name":this.state.lname,
              "avatar":this.state.iurl
              }]
      };
 
       fetch("https://reqres.in/api/users",{
              method:"POST",
              headers: {
                       'Accept': 'application/json, text/plain, */*',
                       'Content-Type': 'application/json'
                       },
              body :JSON.stringify(data) 
                 
        })
       .then( res => res.json() )
       .then(
 
           (result)=>{
             console.log(result);
             this.setState({
                 isLoaded:true,
                 items:[...this.state.items,...result.data]
             });
           },
           (error)=>{
             this.setState({ 
                 isLoaded:true,
                 error
             });
         }
       );
       
   }

    render()
    {
      const { error,items,isLoaded } = this.state;

      
      if(!isLoaded)
      {
        return(<div>Let it load please...</div>);
      }
      else if(error)
      {
        return(<div>Error:{error.message}</div>);
      }
      else
      {
          return(<div>
          <table className="table table-hover">
              <thead >
                  <tr className="success">
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Picture 
                      </th>
                  </tr>
              </thead>
            <tbody>
           { items.map(item =>(
                  <tr key={ item.id } className="info" >
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td> <img src={item.avatar} alt='pic' className="img-circle" height="170" width="170" /> </td>
                  </tr>
              ))
            }
            </tbody>
           </table>
         
           <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">
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
                     <form  >
                       
                         <label htmlFor="fname">First name</label><br />
                         <input type="text"  placeholder="first name" 
                                 onChange={this.onFnameChange} /> <br />
                    
                         <label htmlFor="lname">Last name</label> <br />
                         <input type="text" placeholder="last name" name="lname"
                                onChange={this.onLnameChange} /> <br />

                         <label htmlFor="iurl">Image url</label> <br />
                         <input type="text" value="https://picsum.photos/200/300/?random"
                                onChange={this.onIurlChange} name="iurl" /> <br />
                        
                        <button onClick={ this.submitForm } > Submit </button>
                          
                     </form>
               </div>
            </div>
            <div className="modal-footer">
               <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
         </div>
    </div>
 </div>

</div>  );
      }
    }
} 
export default ApiCall;