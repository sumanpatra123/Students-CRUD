import { FormControl, FormGroup, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import react, { useState } from "react";
import { addStudent } from "./Service/api";
import { useHistory } from "react-router-dom";


const useStyle = makeStyles({
    container: {
      width: '50%',
      margin: '5% 0 0 25%',
      '& > *': {
          marginTop: 20
      }
    }
})

const initialValues = {
    id: '',
    name: '',
    age: ''
}

const AddStudent = () => {
    const [student, setStudent ] = useState(initialValues);
    const { id, name, age } = student;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value })
        console.log(student);
    }
    
    const addStudentDetails = async () => {
        await addStudent(student);
        history.push('./');
    }
  return (
      <FormGroup className={classes.container}>
          <Typography variant="h4">Add Student</Typography>
          <FormControl>
              <InputLabel>Id</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='id' value={id} />
          </FormControl>
          <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
          </FormControl>
          <FormControl>
              <InputLabel>Age</InputLabel>
              <Input onChange={(e) => onValueChange(e)} name='age' value={age} />
          </FormControl>
          <Button variant="contained" onClick={() => addStudentDetails()} color="primary">Add Student</Button>
      </FormGroup>

  )
}
    

export default AddStudent;
