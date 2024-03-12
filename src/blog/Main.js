import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import { useEffect, useState } from 'react';
import Post1 from './blog-post.1.md';
import Post2 from './blog-post.2.md';
import Post3 from './blog-post.3.md';


/*async function afficherPost(post) {
  fetch(post).then((reponse) => { reponse.text().then((text) => {console.log(text)})});
}


function Main(props) {
  const { posts, title } = props;
  const [postContents, setPostContents] = useState([]);*/

  export default function ComposantHome(props) {

  const [postContents, setPostContents] = useState([]);

  useEffect(() => {
    //boucle de posts (url ressources) et recuperation du contenu
    // par le bias de la fonction fetch 

   /* let nextId = 0;

    posts.map((post) => (

      fetch(post)
      .then( (response) => response.text())
      .then( (text) => setPostContents([...postContents,{id:nextId++,text:text}]) ) 
      .catch( (erreur) => console.log("requete echouée..."+erreur))
      ))*/

      Promise.all([fetch(Post1), fetch(Post2), fetch(Post3)])
      .then((arrayResponse) => Promise.all(arrayResponse.map((response) => response.text())))
      .then((arrayTexts) => setPostContents(arrayTexts))
      .catch((error) => console.error('Error fetching posts', error));

  }, []);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
         
      }}
    >
      <Typography variant="h6" gutterBottom>
        {props.title}
      </Typography>
      <Divider />
      {/*boucle du contenu des posts pour la creation 
      des composants Markdown */} 
      
      {postContents.map((postContent) => (
        <Markdown className="markdown" key={postContent.substring(0, 40)}>
          {postContent}
        </Markdown>
      ))}
    </Grid>
  );
}

ComposantHome.proTypes = {
  title: PropTypes.string.isRequired,
};

/*Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};*/

//export default Main;
