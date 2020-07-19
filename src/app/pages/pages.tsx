import React from 'react';
import PageRoute from './pages.route';


const PagesComponent = (props: any) => {

    return (
        <div>           
          {PageRoute(props)}
           
        </div>
    );
}




export default PagesComponent;