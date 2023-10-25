import Header from './components/Header';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import Post from './components/Post';
import Footer from './components/footer';
function App() {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[img, setImg] = useState([]);
  const initialData = JSON.parse(localStorage.getItem('data')) || [];
  const[data, setData] = useState(initialData);

  
  const index = [];
  const addData = () => {
    const newData = {
      name: name,
      email: email,
      index:index,
      img: img,
    };
    setData([...data, newData]);
    setName('');
    setEmail('');
    setImg(null);

    // Save data to local storage
    localStorage.setItem('data', JSON.stringify([...data, newData])) ;
  };
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data'));
    if (savedData) {
      setData(savedData);
    }
  }, []);

  const deletePostProp = (postIndex) => {
    const updatedData = data.filter((_, index) => index !== postIndex);
    setData(updatedData);
  };

  return (
    <div className="App">
      <Header/>
      <div className="dataCollection">
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width:'50ch', display: 'flex', flexDirection:'column' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField 
      id="outlined-basic"
      label="Name" 
      variant="outlined" 
      type='text'
      value={name} 
      onChange={(e)=>setName(e.target.value)}
      required
      sx={{
        '& > :not(style)': {textAlign:'left', width:'50ch' },
      }}
      />
      <TextField 
      id="outlined-basic" 
      label="Email" 
      variant="outlined" 
      type='email' 
      value={email} 
      onChange={(e)=>setEmail(e.target.value)}
      required
      sx={{
        '& > :not(style)': {textAlign:'left', width:'50ch' },
      }}
      />
      <TextField 
      id='image-upload'
      label='Image'
      type='file'
      accept='image/*'
      InputLabelProps={{
        shrink: true,
      }}
      onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
      required
      sx={{
        '& > :not(style)': { textAlign:'right', pl:0, width:'50ch' },
      }}
      />

      <Button 
      variant='outlined'
      color='success'
      onClick={addData}
      type='button'
      sx={{'& > :not(style)': { display:'flex', width:'18ch', justifyContent:'space-between'}}}
      >
       
      <div

      >
        <span>Add Data</span>
        <span><AddIcon/></span>
      </div>
      </Button>

    </Box>
    </div>
    
    <div className="data">
      <div className="data_val">
        <h2>Image</h2>
        <h2>Name</h2>
        <h2>Email</h2>
        <h2>Delete</h2>
      </div>
      <div className="data">
        {/* Adding Data to the Post Component using Map function for the each individual Post  */}
      {
      data.map((e, index)=>{
   return (<Post name={e.name} email={e.email} img={e.img} key={index} index={index} deletePostProp={deletePostProp}/>);
      })
      }

      </div>
    </div>


    <Footer/>
    </div>
  );
}

export default App;
