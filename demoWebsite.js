import React, { Component } from "react";
import { FaSearch } from 'react-icons/fa';
import { Header, Image } from 'semantic-ui-react';
import dep1 from './images/dep1.jpg';
import pic1 from './images/pic1.png';
import pic3 from './images/pic3.jpg';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.jpg';
import pic2nrs from './images/pic2nrs.jpg';
import gallery2 from './images/gallery2.jpg'


class Website extends Component {
  constructor() {
    super();
    this.state = {

      blogs: [
        { id: 1, title: "This is Me", content: " Hey welcome to NRSwrites , this is my first blog. This is me", image: pic2nrs },
        { id: 2, title: "Wind and Me", content: " Hey welcome to NRSwrites , this is my secong blog. Wind and Me", image: gallery2 },
        { id: 3, title: "Last Day in College", content: " Hey welcome to NRSwrites , this is my Third blog.", image: pic3 },
        { id: 4, title: "Moss:an untold story", content: " Hey welcome to NRSwrites , this is my Fourth blog.", image: pic4 },
        { id: 5, title: "The flight not taken", content: " Hey welcome to NRSwrites , this is my Last blog.", image: pic5 },
      ],
      selectedBlog: null,
      showGallery: false,
    };
    this.showFullBlog = this.showFullBlog.bind(this);
    this.backToOverview = this.backToOverview.bind(this);
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  // to display full blog
  showFullBlog(blog) {
    this.setState({ selectedBlog: blog });
  }

  // to go back to the blog overview
  backToOverview() {
    this.setState({ selectedBlog: null });
  }

  toggleGallery() {
    this.setState(prevState => ({
      showGallery: !prevState.showGallery // Toggle gallery visibility
    }));
  }

  render() {
    return (
      <div style={{
        backgroundImage: `url(${pic1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}>
        {/* Header Section */}
        <Header
          as='h2'
          style={{
            backgroundColor: '#BDB76B',
            padding: '2px',
            color: '#800080',
            // borderRadius: '8px',
            marginBottom: '0',

          }}
        >
          <Image circular src={dep1} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
          NRS Writes....
        </Header>

        {/* Navbar Section */}
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#808080' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">About Me</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="nav nav-pills nav-fill w-100" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'black' }}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'black' }}>Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'black' }} onClick={this.toggleGallery}>Gallery</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" aria-disabled="true" style={{ color: 'gray' }}>Disabled</a>
                </li>

                {/* Search Bar */}
                <li className="nav-item ms-auto" style={{ display: 'flex' }}>
                  <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-light" type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>




        {/* Blog Cards */}

      
        <div className="container mt-4">
          <div className="row">
            {this.state.selectedBlog ? (  
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.selectedBlog.title}</h5>
                    <p className="card-text">{this.state.selectedBlog.content}</p>
                    <button className="btn btn-secondary" onClick={this.backToOverview}>Back to Overview</button>
                  </div>
                </div>
              </div>
            ) : (
              
              this.state.blogs.map((blog) => (
                <div className="col-md-4 mb-4" key={blog.id}>
                  <div className="card h-100 shadow-lg" style={{ borderRadius: "10px" }}>
                    <img src={blog.image} className="card-img-top" alt={blog.title} style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px", height: "200px", objectFit: "cover" }} />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{blog.title}</h5>
                      <p className="card-text text-secondary">{blog.content}</p>
                    </div>
                    <div className="card-footer bg-white border-0 text-center">
                      <button className="btn btn-primary" onClick={() => this.showFullBlog(blog)}>Read More</button>
                    </div>
                  </div>
                </div>
              ))
            )
            }

          </div>
        </div>


      </div>
    );
  }
}

export default Website;
