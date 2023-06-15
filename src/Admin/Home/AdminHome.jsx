import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box, CircularProgress } from '@mui/material';
import { baseUrl } from '../../global/config'
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();

  const [blogs, setBlogs] = React.useState([])
  const [loading, setLoading] = React.useState(true);
  const [isDeleteing, setIsDeleting] = React.useState(false)
  const [id, setId] = React.useState(null);
  const getBlog = async () => {
    let res = await axios.get(`${baseUrl}Blog`);
    setBlogs(res.data);
    setLoading(false);

  };

  const deleteBlog = async (id) => {
    setId(id)
    setIsDeleting(true);
    await axios.delete(`${baseUrl}Blog/${id}`);
    getBlog();
    setIsDeleting(false);
  };

  React.useEffect(() => {
    getBlog();
  }, []);
  return (
    <Box sx={{ width: "80%", margin: "0 auto" }}>
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Blogs
      </Typography>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />

        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            blogs.map(blog => {
              return (
                <Card key={blog.id} sx={{ maxWidth: 345, margin: '10px' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={blog.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom sx={{ color: "#aaa", fontSize: '16' }}>
                      @{blog.author}
                    </Typography>


                    <Typography gutterBottom variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() => navigate(`/admin/edit/${blog.id}`)}
                      size="small" >Edit</Button>

                    <Button
                      onClick={() => deleteBlog(blog.id)}
                      size="small" sx={{ color: "red" }}>{id === blog.id && isDeleteing ? "deleting....." : "delete"}</Button>

                    

                  </CardActions>
                </Card>
              )
            })
          }
        </Box>
      )
      }
    </Box>
  );
}