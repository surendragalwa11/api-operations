import React,{Component} from 'react';
import MainPage from './MainPage';

class Page extends Component
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
    }


   onFnameChange=(e)=>(this.setState({fname:e.target.value}));
   onLnameChange=(e)=>(this.setState({lname:e.target.value}));
   onIurlChange=(e)=>(this.setState({iurl:e.target.value}));

   onEditClick=(id)=>{
        this.state.items.map( item => {
            if(item.id===id)
            {
                this.setState({
                    fname:item.first_name,
                    lname:item.last_name,
                    iurl:item.avatar
                });
            }
        });
   }

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
                 items:[...this.state.items,...result.data],
                 fname:"",lname:"",iurl:""
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
      const { error,items,isLoaded,iurl,fname,lname } = this.state;

      return(
        <MainPage error={error} items={items} isLoaded={isLoaded} 
                  onFnameChange={this.onFnameChange}
                  onIurlChange={this.onIurlChange}
                  onLnameChange={this.onLnameChange}
                  submitForm={this.submitForm}

                  onEditClick={this.onEditClick}

                  fname={fname} lname={lname} iurl={iurl}
        />
      );
      
    }
} 
export default Page;