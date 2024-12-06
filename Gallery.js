import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import pic1 from './images/pic1.png'; 
class Gallery extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${pic1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      position: 'relative', 
      flexDirection: 'column',
    };

    const paragraphStyle = {
      color: 'black', 
      textAlign: 'center', 
      fontSize: '1.5rem', 
      maxWidth: '80%',
      marginTop: '20px', 
    };

    return (
      <div style={backgroundStyle}>
   
        <div>
          <Card>
            <Image src={this.props.pic} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.title}</Card.Header>
            </Card.Content>
          </Card>
        </div>

       
        <div style={paragraphStyle}>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Gallery;
