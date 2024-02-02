import React, { PureComponent } from "react";
import classes from "./Postsfetch.module.css";
import loadingGif from './loader.gif';

class Postsfetch extends PureComponent {
   state = {
   posts: [],
   loading: true,
};

   componentDidMount() {
      fetch("https://www.omdbapi.com/?s=disney&type=movie&page=1&apikey=ce7a93f7")
         .then((response) => response.json())
         .then((data) => this.setState({ posts: data.Search, loading: false }))
         .catch((error) => console.error("Error:", error));
}

   render() {
      let content = "";

      if (this.state.loading) {
      // content = <h2>Loading...</h2>;
      content = <img src={loadingGif} alt="Loading..." className={classes.loader}/>;
   } else {
      let arrPosts = this.state.posts;

      if (arrPosts) {
         content = arrPosts.map((item) => (
            
            <div key={item.imdbID} className={classes.movie}>
            <img
               src={item.Poster}
               alt={item.Title}
               className={classes.poster}
            />
            <p className={classes.title}>{item.Title}</p>
            <p className={classes.year}>{item.Year}</p>
         </div>
      ));
      } else {
         content = <p>No movies found.</p>;
      }
   }

      return <div className={classes.films}>
               {content}
            </div>;
   }
}

export default Postsfetch;

// import React, { PureComponent } from 'react'
// import classes from './Postsfetch.module.css'

// class Postsfetch extends PureComponent {
// 	state ={
//    posts: [],
//    loading: true
// }

// 	componentDidMount(){
// 	fetch("https://www.omdbapi.com/?s=day&type=movie&page=11&apikey=ce7a93f7")
//       .then(response => response.json())
//       .then(data => this.setState({posts: data, loading: false}))
// }

// 	render() {
// 		let content = ''
//    if(this.state.loading ){
//       content = <h2>Loading...</h2>
//    }
//    else{
//       let arrPosts = this.state.posts
//       console.log(arrPosts)
//       content = arrPosts.map(item =>
//          <div className={classes.posts}>
//             {/* <img src={item.url} alt={`Cat ${item.id}`} /> */}
//             <h3>{item.Title}</h3>
//             {/* <p>{item.body}</p> */}
//          </div>

//       )

//    }
//    return (
//       <div className={classes.cats}>
//       {content}
//       </div>
//    )
// }
// }

// export default Postsfetch
