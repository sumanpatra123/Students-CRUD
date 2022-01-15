import { TableBody, TableCell, Table, TableHead, TableRow, makeStyles, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "./Service/api";

const useStyle = makeStyles({
  table: {
    width: '90%',
    margin: '50px 0 0 50px'
  },
  thead: {
    '& > *': {
      background: '#000000',
      color: '#ffffff',
      fontSize: 20
    }
  },
  row: {
    '& > *': {
      fontSize: 20
    }
  }
  })
const AllStudents = () => {

  const [students, setStudents] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllStudents();
  }, [])

  const getAllStudents = async () => {
   const response = await getStudents();
   console.log(response.data);
   setStudents(response.data);
  }

  const deleteStudentData = async (id) => {
    await deleteStudent(id);
    getAllStudents();
  }
  
    return(
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            students.map(student => (
              <TableRow className={classes.row}>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.age}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => deleteStudentData(student.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>

);
    }

export default AllStudents;
