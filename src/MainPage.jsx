import React ,{Component} from 'react';
import DisplayPage from './DisplayPage';
import PopUp from './PopUp';

class MainPage extends Component
{
   render()
   {
       
        if(!this.props.isLoaded)
        {
          return(<div>Let it load please...</div>);
        }
        else if(this.props.error)
        {
          return(<div>Error:{this.props.error.message}</div>);
        }
        else
        {
            return(<div>
           <DisplayPage items={this.props.items} />
           <PopUp onLnameChange={this.props.onLnameChange}
                  onFnameChange={this.props.onFnameChange}
                  onIurlChange={this.props.onIurlChange}
                  submitForm={this.props.submitForm}
           />
  
  </div>  );
        }
       
   }
}

export default MainPage;